import React, { ReactNode } from "react";
import { SettingOutlined } from "@ant-design/icons";
interface IProps {
  children: ReactNode;
}
const IconButton = ({ children }: IProps) => {
  return (
    <div className="w-5 bg-gray-900">
    {/* For all our icons */}
      <SettingOutlined />
    </div>
  );
};

export default IconButton;
