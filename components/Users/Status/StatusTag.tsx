import { FC } from "react";
import { IUserStatus } from "../../../interfaces/userManagement";
import { Tag } from "antd";
import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    MinusCircleOutlined,
} from '@ant-design/icons';

const statusToTagMapping = {
    "active": {
        "icon": <CheckCircleOutlined />,
        "color": "success"
    },
    "inactive": {
        "icon": <MinusCircleOutlined />,
        "color": "default"
    },
    "resigned": {
        "icon": <CloseCircleOutlined />,
        "color": "error"
    }
}

const StatusTag: FC<IUserStatus> = ({ status = "active" }) => {
    const mapping = statusToTagMapping[status];
    return (<Tag icon={mapping.icon} color={mapping.color}>{status}</Tag>);
}

export default StatusTag;