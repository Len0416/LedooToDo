import { Link } from 'react-router-dom';
import { Today, Important, AllTasks, Calendar } from './main/Main';
import { useListStore } from '../store/useListStore';

import iconSection1 from "../assets/images/icons/Sun.png";
import iconSection2 from "../assets/images/icons/Star.png";
import iconSection3 from "../assets/images/icons/CheckSquare.png";
import iconSection4 from "../assets/images/icons/Calendar.png";
import userIcon from "../assets/images/icons/User.png";
import { useState } from 'react';

const Sidebar: React.FC = () => {
    const sections = [
        { title: "Hoy", icon: iconSection1, path: "/today", component: Today },
        { title: "Destacados", icon: iconSection2, path: "/important", component: Important },
        { title: "Tareas", icon: iconSection3, path: "/tasks", component: AllTasks },
        { title: "Calendario", icon: iconSection4, path: "/calendar", component: Calendar },
    ];
    const { lists, addList, removeList, editList } = useListStore();

    // Estados
    const [listTitle, setListTitle] = useState("");
    const [listId, setListId] = useState<string | undefined>(undefined);
    const [editingListId, setEditingListId] = useState<string | null>(null);
    const [newListTitle, setNewListTitle] = useState("");

    // Guardar cambios en una lista
    const handleSaveList = () => {
        if (!listId) return;
        editList(listId, listTitle);
        setEditingListId(null); // cerrar edición
        setListTitle("");       // limpiar input
    };

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
                    {lists.map((item) => (
                        editingListId === item.id ? (
                            <li key={item.id} className="list-item">
                                <input
                                    type="text"
                                    className="input-field"
                                    value={listTitle}
                                    onChange={(e) => setListTitle(e.target.value)}
                                    required
                                />
                                <div className='actionsList'>
                                    <button className="cancel-btn" onClick={() => setEditingListId(null)}>
                                        Cancelar
                                    </button>
                                    <button className="delete-btn" onClick={() => removeList(item.id)}>
                                        Eliminar
                                    </button>
                                    <button className="save-btn" onClick={handleSaveList}>
                                        Guardar
                                    </button>
                                </div>
                            </li>
                        ) : (
                            <li 
                                key={item.id} 
                                className="list" 
                                onClick={() => {
                                    setEditingListId(item.id);
                                    setListId(item.id);
                                    setListTitle(item.name);
                                }}
                            >
                                <Link to={`/listas/${item.name.toLowerCase()}`}>{item.name}</Link>
                            </li>
                        )
                    ))}

                    {/* Crear nueva lista */}
                    <li className="list-item">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Nueva lista"
                            value={newListTitle}
                            onChange={(e) => setNewListTitle(e.target.value)}
                        />
                        <button 
                            onClick={() => {
                                if (newListTitle.trim()) {
                                    addList(newListTitle);
                                    setNewListTitle("");
                                }
                            }} 
                            className="btn-outline create-list"
                        >
                            Crear lista
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
