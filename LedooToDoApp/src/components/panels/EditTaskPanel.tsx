// src/components/panels/PanelEditarTarea.tsx
import { useTaskStore } from "../../store/useTaskStore";

type PanelEditarTareaProps = {
    isOpen: boolean;
    onClose: () => void;
    };

    const PanelEditarTarea: React.FC<PanelEditarTareaProps> = ({ isOpen, onClose }) => {
    const { editingTask, updateTask, cancelEditing } = useTaskStore();

    if (!isOpen || !editingTask) return null;

    const handleSave = () => {
        updateTask(editingTask);
        onClose();
    };

    return (
        <div className="panel editarTarea">
        <h2>Editar tarea</h2>
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
        <button onClick={handleSave}>Guardar</button>
        <button
            onClick={() => {
            cancelEditing();
            onClose();
            }}>Cancelar</button>
        </div>
    );
};

export default PanelEditarTarea;
