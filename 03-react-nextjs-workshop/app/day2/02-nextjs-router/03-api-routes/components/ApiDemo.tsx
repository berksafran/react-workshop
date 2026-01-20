'use client';

import { useState } from 'react';

export function ApiDemo() {
    const [helloResponse, setHelloResponse] = useState<any>(null);
    const [usersResponse, setUsersResponse] = useState<any>(null);
    const [postResponse, setPostResponse] = useState<any>(null);
    const [loading, setLoading] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const fetchHello = async () => {
        setLoading('hello');
        try {
            const res = await fetch('/day2/02-nextjs-router/03-api-routes/api/hello');
            const data = await res.json();
            setHelloResponse(data);
        } catch (error) {
            setHelloResponse({ error: 'Failed to fetch' });
        }
        setLoading(null);
    };

    const fetchUsers = async () => {
        setLoading('users');
        try {
            const res = await fetch('/day2/02-nextjs-router/03-api-routes/api/users');
            const data = await res.json();
            setUsersResponse(data);
        } catch (error) {
            setUsersResponse({ error: 'Failed to fetch' });
        }
        setLoading(null);
    };

    const createUser = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading('post');
        try {
            const res = await fetch('/day2/02-nextjs-router/03-api-routes/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            setPostResponse(data);
            if (data.success) {
                setFormData({ name: '', email: '' });
                // Refresh users list
                fetchUsers();
            }
        } catch (error) {
            setPostResponse({ error: 'Failed to create user' });
        }
        setLoading(null);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* GET /api/hello */}
            <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
                <h3 style={{ marginTop: 0 }}>GET /api/hello</h3>
                <button
                    onClick={fetchHello}
                    disabled={loading === 'hello'}
                    style={{
                        backgroundColor: '#4f46e5',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.375rem',
                        border: 'none',
                        cursor: 'pointer',
                        marginBottom: '1rem'
                    }}
                >
                    {loading === 'hello' ? 'Loading...' : 'Fetch Hello'}
                </button>
                {helloResponse && (
                    <pre style={{
                        backgroundColor: '#1f2937',
                        color: '#f3f4f6',
                        padding: '1rem',
                        borderRadius: '0.375rem',
                        overflow: 'auto'
                    }}>
                        {JSON.stringify(helloResponse, null, 2)}
                    </pre>
                )}
            </div>

            {/* GET /api/users */}
            <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
                <h3 style={{ marginTop: 0 }}>GET /api/users</h3>
                <button
                    onClick={fetchUsers}
                    disabled={loading === 'users'}
                    style={{
                        backgroundColor: '#10b981',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.375rem',
                        border: 'none',
                        cursor: 'pointer',
                        marginBottom: '1rem'
                    }}
                >
                    {loading === 'users' ? 'Loading...' : 'Fetch Users'}
                </button>
                {usersResponse && (
                    <pre style={{
                        backgroundColor: '#1f2937',
                        color: '#f3f4f6',
                        padding: '1rem',
                        borderRadius: '0.375rem',
                        overflow: 'auto'
                    }}>
                        {JSON.stringify(usersResponse, null, 2)}
                    </pre>
                )}
            </div>

            {/* POST /api/users */}
            <div style={{ padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
                <h3 style={{ marginTop: 0 }}>POST /api/users</h3>
                <form onSubmit={createUser} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: 500 }}>
                            Name:
                        </label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            style={{
                                width: '100%',
                                padding: '0.5rem',
                                border: '1px solid #d1d5db',
                                borderRadius: '0.375rem'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: 500 }}>
                            Email:
                        </label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            style={{
                                width: '100%',
                                padding: '0.5rem',
                                border: '1px solid #d1d5db',
                                borderRadius: '0.375rem'
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading === 'post'}
                        style={{
                            backgroundColor: '#f59e0b',
                            color: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '0.375rem',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        {loading === 'post' ? 'Creating...' : 'Create User'}
                    </button>
                </form>
                {postResponse && (
                    <pre style={{
                        backgroundColor: '#1f2937',
                        color: '#f3f4f6',
                        padding: '1rem',
                        borderRadius: '0.375rem',
                        overflow: 'auto',
                        marginTop: '1rem'
                    }}>
                        {JSON.stringify(postResponse, null, 2)}
                    </pre>
                )}
            </div>
        </div>
    );
}
