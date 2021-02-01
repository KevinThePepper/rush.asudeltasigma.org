import { FC, useState } from "react";
import {
    Alert,
    Button,
    Card,
    Input
} from "antd";
import {
    LockOutlined,
    UserOutlined
} from "@ant-design/icons";

import "./Layout.module.scss";

const Login: FC = () => {
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [error, setError] = useState("");

    const onInputChange = () => {
        let emptyInput = false;
        const inputs = document.getElementsByTagName("input");
        Array.from(inputs).forEach(input => {
            if (input.value.length === 0) {
                emptyInput = true;
            }
        });
        setButtonDisabled(emptyInput);
    };

    const onSubmit = () => {
        setButtonLoading(true);
        setTimeout(() => {
            setButtonLoading(false);
            setError("Username invalid");
        }, 5000);
    }

    return (
        <Card className="login-form" title="Login">
            {error && <Alert className="spaced" message={error} type="error" showIcon />}
            <Input className="spaced" id="username" size="large" placeholder="Username or Email" prefix={<UserOutlined />} onChange={onInputChange} />
            <Input.Password className="spaced" id="password" size="large" placeholder="Password" prefix={<LockOutlined />} onChange={onInputChange} />
            <Button type="primary" shape="round" size="large" disabled={buttonDisabled} loading={buttonLoading} onClick={onSubmit}>Login</Button>
        </Card>
    );
}

export default Login;