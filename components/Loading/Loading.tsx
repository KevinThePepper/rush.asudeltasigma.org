import { FC, ReactNode } from 'react'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import "./Loading.module.scss";

type LoadingSpinnerProps = {
    loading?: boolean,
    text?: string,
    children?: ReactNode
}

const loadingIcon = <LoadingOutlined className="loadingIcon" spin />;

const LoadingSpinner: FC<LoadingSpinnerProps> = ({children, loading = false, text = "Loading"}) => (
    <>
        <Spin spinning={loading} indicator={loadingIcon}>
            {!loading && children}
        </Spin>
        {loading && <div className="loadingText">{text}</div>}
    </>
)

export default LoadingSpinner
