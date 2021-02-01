import { FC } from "react";
import Link from "next/link";
import { Avatar, Menu, Dropdown } from "antd";
import { UserContext } from "../../../interfaces/userContext";
import { SettingOutlined, UserOutlined } from "@ant-design/icons";

import "./ProfileIcon.module.scss";

type Props = {
  userContext: UserContext;
};

const ProfileIcon: FC<Props> = ({ userContext }) => {
    const initial = String(userContext.user.name.charAt(0));
    const menu = (
    <Menu>
        <Menu.Item key="viewProfile" icon={<UserOutlined />} >
            <Link href={{ pathname: "/users/[id]", query: { id: userContext.userId } }}>
                View Profile
            </Link>
        </Menu.Item>
        <Menu.Item key="settings" icon={<SettingOutlined />}>
            <Link href="/settings">Settings</Link>
          </Menu.Item>
    </Menu>
    );
  return (
    <>
      {userContext.authenticated ? (
        <p>Login</p>
      ) : (
        <Dropdown overlay={menu} placement="bottomRight" >
          <Avatar icon={<UserOutlined />} style={{ color: "#e2e2e2", backgroundColor: "#001529" }}>
            {initial}
          </Avatar>
          </Dropdown>
      )}
    </>
  );
};

export default ProfileIcon;
