import { FC } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Card, Col, Divider, Row } from "antd";
import {
  BranchesOutlined,
  CrownOutlined,
  OrderedListOutlined
} from "@ant-design/icons";

import Layout from "../../components/Layout/Layout";
import { User } from "../../interfaces";
import UserDetail from "../../components/UserList/UserDetail/UserDetail";
import MaintenanceAlert from "../../components/Maintenance/MaintenanceAlert";
import { RootState } from "../../state/rootReducer";
import SocialMediaIcons from "../../components/UserList/UserDetail/SocialMediaIcons";

const colSizing = {
  xs: 1600,
  sm: 1600,
  md: 1600,
  lg: 1600,
  xl: 1600,
  xxl: 1600
}

const UserDetailPage: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const users: User[] = useSelector(
    (state: RootState) => state.userManagement.users
  );
  const user = users.find((data) => data.id == id);
  const error =
    user === undefined ? "Could not find user matching that ID" : undefined;
  return (
    <Layout
      title={user ? user.name : "User Detail"}
      errors={error}
      loading={user === undefined}
    >
      {user &&
        <Row gutter={16}>
          <Col span={6} {...colSizing}>
            <Card>
              <UserDetail user={user} modal />
              <SocialMediaIcons {...user.socialMedia} />
            </Card>
          </Col>
          <Col span={18}>
            <Divider orientation="left"><CrownOutlined /> Committees</Divider>
            <MaintenanceAlert description="In progress. Maybe put commtittess here" />
            <Divider orientation="left"><BranchesOutlined rotate={180} /> Positions</Divider>
            <MaintenanceAlert description="In progress. The positions this person holds" />
            <Divider orientation="left"><OrderedListOutlined /> To-do</Divider>
            <MaintenanceAlert description="In progress. Anything this person is tasked to do" />
          </Col>
        </Row>
      }
    </Layout>
  );
};

export default UserDetailPage;
