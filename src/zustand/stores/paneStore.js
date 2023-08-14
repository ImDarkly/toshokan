import { create } from 'zustand'

export const usePaneStore = create((set) => ({
  expanded: false,
  toggleExpand: () => set((state) => ({ expanded: !state.expanded })),
}))
