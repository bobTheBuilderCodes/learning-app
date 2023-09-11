"use client";

import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import Heading from "@/constants/Heading";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio, Switch } from "antd";
import Link from "next/link";
import { useState } from "react";

type RequiredMark = boolean | "optional";

export default function Home() {
  const [form] = Form.useForm();

  const toggleSwitch = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const mainStyles = {
    backgroundImage: `url("https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <main
      style={mainStyles}
      className="flex min-h-screen flex-col items-center justify-center p-24"
    >
      <Form
        form={form}
        layout="vertical"
        className="h-full p-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 
"
      >
        <Heading className="text-white text-center">
          Sign in to your account 🚀
        </Heading>

        <InputField
          label="Email"
          placeholder="Enter your email"
          style={{ color: "white !important" }}
        />

        <InputField
          label="Password"
          placeholder="Enter your password"
          className={"whiteLabelInput"}
        />

        <div className="flex justify-between mb-6">
          <div>
            {" "}
            <Switch defaultChecked onChange={toggleSwitch} />
            <span className="text-white px-4 opacity-60">Remember me</span>
          </div>
          <div>
            {" "}
            <Button type="link">
              <Link href={"/forgot-password"}>Forgot Password</Link>
            </Button>
          </div>
        </div>

        <CustomButton>Log in</CustomButton>
      </Form>
    </main>
  );
}
