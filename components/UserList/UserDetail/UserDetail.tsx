import { FC } from "react";
import { Descriptions } from "antd";
import { User } from "../../../interfaces";
import BooleanFlag from "../BooleanFlag";

type Props = {
    user: User
    modal?: boolean
}

const UserDetail: FC<Props> = ({user, modal = false}) => (
    <Descriptions title={user.name} column={modal ? 1 : 3}>
        <Descriptions.Item label="ID">{user.id}</Descriptions.Item>
        <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
        <Descriptions.Item label="Preferenced"><BooleanFlag flag={user.preferenced} /></Descriptions.Item>
        <Descriptions.Item label="Received Bid"><BooleanFlag flag={user.receivedBid} /></Descriptions.Item>
    </Descriptions>
);

export default UserDetail;