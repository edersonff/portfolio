"use client";

import { useSSRStore } from "@/hooks/ssr";
import { create } from "zustand";
import { persist, StateStorage } from "zustand/middleware";

export type DarkModeStore = {
  darkMode: boolean;
  switchDarkMode: () => void;
};

const darkModePersist = persist<DarkModeStore>(
  (set, get) => ({
    darkMode: false,
    switchDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  }),
  {
    name: "dark-mode",
    getStorage: () => localStorage as StateStorage,
  }
);

export const useDarkModeStore = create(darkModePersist);

export const useDarkModeSSRStore = (state: (state: DarkModeStore) => any) =>
  useSSRStore(useDarkModeStore(state));
