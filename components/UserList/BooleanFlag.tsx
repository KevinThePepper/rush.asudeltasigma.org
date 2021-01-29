import { FC } from "react";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";


type Props = {
    flag?: boolean
    twoToneCheckColor?: string
    twoToneCrossColor?: string
    className?: string
};

const BooleanFlag: FC<Props> = ({
    flag = true,
    twoToneCheckColor = "#52c41a",
    twoToneCrossColor = "eb2f96",
    className = ""
}) => {
    return (flag
        ? <CheckCircleTwoTone twoToneColor={twoToneCheckColor} className={className} />
        : <CloseCircleTwoTone twoToneColor={twoToneCrossColor} className={className} />
    )
};

export default BooleanFlag;
