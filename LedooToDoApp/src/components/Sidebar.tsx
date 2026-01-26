import "../assets/styles/components/sidebar.css";

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar" aria-label="Barra lateral">
        <div className="user-card">
            <img src="../assets/images/icons/User.png" alt="Icono de perfil" />
            <div className="user-info">
            <div className="user-name">Nombre de usuario</div>
            <div className="user-email">correousuario@gmail.com</div>
            </div>
        </div>

        <div className="divider" role="separator"></div>

        <nav className="nav-sections">
            <button className="nav-item is-active">
            <img src="../assets/images/icons/Sun.png" alt="Hoy" />
            <span>Hoy</span>
            </button>
            <button className="nav-item">
            <img src="../assets/images/icons/Star.png" alt="Importante" />
            <span>Importante</span>
            </button>
            <button className="nav-item">
            <img src="../assets/images/icons/CheckSquare.png" alt="Tareas" />
            <span>Tareas</span>
            </button>
            <button className="nav-item">
            <img src="../assets/images/icons/Calendar.png" alt="Planificado" />
            <span>Planificado</span>
            </button>
        </nav>

        <div className="divider" role="separator"></div>

        <div className="lists">
            <div className="lists-header">
            <span>Mis listas</span>
            </div>
            <ul className="list-group">
            <li><button className="list-item">Trabajo</button></li>
            <li><button className="list-item">Personal</button></li>
            <li><button className="list-item">Estudio</button></li>
            <button className="btn-outline create-list">Crear lista</button>
            </ul>
        </div>
        </aside>
    );
};

export default Sidebar;
