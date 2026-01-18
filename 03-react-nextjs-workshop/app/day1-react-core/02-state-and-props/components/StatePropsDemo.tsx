'use client';

import { useState } from 'react';
import styles from '../page.module.scss';

// Child component - Props alır
type GreetingProps = {
    name: string;
    age: number;
    onUpdate: () => void;
};

export function Greeting({ name, age, onUpdate }: GreetingProps) {
    return (
        <div className={styles.greeting}>
            <h3>Merhaba, {name}!</h3>
            <p>Yaş: {age}</p>
            <button onClick={onUpdate} className={styles.button}>
                Yaşı Artır
            </button>
        </div>
    );
}

// Parent component - State tutar
export function StatePropsDemo() {
    const [name, setName] = useState('Ahmet');
    const [age, setAge] = useState(25);

    const handleUpdateAge = () => {
        setAge(age + 1);
    };

    return (
        <>
            <div className={styles.demo}>
                <div className={styles.stateDisplay}>
                    <div>
                        <label>İsim: Test</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div>
                        <label>Yaş:</label>
                        <span className={styles.value}>{age}</span>
                    </div>
                </div>
            </div>

            <div className={styles.demo}>
                <Greeting
                    name={name}
                    age={age}
                    onUpdate={handleUpdateAge}
                />
            </div>
        </>
    );
}
