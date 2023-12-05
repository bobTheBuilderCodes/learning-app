import React, { useState } from "react";
import { Avatar, Menu, Dropdown } from "antd";
import { useSession, signOut } from "next-auth/react";
import Paragraph from "@/constants/Paragraph";
import SubHeading from "@/constants/SubHeading";

const Avatars = () => {
  const session = useSession();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const menu = (
    <Menu className="">
      <Menu.Item key="1" className="mr-8 p-2">
        <a href="/dashboard/profile">Profile</a>
      </Menu.Item>
      <Menu.Item key="2" onClick={() => signOut({ callbackUrl: "/" })}>
        Log out
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="flex items-center">
      <SubHeading>Welcome, {session.data?.user.loggedInUser}</SubHeading>
      <Dropdown
        overlay={menu}
      //  menu={menu}
        trigger={["click"]}
        open={dropdownVisible}
        onOpenChange={(visible) => setDropdownVisible(visible)}
      >
        <a
          href="#"
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
        >
          <Avatar
            size={32}
            src={
              session.data?.user?.image ||
              session.data?.user?.loggedInUser?.slice(0, 2)
            }
            alt="User Avatar"
            className="mr-8 ml-4"
          />
        </a>
      </Dropdown>
    </div>
  );
};

export default Avatars;
