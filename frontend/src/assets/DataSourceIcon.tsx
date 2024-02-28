import { SvgIcon, SvgIconProps } from "@mui/material";

export default function DataSourceIcon({
    stroke,
    fill,
    strokeWidth,
    ...otherProps
}: SvgIconProps) {
    return (
        <SvgIcon {...otherProps}  sx={{width: 32, height: 32}}>
            <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_439_26)">
                    <path d="M27.8828 14.8504L25.5109 9.21719C25.2062 8.48984 24.3484 8 23.3781 8H16.75V15.125H27.9391C27.9203 15.0322 27.9203 14.9395 27.8828 14.8504ZM15.25 8H8.62187C7.65156 8 6.79375 8.48984 6.48906 9.21719L4.11719 14.8504C4.07969 14.9395 4.07969 15.0322 4.06094 15.125H15.25V8ZM4 16.3125V25.2188C4 26.2021 5.00781 27 6.25 27H25.75C26.9922 27 28 26.2021 28 25.2188V16.3125H4Z" fill="#1976D2" />
                </g>
                <defs>
                    <clipPath id="clip0_439_26">
                        <rect width="24" height="19" fill="white" transform="translate(4 8)" />
                    </clipPath>
                </defs>
            </svg>
        </SvgIcon>
    );
}

