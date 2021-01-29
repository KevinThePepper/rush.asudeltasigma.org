import { FC } from "react";
import { Alert } from "antd";

type Props = {
    message?: string
    description?: string
    type?: "error" | "warning" | "info" | "success"
}

const MaintenanceAlert: FC<Props> = ({
    message = "Warning",
    description = "This page is still in progress. There is currently no content.",
    type = "warning"
}) => (
  <Alert
    message={message}
    description={description}
    type={type}
    showIcon
  />
);

export default MaintenanceAlert;