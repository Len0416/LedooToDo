import type { Task } from "../types/Task";
import { useTaskStore } from "../store/useTaskStore";
import { useState } from "react";
import DateButton from "../ui/DateButton";

type TaskItemProps = {
    task: Task;
    onOpenPanel: (panel: string) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onOpenPanel }) => {
    const { deleteTask, toggleCompleted, startEditing, cancelEditing, toggleImportant, updateTask } = useTaskStore();

    const [isInlineEditing, setIsInlineEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [date, setDate] = useState<string | undefined>(task.date);

    const handleSaveInline = () => {
        updateTask({ ...task, title, date });
        setIsInlineEditing(false);
    };

    return (
        <div
        className={`task 
            ${task.completed ? "completed" : ""} 
            ${task.important ? "important" : ""}`}
        >
        {isInlineEditing ? (
            // 🔹 MODO EDICIÓN INLINE
            <div className="inline-edit">
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
                {/* Selector de fecha con popup */}
                <DateButton value={date} onChange={setDate} />

                <div className="actions">
                    <button className="save-btn" onClick={handleSaveInline}>
                    Guardar
                    </button>
                    <button
                    className="cancel-btn"
                    onClick={() => {
                        cancelEditing();
                        setIsInlineEditing(false);
                    }}
                    >
                    Cancelar
                    </button>
                </div>
            </div>
        ) : (
            // 🔹 MODO NORMAL
            <>
            <span
                className="task-title"
                onClick={() => setIsInlineEditing(true)}
            >
                {task.title}
            </span>
            {task.date && <span>{task.date}</span>}
            {task.important && <span className="tag important">Importante</span>}
            {task.completed && <span className="tag completed">Completada</span>}

            <div className="task-actions">
                <button
                onClick={() => toggleCompleted(task.id)}
                className={"complete-btn " + (task.completed ? "active" : "")}
                >
                ✓ {task.completed ? " Desmarcar" : " Marcar completada"}
                </button>

                {/* Botón para marcar como importante */}
                <button
                className={`important-btn ${task.important ? "important" : ""}`}
                onClick={() => toggleImportant(task.id)}
                >
                {task.important ? "Quitar importancia" : "Marcar importante"}
                </button>

                <button
                className="edit-btn"
                onClick={() => {
                    startEditing(task);
                    onOpenPanel("editarTarea");
                }}
                >
                Editar
                </button>

                <button
                className="cancel-btn"
                onClick={() => deleteTask(task.id)}
                >
                Eliminar
                </button>
            </div>
            </>
        )}
        </div>
    );
};

export default TaskItem;

