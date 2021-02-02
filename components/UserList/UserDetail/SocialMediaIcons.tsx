import { FC } from "react";
import Link from "next/link";
import { Space } from "antd";
import {
    BehanceCircleFilled,
    FacebookFilled,
    InstagramFilled,
    MediumSquareFilled,
    TwitterSquareFilled,
} from "@ant-design/icons";

import { IUserSocialMedia } from "../../../interfaces/userManagement";

import "./SocialMediaIcons.module.scss";

const SocialMediaIcons: FC<IUserSocialMedia> = ({
    behance, facebook, medium, twitter, instagram
}) => (
    <div className="social-media-icons">
        <Space direction="horizontal">
            {behance && <Link href={behance}><a target="_blank" rel="noreferrer"><BehanceCircleFilled /></a></Link>}
            {facebook && <Link href={facebook}><a target="_blank" rel="noreferrer"><FacebookFilled /></a></Link>}
            {twitter && <Link href={twitter}><a target="_blank" rel="noreferrer"><TwitterSquareFilled /></a></Link>}
            {instagram && <Link href={instagram}><a target="_blank" rel="noreferrer"><InstagramFilled /></a></Link>}
            {medium && <Link href={medium}><a target="_blank" rel="noreferrer"><MediumSquareFilled /></a></Link>}
        </Space>
    </div>
);

export default SocialMediaIcons;