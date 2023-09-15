"use client";
// import Button from "@elements/Button";
// import TextBox from "@elements/TextBox";
import { signIn } from "next-auth/react";
import React, { useRef } from "react";

const LoginPage = () => {
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      // redirect: true,
      // callbackUrl: "/dashboard",
    });
  };
  return (
    <div
      className={
        "flex flex-col justify-center items-center  h-screen bg-gradient-to-br gap-1 from-cyan-300 to-sky-600"
      }
    >
      <form action="" onSubmit={onSubmit}>
        <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
          <input
            placeholder="User Name"
            onChange={(e) => (userName.current = e.target.value)}
          />
          <input
            placeholder="Password"
            type={"password"}
            onChange={(e) => (pass.current = e.target.value)}
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

// "use client";

// import CustomButton from "@/components/CustomButton";
// import InputField from "@/components/InputField";
// import Heading from "@/constants/Heading";
// import { InfoCircleOutlined } from "@ant-design/icons";
// import { Button, Form, Input, Radio, Switch } from "antd";
// import Link from "next/link";
// import { useState } from "react";
// import { signIn } from "next-auth/react";

// type RequiredMark = boolean | "optional";

// export default function Home() {
//   const [form] = Form.useForm();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const toggleSwitch = (checked: boolean) => {
//     console.log(`switch to ${checked}`);
//   };

//   const mainStyles = {
//     backgroundImage: `url("https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   };

//   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const res = await signIn("credentials", {
//       username,
//       password,
//       redirect: false,
//     });
//     console.log("Logged in user", res);
//   };
//   return (
//     <main
//       style={mainStyles}
//       className="flex min-h-screen flex-col items-center justify-center p-24"
//     >
//       <Form
//         onFinish={onSubmit}
//         form={form}
//         layout="vertical"
//         className="h-full p-8 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10
// "
//       >
//         <Heading className="text-white text-center">
//           Sign in to your account 🚀
//         </Heading>

//         <InputField
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           label="Email/Username"
//           placeholder="Enter your email/username"
//           style={{ color: "white !important" }}
//         />

//         <InputField
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           label="Password"
//           placeholder="Enter your password"
//           className={"whiteLabelInput"}
//         />

//         <div className="flex justify-between mb-6">
//           <div>
//             {" "}
//             <Switch defaultChecked onChange={toggleSwitch} />
//             <span className="text-white px-4 opacity-60">Remember me</span>
//           </div>
//           <div>
//             {" "}
//             <Button type="link">
//               <Link href={"/forgot-password"}>Forgot Password</Link>
//             </Button>
//           </div>
//         </div>

//         <CustomButton onSubmit={onSubmit}>Log in</CustomButton>
//       </Form>
//     </main>
//   );
// }
