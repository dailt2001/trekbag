import { useItemStore } from "../../store/itemsStore";
import Button from "./Button";
import { useRef, useState } from "react";
export default function AddItemForm() {
    const onAddItem = useItemStore(state => state.addItem)
    const inputRef = useRef();
    const [itemText, setItemText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!itemText) {
            alert("Item can't be empty!");
            inputRef.current.focus();
            return;
        }
        onAddItem(itemText);
        setItemText("");
        inputRef.current.focus();
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add an item</h2>
            <input
                ref={inputRef}
                type="text"
                placeholder="toothbrush..."
                value={itemText}
                onChange={(e) => {
                    setItemText(e.target.value);
                }}
            />
            <Button>Add item to list</Button>
        </form>
    );
}
