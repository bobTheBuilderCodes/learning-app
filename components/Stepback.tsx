"use client";

import React, { ReactNode } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Heading from "@/constants/Heading";

import { useRouter } from "next/navigation";
import SubHeading from "@/constants/SubHeading";

interface IProps {
  children?: ReactNode;
  className?: string
}

const Stepback = ({ children , className}: IProps) => {
  const router = useRouter();
  return (
    <div className="flex">
      <ArrowLeftOutlined
        className={`mx-3 cursor-pointer ${className}`}
        onClick={() => router.back()}
      />

      <SubHeading className={`${className}`}>{children}</SubHeading>
    </div>
  );
};

export default Stepback;
