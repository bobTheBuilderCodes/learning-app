import React from "react";
import Avatars from "./Avatars";
import Paragraph from "@/components/constants/Paragraph";
import SubHeading from "@/components/constants/SubHeading";
import { Divider } from "antd";

const Event = () => {
  return (
    <div className="flex m-4 ">
      <div>
        <SubHeading>
          Career Day
          <span className="text-gray-400 font-normal"> | Sept 12, 2023 </span>
        </SubHeading>
        <Paragraph className={"pl-2 w-[100%]"}>
          📢 Attention Students! We are excited to announce our annual Science
          Fair, happening on [Date].
        </Paragraph>
      </div>
    </div>
  );
};

export default Event;
