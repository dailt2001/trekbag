import { create } from "zustand";
import { initialItem } from "../lib/constant";
import { persist } from "zustand/middleware";

export const useItemStore = create(
    persist(
        (set) => ({
            items: initialItem,
            addItem: (newItemText) => {
                const newItem = {
                    id: new Date().getTime(),
                    name: newItemText,
                    packed: false,
                };
                set((state) => {
                    return { items: [...state.items, newItem] };
                });
            },
            deleteItem: (id) => {
                set((state) => {
                    const newItems = state.items.filter(
                        (item) => item.id !== id
                    );
                    return { items: newItems };
                });
            },
            toggleItem: (id) => {
                set((state) => {
                    const newItems = state.items.map((item) => {
                        if (item.id === id) {
                            return { ...item, packed: !item.packed };
                        }
                        return item
                    });
                    return { items: newItems };
                });
            },
            removeAllItems: () => {
                set(() => ({ items: [] }));
            },
            resetToInitial: () => {
                set(() => ({ items: initialItem }));
            },
            markAllAsComplete: () => {
                set((state) => {
                    const newItems = state.items.map((item) => {
                        return { ...item, packed: true };
                    });
                    return { items: newItems };
                });
            },
            markAllAsIncomplete: () => {
                set((state) => {
                    const newItems = state.items.map((item) => {
                        return { ...item, packed: false };
                    });
                    return { items: newItems };
                });
            },
        }),
        {
            name: "items",
        }
    )
);

