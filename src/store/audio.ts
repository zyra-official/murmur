import { IAudio } from "@/models/audios";
import { create } from "zustand";

interface AudioState {
  audios: IAudio[];
  current: number;
  playNext: () => void;
  playPrevious: () => void;
  fetchAudios: () => void;
}

export const useAudio = create<AudioState>((set) => ({
  audios: [],
  current: 0,
  playNext: () =>
    set((state) => {
      const length = state.audios.length;
      const nextIndex = state.current + 1 >= length ? 0 : state.current + 1;
      return { current: nextIndex };
    }),
  playPrevious: () =>
    set((state) => {
      const lenght = state.audios.length;
      const previousIndex =
        state.current - 1 < 0 ? state.current - 1 : lenght - 1;
      return { current: previousIndex };
    }),
  fetchAudios: async () => {
    try {
      // Replace with your actual API endpoint or data fetching method
      const response = await fetch("/api/audios");
      const data = await response.json();
      set({ audios: data }); // Populate audios state
    } catch (error) {
      console.error("Error fetching audios:", error);
    }
  },
}));
