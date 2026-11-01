// src/pages/Index.tsx
import React, { useEffect, useCallback, lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import "../assets/styles/global.css";

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

import { usePanelManager } from "../hooks/usePanelManager";
import { useSettingsStore } from "../store/useSettingsStore";

/* Lazy components (chunks) */
const SettingsPanel = lazy(() => import("../components/panels/SettingsPanel"));
const PanelPerfil = lazy(() => import("../components/panels/PanelPerfil"));
const PanelSecciones = lazy(() => import("../components/panels/PanelSecciones"));
const PanelListas = lazy(() => import("../components/panels/PanelListas"));
const EditTaskPanel = lazy(() => import("../components/panels/EditTaskPanel"));

const TaskList = lazy(() => import("../components/tasks/TaskList"));
const TaskForm = lazy(() => import("../components/tasks/TaskForm"));

/* Local fallback used by Suspense (small, focused) */
const PanelFallback: React.FC = () => (
  <div className="glass-loader" aria-hidden>
    <div className="loader-dot" />
    <div className="loader-dot" />
    <div className="loader-dot" />
  </div>
);

const Index: React.FC = () => {
  const { openPanel, open, close } = usePanelManager();
  const { theme, wallpaper, setWallpaper, setTheme } = useSettingsStore();

  /* Preload ligero de paneles más usados en background */
  useEffect(() => {
    // No await: background prefetch intent
    import("../components/panels/SettingsPanel");
    import("../components/panels/PanelPerfil");
  }, []);

  /* Inicialización segura del theme y wallpaper sin provocar loops */
  useEffect(() => {
    const savedTheme = localStorage.getItem("ledoo_theme");
    const savedWallpaper = localStorage.getItem("ledoo_wallpaper");

    if (savedTheme && savedTheme !== theme) {
      setTheme(savedTheme);
      document.body.setAttribute("data-theme", savedTheme);
    } else {
      document.body.setAttribute("data-theme", theme);
    }

    if (savedWallpaper && savedWallpaper !== wallpaper) {
      setWallpaper(savedWallpaper);
      document.body.setAttribute("data-wallpaper", savedWallpaper);
    } else {
      document.body.removeAttribute("data-wallpaper");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // ejecutar solo al montar

  /* Sincroniza DOM y localStorage cuando cambian theme o wallpaper */
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

  /* Handlers que esperan la importación para evitar fallback visible */
  const handleOpenSettings = useCallback(async () => {
    try {
      await import("../components/panels/SettingsPanel");
    } catch (e) {
      console.error("Preload SettingsPanel failed", e);
    }
    open("ajustes");
  }, [open]);

  const handleOpenPerfil = useCallback(async () => {
    try {
      await import("../components/panels/PanelPerfil");
    } catch (e) {
      console.error("Preload PanelPerfil failed", e);
    }
    open("perfil");
  }, [open]);

  const handleOpenSecciones = useCallback(async () => {
    try {
      await import("../components/panels/PanelSecciones");
    } catch (e) {
      console.error("Preload PanelSecciones failed", e);
    }
    open("secciones");
  }, [open]);

  const handleOpenListas = useCallback(async () => {
    try {
      await import("../components/panels/PanelListas");
    } catch (e) {
      console.error("Preload PanelListas failed", e);
    }
    open("listas");
  }, [open]);

  return (
    <div
      id="app"
      className={`theme-${theme}`}
      style={{
        backgroundImage: wallpaper ? `url('${wallpaper}')` : undefined,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        opacity: wallpaper ? 1 : 0.9,
        color: "var(--text)",
      }}
    >
      <Topbar
        onOpenSettings={handleOpenSettings}
        onOpenAccount={handleOpenPerfil}
        onOpenSections={handleOpenSecciones}
        onOpenLists={handleOpenListas}
      />

      {/* Panels: Suspense por panel para fallback localizado */}
      {openPanel === "ajustes" && (
        <Suspense fallback={<PanelFallback />}>
          <SettingsPanel isOpen onClose={close} onChangeWallpaper={setWallpaper} />
        </Suspense>
      )}

      {openPanel === "perfil" && (
        <Suspense fallback={<PanelFallback />}>
          <PanelPerfil isOpen onClose={close} />
        </Suspense>
      )}

      {openPanel === "secciones" && (
        <Suspense fallback={<PanelFallback />}>
          <PanelSecciones isOpen onClose={close} />
        </Suspense>
      )}

      {openPanel === "listas" && (
        <Suspense fallback={<PanelFallback />}>
          <PanelListas isOpen onClose={close} />
        </Suspense>
      )}

      {openPanel === "editarTarea" && (
        <Suspense fallback={<PanelFallback />}>
          <EditTaskPanel isOpen onClose={close} />
        </Suspense>
      )}

      <Sidebar />

      <main
        className="main"
        style={{
          background: "linear-gradient(45deg, rgba(0,0,0,0.75), rgba(0,0,0,0.4))",
        }}
      >
        <Outlet />
        <div className="main-content">
          <Suspense fallback={<PanelFallback />}>
            <TaskList onOpenPanel={open} />
          </Suspense>
        </div>

        <Suspense fallback={<PanelFallback />}>
          <TaskForm />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
