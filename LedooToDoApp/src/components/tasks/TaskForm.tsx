import { useState } from "react";
import type { Task } from "../../types/Task";
import { useTaskStore } from "../../store/useTaskStore";
import DateButton from "../../ui/DateButton";

import MarkedIcon from "../../assets/images/icons/TablerFlag.svg";
import ListIcon from "../../assets/images/icons/BxCategory.svg";

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

    console.log("📌 Nueva tarea enviada:", task);
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

      <div className="divider" role="separator"></div>

      <div className="task-options">
        <div className="options-buttons">
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
            className={`btn ${important ? "marked" : ""}`}
            onClick={() => setImportant(!important)}
          >
            <img src={MarkedIcon} alt="Icono de marcado" className="icon" />
            Prioridad
          </button>
          <button type="button" className="btn">
            <img src={ListIcon} alt="Icono de lista" className="icon" />
            Listas
          </button>
        </div>
        {/* Botón de envío */}
        <button className="add-btn" type="submit">
          Guardar Tarea
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
