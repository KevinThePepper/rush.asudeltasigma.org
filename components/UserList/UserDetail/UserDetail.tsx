import { FC } from "react";
import { Descriptions } from "antd";

import { User } from "../../../interfaces";
import BooleanFlag from "../BooleanFlag";
import DescriptionTitle from "./DescriptionTitle";
import StatusTag from "../../Users/Status/StatusTag";

type Props = {
    user: User
    modal?: boolean
}

const UserDetail: FC<Props> = ({user, modal = false}) => (
    <Descriptions title={<DescriptionTitle user={user} online={user.online} />} column={modal ? 1 : 2} bordered>
        <Descriptions.Item label="ID">{user.id}</Descriptions.Item>
        <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
        <Descriptions.Item label="Preferenced"><BooleanFlag flag={user.preferenced} /></Descriptions.Item>
        <Descriptions.Item label="Received Bid"><BooleanFlag flag={user.receivedBid} /></Descriptions.Item>
        <Descriptions.Item label="Status"><StatusTag status={user.status} /></Descriptions.Item>
    </Descriptions>
);

export default UserDetail;