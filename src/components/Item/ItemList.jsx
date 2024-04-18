import EmptyView from "../../EmptyView";
import Item from "./Item";
import Select from "react-select";
import { useMemo, useState } from "react";
import { useItemStore } from "../../store/itemsStore";

const sortingOptions = [
    {
        label: "Sort by default",
        value: "default",
    },
    {
        label: "Sort by packed",
        value: "packed",
    },
    {
        label: "Sort by unpacked",
        value: "unpacked",
    },
];

export default function ItemList() {
    const items = useItemStore((state) => state.items);

    const [sortBy, setSortBy] = useState("default");
    const sortedItems = useMemo(
        () =>
            [...items].sort((a, b) => {
                if (sortBy === "packed") return b.packed - a.packed;
                if (sortBy === "unpacked") return a.packed - b.packed;
                return;
            }),
        [items, sortBy]
    );
    return (
        <ul className="item-list">
            {items.length === 0 && <EmptyView />}
            {items.length > 0 && (
                <section className="sorting">
                    <Select
                        options={sortingOptions}
                        defaultValue={sortingOptions[0]}
                        onChange={(option) => setSortBy(option.value)}
                    />
                </section>
            )}
            {sortedItems.map((item) => {
                return (
                    <Item
                        key={item.id}
                        item={item}
                    />
                );
            })}
        </ul>
    );
}
