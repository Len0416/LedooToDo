import "../assets/styles/components/main.css";
import "../assets/styles/components/panels.css";
import "../assets/styles/components/settings.css";
import "../assets/styles/global.css";

import "../assets/styles/ui/buttons.css";

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

import PanelPerfil from "../components/panels/PanelPerfil"; 
import PanelSecciones from "../components/panels/PanelSecciones"; 
import SettingsPanel from "../components/panels/SettingsPanel";
import PanelListas from "../components/panels/PanelListas";
import EditTaskPanel from "../components/panels/EditTaskPanel";

import { usePanelManager } from "../hooks/usePanelManager";

import { useSettingsStore } from "../store/useSettingsStore";

const Index: React.FC = () => {
    const { openPanel, open, close } = usePanelManager();
    const { theme, wallpaper, setWallpaper, setTheme } = useSettingsStore();
    console.log("Index openPanel:", openPanel);

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
            <div className="main-content">
            <header className="main-header">
                <h1>Hoy</h1>
                <div className="actions">
                <label className="search">
                    <span className="sr-only">Buscar tareas</span>
                    <input type="search" placeholder="Buscar tareas…" />
                </label>
                </div>
            </header>
            <TaskList onOpenPanel={open} />
            </div>
            <TaskForm />
        </main>
        </div>
    );
};

export default Index;
