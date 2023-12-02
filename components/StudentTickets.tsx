"use client";

import { api } from "@/libs/endpoints";
import { getUsers } from "@/libs/getData";
import { Select, Table } from "antd";
import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable";
import Spinner from "./Spinner";
import InputField from "@/shared/InputField";
import { useSession } from "next-auth/react";
import CustomDrawer from "./Drawer";
import Container from "./Container";
import SubHeading from "@/constants/SubHeading";
import { useParams } from "next/navigation";



const StudentTickets = () => {
  const [tickets, setTickets] = useState<null | []>([]);
  const {userId} = useParams()

  const fetchTickets = async () => {
    const loggedInUserTickets = `${api.studentTickets}/${userId}`
    const data = await getUsers(loggedInUserTickets);
    setTickets(data.studentTickets);
  };

  useEffect(() => {
    fetchTickets();
   
  }, []);

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





  return (
    <div>
      {" "}
      <Container className="justify-between">
      <Select
      defaultValue="Pending" size="large"
      style={{ width: 200 }}
      onChange={handleChange}
      options={[
        { value: 'pending', label: 'Pending' },
        { value: 'confirmed', label: 'Confirmed' },
        { value: 'rejected', label: 'Rejected' },
        
      ]}
    />
        <div className="flex w-[35%] justify-end">
          <InputField
            placeholder="Search tickets"
            className={"whiteLabelInput w-[230px] mr-6"}
          />

          <CustomDrawer
          buttonContent="Add New Ticket"
         
          />
        
        </div>
      </Container>
     
      {tickets ? <CustomTable currentPage={1} itemsPerPage={10} totalItems={10} onPageChange={()=>{}} columns={columns} data={tickets} /> : <Spinner />}
    </div>
  );
};

export default StudentTickets;

