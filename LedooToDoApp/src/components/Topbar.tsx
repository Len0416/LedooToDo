// Tipo que describe cómo debe ser cada opción
type NavOption = {
  label: string; // Texto visible
  panel: string; // Identificador del panel
  isSetting?: boolean; // Opcional: si es un botón de ajustes
  isAccount?: boolean; // Opcional: si es un botón de cuenta
  isSections?: boolean; // Opcional: si es un botón de secciones
  isLists?: boolean; // Opcional: si es un botón de listas
};

// Array de opciones de navegación
const optionsNav: NavOption[] = [
    { label: "Perfil", panel: "panel-perfil", isAccount: true },
    { label: "Secciones", panel: "panel-secciones-principales", isSections: true },
    { label: "Listas", panel: "panel-secciones-personales", isLists: true },
    { label: "Notas", panel: "notes-panel" },
    { label: "Ajustes", panel: "settings-panel", isSetting: true },
];

// Componente funcional Topbar
type TopbarProps = {
    onOpenSettings: () => void;
    onOpenAccount: () => void;
    onOpenSections: () => void;
    onOpenLists: () => void;
};

const Topbar: React.FC<TopbarProps> = ({ onOpenSettings, onOpenAccount, onOpenSections, onOpenLists }) => {
    return (
        <header className="topbar">
        <span className="logo">Ledoo</span>
        <nav className="optionsNav">
            {optionsNav.map((option) => (
            <button
                key={option.panel}
                className={`optionItem ${option.isSetting ? "setting" : ""} ${option.isAccount ? "account" : ""} ${option.isSections ? "sections" : ""} ${option.isLists ? "lists" : ""}`}
                data-panel={option.panel}
                onClick={option.isSetting ? onOpenSettings : option.isAccount ? onOpenAccount : option.isSections ? onOpenSections : option.isLists ? onOpenLists : undefined}
            >
                {option.label}
            </button>
            ))}
        </nav>
        </header>
    );
};



export default Topbar;
