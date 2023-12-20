"use client";

import React from "react";
import Heading from "@/constants/Heading";
import Announcement from "@/components/Announcement";
import SubHeading from "@/constants/SubHeading";
import BookCard from "@/components/BookCard";
import CompetitionCard from "@/components/CompetitionCard";
import CustomCalendar from "@/components/Calendar";
import ActivityCard from "@/components/SemesterActivity";

export default function Home() {
  return (
    <div className="flex h-[100%] w-[100%] bg-white ">
      <div className="w-1/4">
        <SubHeading className=" pt-4 mx-4 text-gray-900">
          Academic Year Activities
        </SubHeading>
        <CustomCalendar />

        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
      <div className="w-2/4 h-[100%] px-6">
        <SubHeading className="px-1 pt-4 pb-0 text-gray-900">Notifications</SubHeading>
        <Announcement />
      </div>
      <div className="w-1/4 bg-white">
        <SubHeading className="px-1 pt-4 pb-0 mx-4 text-gray-900">Recent Books</SubHeading>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
}
