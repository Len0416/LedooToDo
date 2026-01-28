type PanelListasProps = {
    isOpen: boolean;
    onClose: () => void;
};

const PanelListas: React.FC<PanelListasProps> = ({ isOpen, onClose }) => {
    return (
        <aside className={`context-panel ${isOpen ? "open" : ""}`} id="panel-secciones-personales">
        <div className="panel-header">
            <h3>Secciones personales</h3>
            <button className="btn-outline create-list" aria-label="CrearLista">Crear lista</button>
            <button className="btn-icon close-panel" aria-label="Cerrar" onClick={onClose}>✖</button>
        </div>
        <div className="panel-body">
            <button className="btn-outline">Estudio</button>
            <button className="btn-outline">Trabajo</button>
            <button className="btn-outline">Personal</button>
        </div>
        </aside>
    );
};

export default PanelListas;
