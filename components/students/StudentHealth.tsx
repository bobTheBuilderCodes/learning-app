"use client";

import Paragraph from "@/components/constants/Paragraph";
import SubHeading from "@/components/constants/SubHeading";
import CustomButton from "@/components/shared/CustomButton";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Switch,
} from "antd";
import React, { useState } from "react";

const StudentHealth = () => {

  const {TextArea} = Input
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    GPS: "",
    location: "",
    gender: "male",
    dateOfBirth: "2000-02-10",
    admissionDate: "2020-09-09",
    guardianName: "",
    guardianNumber: "",
    guardianRelationship: "",
  });

  const onChangeToggle = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const formDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const {
    username,
    firstName,
    middleName,
    lastName,
    email,
    password,
    GPS,
    guardianName,
    guardianNumber,
    admissionDate,
    guardianRelationship,
    location,
  } = formData;

  return (
    <div className="flex">
      <Form layout="vertical" className="w-3/4 h-full">
        
        <Row gutter={16}>
          <Col span={12}>
          <Form.Item name="specialNeeds" label="Special Needs">
              <Input
                placeholder="Separate multiple by comma"
                name="specialNeeds"
                value={password}
                onChange={formDataHandler}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="dietaryRestrictions" label="Dietary Restrictions">
              <Input
                placeholder="Separate multiple by comma"
                name="dietaryRestrictions"
                value={password}
                onChange={formDataHandler}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
          <Form.Item name="bloodGroup" label="Blood Group">
              <Select
                defaultValue="Select blood group"
                // onChange={handleChange}
                options={[
                  { value: "Johson Baah", label: "Johnson Baah" },
                  {
                    value: "Peter Nwachukwu",
                    label: "Peter Nwakwuchu",
                  },
                  { value: "Rose Addae", label: "Rose Addae" },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="allergies" label="Allergies">
              <Input
                placeholder="Separate multiple by comma"
                name="allergies"
                value={password}
                onChange={formDataHandler}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <label className="mb-2 mx-3">Comment</label>
        <TextArea rows={8} placeholder="Is there anything you want us to know about this student's health? Feel free to put it here" maxLength={6} className="mx-3" />
        </Row>
       
        <Row gutter={16} className="mt-8">
          <Col span={12}>
          <Button type="default">Cancel</Button>
          <Button type="primary" className='mx-4'>Save</Button>
          </Col>
        
        </Row>
       
        
      </Form>

      <div className="w-1/4 bg-white p-4 rounded-md ml-12 h-full">
        <div className="bg-gray-100 p-3 rounded-md mt-2 mb-6">
          <SubHeading className="font-semibold mb-6">Quick Details</SubHeading>
          <Paragraph className="my-4">
            Status :{" "}
            <span className="bg-green-50 text-green-500 px-2 p-1 rounded-md m-4">
              Active
            </span>
          </Paragraph>
          <Paragraph className="my-4">
            Role :{" "}
            <span className="bg-green-50 text-green-500 p-1 px-2 rounded-md m-4">
              Student
            </span>
          </Paragraph>
        </div>
        <hr />
        <div className="bg-gray-100 p-3 rounded-md mt-6 mb-6">
          <SubHeading className="font-semibold mb-3">Chronic Disease</SubHeading>

          <div className="flex mb-6">
            <label htmlFor="status" className="mr-auto text-[16px]">
              Heart Disease
            </label>
            <Switch defaultChecked onChange={onChangeToggle} />
          </div>
          <div className="flex mb-6">
            <label htmlFor="status" className="mr-auto text-[16px]">
            Stroke
            </label>
            <Switch defaultChecked onChange={onChangeToggle} />
          </div>
          <div className="flex mb-6">
            <label htmlFor="status" className="mr-auto text-[16px]">
           Diabetes
            </label>
            <Switch defaultChecked onChange={onChangeToggle} />
          </div>
          <Button type="default">Cancel</Button>
          <Button type="primary" className='mx-4'>Save</Button>
        </div>
      
     
        
      </div>
    </div>
  );
};

export default StudentHealth;
