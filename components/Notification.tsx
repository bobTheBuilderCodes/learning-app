import React from "react";
import Avatars from "./Avatars";
import Paragraph from "@/components/constants/Paragraph";
import { Divider } from "antd";

const Notification = () => {
  return (
    <div className="flex m-4">
      <Avatars />
      <Paragraph className={"pl-2"}>
        This is the message or action item to the notification.
      </Paragraph>
    </div>
  );
};

export default Notification;
