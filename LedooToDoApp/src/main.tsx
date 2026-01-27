import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import "./assets/styles/global.css";

import "./assets/styles/layouts/mediaDesktop.css";
import "./assets/styles/layouts/mediaLargeMonitor.css";
import "./assets/styles/layouts/mediaLaptop.css";
import "./assets/styles/layouts/mediaTablet.css";
import "./assets/styles/layouts/mediaPhone.css";

createRoot(document.getElementById("root")!).render(<App />);