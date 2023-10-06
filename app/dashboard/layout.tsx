"use client";

import React, { ReactNode, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  HomeOutlined,
  BookOutlined,
  ManOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  SettingOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import Link from "next/link";
import IconButton from "@/shared/IconButton";
import Avatars from "@/components/Avatars";
import { useSession } from "next-auth/react";

const { Header, Sider, Content } = Layout;

interface IProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  const { data: session } = useSession();
  const role = session?.user.userRole;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // const permission = role === 'student' ?

  // Access Roles
  const navItems = [
    role === "STUDENT"
      ? ""
      : {
          key: "1",
          icon: <HomeOutlined />,
          label: <Link href="/dashboard">Home</Link>,
        },
    {
      key: "2",
      icon: <DashboardOutlined />,
      label: <Link href="/dashboard/statistics">Dashboard</Link>,
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: <Link href="/dashboard/students">Students</Link>,
    },
    {
      key: "4",
      icon: <UsergroupAddOutlined />,
      label: (
        <Link className="invisible text-green-300" href="/dashboard/teachers">
          Teachers
        </Link>
      ),
    },
    {
      key: "5",
      icon: <ManOutlined />,
      label: <Link href="/dashboard/parents">Parents</Link>,
    },
    {
      key: "6",
      icon: <ManOutlined />,
      label: <Link href="/dashboard/e-library">E-Library</Link>,
    },
    {
      key: "7",
      icon: <BookOutlined />,
      label: <Link href="/dashboard/competitions">Competitions</Link>,
    },
    {
      key: "8",
      icon: <SettingOutlined />,
      label: <Link href="/dashboard/configuration">Configuration</Link>,
    },
  ];

  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          className="mt-14"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: <Link href="/dashboard">Home</Link>,
            },
            {
              key: "2",
              icon: <DashboardOutlined />,
              label: <Link href="/dashboard/statistics">Dashboard</Link>,
            },
            {
              key: "3",
              icon: <UserOutlined />,
              label: <Link href="/dashboard/students">Students</Link>,
            },
            {
              key: "4",
              icon: <UsergroupAddOutlined />,
              label: <Link href="/dashboard/teachers">Teachers</Link>,
            },
            {
              key: "5",
              icon: <ManOutlined />,
              label: <Link href="/dashboard/parents">Parents</Link>,
            },
            {
              key: "6",
              icon: <ManOutlined />,
              label: <Link href="/dashboard/e-library">E-Library</Link>,
            },
            {
              key: "7",
              icon: <BookOutlined />,
              label: <Link href="/dashboard/competitions">Competitions</Link>,
            },
            {
              key: "8",
              icon: <SettingOutlined />,
              label: <Link href="/dashboard/configuration">Configuration</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between", // Align items horizontally
            alignItems: "center", // Align items vertically
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                flex: 1,
                // marginRight: "auto",
              }}
            />
          </div>
          <div>
            <Avatars />
          </div>
        </Header>
        <Content
          style={{
            margin: "0x 16px",
            padding: 0,
            // minHeight: 280,
            // background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
