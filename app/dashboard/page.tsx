// import getUsers from "@/api";
"use client";
import Announcement from "@/components/Announcement";
import AvatarsGroup from "@/components/AvatarGroup";
import Event from "@/components/Event";
import Notification from "@/components/Notification";
import Heading from "@/constants/Heading";
import { signIn, useSession, signOut } from "next-auth/react";
import React from "react";

export default function Home() {
  const { data: session } = useSession();

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    qualification: "",
    interested: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name, checked, type} = e.target
    setFormData({ ...formData, 
      [name]: type === "checkbox" ? checked : value 
    });
  };

  const { name, email, password, gender,  qualification, interested } = formData;

  const submitData = (e:any) => {
    e.preventDefault()
    console.log("Submitted data", formData)
  }
  return (
    <div className="flex h-[100%] w-[100%] bg-white">
      <div className="w-1/4"></div>
      <div className="w-2/4 h-[100%] border-l-2 border-gray-100 bg-gray-500">
        {" "}
        <form onSubmit={submitData}>
        <input 
          value={name}
          onChange={handleChange}
          className="text-gray-600"
          name={"name"}
          placeholder="Enter your name"
        />{" "}
        <br /> <br />
        <input 
          value={email}
          onChange={handleChange}
          name={"email"}
          placeholder="Enter your email"
          className="text-gray-600"
        />{" "}
        <br /> <br />
        <input 
          value={password}
          onChange={handleChange}
          name={"password"}
          placeholder="Enter your password"
          className="text-gray-600"
        />{" "}

        <br /> <br />
        <label htmlFor="qualification">What is your qualification?</label>
        <select className="text-gray-600" id="qualification" value={qualification} >
          <option onChange={handleChange} value="Amateur">Amateur</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <br /> <br />
        <input type="checkbox" id="interest" checked={interested} onChange={handleChange}  name="interested"/>{" "}
        <label htmlFor="interest">Are you interested in our emails?</label>{" "}
        <br /> <br />
        <input type="radio" name="gender" value="male"  onChange={handleChange} checked={gender === "male"} /> <label>Male</label> <br />
        <input type="radio" name="gender" value="female" onChange={handleChange}  checked={gender === "female"} /> <label>Female</label> 
        <br /> <br />
        <input type="submit" />
        </form>
      </div>
      <div className="w-1/4 border-l-2 border-gray-100 bg-white">
        <Heading className="px-4 pt-4 pb-0">Notifications</Heading>
      </div>
    </div>
  );
}
