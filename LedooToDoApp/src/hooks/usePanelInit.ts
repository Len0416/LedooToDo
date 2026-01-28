import { useState } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState<"light" | "dark" | "red" | "blue" | "green">("light"); 

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    const changeTheme = (newTheme: "light" | "dark" | "red" | "blue" | "green") => {
        setTheme(newTheme);
    }

    return { theme, toggleTheme, changeTheme };
}

export const useWallpaper = () => {
    const [wallpaper, setWallpaper] = useState<string>("");
    const changeWallpaper = (newWallpaper: string) => {
        setWallpaper(newWallpaper);
    }
    return { wallpaper, changeWallpaper };
}