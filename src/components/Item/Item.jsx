import { useItemStore } from "../../store/itemsStore";

export default function Item({ item }) {
    const onDeleteItem = useItemStore((state) => state.deleteItem);
    const onToggleItem = useItemStore((state) => state.toggleItem);
    return (
        <li className="item">
            <label>
                <input onChange={() => onToggleItem(item.id)} checked={item.packed} type="checkbox" />
                <span>{item.name}</span>
            </label>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}
