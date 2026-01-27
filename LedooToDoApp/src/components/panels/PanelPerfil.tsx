type PanelPerfilProps = {
    isOpen: boolean;
    onClose: () => void;
};

const PanelPerfil: React.FC<PanelPerfilProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Si no está abierto, no se renderiza

    return (
        <aside className="context-panel" id="panel-perfil">
        <div className="panel-header">
            <h3>Perfil</h3>
            <div className="panel-options">
            <button className="btn-outline">Cerrar sesión</button>
            <button className="btn-icon close-panel" onClick={onClose}>✖</button>
            </div>
        </div>
        <div className="panel-body">
            <img src="../assets/images/icons/User.png" alt="Perfil" />
            <div className="panel-content">
            <p>Nombre de usuario</p>
            <p>correousuario@gmail.com</p>
            </div>
        </div>
        </aside>
    );
};

export default PanelPerfil;
