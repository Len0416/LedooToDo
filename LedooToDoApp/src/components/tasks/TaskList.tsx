import TaskItem from "./TaskItem";
import { useTaskStore } from "../../store/useTaskStore";
import "../../assets/styles/components/tasks.css";

const TaskList: React.FC<{ onOpenPanel: (panel: string) => void }> = ({ onOpenPanel }) => {
    const { tasks } = useTaskStore();
    return (
        <div className="task-list">
        {tasks.length === 0 ? (
            <p>No hay tareas pendientes</p>
        ) : (
            tasks.map(task => <TaskItem key={task.id} task={task} onOpenPanel={onOpenPanel} onClose={() => {}} />)
        )}
        </div>
    );
    };

export default TaskList;
