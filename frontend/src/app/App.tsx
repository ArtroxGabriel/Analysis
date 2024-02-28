import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../routes";
import { NavBar } from "../components/navBar/NavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "../themes/default";


export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>

      <BrowserRouter>
        <NavBar>
          <AppRoutes />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </NavBar>
      </BrowserRouter>
    </ThemeProvider>
  );
};