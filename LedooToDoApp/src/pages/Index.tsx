import "../assets/styles/components/main.css";
import "../assets/styles/components/panels.css";
import "../assets/styles/components/settings.css";
import "../assets/styles/global.css";

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import PanelPerfil from "../components/panels/PanelPerfil"; 
import PanelSecciones from "../components/panels/PanelSecciones"; 
import SettingsPanel from "../components/panels/SettingsPanel";

import { usePanelManager } from "../hooks/usePanelManager";
import PanelListas from "../components/panels/PanelListas";

const Index: React.FC = () => {
    const {
        openPanel,
        open,
        close,
        theme,
        toggleTheme,
        wallpaper,
        changeWallpaper,
    } = usePanelManager();

    return (
        <div
        id="app"
        className={`theme-${theme}`}
        style={{
            backgroundImage: `url('${wallpaper}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
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
            onToggleTheme={toggleTheme}
            onChangeWallpaper={changeWallpaper}
        />

        <PanelPerfil isOpen={openPanel === "perfil"} onClose={close} />
        <PanelSecciones isOpen={openPanel === "secciones"} onClose={close} />
        <PanelListas isOpen={openPanel === "listas"} onClose={close} />

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
            <TaskList />
            </div>
            <TaskForm />
        </main>
        </div>
    );
};

export default Index;
