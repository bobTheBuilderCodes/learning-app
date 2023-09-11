"use client";
import React, { useState, ReactNode } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
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

interface IProps extends ButtonProps {
  children?: ReactNode;
  width?: number;
  buttonContent: string;
}

const { Option } = Select;

const CustomDrawer = ({ children, width, buttonContent }: IProps) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
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
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Please enter email" }]}
              >
                <Input placeholder="Please enter email" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="contact"
                label="Contact Number"
                rules={[
                  { required: true, message: "Please enter contact number" },
                ]}
              >
                <Input placeholder="Please enter user contact number" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="address"
                label="Address"
                rules={[{ required: true, message: "Please enter address" }]}
              >
                <Input placeholder="Please enter addrress" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="class"
                label="Class"
                rules={[
                  {
                    required: true,
                    message: "Please select a class for this user",
                  },
                ]}
              >
                <Select placeholder="Please select a class">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
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
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
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
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="guardian name"
                label="Guardian Name"
                rules={[
                  { required: true, message: "Please enter guardian name" },
                ]}
              >
                <Input placeholder="Please enter user guardian name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="guardian number"
                label="Guardian's Number"
                rules={[
                  { required: true, message: "Please enter guardian's number" },
                ]}
              >
                <Input placeholder="Please enter guardian's number" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message:
                      "Please provide a brief description about the student",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Add a brief description..."
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
