import { useState } from "react";
import { useTaskStore } from "../../store/useTaskStore";
import DateButton from "../../ui/DateButton";

type EditTaskPanelProps = {
    isOpen: boolean;
    onClose: () => void;
};

const EditTaskPanel: React.FC<EditTaskPanelProps> = ({ isOpen, onClose }) => {
    const { editingTask, updateTask, cancelEditing, toggleImportant } = useTaskStore();

    const [title, setTitle] = useState(editingTask?.title ?? "");
    const [date, setDate] = useState<string | undefined>(editingTask?.date ?? undefined);

    if(!editingTask) return null;

    const handleSave = () => {
        updateTask({
        ...editingTask,
        title,
        date,
        });
        onClose();
    };

    return (
        <aside className={`context-panel ${isOpen ? "open" : ""}`}>
        <div className="panel-body">
            <h2>Editar tarea</h2>
            <button className="btn-icon close-panel" aria-label="Cerrar" onClick={onClose}>✖</button>
            
            <div className="input-group">
            <input
                id="task-title"
                type="text"
                className="input-field"
                placeholder="Nueva tarea…"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <span className="input-underline"></span>
            </div>

            <DateButton
            value={date}
            onChange={(newDateString) => setDate(newDateString)}
            />

            <div className="panel-actions">
            <div className="checkboxesTask">
                <button
                className={`important-btn ${editingTask.important ? "important" : ""}`}
                onClick={() => toggleImportant(editingTask.id)}
                >
                {editingTask.important ? "Quitar importancia" : "Marcar importante"}
                </button>
            </div>
            <div className="actionsTask">
                <button className="save-btn" onClick={handleSave}>Guardar</button>
                <button
                className="cancel-btn"
                onClick={() => {
                    cancelEditing();
                    onClose();
                }}
                >
                Cancelar
                </button>
            </div>
            </div>
        </div>
        </aside>
    );
};


export default EditTaskPanel;
