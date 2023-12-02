"use client";

import CustomCard from "@/components/Card";

import CustomDrawer from "@/components/Drawer";
import InputField from "@/shared/InputField";

import Link from "next/link";

import Stepback from "@/components/Stepback";
import { postData, getUser, getUsers } from "@/libs/getData";
import { api } from "@/libs/endpoints";
import Container from "@/components/Container";

import Heading from "@/constants/Heading";
import SubHeading from "@/constants/SubHeading";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function Students() {
  const [users, setUsers] = useState<allStudents | null>(null);
  const { data: user } = useSession();
  const currentUser = user?.user;
  // const {userRole} = currentUser
  console.log("Logged in", currentUser);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers(api.allStudents);
      setUsers(data);
    };

    fetchUsers();
  }, [users?.students.length]);

  console.log("User details", users);

  return (
    <>
      <Container className="mt-8 justify-between">
        <SubHeading className="text-gray-900 mx-6">All Students</SubHeading>
        <div className="flex w-[35%] justify-end">
          <InputField
            placeholder="Search students by name" className={"whiteLabelInput w-[230px] mr-6"} /> {currentUser?.userRole !== "admin" ? ( ""
          ) : (
            <CustomDrawer
              buttonContent="Add New Student"
              // onClick={() => alert("This is working")}
            />
          )}
        </div>
      </Container>

      <Container className="mx-6">
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
