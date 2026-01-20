"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";

// 1. Types
export interface Todo {
    id: string;
    text: string;
    completed: boolean;
    createdAt: number;
}

export type FilterType = "all" | "active" | "completed";

interface TodoState {
    todos: Todo[];
    filter: FilterType;
}

// 2. Actions
type TodoAction =
    | { type: "ADD_TODO"; payload: string }
    | { type: "TOGGLE_TODO"; payload: string } // id
    | { type: "DELETE_TODO"; payload: string } // id
    | { type: "SET_FILTER"; payload: FilterType }
    | { type: "CLEAR_COMPLETED" };

// 3. Reducer
function todoReducer(state: TodoState, action: TodoAction): TodoState {
    switch (action.type) {
        case "ADD_TODO":
            const newTodo: Todo = {
                id: crypto.randomUUID(),
                text: action.payload,
                completed: false,
                createdAt: Date.now(),
            };
            return { ...state, todos: [newTodo, ...state.todos] };

        case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            };

        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };

        case "SET_FILTER":
            return { ...state, filter: action.payload };

        case "CLEAR_COMPLETED":
            return {
                ...state,
                todos: state.todos.filter((todo) => !todo.completed),
            };

        default:
            return state;
    }
}

// 4. Initial State & Context
const initialState: TodoState = {
    todos: [
        { id: "1", text: "React Workshop'u tamamla", completed: false, createdAt: Date.now() },
        { id: "2", text: "Context API öğren", completed: true, createdAt: Date.now() - 1000 },
    ],
    filter: "all",
};

const TodoContext = createContext<{
    state: TodoState;
    dispatch: React.Dispatch<TodoAction>;
} | undefined>(undefined);

// 5. Provider & Hook
export function TodoProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
}

export function useTodo() {
    const context = useContext(TodoContext);
    if (!context) throw new Error("useTodo must be used within TodoProvider");
    return context;
}
