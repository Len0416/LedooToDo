import { useState } from "react";
import type { Task } from "../types/Task";
import { useTaskStore } from "../store/useTaskStore";
import "../assets/styles/components/tasks.css";
import DateButton from "../ui/DateButton";

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
        completed: false,
        };

        console.log("📌 Nueva tarea enviada:", task); // 👈 log para ver el resultado final
        addTask(task);

        setTitle("");
        setDate(undefined);
        setImportant(false);
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
        {/* Campo de texto */}
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
        <div className="task-options">
        {/* Selector de fecha con popup */}
        <DateButton
            value={date}
            onChange={(newDateString) => {
                console.log("✅ TaskForm recibe:", newDateString);
                setDate(newDateString);
            }}
        />
        {/* Botón de importancia */}
        <button
            type="button"
            className={`important-btn ${important ? "marked" : ""}`}
            onClick={() => setImportant(!important)}
        >
            {important ? "Desmarcar" : "Importante"}
        </button>
        {/* Botón de envío */}
        <button className="btn" type="submit">Agregar</button>
        </div>
        </form>
    );
};

export default TaskForm;
