import { FC } from "react";
import { Badge } from "antd";

import { IUserOnline } from "../../../interfaces/userManagement";

const StatusBadge: FC<IUserOnline> = ({ online = true }) => (
    <Badge status={online ? "success" : "warning" } />
);

export default StatusBadge;