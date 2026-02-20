import { Link } from "react-router-dom";
import { Today, Important, AllTasks, Calendar } from "./main/Main";
import { useListStore } from "../store/useListStore";
import iconSection1 from "../assets/images/icons/TablerSun.svg";
import iconSection2 from "../assets/images/icons/ImportantStar.svg";
import iconSection3 from "../assets/images/icons/CheckCircle.svg";
import iconSection4 from "../assets/images/icons/BxCalendar.svg";
import userIcon from "../assets/images/icons/TablerUser.svg";
import { useState } from "react";
import CreateListModal from "./modals/CreateListModal.tsx";
import EditListModal from "./modals/EditListModal.tsx";
import type { List } from "../types/List.ts";

const Sidebar: React.FC = () => {
  const sections = [
    { title: "Hoy", icon: iconSection1, path: "/today", component: Today },
    { title: "Destacados", icon: iconSection2, path: "/important", component: Important },
    { title: "Tareas", icon: iconSection3, path: "/tasks", component: AllTasks },
    { title: "Calendario", icon: iconSection4, path: "/calendar", component: Calendar },
  ];

  const { lists } = useListStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [selectedList, setSelectedList] = useState<List | null>(null);

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
          <button className="btn-outline" onClick={() => setIsModalOpen(true)}>
            +
          </button>
        </div>
        <ul className="list-group">
          {lists.map((item) => (
            <li key={item.id} className="list" onClick={() => { setSelectedList(item); setIsEditModal(true); }}>
              <Link to={`/listas/${item.name.toLowerCase()}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal para crear lista */}
      {isModalOpen && <CreateListModal onClose={() => setIsModalOpen(false)} />}
        {isEditModal && selectedList && (
        <EditListModal
          list={selectedList}
          onClose={() => {
            setIsEditModal(false);
            setSelectedList(null);
          }}
          onEdit={() => {
            setIsEditModal(false);
            setSelectedList(null);
          }}
        />
      )}
    </aside>
  );
};

export default Sidebar;
