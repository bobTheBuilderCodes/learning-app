"use client"

import { api } from "@/libs/endpoints";
import { getUsers } from "@/libs/getData";
import { Table } from "antd";
import React, { useEffect, useState } from "react";

const StudentTickets = () => {
  const [tickets, setTickets] = useState<allTickets | null>(null);

  const fetchTickets = async () => {
    const data = await getUsers(api.allTickets);
    setTickets(data);
  };

  useEffect(() => {
    fetchTickets();
    console.log("Tickets", tickets)
  }, []);

  


  console.log("Here", tickets?.allTickets)

 

  const columns = [
    {
      title: 'Ticket Name',
      dataIndex: 'ticketName',
      key: 'ticketName',
    },
    {
      title: 'Reason',
      dataIndex: 'reason',
      key: 'reason',
    },
    {
      title: 'Status',
      dataIndex: 'ticketStatus',
      key: 'ticketStatus',
    },
    {
      title: 'Ticket Date',
      dataIndex: 'ticketDate',
      key: 'ticketDate',
    },
  ];
  
  

  return  <Table dataSource={tickets?.allTickets} columns={columns} />;
};

export default StudentTickets;
