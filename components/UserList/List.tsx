import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Table } from "antd";
import { useRouter } from "next/router";

import BooleanFlag from "./BooleanFlag";
import { User } from "../../interfaces";
import { RootState } from "../../state/rootReducer";
import UserDetail from "./UserDetail/UserDetail";

import "./List.module.scss";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 20
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a: User, b: User) => a.name.localeCompare(b.name),
    sortDirections: ["ascend", "descend"]
  },
  {
    title: "Received Bid",
    dataIndex: "receivedBid",
    key: "receivedBid",
    width: 100,
    render: (received: boolean) => <BooleanFlag flag={received} />,
    className: "center",
    filters: [
      {
        text: "Yes",
        value: true
      },
      {
        text: "No",
        value: false
      }
    ],
    onFilter: (value: boolean, record: User) => record.receivedBid === value
  },
  {
    title: "Preferenced",
    dataIndex: "preferenced",
    key: "preferenced",
    width: 100,
    render: (preferenced: boolean) => <BooleanFlag flag={preferenced} />,
    className: "center",
    filters: [
      {
        text: "Yes",
        value: true
      },
      {
        text: "No",
        value: false
      }
    ],
    onFilter: (value: boolean, record: User) => record.preferenced === value
  }
];

const List: FC = () => {
  const users: User[] = useSelector(
    (state: RootState) => state.userManagement.users
  );
  const [selectedUser, setSelectedUser] = useState<User>();
  const [visible, setVisible] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);

  const router = useRouter();
  const handleOk = () => {
    setProfileLoading(true);
    router.push(`/users/${selectedUser?.id}`);
  }
  const handleCancel = () => setVisible(false);

  const onRowClick = (record: User) => {
    return {
      onClick: () => {
        setSelectedUser(record);
        setVisible(true);
      },
    };
  };

  return (
    <>
      <Table columns={columns} dataSource={users} onRow={onRowClick} />
      <Modal
        title="User detail"
        visible={visible}
        onOk={handleOk}
        okType="primary"
        okText="View Profile"
        okButtonProps={{loading: profileLoading}}
        onCancel={handleCancel}
        cancelText="Close"
      >
        {selectedUser !== undefined && <UserDetail user={selectedUser} modal />}
      </Modal>
    </>
  );
};

export default List;
