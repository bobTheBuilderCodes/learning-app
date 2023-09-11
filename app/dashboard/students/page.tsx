"use client";
import CustomCard from "@/components/Card";

import CustomDrawer from "@/components/Drawer";
import InputField from "@/components/InputField";

import Link from "next/link";

import Stepback from "@/components/Stepback";

const Page = () => {
  return (
    <>
      <div className="flex items-center justify-between mx-4">
        <Stepback>All Students</Stepback>
        <div className="flex ">
          <InputField
            placeholder="Search students by name"
            className={"whiteLabelInput mr-24"}
          />

          <CustomDrawer buttonContent="Add New Student" className="ml-4" />
        </div>
      </div>
      <Link href="/dashboard/students/details">
        <div className="flex flex-wrap justify-between  m-4">
          <CustomCard /> <CustomCard /> <CustomCard /> <CustomCard />{" "}
          <CustomCard /> <CustomCard /> <CustomCard /> <CustomCard />{" "}
        </div>
      </Link>
    </>
  );
};

export default Page;
