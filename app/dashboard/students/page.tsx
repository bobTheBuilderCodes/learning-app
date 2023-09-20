// "use client";

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
  const users = await getUsers(api.allStudents);

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
      </div>
    </>
  );
}
