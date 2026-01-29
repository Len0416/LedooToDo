import type { Task } from "../types/Task";
import { useTaskStore } from "../store/useTaskStore";
import "../assets/styles/components/tasks.css";

type TaskItemProps = {
    task: Task;
    onOpenPanel: (panel: string) => void;
    };

    const TaskItem: React.FC<TaskItemProps> = ({ task, onOpenPanel }) => {
    const { deleteTask, toggleCompleted, startEditing } = useTaskStore();

    return (
        <div className={`task ${task.completed ? "completed" : ""}`}>
        <span className="task-title">{task.title}</span>
        {task.date && <span>{task.date}</span>}
        <div className="task-actions">
            <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCompleted(task.id)}
            />
            <button
            className="edit-btn"
            onClick={() => {
                startEditing(task);          // guarda la tarea en el store
                onOpenPanel("editarTarea");  // abre el panel global
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
