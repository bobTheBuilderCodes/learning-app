import React, { ReactNode } from "react";
import { SettingOutlined } from "@ant-design/icons";
interface IProps {
  children: ReactNode;
  className?: string;
}
const Container = ({ children, className }: IProps) => {
  return (
    <div
      className={`flex items-center flex-wrap justify-start gap-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
