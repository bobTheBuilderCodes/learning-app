"use client";

import React, { useEffect, useState } from "react";

//Components
import CustomTable from "./CustomTable";
import Container from "./Container";
import CustomDrawer from "./Drawer";
import InputField from "@/shared/InputField";
import Spinner from "./Spinner";

//Antd components
import { Col, Form, Input, Row, Select } from "antd";


//Utils and Libs
import { api } from "@/libs/endpoints";
import { postData, getData } from "@/libs/getData";
import { useParams } from "next/navigation";

//Hooks
import { useSession } from "next-auth/react";


const StudentTickets = () => {
  const [tickets, setTickets] = useState([]);
  const authData = useSession();
  const { userId } = useParams();
  const accessToken = authData?.data?.user?.accessToken!;
  

  // Handle Forms
  const [formData, setFormData] = useState({
    ticketName: "",
    reason: "",
    ticketItem: "",
    ticketDate: new Date(),
  });

  const { ticketName, reason, ticketItem } = formData;

  const formDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const columns = [
    {
      title: "Ticket Name",
      dataIndex: "ticketName",
      key: "ticketName",
    },
    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
    },
    {
      title: "Status",
      dataIndex: "ticketStatus",
      key: "ticketStatus",
    },
    {
      title: "Ticket Date",
      dataIndex: "ticketDate",
      key: "ticketDate",
    },
  ];


  //Get all tickets
  const getTickets = async () => {
    const userId = authData.data?.user.rollId;
    const studentTickets = await getData(
      `${api.getTickets}/${userId}`,
      accessToken
    );
    setTickets(studentTickets?.studentTickets);
  };


  useEffect(() => {
    getTickets();
  }, []);

  //Add new ticket
  const addTicketHandler = async () => {
    try {
      await postData({
        url: `${api.postTicket}/${userId}`,
        payload: formData,
        authToken: accessToken,
      });
      getTickets();
    } catch (error) {
      console.log(error)
    }
     
  };

  // Delete ticket
  const deleteTicketHandler = async (id: string) => {
    try {
      const res = await postData({
        method: "DELETE",
        url: `${api.deleteTicket}/${id}`,
        payload: {
          ticketId: id,
        },
        authToken: accessToken,
      });
      getTickets();
    } catch (error) {
      console.log(error);
    }
  };

  //Edit existing ticket
  const editTicketHandler = async (id: string) => {
    try {
      await postData({
        method: "PATCH",
        url: `${api.editTicket}/${id}`,
        payload: formData,
        authToken: accessToken,
      });
      getTickets();     
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      {" "}
      <Container className="justify-between">
        <Select
          defaultValue="Pending"
          size="large"
          style={{ width: 200 }}
          onChange={handleChange}
          options={[
            { value: "pending", label: "Pending" },
            { value: "confirmed", label: "Confirmed" },
            { value: "rejected", label: "Rejected" },
          ]}
        />
        <div className="flex w-[35%] justify-end">
          <InputField
            placeholder="Search tickets"
            className={"whiteLabelInput w-[230px] mr-6"}
          />

          <CustomDrawer
            title="Add New Ticket"
            type="primary"
            buttonContent="Add New Ticket"
            myFunc={addTicketHandler}
          >
            <Form layout="vertical">
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="ticketName" label="Title">
                    <Input
                      placeholder="Enter request title"
                      name="ticketName"
                      value={ticketName}
                      onChange={formDataHandler}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="ticketItem" label="Ticket Item">
                    <Input
                      placeholder="Enter item name"
                      name="ticketItem"
                      value={ticketItem}
                      onChange={formDataHandler}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="reason" label="Reason">
                    <Input
                      placeholder="Enter reason"
                      name="reason"
                      value={reason}
                      onChange={formDataHandler}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </CustomDrawer>
        </div>
      </Container>
      {tickets ? (
        <CustomTable
          currentPage={1}
          itemsPerPage={10}
          totalItems={10}
          onPageChange={() => {}}
          columns={columns}
          data={tickets}
          onDeleteTicket={deleteTicketHandler}
          onEditTicket={editTicketHandler}
        >
          <Form layout="vertical">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="ticketName" label="Title">
                  <Input
                    placeholder="Enter request title"
                    name="ticketName"
                    value={ticketName}
                    onChange={formDataHandler}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="ticketItem" label="Ticket Item">
                  <Input
                    placeholder="Enter item name"
                    name="ticketItem"
                    value={ticketItem}
                    onChange={formDataHandler}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="reason" label="Reason">
                  <Input
                    placeholder="Enter reason"
                    name="reason"
                    value={reason}
                    onChange={formDataHandler}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </CustomTable>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default StudentTickets;
