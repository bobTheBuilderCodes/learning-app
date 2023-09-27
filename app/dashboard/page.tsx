// import getUsers from "@/api";
"use client";
import Announcement from "@/components/Announcement";
import AvatarsGroup from "@/components/AvatarGroup";
import Event from "@/components/Event";
import Notification from "@/components/Notification";
import Heading from "@/constants/Heading";
import { signIn, useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="flex h-[100%] w-[100%]">
      <Heading>Logged in user {session?.user.loggedInUser}</Heading>
      <div className="w-1/4"></div>
      <div className="w-2/4 h-[100%] border-l-2 border-gray-100 bg-gray-50">
        {" "}
        <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
      </div>
      <div className="w-1/4 border-l-2 border-gray-100">
        <Heading className="px-4 pt-4 pb-0">Notifications</Heading>
      </div>
    </div>
  );
}
