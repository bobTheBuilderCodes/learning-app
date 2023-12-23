import React from "react";
import CountUp from "react-countup";

import SubHeading from "@/components/constants/SubHeading";

interface ICardWidth {
  width?: string;
  height?: string;
  children: React.ReactNode;
}
const formatter = (value: number) => <CountUp end={value} separator="," />;
const cardStyles = { backgroundColor: "#fff" , margin: "12px" , padding: "10px 16px", borderRadius: 8, display: "flex", alignItems: "center" }

const DashboardCard = ({ width = "33.333333%", height, children }: ICardWidth) => (
  <div
    style={{...cardStyles, width, height}}
  >
    {children}
  </div>
);

export default DashboardCard;
("");
