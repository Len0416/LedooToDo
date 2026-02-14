// src/components/panels/SettingsPanel.tsx
import fondo1 from "../../assets/images/themes/Fondo1.png";
import fondo2 from "../../assets/images/themes/Fondo2.png";
import fondo3 from "../../assets/images/themes/Fondo3.png";
import fondo4 from "../../assets/images/themes/Fondo4.png";
import fondo5 from "../../assets/images/themes/Fondo5.png";
import fondo6 from "../../assets/images/themes/Fondo6.png";
import fondo7 from "../../assets/images/themes/Fondo7.png";
import fondo8 from "../../assets/images/themes/Fondo8.png";
import fondo9 from "../../assets/images/themes/Fondo9.png";

import { useSettingsStore } from "../../store/useSettingsStore";

type SettingsPanelProps = {
    isOpen: boolean;
    onClose: () => void;
    onToggleTheme: () => void;
    onChangeWallpaper: (newWallpaper: string) => void;
};

const SettingsPanel: React.FC<SettingsPanelProps> = ({
    isOpen,
    onClose,
    onToggleTheme,
    onChangeWallpaper,
    }) => {
    const { theme, setTheme } = useSettingsStore();

    if (!isOpen) return null;

    const fondos = [fondo1, fondo2, fondo3, fondo4, fondo5, fondo6, fondo7, fondo8, fondo9];
    const themes = ["redTheme", "orangeTheme", "yellowTheme", "greenTheme", "blueTheme", "purpleTheme"];

    return (
        <aside className={`settings-panel ${isOpen ? "active" : ""}`}>
        <div className="settings-header">
            <h3>Ajustes</h3>
            <button className="btn-icon close-settings" onClick={onClose}>✖</button>
        </div>

        <div className="section-actions">
            <button className="btn-outline" onClick={onToggleTheme}>Claro/Oscuro</button>
        </div>

        <h2>Fondos</h2>
        <div className="wallpaper-grid">
            {fondos.map((fondo, index) => (
            <button
                key={index}
                className="wallpaper-card"
                onClick={() => onChangeWallpaper(fondo)}
            >
                <img src={fondo} alt={`Fondo${index + 1}`} />
            </button>
            ))}
        </div>

        <h2>Temas</h2>
        <div className="themes-grid">
        {themes.map((t) => (
            <button
            key={t}
            className={`theme-btn ${t} ${theme === t ? "active" : ""}`}
            onClick={() => {
                setTheme(t);
                document.body.setAttribute("data-theme", t);
                localStorage.setItem("ledoo_theme", t);
            }}
            />
        ))}
        </div>
        </aside>
    );
};

export default SettingsPanel;
