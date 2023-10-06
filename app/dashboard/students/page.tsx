"use client";

import CustomCard from "@/components/Card";

import CustomDrawer from "@/components/Drawer";
import InputField from "@/shared/InputField";

import Link from "next/link";

import Stepback from "@/components/Stepback";
import { createUsers, getUser, getUsers } from "@/libs/getData";
import { api } from "@/libs/endpoints";
import Container from "@/components/Container";

import Heading from "@/constants/Heading";
import SubHeading from "@/constants/SubHeading";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function Students() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const [users, setUsers] = useState<allStudents | null>(null);
  // const { data: users, error } = useSWR(api.allStudents, fetcher);
  console.log("all Users", users);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers(api.allStudents);
      setUsers(data);
    };

    fetchUsers();
  }, [users?.students.length]);

  return (
    <>
      <Container className="mt-8">
        <SubHeading className="">All Students</SubHeading>
        <div className="flex w-[35%] justify-end">
          <InputField
            placeholder="Search students by name"
            className={"whiteLabelInput w-[230px] mr-6"}
          />

          <CustomDrawer
            buttonContent="Add New Student"
            // onClick={() => alert("This is working")}
          />
        </div>
      </Container>

      <Container>
        {users?.students?.map(
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
