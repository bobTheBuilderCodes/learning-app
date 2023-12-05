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


// Hooks
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";


export default function Students() {
  const [users, setUsers] = useState<allStudents | null>(null);
  const { data: user } = useSession();
  const currentUser = user?.user; 
  const authData = useSession();
  const accessToken = authData?.data?.user?.accessToken!;


  //New student form data
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
  } = formData;
 
  const formDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  // Get students list
  const getStudents = async () => {
    const data = await getData(api.allStudents);
    setUsers(data);
  };

  useEffect(() => {
    getStudents();
  }, []);


  // Add new student
  const addStudentHandler = async () => {
    const payload = {
      username: "Amasaman",
      firstName,
      lastName,
      email,
      password: "ama@123",
      gender: "female",
      dateOfBirth: "2001-02-04",
      admissionDate: "2019-09-07",
      guardianName: "Charles Taylor",
    };
   
    postData({url: api.createStudent, payload, message: "Student created successfully", authToken: accessToken })
    
    getData(api.allStudents);
  };
  return (
    <>
      <Container className="mt-8 justify-between">
        <SubHeading className="text-gray-900 mx-6">All Students</SubHeading>
        <div className="flex w-[35%] justify-end">
          <InputField
            placeholder="Search students by name"
            className={"whiteLabelInput w-[230px] mr-6"}
          />{" "}
          {currentUser?.userRole !== "admin" ? (
            ""
          ) : (
            <CustomDrawer buttonContent="Add New Student" ></CustomDrawer>
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
