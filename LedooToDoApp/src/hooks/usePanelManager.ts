import { useState } from "react";

export const usePanelManager = () => {
    const [openPanel, setOpenPanel] = useState<string | null>(null);

    const open = (panel: string) => setOpenPanel(panel);
    const close = () => setOpenPanel(null);
    const toggle = (panel: string) =>
        setOpenPanel((prev) => (prev === panel ? null : panel));

    return {
        openPanel,
        open,
        close,
        toggle,
    };
};
