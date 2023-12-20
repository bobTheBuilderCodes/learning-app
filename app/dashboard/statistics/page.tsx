"use client";
import DashboardCard from "@/components/DashboardCard";
import IconButton from "@/shared/IconButton";
import React, { useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";

import { CategoryScale, LinearScale, Title } from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

// Chart.register(CategoryScale, LinearScale, Title);

import revenueData from "../../data/revenuedata.json";
import sourceData from "../../data/sourcedata.json";

const AdminDashboard = () => {
  useEffect(() => {
    Chart.register(CategoryScale, LinearScale, Title);
  }, []);

  return (
    <div className="flex w-full flex-wrap">
      <div className="w-3/4 flex flex-col">
        <div className="w-full flex">
          <DashboardCard height="120px">
            <div className="bg-yellow-600 h-12 w-12 rounded-md p-5 mr-4 flex items-center justify-center">
              <UserOutlined size={32} />
            </div>
            <div className="px-4 sm:px-0">
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Total Students
              </p>
              <h3 className="text-3xl font-semibold leading-7 text-gray-900">
                1,604
              </h3>
            </div>
          </DashboardCard>
          <DashboardCard>
            <div className="bg-orange-600 h-12 w-12 rounded-md p-5 mr-4 flex items-center justify-center">
              <UserOutlined size={32} />
            </div>
            <div className="px-4 sm:px-0">
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Total Teachers
              </p>
              <h3 className="text-3xl font-semibold leading-7 text-gray-900">
                64
              </h3>
            </div>
          </DashboardCard>
          <DashboardCard>
            <div className="bg-indigo-600 h-12 w-12 rounded-md p-5 mr-4 flex items-center justify-center">
              <UserOutlined size={32} />
            </div>
            <div className="px-4 sm:px-0">
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Total Books
              </p>
              <h3 className="text-3xl font-semibold leading-7 text-gray-900">
                2,604
              </h3>
            </div>
          </DashboardCard>
        </div>
        <div className="w-full flex">
          <div className="w-full">
            <DashboardCard width="97%" height="46%">
              <Line
                data={{
                  labels: revenueData.map((data) => data.label),
                  datasets: [
                    {
                      label: "Revenue",
                      data: revenueData.map((data) => data.revenue),
                      backgroundColor: "#064FF0",
                      borderColor: "#064FF0",
                    },
                    {
                      label: "Cost",
                      data: revenueData.map((data) => data.cost),
                      backgroundColor: "#FF3030",
                      borderColor: "#FF3030",
                    },
                  ],
                }}
                options={{
                  scales: {
                    x: {
                      type: "category",
                      labels: revenueData.map((data) => data.label),
                    },
                    y: {
                      beginAtZero: true,
                    },
                  },
                  elements: {
                    line: {
                      tension: 0.5,
                    },
                  },
                  plugins: {
                    title: {
                      text: "Monthly Revenue & Cost",
                    },
                  },
                }}
               
              />
            </DashboardCard>
          
            <DashboardCard width="97%" height="46%">
              <Bar
                data={{
                  labels: sourceData.map((data) => data.label),
                  datasets: [
                    {
                      label: "Count",
                      data: sourceData.map((data) => data.value),
                      backgroundColor: [
                        "rgba(43, 63, 229, 0.8)",
                        "rgba(250, 192, 19, 0.8)",
                        "rgba(253, 135, 135, 0.8)",
                      ],
                      borderRadius: 5,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      text: "Revenue Source",
                    },
                  },
                }}
              />
            </DashboardCard>
          </div>
          {/* <DashboardCard height="520px">Chart</DashboardCard> */}
        </div>
        1
      </div>
      <div className="w-1/4 ">
        <DashboardCard height="33%" width="90%">
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Sources",
              },
            },
          }}
        />
        </DashboardCard>
        <DashboardCard height="33%" width="90%">
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Sources",
              },
            },
          }}
        />
        </DashboardCard>
      </div>
    </div>
  );
};

export default AdminDashboard;
