"use client";

import CustomButton from "@/shared/CustomButton";
import InputField from "@/shared/InputField";
import Heading from "@/constants/Heading";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio, Switch } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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

  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;

  const onFinish = async () => {
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/dashboard",
    });
    console.log(email, password);
  };

  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.data?.user) {
      router.push("/dashboard");
    }
  }, [session.data?.user, router]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main
      style={mainStyles}
      className="flex min-h-screen flex-col items-center justify-center p-24"
    >
      <Form
        onFinish={onFinish}
        form={form}
        layout="vertical"
        className="h-full p-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 
"
      >
        <Heading className="text-white text-center">Log in 🚀</Heading>

        <InputField
          label="Username / Email"
          name="email"
          placeholder="Enter your username / email"
          value={email}
          onChange={onChange}
          style={{ color: "white !important" }}
        />
        <InputField
          label="Password"
          name="password"
          placeholder="Enter your password"
          style={{ color: "white !important" }}
          value={password}
          onChange={onChange}
        />

        <Button type="link" className="w-[400px] text-right mb-4">
          <Link href={"/forgot-password"}> Forgot password</Link>
        </Button>
        <br />
        <CustomButton onClick={onFinish}>Log in</CustomButton>
      </Form>
    </main>
  );
}
