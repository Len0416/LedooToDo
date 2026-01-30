import { useTaskStore } from "../../store/useTaskStore";

type EditTaskPanelProps = {
    isOpen: boolean;
    onClose: () => void;
};

const EditTaskPanel: React.FC<EditTaskPanelProps> = ({ isOpen, onClose }) => {
    const { editingTask, updateTask, cancelEditing, setEditingTask, toggleImportant } = useTaskStore();

    if (!editingTask) return null;

    const handleSave = () => {
        updateTask(editingTask);
        onClose();
    };

    return (
        <aside className={`context-panel ${isOpen ? "open" : ""}`}>
        <div className="panel-body">
            <h2>Editar tarea</h2>
            <button className="btn-icon close-panel" aria-label="Cerrar" onClick={onClose}>✖</button>
            <input
                type="text"
                value={editingTask.title}
                onChange={(e) =>
                    setEditingTask({ ...editingTask, title: e.target.value })
            }
            />

            <input
            type="datetime-local"
            value={editingTask.date || ""}
            onChange={(e) =>
                    setEditingTask({ ...editingTask, date: e.target.value })
            }
            />
            <label>
            <input
            type="checkbox"
            checked={editingTask.completed || false}
            onChange={(e) =>
                setEditingTask({ ...editingTask, completed: e.target.checked })
            }
            />
            </label>
            <div className="panel-actions">
            <button
                className={`important-btn ${editingTask.important ? "active" : ""}`}
                onClick={() => toggleImportant(editingTask.id)}>
                {editingTask.important ? "Quitar importancia" : "Marcar importante"}
            </button>
            <button onClick={handleSave}>Guardar</button>
            <button
                onClick={() => {
                cancelEditing();
                onClose();
                }}
            >
                Cancelar
            </button>
            </div>
        </div>
        </aside>
    );
};

export default EditTaskPanel;
