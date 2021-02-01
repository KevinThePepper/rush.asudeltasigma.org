import { FC, ReactNode } from "react";
import Link from "next/link";
import { UrlObject } from "url";
import { Button, Result } from "antd";

type Props = {
    errors?: string | ReactNode
    status?: "403" | "404" | "500" | "error" | "info" | "success" | "warning"
    title?: string | ReactNode
    primaryButtonLink?: string | UrlObject
    primaryButtonText?: string
    supportButtonEmail?: string
    supportButtonText?: string
};

const ErrorResult: FC<Props> = ({
    errors,
    status = "error",
    title = "Submission Failed",
    primaryButtonLink = "/",
    primaryButtonText = "Go Home",
    supportButtonEmail = "help@asudeltasigma.org",
    supportButtonText = "Contact Support"
}) => {
    const supportEmail = "mailto:" + supportButtonEmail;

    return (
        <Result
            status={status}
            title={title}
            subTitle={errors}
            extra={[
                <Link href={primaryButtonLink}>
                    <Button type="primary" key="primaryButton">
                        {primaryButtonText}
          </Button>
                </Link>,
                <Button
                    type="default"
                    key="supportButton"
                    href={supportEmail}
                    target="_blank"
                >
                    {supportButtonText}
        </Button>,
            ]}
        ></Result>
    )
};

export default ErrorResult;