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