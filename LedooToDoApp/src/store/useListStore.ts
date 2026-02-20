import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Task } from "../types/Task";
import type { List } from "../types/List";

type ListStore = {
  lists: List[];
  addList: (name: string, theme?: string, notes?: string) => void;
  removeList: (id: string) => void;
  editList: (id: string, name: string, notes?: string) => void;
  updateList: (updatedList: List) => void;

  updateTheme: (id: string, theme: string) => void;
  updateNotes: (id: string, notes: string) => void;

  addTask: (listId: string, task: Task) => void;
  removeTask: (listId: string, taskId: string) => void;
  updateTask: (listId: string, taskId: string, updates: Partial<Task>) => void;
};

export const useListStore = create<ListStore>()(
  persist(
    (set) => ({
      lists: [],
      addList: (name, theme?, notes?) =>
        set((state) => ({
          lists: [
            ...state.lists,
            { id: crypto.randomUUID(), name, notes: notes || "", theme, tasks: [] },
          ],
        })),
      removeList: (id) =>
        set((state) => ({
          lists: state.lists.filter((list) => list.id !== id),
        })),
      editList: (id: string, name: string, notes?: string) =>
        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === id ? { ...list, name, notes: notes || "" } : list
          ),
        })),
      updateList: (updatedList: List) =>
        set((state) => ({
            lists: state.lists.map(list =>
            list.id === updatedList.id ? updatedList : list
            ),
            editingList: null
        })),
      addTask: (listId, task) =>
        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === listId
              ? { ...list, tasks: [...list.tasks, task] }
              : list
          ),
        })),
      removeTask: (listId, taskId) =>
        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === listId
              ? {
                  ...list,
                  tasks: list.tasks.filter((t) => t.id !== taskId),
                }
              : list
          ),
        })),
      updateTask: (listId, taskId, updates) =>
        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === listId
              ? {
                  ...list,
                  tasks: list.tasks.map((t) =>
                    t.id === taskId ? { ...t, ...updates } : t
                  ),
                }
              : list
          ),
        })),
      updateTheme: (id, theme) =>
        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === id ? { ...list, theme } : list
          ),
        })),

      updateNotes: (id, notes) =>
        set((state) => ({
          lists: state.lists.map((list) =>
            list.id === id ? { ...list, notes } : list
          ),
        })),
    }),
    {
      name: "ledoo-lists", // clave en localStorage
    }
  )
);
