"use client";

import React, { useEffect, useState } from "react";

//Ant D Components
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
import type { DatePickerProps } from "antd";
import SubHeading from "@/components/constants/SubHeading";
import Paragraph from "@/components/constants/Paragraph";
import Heading from "@/components/constants/Heading";
import { getSingleData, postData } from "@/libs/getData";
import { api } from "@/libs/endpoints";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { alertUserHandler } from "@/helpers/alertUserHandler";

const StudentProfile = () => {
  const [currentStudentData, setCurrentStudentData] = useState(null);
  const [currentUserId , setCurrentUserId] = useState("")
  const router = useRouter();
  const params = useParams();
  const authData = useSession();
  const accessToken = authData?.data?.user?.accessToken!;
  //New student form data
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

  const formDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChangeToggle = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  // Delete student
  const deleteStudenttHandler = async (id: string) => {
    try {
      await postData({
        method: "DELETE",
        url: `${api.deleteStudent}/${id}`,
        payload: {
          studentId: id,
        },
        authToken: accessToken,
      });
      alertUserHandler(`Student deleted successfully`)
      router.back();
    } catch (error) {
      console.log(error);
    }
  };

  // Find

  const getCurrentUser = async () => {
    const response = await getSingleData({
      url: api.singleStudent,
      dataId: params.userId,
    });
    setCurrentStudentData(response.findStudent);
    setCurrentUserId(response?.findStudent?.rollId)
  };

  const {} = setCurrentStudentData
  
  useEffect(() => {
    getCurrentUser();
  }, []);
  console.log("Current user details", currentStudentData);

  return (
    <div className="flex">
      <Form layout="vertical" className="w-3/4 h-full">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="username" label="User Name">
              <Input
                placeholder="Enter username"
                name="username"
                value={username}
                onChange={formDataHandler}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="firstName" label="First Name">
              <Input
                placeholder="Enter first name"
                name="firstName"
                value={firstName}
                onChange={formDataHandler}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="middleName" label="Middle Name">
              <Input
                placeholder="Enter middle name"
                name="middleName"
                value={middleName}
                onChange={formDataHandler}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="lastName" label="Last Name">
              <Input
                placeholder="Enter last name"
                name="lastName"
                value={lastName}
                onChange={formDataHandler}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="email" label="Email">
              <Input
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={formDataHandler}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="password" label="Password">
              <Input
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={formDataHandler}
              />
            </Form.Item>
          </Col>
        </Row>
        
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="GPS" label="GPS">
              <Input
                placeholder="Enter GPS"
                name="GPS"
                value={GPS}
                onChange={formDataHandler}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="location" label="Location">
              <Input
                placeholder="Enter location"
                name="location"
                value={location}
                onChange={formDataHandler}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="admissionDate" label="Admission Date">
              <DatePicker className="w-full" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="class" label="Class">
              <Select
                defaultValue="Select class"
                onChange={handleChange}
                options={[
                  { value: "JHS 1", label: "JHS 1" },
                  {
                    value: "JHS 2",
                    label: "JHS 2",
                  },
                  { value: "JHS 3", label: "JHS 3" },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="classTeacher" label="Class Teacher">
              <Select
                defaultValue="Select teacher"
                onChange={handleChange}
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
            <Form.Item name="guardianName" label="Guardian Name">
              <Input
                placeholder="Enter guardian Name"
                name="guardianName"
                value={guardianName}
                onChange={formDataHandler}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="guardianNumber" label="Guardian Number">
              <Input
                placeholder="Enter guardian number"
                name="guardianNumber"
                value={guardianNumber}
                onChange={formDataHandler}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="guardianRelationship"
              label="Relationship with Guardian"
            >
              <Input
                placeholder="Enter relationship"
                name="guardianRelationship"
                value={guardianRelationship}
                onChange={formDataHandler}
              />
            </Form.Item>
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
          <SubHeading className="font-semibold mb-3">Quick Actions</SubHeading>

          <div className="flex mb-2">
            <label htmlFor="status" className="mr-12 text-[16px]">
              Disable Student Account
            </label>
            <Switch defaultChecked onChange={onChangeToggle} />
          </div>
          <Button
            danger
            type="primary"
            className="my-4"
            onClick={() => deleteStudenttHandler(currentUserId)}
          >
            Delete Account{" "}
          </Button>
        </div>
        <hr />
        {/* Emergency Contact */}
        <div className="bg-gray-100 p-3 rounded-md mt-8">
          <SubHeading className="font-semibold mb-3">
            Emergency Information
          </SubHeading>

          <div className="mb-2">
            <label htmlFor="guardianName" className="mr-12 text-[16px]">
              Guardian Name
            </label>
            <Input readOnly className="mt-2" value={"Jason Statan"} />
          </div>

          <div className="mb-2">
            <label htmlFor="guardianContact" className="mr-12 text-[16px] mb-4">
              Guardian Contact
            </label>
            <Input className="mt-2" readOnly value={"055 643 5643"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
