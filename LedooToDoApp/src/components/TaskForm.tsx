import "../assets/styles/components/tasks.css";
import { useState } from "react";

const TaskForm: React.FC = () => {
    const [task, setTask] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (task.trim()) {
        console.log("Nueva tarea:", task);
        setTask("");
        }
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
        <input
            type="text"
            className="task-input"
            placeholder="Nueva tarea…"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
        />
        <input type="datetime-local" className="task-date" />
        <label className="task-important">
            <input type="checkbox" /> Importante
        </label>
        <button type="submit">Agregar</button>
        </form>
    );
};

export default TaskForm;
