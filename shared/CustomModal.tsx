"use client";

import React, { useState, ReactNode } from "react";
import { Button, ButtonProps, Modal } from "antd";

interface IProps extends ButtonProps {
  children: ReactNode;
  width?: number;
  buttonContent: string;
}

const CustomModal = ({ children, width, buttonContent }: IProps) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Button size="large" type="primary" onClick={() => setModal(true)}>
        {buttonContent}
      </Button>
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
      >
        {children}
      </Modal>
    </>
  );
};

export default CustomModal;
