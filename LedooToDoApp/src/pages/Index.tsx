import "../assets/styles/layouts/mediaDesktop.css";
import "../assets/styles/layouts/mediaLargeMonitor.css";
import "../assets/styles/layouts/mediaLaptop.css";
import "../assets/styles/layouts/mediaTablet.css";
import "../assets/styles/layouts/mediaPhone.css";

import "../assets/styles/components/main.css";

import "../assets/styles/global.css";

import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import SettingsPanel from "../components/SettingsPanel";

const Index: React.FC = () => {
    return (
        <div id="app" className="theme-dark">
        <Topbar />
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
        <SettingsPanel />
        </div>
    );
};

export default Index;
