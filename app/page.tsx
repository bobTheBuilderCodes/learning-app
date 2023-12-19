"use client";


import Heading from "@/constants/Heading";
import {  Button, Form } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";
import "react-toastify/dist/ReactToastify.css";
import { alertUserHandler } from "@/helpers/alertUserHandler";
import { ToastContainer } from "react-toastify";
import InputField from "@/shared/InputField";
import CustomButton from "@/shared/CustomButton";


export default function Home() {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const session = useSession();
  const router = useRouter();
  const { status, data } = useSession();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password } = formData;

  const onFinish = async () => {
    try {
      setIsLoading(true);
      await signIn("credentials", {
        username: email,
        password,
        redirect: false,
      });
      setIsLoading(false);

      // Throw error here

      if (status === "unauthenticated" || !data?.user.accessToken) {
        router.push("/");
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 4000);
      }
    } catch (error) {
      alert(error);
      setIsLoading(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated" && data.user.accessToken) {
      router.push("/dashboard");
      setError(false);
    }

    if (status === "unauthenticated" || !data?.user.accessToken) {
      router.push("/");
    }
  }, [session.data?.user, status]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 background_image">
      {error && (
        <div>

        {alertUserHandler("An error occured while logging in a user")}
        <ToastContainer />
        </div>

      )}

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
          disabled={
            !email.trim() || !password.trim() || status === "loading"
              ? true
              : false
          }
          onClick={onFinish}
        >
          {isLoading ? <Spinner /> : "Log in"}
        </CustomButton>
      </Form>
     
    </main>
  );
}
