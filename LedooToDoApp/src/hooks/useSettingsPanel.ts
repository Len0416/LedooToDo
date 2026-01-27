import { useState } from "react";

export const useSettingsPanel = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openPanel = () => setIsOpen(true);
    const closePanel = () => setIsOpen(false);
    const togglePanel = () => setIsOpen((prev) => !prev);

    return { isOpen, openPanel, closePanel, togglePanel };
};

export const useTheme = () => {
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }
    return { theme, toggleTheme };
}

export const useWallpaper = () => {
    const [wallpaper, setWallpaper] = useState<string>(""); 
    const changeWallpaper = (newWallpaper: string) => {
        setWallpaper(newWallpaper);
    }
    return { wallpaper, changeWallpaper };
}   