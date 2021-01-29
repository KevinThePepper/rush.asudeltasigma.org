import { FC } from "react";
import { Tabs } from "antd";
import { HomeOutlined, PictureOutlined } from "@ant-design/icons";

import MaintenanceAlert from "../components/Maintenance/MaintenanceAlert";
import Layout from "../components/Layout/Layout";

const { TabPane } = Tabs;

const Settings: FC = () => {
  return (
    <Layout title="Settings">
      <h1>Settings</h1>
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <HomeOutlined />
              General
            </span>
          }
          key="1"
        >
          <MaintenanceAlert />
        </TabPane>
        <TabPane
          tab={
            <span>
              <PictureOutlined />
              Appearance
            </span>
          }
          key="2"
        >
          <MaintenanceAlert description="Sorry, same here! Still working on things" />
        </TabPane>
      </Tabs>
    </Layout>
  );
};

export default Settings;
