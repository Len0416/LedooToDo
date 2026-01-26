import "../assets/styles/components/settings.css";

const SettingsPanel: React.FC = () => {
    return (
        <aside className="settings-panel" id="settings-panel">
        <div className="settings-header">
            <h3>Ajustes</h3>
            <button className="btn-icon close-settings">✖</button>
        </div>
        <div className="section-actions">
            <button className="btn-outline">Claro</button>
            <button className="btn-outline is-active">Oscuro</button>
        </div>
        <div className="wallpaper-grid">
            <button className="wallpaper-card"><img src="../assets/images/themes/Fondo1.png" alt="Montaña" /></button>
            <button className="wallpaper-card"><img src="../assets/images/themes/Fondo2.png" alt="Ciudad" /></button>
            {/* ... demás fondos */}
        </div>
        </aside>
    );
};

export default SettingsPanel;
