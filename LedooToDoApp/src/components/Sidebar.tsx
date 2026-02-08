import { Link } from 'react-router-dom';
import { Today, Important, AllTasks, Calendar } from './main/Main';

import iconSection1 from "../assets/images/icons/Sun.png";
import iconSection2 from "../assets/images/icons/Star.png";
import iconSection3 from "../assets/images/icons/CheckSquare.png";
import iconSection4 from "../assets/images/icons/Calendar.png";
import userIcon from "../assets/images/icons/User.png";

const Sidebar: React.FC = () => {
    const sections = [
        { title: "Hoy", icon: iconSection1, path: "/today", component: Today },
        { title: "Destacados", icon: iconSection2, path: "/important", component: Important },
        { title: "Tareas", icon: iconSection3, path: "/tasks", component: AllTasks },
        { title: "Calendario", icon: iconSection4, path: "/calendar", component: Calendar },
    ];
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
            {sections.map((section, index) => (
            <Link key={index} to={section.path} className="nav-item">
                <img src={section.icon} alt={section.title} />
                <p>{section.title}</p>
            </Link>
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
                <Link to={`/listas/${item.toLowerCase()}`}>{item}</Link>
                </li>
            ))}
            <button className="btn-outline create-list">Crear lista</button>
            </ul>
        </div>
        </aside>
    );
};

export default Sidebar;
