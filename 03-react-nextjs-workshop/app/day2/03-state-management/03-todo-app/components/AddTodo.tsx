"use client";

import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import styles from "./todo.module.scss";

export function AddTodo() {
    const [text, setText] = useState("");
    const { dispatch } = useTodo();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;

        dispatch({ type: "ADD_TODO", payload: text });
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className={styles.inputGroup}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Bugün ne yapacaksın?"
            />
            <button type="submit" disabled={!text.trim()}>Ekle</button>
        </form>
    );
}
