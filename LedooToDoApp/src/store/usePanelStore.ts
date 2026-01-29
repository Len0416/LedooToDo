import { create } from "zustand";

type PanelState = {
    openPanel: string | null;
    open: (panel: string) => void;
    close: () => void;
    toggle: (panel: string) => void;
};

export const usePanelStore = create<PanelState>((set) => ({
    openPanel: null,
    open: (panel) => set({ openPanel: panel }),
    close: () => set({ openPanel: null }),
    toggle: (panel) =>
        set((state) => ({ openPanel: state.openPanel === panel ? null : panel })),
}));
