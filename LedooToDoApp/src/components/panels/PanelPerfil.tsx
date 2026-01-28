type PanelPerfilProps = {
    isOpen: boolean;
    onClose: () => void;
};

const PanelPerfil: React.FC<PanelPerfilProps> = ({ isOpen, onClose }) => {
    return (
        <aside className={`context-panel ${isOpen ? "open" : ""}`} id="panel-perfil">
        <div className="panel-header">
            <h3>Perfil</h3>
            <div className="panel-options">
            <button className="btn-outline">Cerrar sesión</button>
            <button className="btn-icon close-panel" aria-label="Cerrar" onClick={onClose}>✖</button>
            </div>
        </div>
        <div className="panel-body">
            <img src="../src/assets/images/icons/User.png" alt="Icono de perfil de usuario" />
            <div className="panel-content">
            <p>Nombre de usuario</p>
            <p>correousuario@gmail.com</p>
            </div>
        </div>
        </aside>
    );
};

export default PanelPerfil;
