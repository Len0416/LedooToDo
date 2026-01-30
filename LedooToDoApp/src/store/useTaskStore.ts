import { create } from "zustand";
import type { Task } from "../types/Task";

type TaskStore = {
    tasks: Task[];
    editingTask: Task | null;
    addTask: (task: Task) => void;
    deleteTask: (id: string) => void;
    toggleCompleted: (id: string) => void;
    toggleImportant: (id: string) => void;
    startEditing: (task: Task) => void;
    setEditingTask: (task: Task) => void;
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
    toggleImportant: (id: string) =>
        set((state) => ({
            tasks: state.tasks.map(task =>
            task.id === id ? { ...task, important: !task.important } : task
            ),
            editingTask: state.editingTask && state.editingTask.id === id
            ? { ...state.editingTask, important: !state.editingTask.important }
            : state.editingTask
        })),

    startEditing: (task) =>
        set({ editingTask: task }),
    setEditingTask: (task: Task) => set({ editingTask: task }),
    updateTask: (updatedTask: Task) =>
        set((state) => ({
            tasks: state.tasks.map(task =>
            task.id === updatedTask.id ? updatedTask : task
            ),
            editingTask: null
        })),
    cancelEditing: () =>
        set({ editingTask: null }),
}));