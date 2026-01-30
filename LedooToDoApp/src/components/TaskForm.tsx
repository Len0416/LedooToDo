import { useState } from "react";
import type { Task } from "../types/Task";
import { useTaskStore } from "../store/useTaskStore";
import "../assets/styles/components/tasks.css";

const TaskForm: React.FC = () => {
    const { addTask } = useTaskStore();
    const [title, setTitle] = useState("");
    const [date, setDate] = useState<string | undefined>(undefined);
    const [important, setImportant] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        const task: Task = {
        id: crypto.randomUUID(),
        title,
        date,
        important,
        completed: false, // siempre nueva tarea pendiente
        };

        addTask(task);

        // limpiar formulario
        setTitle("");
        setDate(undefined);
        setImportant(false);
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
        <input
            type="text"
            className="task-input"
            placeholder="Nueva tarea…"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
        />
        <input
            type="datetime-local"
            className="task-date"
            value={date || ""}
            onChange={(e) => setDate(e.target.value)}
        />
        <label className="task-important">
            <input
            type="checkbox"
            checked={important}
            onChange={(e) => setImportant(e.target.checked)}
            />{" "}
            Importante
        </label>
        <button className="btn" type="submit">Agregar</button>
        </form>
    );
};

export default TaskForm;
