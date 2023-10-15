import React, { ReactNode } from 'react'
import { Button, Popover } from "antd";
import {
    MoreOutlined
    
  } from "@ant-design/icons";


interface IProps{
    children?: ReactNode
}
const CustomPopover = ({children}: IProps) => {

  return (
    <Popover
      placement="bottomRight"
      content={children}
      trigger="click"
    >
      <Button>
      <MoreOutlined />
      </Button>
    </Popover
  );
};

export default CustomPopover