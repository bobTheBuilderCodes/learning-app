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
import { createUsers, getUsers } from "@/libs/getData";
import { api } from "@/libs/endpoints";

interface IProps extends ButtonProps {
  children?: ReactNode;
  width?: number;
  buttonContent: string;
}

// Form Data

const { Option } = Select;

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};



const Forms = () => {

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

    const formDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      
  return (
    <Form layout="vertical">
    <Row
      // gutter={16}
      className="flex items-center justify-center flex-col"
    >
      <Col className="flex items-center justify-center flex-col ">
        <Avatar
          className="w-24 h-24 mb-4"
          src="https://media.istockphoto.com/id/1264106976/photo/headshot-of-bearded-mid-adult-black-man-in-polo-shirt.jpg?s=170667a&w=0&k=20&c=laQvyYpXZi6wCrDjdz_G0u44Nc52coc3tl43LUhqZ28="
        />
        <div className="mb-4">
          <Button className="mr-4">Upload</Button>
          <Button type="link">Remove</Button>
        </div>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Form.Item
          // name="first_name"
          label="First Name"
          rules={[{ required: true, message: "Please enter user name" }]}
        >
          <Input
            name="firstName"
            placeholder="Please enter first name"
            value={firstName}
            onChange={formDataHandler}
          />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          label="Last Name"
          rules={[
            { required: true, message: "Please enter your last name" },
          ]}
        >
          <Input
            placeholder="Please enter last name"
            name="lastName"
            value={lastName}
            onChange={formDataHandler}
          />
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Form.Item name="middle_name" label="Middle Name">
          <Input placeholder="Please enter middle name" />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please enter address" }]}
        >
          <Input
            placeholder="Please enter email"
            name="email"
            onChange={formDataHandler}
          />
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Form.Item name="GPS" label="GPS">
          <Input placeholder="Please enter GPS" />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name="location" label="Location">
          <Input
            placeholder="Please enter location"
            name="location"
            onChange={formDataHandler}
          />
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Form.Item
          name="class"
          label="Date of Birth"
          rules={[
            {
              required: true,
              message: "Please select a class for this user",
            },
          ]}
        >
          <DatePicker onChange={onChange} className="w-[100%]" />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please choose the user's gender",
            },
          ]}
        >
          <Select placeholder="Please choose gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Form.Item
          name="class_type"
          label="Class Type"
          rules={[
            { required: true, message: "Please choose class type" },
          ]}
        >
          <Select placeholder="Please choose the teacher">
            <Option value="jack">Jack Ma</Option>
            <Option value="tom">Tom Liu</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="class"
          label="Class"
          rules={[{ required: true, message: "Please choose the class" }]}
        >
          <Select placeholder="Please choose the teacher">
            <Option value="jack">Jack Ma</Option>
            <Option value="tom">Tom Liu</Option>
          </Select>
        </Form.Item>
        {/* <Form.Item
          name="teacher"
          label="Teacher"
          rules={[
            { required: true, message: "Please choose the teacher" },
          ]}
        >
          <Select placeholder="Please choose the teacher">
            <Option value="jack">Jack Ma</Option>
            <Option value="tom">Tom Liu</Option>
          </Select>
        </Form.Item> */}
        {/* <Form.Item
          name="Admission Period"
          label="Admission Period"
          rules={[
            {
              required: true,
              message: "Please specify expected time of completion",
            },
          ]}
        >
          <DatePicker.RangePicker
            style={{ width: "100%" }}
            getPopupContainer={(trigger) => trigger.parentElement!}
          />
        </Form.Item> */}
      </Col>
    </Row>

    <Row gutter={16}>
      <Col span={12}>
        <Form.Item name="guardian name" label="Guardian Name">
          <Input placeholder="Please enter user guardian name" />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name="guardian number" label="Guardian's Phone Number">
          <Input placeholder="Please enter guardian's phone" />
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Form.Item
          name="relation_to_guardian"
          label="Relation to Guardian"
        >
          <Select placeholder="Please choose the teacher">
            <Option value="jack">Jack Ma</Option>
            <Option value="tom">Tom Liu</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          name="emergency_contact_number"
          label="Emergency Contact Number"
          rules={[
            {
              required: true,
              message: "Please enter emergency contact number",
            },
          ]}
        >
          <Input placeholder="Please enter guardian's phone" />
        </Form.Item>
      </Col>
    </Row>
  </Form>
  )
}

export default Forms