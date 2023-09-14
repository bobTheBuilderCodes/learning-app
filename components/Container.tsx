import React, { ReactNode } from "react";
import { SettingOutlined } from "@ant-design/icons";
interface IProps {
  children: ReactNode;
}
const Container = ({ children }: IProps) => {
  return (
    <div className="flex items-center justify-between mx-4">{children}</div>
  );
};

export default Container;
