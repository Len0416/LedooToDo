// src/hooks/usePanelManager.ts
import { useCallback } from "react";
import { usePanelStore } from "../store/usePanelStore.ts";

export const usePanelManager = () => {
    const openPanel = usePanelStore((s) => s.openPanel);
    const open = usePanelStore((s) => s.open);
    const close = usePanelStore((s) => s.close);
    const toggle = usePanelStore((s) => s.toggle);

    /* wrapper opcional para añadir logs o lógica adicional */
    const openWithLog = useCallback(
        (panelName: string) => {
        console.log("[usePanelManager] open called with", panelName);
        open(panelName);
        },
        [open]
    );

    return { openPanel, open: openWithLog, close, toggle };
};
