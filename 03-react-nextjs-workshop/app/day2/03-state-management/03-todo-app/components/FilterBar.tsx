"use client";

import { useTodo, FilterType } from "../contexts/TodoContext";
import styles from "./todo.module.scss";

export function FilterBar() {
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
