"use client";

import React, { useState, ReactNode } from "react";

//Antd icons
import { PlusOutlined } from "@ant-design/icons";

//Antd components
import { Button, ButtonProps, Drawer, Space } from "antd";

interface IProps extends ButtonProps {
  children?: ReactNode;
  width?: number;
  buttonContent: string;
  title?: string;
  icon?: React.ReactElement;
  buttonType?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  myFunc?: () => void;
}

const CustomDrawer = ({
  children,
  buttonContent,
  title = "Create New",
  myFunc,
  icon = <PlusOutlined />,
  buttonType = "primary",
}: IProps) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button size="large" type={buttonType} onClick={showDrawer} icon={icon}>
        {buttonContent}
      </Button>
      <Drawer
        title={title}
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={myFunc} onMouseUp={onClose}>
              Submit
            </Button>
          </Space>
        }
      >
        {children}
      </Drawer>
    </>
  );
};

export default CustomDrawer;
