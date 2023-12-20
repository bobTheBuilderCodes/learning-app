import React from "react";
import CountUp from "react-countup";

import SubHeading from "@/constants/SubHeading";

interface ICardWidth {
  width?: string;
  height?: string;
  children: React.ReactNode;
}
const formatter = (value: number) => <CountUp end={value} separator="," />;

const DashboardCard = ({ width = "33.333333%", height, children }: ICardWidth) => (
  <div
    // style={{` w-[33.3333%] border-2 border-gray-700 bg-gray-300 h-32 m-4 p-4`}}
    style={{ width , backgroundColor: "#fff" , height , margin: "12px" , padding:10, borderRadius: 8, }}
  >
    {children}
  </div>
);

export default DashboardCard;
("");
