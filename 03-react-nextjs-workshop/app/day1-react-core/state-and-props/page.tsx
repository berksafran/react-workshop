'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';

// Child component - Props alır
type GreetingProps = {
    name: string;
    age: number;
    onUpdate: () => void;
};

function Greeting({ name, age, onUpdate }: GreetingProps) {
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

export default function StateAndPropsPage() {
    // Parent component - State tutar
    const [name, setName] = useState('Ahmet');
    const [age, setAge] = useState(25);

    const handleUpdateAge = () => {
        setAge(age + 1);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>State & Props</h1>
                <p>Component state yönetimi ve props ile veri aktarımı</p>
            </header>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>📦 State (Parent Component)</h2>
                    <p className={styles.description}>
                        State, component'in kendi içinde tuttuğu değişken verilerdir.
                        State değiştiğinde component yeniden render edilir.
                    </p>

                    <div className={styles.demo}>
                        <div className={styles.stateDisplay}>
                            <div>
                                <label>İsim:</label>
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

                    <div className={styles.code}>
                        <pre>{`const [name, setName] = useState('Ahmet');
const [age, setAge] = useState(25);`}</pre>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>⬇️ Props (Child Component)</h2>
                    <p className={styles.description}>
                        Props, parent component'ten child component'e veri aktarımıdır.
                        Props read-only'dir, child değiştiremez.
                    </p>

                    <div className={styles.demo}>
                        <Greeting
                            name={name}
                            age={age}
                            onUpdate={handleUpdateAge}
                        />
                    </div>

                    <div className={styles.code}>
                        <pre>{`<Greeting 
  name={name} 
  age={age} 
  onUpdate={handleUpdateAge}
/>`}</pre>
                    </div>
                </section>

                <section className={styles.highlights}>
                    <h3>🎯 Önemli Noktalar</h3>
                    <ul>
                        <li>
                            <strong>State:</strong> Component'in kendi verisi, değiştirilebilir
                        </li>
                        <li>
                            <strong>Props:</strong> Parent'tan gelen veri, read-only
                        </li>
                        <li>
                            <strong>Veri Akışı:</strong> Tek yönlü (parent → child)
                        </li>
                        <li>
                            <strong>Callback:</strong> Child, parent'ın state'ini callback ile değiştirebilir
                        </li>
                        <li>
                            State değişince → Component re-render → Props güncellenir
                        </li>
                    </ul>
                </section>
            </div>

            <Link href="/day1-react-core" className={styles.backLink}>
                ← Geri Dön
            </Link>
        </div>
    );
}
