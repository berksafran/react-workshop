"use client";

import { useState } from "react";
import { useTodo, FilterType } from "../contexts/TodoContext";
import styles from "./todo.module.scss";

// 1. Add Todo Component
function AddTodo() {
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

// 2. Filter Component
function FilterBar() {
    const { state, dispatch } = useTodo();

    const filters: { key: FilterType; label: string }[] = [
        { key: "all", label: "Tümü" },
        { key: "active", label: "Aktif" },
        { key: "completed", label: "Tamamlanan" },
    ];

    return (
        <div className={styles.filterBar}>
            {filters.map((f) => (
                <button
                    key={f.key}
                    className={state.filter === f.key ? styles.active : ""}
                    onClick={() => dispatch({ type: "SET_FILTER", payload: f.key })}
                >
                    {f.label}
                </button>
            ))}
        </div>
    );
}

// 3. Todo List & Item Component
function TodoList() {
    const { state, dispatch } = useTodo();

    // Filter logic
    const filteredTodos = state.todos.filter((todo) => {
        if (state.filter === "active") return !todo.completed;
        if (state.filter === "completed") return todo.completed;
        return true;
    });

    if (filteredTodos.length === 0) {
        return <div style={{ padding: "2rem", textAlign: "center", color: "#6b7280" }}>Liste boş 🎉</div>;
    }

    return (
        <ul className={styles.todoList}>
            {filteredTodos.map((todo) => (
                <li key={todo.id} className={`${styles.todoItem} ${todo.completed ? styles.completed : ""}`}>
                    <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={todo.completed}
                        onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
                    />
                    <span className={styles.text}>{todo.text}</span>
                    <button
                        className={styles.deleteButton}
                        onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
                        title="Sil"
                    >
                        🗑️
                    </button>
                </li>
            ))}
        </ul>
    );
}

// 4. Main App Component
export function TodoApp() {
    const { state, dispatch } = useTodo();
    const activeCount = state.todos.filter(t => !t.completed).length;

    return (
        <div className={styles.todoContainer}>
            <div className={styles.header}>
                <h1>Yapılacaklar</h1>
                <p>{new Date().toLocaleDateString("tr-TR", { weekday: 'long', day: 'numeric', month: 'long' })}</p>
            </div>

            <AddTodo />
            <FilterBar />
            <TodoList />

            <div className={styles.footer}>
                <span>{activeCount} görev kaldı</span>
                {state.todos.some(t => t.completed) && (
                    <button
                        className={styles.clearButton}
                        onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
                    >
                        Tamamlananları Temizle
                    </button>
                )}
            </div>
        </div>
    );
}
