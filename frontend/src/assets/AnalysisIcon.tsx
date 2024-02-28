import { SvgIcon, SvgIconProps } from "@mui/material";

export default function AnalisesIcon({
    stroke,
    fill,
    strokeWidth,
    ...otherProps
}: SvgIconProps) {
    return (
        <SvgIcon {...otherProps} sx={{width: 32, height: 32}}>
            <svg width={33} height={34} viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.7188 23.1667H6.625V4.95833C6.625 4.42885 6.27539 4 5.84375 4H4.28125C3.84961 4 3.5 4.42885 3.5 4.95833V25.0833C3.5 26.1417 4.19971 27 5.0625 27H27.7188C28.1504 27 28.5 26.5711 28.5 26.0417V24.125C28.5 23.5955 28.1504 23.1667 27.7188 23.1667ZM26.1562 5.91667H20.3916C19.3477 5.91667 18.8247 7.46497 19.563 8.3706L21.145 10.3112L17.5625 14.7064L13.98 10.3118C13.3696 9.56313 12.3804 9.56313 11.7705 10.3118L8.4165 14.4261C8.11133 14.8004 8.11133 15.4072 8.4165 15.7815L9.521 17.1364C9.82617 17.5107 10.3208 17.5107 10.626 17.1364L12.875 14.377L16.4575 18.7715C17.0679 19.5202 18.0571 19.5202 18.667 18.7715L23.3545 13.0215L24.9365 14.9621C25.6748 15.8678 26.937 15.2263 26.937 13.9457V6.875C26.9375 6.34552 26.5879 5.91667 26.1562 5.91667Z"
                    fill="#1976D2" />
            </svg>
        </SvgIcon>
    );
}

