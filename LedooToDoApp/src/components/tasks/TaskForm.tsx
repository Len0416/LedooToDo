import { useState } from "react";
import type { Task } from "../../types/Task";
import { useTaskStore } from "../../store/useTaskStore";
import DateButton from "../../ui/DateButton";
import ListButton from "../../ui/ListButton";
import ListPages from "../../ui/ListsPages";

import MarkedIcon from "../../assets/images/icons/TablerFlag.svg";
import ListIcon from "../../assets/images/icons/BxCategory.svg";

import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
} from "@mui/material";

const TaskForm: React.FC = () => {
  const { addTask } = useTaskStore();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState<string | undefined>(undefined);
  const [priority, setPriority] = useState(false);
  const [selectedList, setSelectedList] = useState<string | null>(null);
  const [showLists, setShowLists] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      priority,
      completed: false,
      date: date,
      list: selectedList || undefined,
    };

    addTask(newTask);
    console.log("Tarea creada:", newTask);

    // Reset
    setTitle("");
    setDate(undefined);
    setPriority(false);
    console.log("Prioridad actual:", priority)
    setSelectedList(null);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      {/* Campo de texto */}
      <TextField
        id="task-title"
        placeholder="¿Qué necesitas hacer hoy?"
        variant="standard"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        sx={{
          "& .MuiInputBase-root": {
            borderRadius: "10px",
            px: 2,
            py: 1,
            color: "var(--text)",
          },
          "& input::placeholder": {
            color: "var(--muted)",
            opacity: 1,
          },
        }}
      />

      {/* Barra de opciones */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        className="task-options"
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          }
        }}
      >
        <Stack direction="row" spacing={2} className="options-buttons">
          {/* Fecha */}
          <DateButton value={date} onChange={(newDateString) => setDate(newDateString)} />

          {/* Prioridad */}
          <Button
            variant={priority ? "contained" : "text"}
            onClick={() => setPriority(!priority)}
            startIcon={<img src={MarkedIcon} alt="Icono de marcado" className="icon" />}
            sx={{
              bgcolor: "#11121600",
              color: "var(--text)",
              "&:hover": {
                bgcolor: "#0E0E0Fdd",
                color: "var(--primary)",
              },
            }}
          >
            Prioridad
          </Button>
          {/* Lista */}
          <ListButton
            title={selectedList ?? "Listas"}
            icon={ListIcon}
            active={!!selectedList}
            onClick={() => setShowLists(true)}
          />
        </Stack>
        {/* Guardar */}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            color: "#000000",
            background: "var(--primary)",
            borderRadius: "12px",
            px: 3,
            fontWeight: 800,
            "&:hover": {
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              opacity: 0.9,
            },
          }}
        >
          Guardar Tarea
        </Button>
      </Stack>

      {/* Modal de selección de listas */}
      <Dialog open={showLists} onClose={() => setShowLists(false)}>
        <DialogTitle>Seleccionar lista</DialogTitle>
        <DialogContent>
          <ListPages
            listIcon={ListIcon}
            onClose={() => setShowLists(false)}
            onSelect={(list) => {
              setSelectedList(list);
              setShowLists(false);
            }}
          />
        </DialogContent>
      </Dialog>
    </form>
  );
};

export default TaskForm;
