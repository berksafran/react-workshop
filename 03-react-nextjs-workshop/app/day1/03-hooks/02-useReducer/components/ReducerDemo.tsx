'use client';

import { useReducer } from 'react';
import styles from '../../../01-react-core/01-declarative-vs-imperative/page.module.scss';

// Reducer için types
type CounterState = {
    count: number;
    history: number[];
};

type CounterAction =
    | { type: 'INCREMENT' }
    | { type: 'DECREMENT' }
    | { type: 'RESET' }
    | { type: 'SET'; payload: number };

// Reducer function
function counterReducer(state: CounterState, action: CounterAction): CounterState {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
                history: [...state.history, state.count + 1]
            };
        case 'DECREMENT':
            return {
                count: state.count - 1,
                history: [...state.history, state.count - 1]
            };
        case 'RESET':
            return {
                count: 0,
                history: [0]
            };
        case 'SET':
            return {
                count: action.payload,
                history: [...state.history, action.payload]
            };
        default:
            return state;
    }
}

// useReducer Demo
export function ReducerBasicDemo() {
    const [state, dispatch] = useReducer(counterReducer, {
        count: 0,
        history: [0]
    });

    return (
        <div className={styles.demo}>
            <h3>useReducer Temel Kullanım</h3>
            <p>Count: {state.count}</p>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                <button onClick={() => dispatch({ type: 'INCREMENT' })} className={styles.button}>
                    +1
                </button>
                <button onClick={() => dispatch({ type: 'DECREMENT' })} className={styles.button}>
                    -1
                </button>
                <button onClick={() => dispatch({ type: 'RESET' })} className={styles.button}>
                    Sıfırla
                </button>
                <button onClick={() => dispatch({ type: 'SET', payload: 10 })} className={styles.button}>
                    10 Yap
                </button>
            </div>

            <div style={{ marginTop: '1rem' }}>
                <p>İşlem Geçmişi: {state.history.join(' → ')}</p>
            </div>
        </div>
    );
}

// Todo List with useReducer
type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

type TodoState = {
    todos: Todo[];
    filter: 'all' | 'active' | 'completed';
};

type TodoAction =
    | { type: 'ADD_TODO'; payload: string }
    | { type: 'TOGGLE_TODO'; payload: number }
    | { type: 'DELETE_TODO'; payload: number }
    | { type: 'SET_FILTER'; payload: 'all' | 'active' | 'completed' };

function todoReducer(state: TodoState, action: TodoAction): TodoState {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        text: action.payload,
                        completed: false
                    }
                ]
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload
            };
        default:
            return state;
    }
}

export function TodoReducerDemo() {
    const [state, dispatch] = useReducer(todoReducer, {
        todos: [],
        filter: 'all'
    });

    const [input, setInput] = React.useState('');

    const handleAdd = () => {
        if (input.trim()) {
            dispatch({ type: 'ADD_TODO', payload: input });
            setInput('');
        }
    };

    const filteredTodos = state.todos.filter(todo => {
        if (state.filter === 'active') return !todo.completed;
        if (state.filter === 'completed') return todo.completed;
        return true;
    });

    return (
        <div className={styles.demo}>
            <h3>Todo List (useReducer)</h3>

            <div style={{ marginBottom: '1rem' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
                    placeholder="Yeni todo..."
                    style={{ padding: '0.5rem', marginRight: '0.5rem' }}
                />
                <button onClick={handleAdd} className={styles.button}>
                    Ekle
                </button>
            </div>

            <div style={{ marginBottom: '1rem' }}>
                {(['all', 'active', 'completed'] as const).map(filter => (
                    <button
                        key={filter}
                        onClick={() => dispatch({ type: 'SET_FILTER', payload: filter })}
                        className={styles.button}
                        style={{
                            marginRight: '0.5rem',
                            opacity: state.filter === filter ? 1 : 0.5
                        }}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <ul style={{ listStyle: 'none', padding: 0 }}>
                {filteredTodos.map(todo => (
                    <li key={todo.id} style={{ marginBottom: '0.5rem' }}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                        />
                        <span style={{
                            marginLeft: '0.5rem',
                            textDecoration: todo.completed ? 'line-through' : 'none'
                        }}>
                            {todo.text}
                        </span>
                        <button
                            onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                            style={{ marginLeft: '0.5rem', cursor: 'pointer' }}
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Import React for useState
import React from 'react';
