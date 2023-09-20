"use client";

import { signIn } from "next-auth/react";
import React, { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const onSubmit = () => {
  //   signIn("credentials", {
  //     username,
  //     password,
  //   });
  // };
  return (
    <div
      className={
        "flex flex-col justify-center items-center  h-screen bg-gradient-to-br gap-1 from-cyan-300 to-sky-600"
      }
    >
      <form action="">
        <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
          <input
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            type={"password"}
            value={password}
            onChange={(e) => e.target.value}
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
