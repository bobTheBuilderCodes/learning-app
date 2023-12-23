"use client";

import CustomButton from "@/components/shared/CustomButton";
import InputField from "@/components/shared/InputField";
import Heading from "@/components/constants/Heading";
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 background_image">
      <Form
        form={form}
        layout="vertical"
        className="h-full p-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 
"
      >
        <Heading className="text-white text-center">
          Reset Your Password
        </Heading>

        <InputField
          label="New Password"
          placeholder="Enter your new password"
          className={"whiteLabelInput"}
        />

        <InputField
          label="Confirm New Password"
          placeholder="Confirm new password"
          className={"whiteLabelInput"}
        />

        <CustomButton>Reset Password 🚀</CustomButton>
        <div className="flex justify-between mt-6">
          <Button type="link" className="w-[400px]">
            <Link href={"/"}>Remember password now? Click here</Link>
          </Button>
        </div>
      </Form>
    </main>
  );
}
