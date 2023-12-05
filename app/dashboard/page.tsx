
"use client";

import React from "react";
import Heading from "@/constants/Heading";


export default function Home() {

  return (
    <div className="flex h-[100%] w-[100%] bg-white">
      <div className="w-1/4"></div>
      <div className="w-2/4 h-[100%] border-l-2 border-gray-100 bg-gray-100">
      
      </div>
      <div className="w-1/4 border-l-2 border-gray-100 bg-white">
        <Heading className="px-4 pt-4 pb-0">Notifications</Heading>
      </div>
    </div>
  );
}
