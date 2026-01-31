import "../assets/styles/components/sidebar.css";

import iconSection1 from "../assets/images/icons/Sun.png";
import iconSection2 from "../assets/images/icons/Star.png";
import iconSection3 from "../assets/images/icons/CheckSquare.png";
import iconSection4 from "../assets/images/icons/Calendar.png";
import userIcon from "../assets/images/icons/User.png";

const Sidebar: React.FC = () => {
    const icons = [iconSection1, iconSection2, iconSection3, iconSection4];
    const titles = ["Hoy", "Destacados", "Tareas", "Calendario"];
    const listItems = ["Trabajo", "Personal", "Estudio"];

    return (
        <aside className="sidebar" aria-label="Barra lateral">
        <div className="user-card">
            <img src={userIcon} alt="Icono de perfil" />
            <div className="user-info">
            <div className="user-name">Nombre de usuario</div>
            <div className="user-email">correousuario@gmail.com</div>
            </div>
        </div>

        <div className="divider" role="separator"></div>

        <nav className="nav-sections">
            {icons.map((icon, index) => (
                <button
                    key={index}
                    className="nav-item"
                >
                <img src={icon} alt={titles[index]} width={"auto"} height={"auto"}/>
                <p>{titles[index]}</p>
                </button>
            ))}
        </nav>

        <div className="divider" role="separator"></div>

        <div className="lists">
            <div className="lists-header">
            <h3>Mis listas</h3>
            </div>
            <ul className="list-group">
            {listItems.map((item, index) => (
                <li key={index} className="list-item">
                {item}
                </li>
            ))}
            <button className="btn-outline create-list">Crear lista</button>
            </ul>
        </div>
        <div className="divider" role="separator"></div>
        <div className="notes">
            <h3>Notas</h3>
            <button className="btn-outline">Tablero de notas</button>
        </div>
        </aside>
    );
};

export default Sidebar;
