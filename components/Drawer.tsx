"use client";
import React, { useState, ReactNode, useEffect, ChangeEvent } from "react";
import type { DatePickerProps } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  ButtonProps,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import { postData,  getUsers } from "@/libs/getData";
import { api } from "@/libs/endpoints";

interface IProps extends ButtonProps {
  children?: ReactNode;
  width?: number;
  buttonContent: string;
  title?: string,
  myFunc?: ()=>void
}

// Form Data



const CustomDrawer = ({ children, width, buttonContent , title="Create New", myFunc}: IProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    admissionDate: "",
    guardianName: "",
  });

  const {
    firstName,
    lastName,
    email,
    gender,
    dateOfBirth,
    admissionDate,
    guardianName,
  } = formData;

  // alert(firstName);

  useEffect(() => {
    getUsers(api.allStudents);
  }, []);

  const formDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // New Code

  const addStudentHandler = async () => {
    const payload = {
      username: "Amasaman",
      firstName,
      lastName,
      email,
      password: "ama@123",
      gender: "female",
      dateOfBirth: "2001-02-04",
      admissionDate: "2019-09-07",
      guardianName: "Charles Taylor",
    };

    onClose();
   
    postData({url: api.createStudent, payload, message: "Student created successfully"})
    
    getUsers(api.allStudents);
  };

  return (
    <>
      <Button
        size="large"
        type="primary"
        onClick={showDrawer}
        icon={<PlusOutlined />}
      >
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
