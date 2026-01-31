// src/pages/Index.tsx
// Página principal de la aplicación Ledoo (ToDoApp)

// Importación de estilos globales y específicos de componentes
import "../assets/styles/components/main.css";
import "../assets/styles/components/panels.css";
import "../assets/styles/components/settings.css";
import "../assets/styles/components/topbar.css";
import "../assets/styles/components/sidebar.css";
import "../assets/styles/components/tasks.css";
import "../assets/styles/global.css";

// Importación de estilos UI
import "../assets/styles/ui/buttons.css";
import "../assets/styles/ui/tags.css";
import "../assets/styles/ui/inputs.css";

// Importación de componentes
import Topbar from "../components/Topbar.tsx";
import Sidebar from "../components/Sidebar.tsx";
import TaskForm from "../components/TaskForm.tsx";
import TaskList from "../components/TaskList.tsx";

// Importación de paneles
import PanelPerfil from "../components/panels/PanelPerfil.tsx"; 
import PanelSecciones from "../components/panels/PanelSecciones.tsx"; 
import SettingsPanel from "../components/panels/SettingsPanel.tsx";
import PanelListas from "../components/panels/PanelListas.tsx";
import EditTaskPanel from "../components/panels/EditTaskPanel.tsx";

// Importación de hooks
import { usePanelManager } from "../hooks/usePanelManager.ts";

// Importación de store
import { useSettingsStore } from "../store/useSettingsStore.ts";

// Componente funcional Index
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
