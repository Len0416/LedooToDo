type SettingsPanelProps = {
    isOpen: boolean;
    onClose: () => void;
};

const SettingsPanel: React.FC<SettingsPanelProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Si no está abierto, no se renderiza
    return (
        <aside className="settings-panel">
        <div className="settings-header">
            <h3>Ajustes</h3>
            <button className="btn-icon close-settings" onClick={onClose}>✖</button>
        </div>
        <div className="section-actions">
            <button className="btn-outline">Claro</button>
            <button className="btn-outline is-active">Oscuro</button>
        </div>
        <div className="wallpaper-grid">
            {/* Aquí podrías mapear dinámicamente tus fondos */}
            <button className="wallpaper-card"><img src="   " alt="Montaña" /></button>
        </div>
        </aside>
    );
};


export default SettingsPanel;

