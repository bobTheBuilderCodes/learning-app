"use client";

//Components
import CustomCard from "@/components/Card";
import CustomDrawer from "@/components/Drawer";
import InputField from "@/shared/InputField";
import SubHeading from "@/constants/SubHeading";
import Container from "@/components/Container";

// Libs and Utils
import { getData, postData } from "@/libs/getData";
import { api } from "@/libs/endpoints";
import Link from "next/link";

//Ant D Components
import { Col, DatePicker, Form, Input, Row, Select } from "antd";
import type { DatePickerProps } from 'antd';

// Hooks
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {useRouter} from 'next/navigation'
import Loading from "./loading";
import EmptyState from "@/components/EmptyState";
import { alertUserHandler } from "@/helpers/alertUserHandler";

export default function Students() {
  const [users, setUsers] = useState<allStudents | null>(null);
  const { data: user } = useSession();
  const currentUser = user?.user;
  const authData = useSession();
  const accessToken = authData?.data?.user?.accessToken!;
  const router = useRouter()

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
    guardianNumber, admissionDate,
    guardianRelationship,
    location,
  } = formData;

  const formDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  // Get students list
  const getStudents = async () => {
    const data = await getData(api.allStudents);
    setUsers(data);
  };

  useEffect(() => {
    getStudents();
  }, []);


    //Add new student
    const addStudentHandler = async () => {
      try {
        await postData({
          url: api.createStudent,
          payload: formData,
          authToken: accessToken,
        });
        getStudents();
        alertUserHandler("Student Created Successfully");
        console.log("Student data", formData)
      } catch (error) {
        console.log(error)
      }      
    };



  return (
    <>
      <Container className="mt-8 justify-between">
        <SubHeading className="text-gray-900 mx-6">All Students</SubHeading>
        <div className="flex w-[35%] justify-end mx-6">
          <InputField
            placeholder="Search students by name"
            className={"whiteLabelInput w-[230px] mr-6"}
          />{" "}
          {currentUser?.userRole !== "admin" ? (
            ""
          ) : (
            <CustomDrawer 
            title="Add New Student"
            type="primary"
            buttonContent="Add New Student"
            myFunc={addStudentHandler}
            >
              <Form layout="vertical">
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
                    <DatePicker className="w-full"  />
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
            </CustomDrawer>
          )}
        </div>
      </Container>

      <Container className="mx-6">
        {users?.students  ? users?.students?.map(
          ({ rollId, firstName, middleName, lastName, email }) => (
            <Link href={`/dashboard/students/${rollId}`} key={rollId}>
              <CustomCard
                name={`${firstName} ${middleName || ""} ${lastName}`}
                email={email}
              />
            </Link>
          )
        ) : <Loading />}
      </Container>
    </>
  );
}
