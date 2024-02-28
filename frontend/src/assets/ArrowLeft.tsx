import { SvgIcon, SvgIconProps } from "@mui/material";

export default function ArrowLeft({
    stroke,
    fill,
    strokeWidth,
    ...otherProps
}: SvgIconProps) {
    return (
        <SvgIcon {...otherProps}>

            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1357 21.7334L13.0518 22.8174C12.5928 23.2764 11.8506 23.2764 11.3965 22.8174L1.9043 13.3301C1.44531 12.8711 1.44531 12.1289 1.9043 11.6748L11.3965 2.18262C11.8555 1.72363 12.5977 1.72363 13.0518 2.18262L14.1357 3.2666C14.5996 3.73047 14.5898 4.4873 14.1162 4.94141L8.23242 10.5469H22.2656C22.915 10.5469 23.4375 11.0693 23.4375 11.7188V13.2813C23.4375 13.9307 22.915 14.4531 22.2656 14.4531H8.23242L14.1162 20.0586C14.5947 20.5127 14.6045 21.2695 14.1357 21.7334Z" fill="#1976D2" />
            </svg>
        </SvgIcon>
    );
}

