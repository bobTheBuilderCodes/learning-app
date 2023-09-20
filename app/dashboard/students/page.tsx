"use client";

import CustomCard from "@/components/Card";

import CustomDrawer from "@/components/Drawer";
import InputField from "@/shared/InputField";

import Link from "next/link";

import Stepback from "@/components/Stepback";
import { createUsers, getUser, getUsers } from "@/libs/getData";
import { api } from "@/endpoints";
import Container from "@/components/Container";
import { log } from "console";

export default async function Students() {
  const payload = {
    username: "Yaw Berko",
    firstName: "Yaw",
    lastName: "Berko",
    email: "yaw.berko@gmail.com",
    password: "yaw@123",
    gender: "MALE",
    dateOfBirth: "2009-09-07",
    admissionDate: "2019-09-07",
    guardianName: "James Morgan",
  };
  const users = await getUsers(api.allStudents);

  const createUser = async () => {
    const students = await createUsers(api.createStudent, payload);
    return students;
  };

  return (
    <>
      <Container>
        <Stepback>All Students</Stepback>
        <div className="flex ">
          <InputField
            placeholder="Search students by name"
            className={"whiteLabelInput mr-24"}
          />

          <CustomDrawer buttonContent="Add New Student" className="ml-4" />
        </div>
      </Container>

      <div className="flex flex-wrap justify-between  m-4">
        {users.students?.map((user: any) => (
          <Link href={`/dashboard/students/${user.rollId}`} key={user.rollId}>
            <CustomCard
              name={`${user.firstName} ${user.middleName || ""} ${
                user.lastName
              }`}
              email={user.email}
            />
          </Link>
        ))}
        <button onClick={() => createUser()}>Create Student</button>
      </div>
    </>
  );
}
