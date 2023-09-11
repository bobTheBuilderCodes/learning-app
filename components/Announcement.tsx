import React from "react";
import Avatars from "./Avatars";
import Paragraph from "@/constants/Paragraph";
import SubHeading from "@/constants/SubHeading";
import { Divider } from "antd";

const Announcement = () => {
  return (
    <div className="flex m-4 ">
      <div>
        <SubHeading>
          Transforming Educational System
          <span className="text-gray-400 font-normal"> | 3 weeks ago </span>
        </SubHeading>
        <Paragraph className={"pl-2 w-[100%]"}>
          📢 Attention Students! We are excited to announce our annual Science
          Fair, happening on [Date]. Get ready to showcase your innovative
          projects and scientific discoveries. Stay tuned for more details on
          how you can participate and make this event a success!.
        </Paragraph>
        <Divider />
      </div>
    </div>
  );
};

export default Announcement;
