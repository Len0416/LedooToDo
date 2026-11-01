import TaskItem from "./TaskItem";
import { useTaskStore } from "../../store/useTaskStore";
import { Typography, Box } from "@mui/material";
import "../../assets/styles/components/tasks.css";

const TaskList: React.FC<{ onOpenPanel: (panel: string) => void }> = ({ onOpenPanel }) => {
    const { tasks } = useTaskStore();
    const priorityTasks = tasks.filter((t) => t.priority && !t.completed);
    const normalTasks = tasks.filter((t) => !t.completed && !t.priority);
    const completedTasks = tasks.filter((t) => t.completed);
    return (
    <Box className="task-list" sx={{ mt: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* Sección de tareas prioritarias */}
        <Typography variant="h2" sx={{ mb: 2, color: "var(--primary)", fontSize: "1.2rem", fontWeight: 600 }}>
            Tareas Prioritarias
        </Typography>
        {priorityTasks.length === 0 ? (
        <Typography variant="body2">
            No hay tareas prioritarias
        </Typography>
        ) : (
        priorityTasks.map((task) => (
            <TaskItem key={task.id} task={task} onOpenPanel={onOpenPanel} />
        ))
        )}

        {/* Sección de tareas normales */}
        <Typography variant="h2" sx={{ mt: 4, mb: 2, opacity: 0.8, fontSize: "1.2rem", fontWeight: 600 }}>
        Todas las tareas
        </Typography>
        {normalTasks.length === 0 ? (
        <Typography variant="body2">
            No hay tareas pendientes
        </Typography>
        ) : (
        normalTasks.map((task) => (
            <TaskItem key={task.id} task={task} onOpenPanel={onOpenPanel} />
        ))
        )}

        {/* Sección de recién completadas */}
        <Typography variant="h2" sx={{ mt: 4, mb: 2, opacity: 0.8, fontSize: "1.2rem", fontWeight: 600}}>
        Recién Completadas
        </Typography>
        {completedTasks.length === 0 ? (
        <Typography variant="body2">
            No hay tareas completadas recientemente
        </Typography>
        ) : (
        completedTasks.map((task) => (
            <TaskItem key={task.id} task={task} onOpenPanel={onOpenPanel} />
        ))
        )}
    </Box>
    );

};

export default TaskList;
