import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./ui/themeOverrides";
import './assets/styles/global.css';

import "./assets/styles/layouts/mediaDesktop.css";
import "./assets/styles/layouts/mediaLargeMonitor.css";
import "./assets/styles/layouts/mediaLaptop.css";
import "./assets/styles/layouts/mediaTablet.css";
import "./assets/styles/layouts/mediaPhone.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
