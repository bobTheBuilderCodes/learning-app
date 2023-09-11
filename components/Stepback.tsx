"use client";

import React, { ReactNode } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Heading from "@/constants/Heading";

import { useRouter } from "next/navigation";

interface IProps {
  children?: ReactNode;
}

const Stepback = ({ children }: IProps) => {
  const router = useRouter();
  return (
    <div className="flex">
      <ArrowLeftOutlined
        className="mx-3 cursor-pointer"
        onClick={() => router.back()}
      />

      <Heading>{children}</Heading>
    </div>
  );
};

export default Stepback;
