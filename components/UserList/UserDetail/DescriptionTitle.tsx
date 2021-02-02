import { FC, useState } from "react";
import Link from "next/link";
import {
    Col,
    Dropdown,
    Menu,
    notification,
    Popconfirm,
    Row,
    Space,
    Tooltip,
    Typography,
} from "antd";
import {
    DeleteTwoTone,
    InfoCircleTwoTone,
    MailTwoTone,
    QuestionCircleOutlined
} from "@ant-design/icons";

import { User, IUserOnline } from "../../../interfaces/userManagement";
import StatusBadge from "../../Users/Status/StatusBadge";
import { useRouter } from "next/router";

const { Title } = Typography;

const mailDropdownMenu = (
    <Menu>
        <Menu.ItemGroup key="g1" title="Templates">
            <Menu.Item key="g1.1">Send Bid</Menu.Item>
            <Menu.Item key="g1.2">Send Preference</Menu.Item>
            <Menu.Item key="g1.3">Send Resignation</Menu.Item>
        </Menu.ItemGroup>
        <Menu.Divider />
        <Menu.ItemGroup key="g2" title="Custom">
            <Menu.Item key="g2.1">Send Custom Email</Menu.Item>
        </Menu.ItemGroup>
    </Menu>
)

interface IDescriptionTitleProps extends IUserOnline {
    user: User
}

const DescriptionTitle: FC<IDescriptionTitleProps> = ({ user, online = true }) => {
    const [deleteLoading, setDeleteLoading] = useState(false);
    const router = useRouter();
    const onDeleteConfirm = () => {
        setDeleteLoading(true);
        setTimeout(() => {
            router.push("/users");
            notification.open({
                message: "User deleted"
            });
        }, 5000);
    }

    return (
        <Title level={4}>
            <Row>
                <Col span={12}>
                    <Tooltip placement="topLeft" title={online ? "online" : "offline"}>
                        <StatusBadge online={online} />
                        {user.name}
                    </Tooltip>
                </Col>
                <Col span={12} style={{ textAlign: "right" }}>
                    <Space direction="horizontal">
                        <Link href={{ pathname: "/users/[id]", query: { id: user.id } }}>
                            <Tooltip title="View Profile">
                                <InfoCircleTwoTone />
                            </Tooltip>
                        </Link>
                        <Tooltip title="Send Email">
                            <Dropdown overlay={mailDropdownMenu}>
                                <MailTwoTone />
                            </Dropdown>
                        </Tooltip>
                        <Tooltip title="Delete User">
                            <Popconfirm
                                title="Are you sure you want to delete this user?"
                                icon={<QuestionCircleOutlined style={{color: "red"}} />}
                                placement="bottomRight"
                                okText="Delete"
                                okType="danger"
                                okButtonProps={{ loading: deleteLoading, onClick: onDeleteConfirm }}
                                cancelText="Cancel">
                                <DeleteTwoTone twoToneColor="#f5222d" />
                            </Popconfirm>
                        </Tooltip>
                    </Space>
                </Col>
            </Row>
        </Title>
    );
}

export default DescriptionTitle;