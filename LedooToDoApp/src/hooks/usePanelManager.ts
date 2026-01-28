import { useState } from "react";

export const usePanelManager = () => {
    // Estado para saber qué panel está abierto
    const [openPanel, setOpenPanel] = useState<string | null>(null);

    const open = (panel: string) => setOpenPanel(panel);
    const close = () => setOpenPanel(null);
    const toggle = (panel: string) =>
        setOpenPanel((prev) => (prev === panel ? null : panel));

    // Estado para tema
    const [theme, setTheme] = useState<"light" | "dark" | "red" | "blue" | "green">("light");
    const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
    const changeTheme = (newTheme: "light" | "dark" | "red" | "blue" | "green") => setTheme(newTheme);

    // Estado para wallpaper
    const [wallpaper, setWallpaper] = useState<string>("");
    const changeWallpaper = (newWallpaper: string) => setWallpaper(newWallpaper);

    return {
        openPanel,
        open,
        close,
        toggle,
        theme,
        toggleTheme,
        changeTheme,
        wallpaper,
        changeWallpaper,
    };
};
