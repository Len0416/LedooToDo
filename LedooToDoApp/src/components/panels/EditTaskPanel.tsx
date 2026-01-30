import { useTaskStore } from "../../store/useTaskStore";

type EditTaskPanelProps = {
    isOpen: boolean;
    onClose: () => void;
};

const EditTaskPanel: React.FC<EditTaskPanelProps> = ({ isOpen, onClose }) => {
    const { editingTask, updateTask, cancelEditing, setEditingTask, toggleImportant, toggleCompleted } = useTaskStore();
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
            }/>
            <div className="panel-actions">
            <button
                onClick={() => toggleCompleted(editingTask.id)} 
                className={"complete-btn " + (editingTask.completed ? "active" : "")}>✓
                {editingTask.completed ? " Desmarcar" : " Marcar completada"}</button>
            <button
                className={`important-btn ${editingTask.important ? "important" : ""}`}
                onClick={() => toggleImportant(editingTask.id)}>
                {editingTask.important ? "Quitar importancia" : "Marcar importante"}
            </button>
            <button className="save-btn" onClick={handleSave}>Guardar</button>
            <button
                className="cancel-btn"
                onClick={() => {
                cancelEditing();
                onClose();
                }}>Cancelar</button>
            </div>
        </div>
        </aside>
    );
};

export default EditTaskPanel;
