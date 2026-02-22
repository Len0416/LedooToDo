// src/pages/Index.tsx
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import "../assets/styles/components/main.css";
import "../assets/styles/components/panels.css";
import "../assets/styles/components/settings.css";
import "../assets/styles/components/topbar.css";
import "../assets/styles/components/sidebar.css";
import "../assets/styles/components/tasks.css";
import "../assets/styles/global.css";

import "../assets/styles/ui/buttons.css";
import "../assets/styles/ui/tags.css";
import "../assets/styles/ui/inputs.css";
import "../assets/styles/ui/modal.css";

import Topbar from "../components/Topbar.tsx";
import Sidebar from "../components/Sidebar.tsx";
import TaskForm from "../components/tasks/TaskForm.tsx";
import TaskList from "../components/tasks/TaskList.tsx";

import PanelPerfil from "../components/panels/PanelPerfil.tsx";
import PanelSecciones from "../components/panels/PanelSecciones.tsx";
import SettingsPanel from "../components/panels/SettingsPanel.tsx";
import PanelListas from "../components/panels/PanelListas.tsx";
import EditTaskPanel from "../components/panels/EditTaskPanel.tsx";

import { usePanelManager } from "../hooks/usePanelManager.ts";
import { useSettingsStore } from "../store/useSettingsStore.ts";

const Index: React.FC = () => {
  const { openPanel, open, close } = usePanelManager();
  const { theme, wallpaper, setWallpaper, setTheme } = useSettingsStore();

  useEffect(() => {
    const savedTheme = localStorage.getItem("ledoo_theme");
    const savedWallpaper = localStorage.getItem("ledoo_wallpaper");

    if (savedTheme) {
      setTheme(savedTheme);
      document.body.setAttribute("data-theme", savedTheme);
    } else {
      document.body.setAttribute("data-theme", theme);
    }

    if (savedWallpaper) {
      setWallpaper(savedWallpaper);
      document.body.setAttribute("data-wallpaper", savedWallpaper);
    } else {
      document.body.removeAttribute("data-wallpaper");
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.body.setAttribute("data-theme", theme);
      localStorage.setItem("ledoo_theme", theme);
    }
    if (wallpaper) {
      document.body.setAttribute("data-wallpaper", wallpaper);
      localStorage.setItem("ledoo_wallpaper", wallpaper);
    }
  }, [theme, wallpaper]);

  return (
    <div
      id="app"
      className={`theme-${theme}`}
      style={{
        backgroundImage: `url('${wallpaper}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        opacity: wallpaper ? 1 : 0.9,
      }}
    >
      <Topbar
        onOpenSettings={() => open("ajustes")}
        onOpenAccount={() => open("perfil")}
        onOpenSections={() => open("secciones")}
        onOpenLists={() => open("listas")}
      />

      <SettingsPanel
        isOpen={openPanel === "ajustes"}
        onClose={close}
        onToggleTheme={() => setTheme(theme === "light" ? "dark" : "light")}
        onChangeWallpaper={setWallpaper}
      />

      <PanelPerfil isOpen={openPanel === "perfil"} onClose={close} />
      <PanelSecciones isOpen={openPanel === "secciones"} onClose={close} />
      <PanelListas isOpen={openPanel === "listas"} onClose={close} />
      <EditTaskPanel isOpen={openPanel === "editarTarea"} onClose={close} />

      <Sidebar />
      <main className="main">
        <Outlet />
        <div className="main-content">
          <TaskList onOpenPanel={open} />
        </div>
        <TaskForm />
      </main>
    </div>
  );
};

export default Index;
