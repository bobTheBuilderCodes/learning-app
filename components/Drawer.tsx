"use client";
import React, { useState, ReactNode, useEffect, ChangeEvent } from "react";
import type { DatePickerProps } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import {
 
  Button,
  ButtonProps,
  
  Drawer,
  
  Space,
} from "antd";
import { postData,  getData } from "@/libs/getData";
import { api } from "@/libs/endpoints";
import { useSession } from "next-auth/react";

interface IProps extends ButtonProps {
  children?: ReactNode;
  width?: number;
  buttonContent: string;
  title?: string,
  icon?: React.ReactElement,
  buttonType?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  myFunc?: ()=>void
}

// Form Data



const CustomDrawer = ({ children, width, buttonContent , title="Create New", myFunc, icon=<PlusOutlined />, buttonType = "primary"}: IProps) => {
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
    getData(api.allStudents);
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
  const authData = useSession();

  const accessToken = authData?.data?.user?.accessToken!;

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
   
    postData({url: api.createStudent, payload, message: "Student created successfully", authToken: accessToken })
    
    getData(api.allStudents);
  };

  return (
    <>
      <Button
        size="large"
        type={buttonType}
        onClick={showDrawer}
        icon={icon}
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
