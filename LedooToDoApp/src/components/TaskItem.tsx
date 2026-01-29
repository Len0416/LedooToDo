import type { Task } from "../types/Task";
import { useTaskStore } from "../store/useTaskStore";
import { usePanelManager } from "../hooks/usePanelManager";
import "../assets/styles/components/tasks.css";

type TaskItemProps = {
    task: Task;
};

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    const { deleteTask, toggleCompleted, startEditing } = useTaskStore();
    const { open } = usePanelManager(); // 👈 usamos open para abrir paneles

    return (
        <div className={`task ${task.completed ? "completed" : ""}`}>
        <span className="task-title">{task.title}</span>
        {task.date && <span>{task.date}</span>}
        <div className="task-actions">
            <label>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompleted(task.id)}
            />
            </label>
            <button
            className="edit-btn"
            onClick={() => {
                startEditing(task);   // 👈 guardamos la tarea en el store
                open("editarTarea"); // 👈 abrimos el panel de edición
            }}
            >
            Editar
            </button>
            <button className="cancel-btn" onClick={() => deleteTask(task.id)}>
            Eliminar
            </button>
        </div>
        </div>
    );
};

export default TaskItem;
