import { create } from "zustand";
import type { Task } from "../types/Task";

type TaskStore = {
    tasks: Task[];
    editingTask: Task | null;
    addTask: (task: Task) => void;
    deleteTask: (id: string) => void;
    toggleCompleted: (id: string) => void;
    startEditing: (task: Task) => void;
    updateTask: (updatedTask: Task) => void;
    cancelEditing: () => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    editingTask: null,
    addTask: (task) =>
        set((state) => ({ tasks: [...state.tasks, task] })),
    deleteTask: (id) =>
        set((state) => ({ tasks: state.tasks.filter(task => task.id !== id) })),
    toggleCompleted: (id) =>
        set((state) => ({
            tasks: state.tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        })),
    startEditing: (task) =>
        set({ editingTask: task }),
    updateTask: (updatedTask) =>
        set((state) => ({
            tasks: state.tasks.map(task =>
                task.id === updatedTask.id ? updatedTask : task
            ),
            editingTask: null
        })),
    cancelEditing: () =>
        set({ editingTask: null }),
}));