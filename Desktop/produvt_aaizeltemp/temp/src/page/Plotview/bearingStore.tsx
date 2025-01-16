import { create } from "zustand";

interface BearingState {
  bearing: number | null;
  setBearing: (bearing: number | null) => void;
}

const useBearingStore = create<BearingState>((set) => ({
  bearing: null,
  setBearing: (bearing) => set({ bearing }),
}));

export default useBearingStore;
