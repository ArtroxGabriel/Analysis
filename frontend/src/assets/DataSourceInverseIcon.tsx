

import { SvgIcon, SvgIconProps } from "@mui/material";

export default function DataSourceInverseIcon({
    stroke,
    fill,
    strokeWidth,
    ...otherProps
}: SvgIconProps) {
    return (
        <SvgIcon {...otherProps} sx={{ width: 40, height: 40 }}>
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="42" height="42" rx="21" fill="#1976D2" />
                <g clipPath="url(#clip0_439_455)">
                    <path d="M31.8975 18.7688L29.8221 14.025C29.5555 13.4125 28.8049 13 27.9559 13H22.1562V19H31.9467C31.9303 18.9219 31.9303 18.8438 31.8975 18.7688ZM20.8438 13H15.0441C14.1951 13 13.4445 13.4125 13.1779 14.025L11.1025 18.7688C11.0697 18.8438 11.0697 18.9219 11.0533 19H20.8438V13ZM11 20V27.5C11 28.3281 11.8818 29 12.9687 29H30.0312C31.1182 29 32 28.3281 32 27.5V20H11Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_439_455">
                        <rect width="21" height="16" fill="white" transform="translate(11 13)" />
                    </clipPath>
                </defs>
            </svg>
        </SvgIcon>
    );
}

