import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SearchHistoryItem } from "../api/types";

interface SearchHistoryState {
  history: SearchHistoryItem[];
  addSearch: (item: Omit<SearchHistoryItem, "searchedAt">) => void;
  clearHistory: () => void;
}

export const useSearchHistory = create<SearchHistoryState>()(
  persist(
    (set) => ({
      history: [],
      addSearch: (item) =>
        set((state) => {
          const filtered = state.history.filter(
            (h) => h.username !== item.username
          );
          return {
            history: [
              { ...item, searchedAt: new Date().toISOString() },
              ...filtered,
            ].slice(0, 5),
          };
        }),
      clearHistory: () => set({ history: [] }),
    }),
    { name: "devfinder-search-history" }
  )
);
