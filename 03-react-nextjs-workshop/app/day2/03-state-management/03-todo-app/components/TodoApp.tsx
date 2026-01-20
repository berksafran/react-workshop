"use client";

import { useTodo } from "../contexts/TodoContext";
import styles from "./todo.module.scss";
import { AddTodo } from "./AddTodo";
import { FilterBar } from "./FilterBar";
import { TodoList } from "./TodoList";

// Main App Component
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
