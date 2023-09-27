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
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState(false);

  const toggleSwitch = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;

  const validation = !email || !password;

  const onFinish = async () => {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/dashboard",
    });
    console.log(email, password);
  };

  const session = useSession();
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    console.log("Status", status);
    if (session.data?.user.userRole) {
      router.push("/dashboard");
      setError(false);
    } else {
      router.push("/");
      // alert("Invalid credentials. Try again");
      // setError(true);
      // throw new Error("Unable to log in with credentials");
    }
    console.log("Status 2", status);
  }, [session.data?.user, router, status]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 background_image">
      <Form
        onFinish={onFinish}
        form={form}
        layout="vertical"
        className="h-full p-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 
"
      >
        <Heading className="text-white text-center">Log in! 🚀</Heading>

        <InputField
          label="Username / Email"
          name="email"
          placeholder="Enter your username / email"
          value={email}
          onChange={onChange}
          style={{ color: "white !important" }}
          // className={`${error ? "error_message" : ""} `}
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
        <CustomButton
          disabled={!email.trim() || !password.trim() ? true : false}
          onClick={onFinish}
        >
          {status === "loading" ? "Loading..." : "Log in"}
        </CustomButton>
      </Form>
    </main>
  );
}
