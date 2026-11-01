import type { Task } from "../../types/Task";
import { useTaskStore } from "../../store/useTaskStore";
import { useState } from "react";
import DateButton from "../../ui/DateButton";
import { TextField, Button, Chip, Stack } from "@mui/material";

import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import LabelImportantOutlineIcon from "@mui/icons-material/LabelImportantOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";

type TaskItemProps = {
  task: Task;
  onOpenPanel: (panel: string) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onOpenPanel }) => {
  const { deleteTask, toggleCompleted, startEditing, cancelEditing, togglePriority, updateTask } = useTaskStore();

  const [isInlineEditing, setIsInlineEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [date, setDate] = useState<string | undefined>(task.date);

  const handleSaveInline = () => {
    if (!title.trim()) return; // validación primero
    updateTask({ ...task, title, date });
    setIsInlineEditing(false);
  };

  const buttonStyle = {
    color: task.priority ? "var(--onPrimary)" : "var(--primary)",
    bgcolor: task.priority ? "var(--primary)" : "transparent",
    borderColor: "none",
    "&:hover": {
      bgcolor: task.priority ? "var(--primaryHover)" : "var(--primary)",
      color: task.priority ? "var(--onPrimary)" : "var(--text)",
    },
  };

  return (
    <div className={`task ${task.completed ? "completed" : ""} ${task.priority ? "important" : ""}`}>
      {isInlineEditing ? (
        <div className="inline-edit">
          <TextField
            id="task-title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            sx={{
              mr: 2,
              bgcolor: "var(--surface-2)",
              borderRadius: "6px",
              "& input": { color: "var(--text)" },
            }}
          />
          <DateButton value={date} onChange={setDate} />
          <Stack direction="row" spacing={1} className="actions">
            <Button variant="contained" color="success" onClick={handleSaveInline}>
              Guardar
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                cancelEditing();
                setIsInlineEditing(false);
              }}
            >
              Cancelar
            </Button>
          </Stack>
        </div>
      ) : (
        <>
          <div className="task-actions">
            <Button
              variant={task.completed ? "contained" : "outlined"}
              onClick={() => toggleCompleted(task.id)}
              aria-label={task.completed ? "Marcar como pendiente" : "Marcar como completada"}
              sx={buttonStyle}
            >
              {task.completed ? <DoneIcon /> : <TaskAltIcon />}
            </Button>

            <Button
              variant={task.priority ? "contained" : "outlined"}
              onClick={() => togglePriority(task.id)}
              aria-label={task.priority ? "Quitar importancia" : "Marcar importante"}
              sx={buttonStyle}
            >
              {task.priority ? <LabelImportantIcon /> : <LabelImportantOutlineIcon />}
            </Button>

            <Button
              variant="outlined"
              aria-label="Editar tarea"
              onClick={() => {
                startEditing(task);
                onOpenPanel("editarTarea");
              }}
              sx={buttonStyle}
            >
              <EditIcon />
            </Button>

            <Button
              variant="outlined"
              onClick={() => deleteTask(task.id)}
              aria-label="Eliminar tarea"
              sx={buttonStyle}
            >
              <DeleteIcon />
            </Button>
          </div>

          <div className="task-content">
            <span className="task-title" onClick={() => setIsInlineEditing(true)}>
              {task.title}
            </span>
            {task.date && <span className="date">{task.date}</span>}
            <div className="task-tags">
              {task.priority && <Chip label="Importante" color="warning" variant="outlined" />}
              {task.list && <Chip label={task.list} color="primary" variant="outlined" />}
              {task.completed && <Chip label="Completada" color="success" variant="outlined" />}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
