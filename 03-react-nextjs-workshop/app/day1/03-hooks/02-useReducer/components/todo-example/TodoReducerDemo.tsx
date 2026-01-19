'use client';

import { useReducer, useState } from 'react';
import { todoReducer } from './reducer';
import styles from '../../../../02-react-core/01-declarative-vs-imperative/page.module.scss';

export function TodoReducerDemo() {
    const [state, dispatch] = useReducer(todoReducer, {
        todos: [],
        filter: 'all'
    });

    const [input, setInput] = useState('');

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
