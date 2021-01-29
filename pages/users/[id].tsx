import { useRouter } from "next/router";
import { FC } from "react";
import { User } from "../../interfaces";
import { useSelector } from "react-redux";

import Layout from "../../components/Layout/Layout";
import ListDetail from "../../components/UserList/ListDetail";
import { RootState } from "../../state/rootReducer";

const UserDetail: FC = () => {
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
      {user && <ListDetail item={user} />}
    </Layout>
  );
};

export default UserDetail;
