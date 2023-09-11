import Announcement from "@/components/Announcement";
import AvatarsGroup from "@/components/AvatarGroup";
import Event from "@/components/Event";
import Notification from "@/components/Notification";
import Heading from "@/constants/Heading";
import React from "react";

const Home = () => {
  return (
    <div className="flex h-[100%] w-[100%]">
      <div className="w-1/4">
        <Heading className="px-4 pt-4 pb-0">Events</Heading>
        <Event />
        <Event />
        <Event />
        <Event />
      </div>
      <div className="w-2/4 h-[100%] border-l-2 border-gray-100 bg-gray-50">
        {" "}
        <Heading className="px-4 pt-4 pb-0">Announcements</Heading>
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
      </div>
      <div className="w-1/4 border-l-2 border-gray-100">
        <Heading className="px-4 pt-4 pb-0">Notifications</Heading>

        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </div>
    </div>
  );
};

export default Home;
