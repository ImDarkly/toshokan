import { create } from "zustand"

const store = (set)=> ({
    panes: [{title: "Witcher", }]
})

export const useStore = create(store);