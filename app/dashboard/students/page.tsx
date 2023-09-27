// "use client";

import CustomCard from "@/components/Card";

import CustomDrawer from "@/components/Drawer";
import InputField from "@/shared/InputField";

import Link from "next/link";

import Stepback from "@/components/Stepback";
import { createUsers, getUser, getUsers } from "@/libs/getData";
import { api } from "@/libs/endpoints";
import Container from "@/components/Container";
import { log } from "console";
import Heading from "@/constants/Heading";
import SubHeading from "@/constants/SubHeading";

export default async function Students() {
  const users = await getUsers(api.allStudents);

  return (
    <>
      <Container className="mt-8">
        <SubHeading className="">All Students</SubHeading>
        <div className="flex w-[35%] justify-between">
          <InputField
            placeholder="Search students by name"
            className={"whiteLabelInput w-[230px]"}
          />

          <CustomDrawer buttonContent="Add New Student" className="" />
        </div>
      </Container>

      <Container className="">
        {users.students?.map(
          ({ rollId, firstName, middleName, lastName, email }) => (
            <Link href={`/dashboard/students/${rollId}`} key={rollId}>
              <CustomCard
                name={`${firstName} ${middleName || ""} ${lastName}`}
                email={email}
              />
            </Link>
          )
        )}
      </Container>
    </>
  );
}
