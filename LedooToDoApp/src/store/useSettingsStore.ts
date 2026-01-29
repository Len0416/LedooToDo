// src/store/useSettingsStore.ts
import { create } from "zustand";

type SettingsState = {
    theme: string;
    wallpaper: string;
    setTheme: (theme: string) => void;
    setWallpaper: (url: string) => void;
};

export const useSettingsStore = create<SettingsState>((set) => ({
    theme: "light",
    wallpaper: "",
    setTheme: (theme) => set({ theme }),
    setWallpaper: (url) => set({ wallpaper: url }), // 👈 aquí está la función
}));
