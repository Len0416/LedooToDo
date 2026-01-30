import type { Task } from "../types/Task";
import { useTaskStore } from "../store/useTaskStore";
import { useState } from "react";

type TaskItemProps = {
    task: Task;
    onOpenPanel: (panel: string) => void;
    onClose: () => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onOpenPanel }) => {
    const { deleteTask, toggleCompleted, startEditing, cancelEditing, toggleImportant } = useTaskStore();

    const [isInlineEditing, setIsInlineEditing] = useState(false);

    return (
        <div
        className={`task 
            ${task.completed ? "completed" : ""} 
            ${task.important ? "important" : ""}`}
        >
        {isInlineEditing ? (
            // 🔹 MODO EDICIÓN INLINE
            <div className="inline-edit">
                <input
                    type="text"
                    defaultValue={task.title}
                    onBlur={() => setIsInlineEditing(false)}
                />
                <input
                    type="datetime-local"
                    defaultValue={task.date || ""}
                    onBlur={() => setIsInlineEditing(false)}
                />
                <div className="actions">
                <button className="save-btn" onClick={() => setIsInlineEditing(false)}>Guardar</button>
                <button
                    className="cancel-btn"
                    onClick={() => {
                    cancelEditing();
                    setIsInlineEditing(false);
                    }}>Cancelar</button>
                </div>
            </div>
        ) : (
            // 🔹 MODO NORMAL
            <>
            <span
                className="task-title"
                onClick={() => setIsInlineEditing(true)}
            >
                {task.title} {task.completed ? "(Completada)" : ""}
            </span>

            {task.date && <span>{task.date}</span>}
            {task.important && <span className="badge">⭐ Importante</span>}

            <div className="task-actions">
                <button
                onClick={() => toggleCompleted(task.id)} 
                className={"complete-btn " + (task.completed ? "active" : "")}>✓
                {task.completed ? " Desmarcar" : " Marcar completada"}</button>

                {/* Botón para marcar como importante */}
                <button
                className={`important-btn ${task.important ? "important" : ""}`}
                onClick={() => toggleImportant(task.id)}>
                {task.important ? "Quitar importancia" : "Marcar importante"}
                </button>

                <button
                className="edit-btn"
                onClick={() => {
                    startEditing(task);
                    onOpenPanel("editarTarea");
                }}>Editar</button>

                <button
                className="cancel-btn"
                onClick={() => deleteTask(task.id)}>Eliminar</button>
            </div>
            </>
        )}
        </div>
    );
};

export default TaskItem;
