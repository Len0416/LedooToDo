import "../assets/styles/components/main.css";

import "../assets/styles/components/panels.css";
import "../assets/styles/components/settings.css";
import "../assets/styles/components/panels.css";

import "../assets/styles/global.css";

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import PanelPerfil from "../components/panels/PanelPerfil"; 
import PanelSecciones from "../components/panels/PanelSecciones"; 
import SettingsPanel from "../components/panels/SettingsPanel";
import { useSettingsPanel } from "../hooks/useSettingsPanel";

const Index: React.FC = () => {
    const { isOpen, openPanel, closePanel } = useSettingsPanel();

    return (
        <div id="app" className="theme-dark">
        <Topbar onOpenSettings={openPanel}/>
        <SettingsPanel isOpen={isOpen} onClose={closePanel} />

        {/* Paneles controlados por estado local */}
        <PanelPerfil isOpen={false} onClose={() => {}} />
        <PanelSecciones isOpen={false} onClose={() => {}} />

        {/* Panel de ajustes controlado por el hook */}

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