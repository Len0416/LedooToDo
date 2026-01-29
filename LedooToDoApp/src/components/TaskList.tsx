import TaskItem from "./TaskItem";
import { useTaskStore } from "../store/useTaskStore";
import "../assets/styles/components/tasks.css";

const TaskList: React.FC = () => {
    const { tasks } = useTaskStore();
    return (
        <div className="task-list">
        {tasks.length === 0 ? (
            <p>No hay tareas pendientes</p>
        ) : (
            tasks.map((task, index) => (
            <TaskItem
                key={index}
                task={task}
            />
            ))
        )}
        </div>
    );
    };

export default TaskList;
