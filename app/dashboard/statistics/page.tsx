import DashboardCard from "@/components/DashboardCard";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full flex-wrap">
      
      <div className="w-3/4 flex flex-col">
        <div className="w-full flex">
          <DashboardCard height="120px">This is the child of the conmperpedre</DashboardCard>
          <DashboardCard>This is the child of the conmperpedre</DashboardCard>
          <DashboardCard>This is the child of the conmperpedre</DashboardCard>
        </div>
        <div className="w-full flex">
          <div className="w-full">

          <DashboardCard width="97%" height="46%">This is the child of the conmperpedre</DashboardCard>
          <DashboardCard width="97%" height="46%">This is the child of the conmperpedre</DashboardCard>
          </div>
          <DashboardCard height="520px" >This is the child of the conmperpedre</DashboardCard>
         
        </div>
       1
      </div>
      <div className="w-1/4 ">
      <DashboardCard height="93%" width="90%" >This is the child of the conmperpedre</DashboardCard>
      </div>
    </div>
  );
};

export default page;
