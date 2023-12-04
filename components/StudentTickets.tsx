"use client";

import { api } from "@/libs/endpoints";
import { postData, getData } from "@/libs/getData";
import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable";
import Spinner from "./Spinner";
import InputField from "@/shared/InputField";
import { useSession } from "next-auth/react";
import CustomDrawer from "./Drawer";
import Container from "./Container";
import { useParams } from "next/navigation";
import {useRouter} from 'next/navigation'

import { Alert, Col, Form, Input, Row, Select } from "antd";

const { TextArea } = Input;

const StudentTickets = () => {
  const [tickets, setTickets] = useState<null | []>([]);
  const { userId } = useParams();
  const router = useRouter()

  // const fetchTickets = async () => {
  //   const loggedInUserTickets = `${api.studentTickets}/${userId}`;
  //   const data = await getData(loggedInUserTickets);
  //   setTickets(data.studentTickets);
  // };
  const getStudentTickets = async () => {
    const loggedInUserTickets = `${api.getStudentTickets}/${userId}`;
    const data = await getData(loggedInUserTickets);
    setTickets(data.studentTickets);
  };

  useEffect(() => {
    getStudentTickets();
  }, []);


  // Handle Forms
  const [formData, setFormData] = useState({
    ticketName: "",
    reason: "",
    ticketItem: "",
    ticketDate: new Date()
  });

  const { ticketName, reason , ticketItem} = formData;

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

  const addTicketHandler = () =>  {

    postData({url: `${api.postTicket}/${userId}`, payload: formData, message: "Ticket raised successfully" })
    // onclose()
    // router.refresh()
  }
  

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
            title="Create New Ticket" type="primary"
            buttonContent="Add New Ticket"  myFunc={addTicketHandler}
          >
            <Form layout="vertical">
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="ticketName" label="Title">
                    <Input placeholder="Enter request title" name="ticketName" value={ticketName} onChange={formDataHandler} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="ticketItem" label="Ticket Item">
                   
                    <Input placeholder="Enter item name" name="ticketItem" value={ticketItem} onChange={formDataHandler} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="reason" label="Reason">
                  <Input placeholder="Enter reason" name="reason" value={reason} onChange={formDataHandler} />
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
        />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default StudentTickets;
