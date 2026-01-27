import { useState } from "react";

export const useSettingsPanel = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openPanel = () => setIsOpen(true);
    const closePanel = () => setIsOpen(false);
    const togglePanel = () => setIsOpen((prev) => !prev);

    return { isOpen, openPanel, closePanel, togglePanel };
};
