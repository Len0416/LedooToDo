import "../assets/styles/components/topbar.css";

// Tipo que describe cómo debe ser cada opción
type NavOption = {
  label: string;       // Texto visible
  panel: string;       // Identificador del panel
  isSetting?: boolean; // Opcional: si es un botón de ajustes
};

// Array de opciones de navegación
const optionsNav: NavOption[] = [
    { label: "Perfil", panel: "panel-perfil" },
    { label: "Secciones", panel: "panel-secciones-principales" },
    { label: "Listas", panel: "panel-secciones-personales" },
    { label: "Ajustes", panel: "settings-panel", isSetting: true },
];

// Componente funcional Topbar
const Topbar: React.FC = () => {
    return (
        <header className="topbar">
        <span className="logo">Ledoo</span>
        <nav className="optionsNav">
            {optionsNav.map((option) => (
            <button
                key={option.panel} // clave única para React
                className={`optionItem ${option.isSetting ? "setting" : ""}`}
                data-panel={option.panel}
            >
                {option.label}
            </button>
            ))}
        </nav>
        </header>
    );
};

export default Topbar;
