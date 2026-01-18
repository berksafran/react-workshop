'use client';

import Link from 'next/link';
import styles from './page.module.scss';
import { StatePropsDemo } from './components/StatePropsDemo';

export default function StateAndPropsPage() {
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

                    <StatePropsDemo />

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
