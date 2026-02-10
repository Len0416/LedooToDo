type PanelSeccionesProps = {
    isOpen: boolean;
    onClose: () => void;
};

const PanelSecciones: React.FC<PanelSeccionesProps> = ({ isOpen, onClose }) => {
    return (
        <aside className={`context-panel ${isOpen ? "open" : ""}`} id="panel-secciones-principales">
        <div className="panel-header">
            <h3>Secciones principales</h3>
            <div className="panel-options">
            <button className="btn-icon close-panel" aria-label="Cerrar" onClick={onClose}>✖</button>
            </div>
        </div>
        <div className="panel-body">
            <button className="nav-item"><img src="../src/assets/images/icons/Sun.png" alt="Hoy" /><p>Hoy</p></button>
            <button className="nav-item"><img src="../src/assets/images/icons/Star.png" alt="Importante" /><p>Importante</p></button>
            <button className="nav-item"><img src="../src/assets/images/icons/CheckSquare.png" alt="Tareas" /><p>Tareas</p></button>
            <button className="nav-item"><img src="../src/assets/images/icons/Calendar.png" alt="Planificado" /><p>Planificado</p></button>
        </div>
        </aside>
    );
};

export default PanelSecciones;