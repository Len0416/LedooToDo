import { useTaskStore } from "../../store/useTaskStore";

type EditTaskPanelProps = {
    isOpen: boolean;
    onClose: () => void;
};

const EditTaskPanel: React.FC<EditTaskPanelProps> = ({ isOpen, onClose }) => {
    const { editingTask, updateTask, cancelEditing } = useTaskStore();

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
            onChange={(e) => updateTask({ ...editingTask, title: e.target.value })}
            />
            <input
            type="datetime-local"
            value={editingTask.date || ""}
            onChange={(e) => updateTask({ ...editingTask, date: e.target.value })}
            />
            <label>
            <input
                type="checkbox"
                checked={editingTask.important || false}
                onChange={(e) => updateTask({ ...editingTask, important: e.target.checked })}
            />
            Importante
            </label>
            <div className="panel-actions">
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
