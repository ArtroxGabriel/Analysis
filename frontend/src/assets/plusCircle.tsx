import { SvgIcon, SvgIconProps } from "@mui/material";

export default function PlusCircle({
    stroke,
    fill,
    strokeWidth,
    ...otherProps
}: SvgIconProps) {
    return (
        <SvgIcon {...otherProps}>

            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_439_1317)">
                    <path d="M12.5 1.19067C5.81055 1.19067 0.390625 6.6106 0.390625 13.3C0.390625 19.9895 5.81055 25.4094 12.5 25.4094C19.1895 25.4094 24.6094 19.9895 24.6094 13.3C24.6094 6.6106 19.1895 1.19067 12.5 1.19067ZM19.5312 14.6672C19.5312 14.9895 19.2676 15.2532 18.9453 15.2532H14.4531V19.7454C14.4531 20.0676 14.1895 20.3313 13.8672 20.3313H11.1328C10.8105 20.3313 10.5469 20.0676 10.5469 19.7454V15.2532H6.05469C5.73242 15.2532 5.46875 14.9895 5.46875 14.6672V11.9329C5.46875 11.6106 5.73242 11.3469 6.05469 11.3469H10.5469V6.85474C10.5469 6.53247 10.8105 6.2688 11.1328 6.2688H13.8672C14.1895 6.2688 14.4531 6.53247 14.4531 6.85474V11.3469H18.9453C19.2676 11.3469 19.5312 11.6106 19.5312 11.9329V14.6672Z" fill="#1976D2" />
                </g>
                <defs>
                    <clipPath id="clip0_439_1317">
                        <rect width="25" height="25" fill="white" transform="translate(0 0.800049)" />
                    </clipPath>
                </defs>
            </svg>
        </SvgIcon>
    );
}



