import {createTheme} from "@mui/material"

export const defaultTheme = createTheme({
    palette: {
      primary: {
        main: '#5468ff', 
      },
      secondary: {
        main: '#66b2ff', 
      },
      error: {
        main: '#d84b64', 
      },
      text: {
        primary: '#101418', 
        secondary: '#2f3237', 
        disabled: '#c2c9d6', 
      },
      success: {
        main: '#2fa549', 
      },
      common: {
        black: '#101418', 
        white: '#ffffff', 
      },
      background: {
        default: '#f1f3f9', 
      },
    },
  });