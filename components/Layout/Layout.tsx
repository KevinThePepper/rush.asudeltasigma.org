import React, { FC, ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Layout, Menu } from "antd";
import {
  CalendarOutlined,
  ProfileOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import { UserContext } from "../../interfaces";
import { RootState } from "../../state/rootReducer";
import LoadingSpinner from "../Loading/Loading";
import ProfileIcon from "./ProfileIcon/ProfileIcon";
import ErrorResult from "./ErrorResult/ErrorResult";

import "antd/dist/antd.css";
import "./Layout.module.scss";

const { Header, Sider, Content } = Layout;

type Props = {
  title?: string
  children?: ReactNode
  loading?: boolean
  loadingText?: string
  errors?: string
  authRequired?: boolean
};

const Main: FC<Props> = ({
  children,
  title = "Rush",
  loading = false,
  loadingText,
  errors,
  authRequired = false
}) => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedKey, setSelectedKey] = useState("home");

  const toggle = () => setCollapsed(!collapsed);
  const handleClick = (e: any) => setSelectedKey(e.key);

  const router = useRouter();

  const userContext: UserContext = useSelector(
    (state: RootState) => state.userContext
  );

  const isAuthenticated = userContext.authenticated;
  useEffect(() => {
    if (!isAuthenticated && authRequired) {
      const next = router.pathname;
      router.push("/login", `/login?next=${next}`, { shallow: true })
  }}, []);

  const pageLoading = useSelector((state: RootState) => state.siteContext.loading);

  const titleConcat = title + " | ASU Delta Sigma";

  return (
    <Layout className="layout">
      <Head>
        <title>{titleConcat}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={titleConcat} key="title" />
      </Head>
      <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["/users"]} selectedKeys={[router.pathname]}>
          <Menu.Item key="/users" icon={<TeamOutlined />}>
            <Link href="/users">User Management</Link>
          </Menu.Item>
          <Menu.Item key="/calendar" icon={<CalendarOutlined />}>
            <Link href="/calendar">Calendar</Link>
          </Menu.Item>
          <Menu.Item key="/settings" icon={<SettingOutlined />}>
            <Link href="/settings">Settings</Link>
          </Menu.Item>
          <Menu.Item key="/docs" icon={<ProfileOutlined />}>
            <Link href="/docs">Documentation</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Menu
            onClick={handleClick}
            selectedKeys={[selectedKey]}
            mode="horizontal"
          >
            <Menu.Item key="avatar" className="avatar">
              <ProfileIcon userContext={userContext} />
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout-background">
          {errors ? (
            <ErrorResult errors={errors} />
          ) : (
            (isAuthenticated || !authRequired) ? (
              <LoadingSpinner loading={loading || pageLoading} text={loadingText}>
                {children}
              </LoadingSpinner>
            ) : (
              <LoadingSpinner loading={true} text="Redirecting to login"></LoadingSpinner>
            )
            )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
