"use client";

import { api } from "@/libs/endpoints";
import { getUsers } from "@/libs/getData";
import { Table } from "antd";
import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable";

interface TableRow {
  ticketName: string,
  ticketStatus: string,
  reason: string,
  ticketDate: string,
  ticketId: string,
  ticketItem: string,
  studentId: string,
}

const StudentTickets = () => {
  const [tickets, setTickets] = useState<null>(null);

  const fetchTickets = async () => {
    const data = await getUsers(api.allTickets);
    setTickets(data.allTickets);
  };

  useEffect(() => {
    fetchTickets();
    console.log("Tickets", tickets);
  }, []);

  console.log("Here", tickets);

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
      {tickets ? (
        <CustomTable columns={columns}
         data={tickets} 
         />
      ) : (
        <p>Loading...</p>
      )}

      <Table columns={columns} dataSource={[]} />
    </div>
  );
};

export default StudentTickets;
