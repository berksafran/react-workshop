"use client";

import { useTodo } from "../contexts/TodoContext";
import styles from "./todo.module.scss";

export function TodoList() {
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
