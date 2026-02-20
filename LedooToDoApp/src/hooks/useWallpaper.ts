import { useState } from "react";

export const useWallpaper = () => {
    const [wallpaper, setWallpaper] = useState<string>("");
    const changeWallpaper = (newWallpaper: string) => {
        setWallpaper(newWallpaper);
    }
    return { wallpaper, changeWallpaper };
}