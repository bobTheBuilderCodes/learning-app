"use client";
import { ReadOutlined, EyeOutlined, MessageOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Avatar, Card, Skeleton, Switch } from "antd";

const { Meta } = Card;

interface IProps {
  name: string;
  email: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
}

const CustomCard = ({
  name,
  email,
  firstName,
  middleName,
  lastName,
}: IProps) => {
  const [loading, setLoading] = useState(true);

  const onChange = (checked: boolean) => {
    setLoading(!checked);
  };

  return (
    <>
      <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <EyeOutlined key="View Profile" />,
          <MessageOutlined key="Send a Chat" />,
          <ReadOutlined key="Send a challenge" />,
        ]}
      >
        {/* <Skeleton loading={loading} avatar active> */}
        <Meta
          avatar={
            <Avatar
              className="w-24 h-24"
              src="https://media.istockphoto.com/id/1264106976/photo/headshot-of-bearded-mid-adult-black-man-in-polo-shirt.jpg?s=170667a&w=0&k=20&c=laQvyYpXZi6wCrDjdz_G0u44Nc52coc3tl43LUhqZ28="
            />
          }
          title={name}
          description={email}
        />
        {/* </Skeleton> */}
      </Card>
    </>
  );
};

export default CustomCard;
