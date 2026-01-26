import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>React & Next.js Workshop</h1>
        <p>2 Günlük Pratik Odaklı Eğitim Materyalleri</p>
      </header>

      <main className={styles.main}>
        <section className={styles.day}>
          <h2><Link href="/day1" style={{ color: '#667eea', fontWeight: 'bold' }}>📅 Gün 1 - React Fundamentals</Link></h2>
          <div className={styles.topics}>
            <div className={styles.topic}>
              <h3><Link href="/day1/01-typescript-react">TypeScript + React</Link></h3>
              <ul>
                <li><Link href="/day1/01-typescript-react/01-simple-props">Simple Props</Link></li>
                <li><Link href="/day1/01-typescript-react/02-props-with-children">Props with Children</Link></li>
                <li className={styles.homework}><Link href="/day1/01-typescript-react/03-ODEV-component-types">Ödev: Component Types</Link></li>
              </ul>
            </div>

            <div className={styles.topic}>
              <h3><Link href="/day1/02-react-core">React Core Concepts</Link></h3>
              <ul>
                <li><Link href="/day1/02-react-core/01-declarative-vs-imperative">Declarative vs Imperative</Link></li>
                <li><Link href="/day1/02-react-core/02-state-and-props">State & Props</Link></li>
                <li><Link href="/day1/02-react-core/03-lifecycle">Lifecycle</Link></li>
                <li className={styles.homework}><Link href="/day1/02-react-core/04-ODEV-counter-app">Ödev: Counter App</Link></li>
              </ul>
            </div>

            <div className={styles.topic}>
              <h3><Link href="/day1/03-hooks">Hooks Deep Dive</Link></h3>
              <ul>
                <li><Link href="/day1/03-hooks/01-useState-useEffect">useState, useEffect & useRef</Link></li>
                <li><Link href="/day1/03-hooks/02-useReducer">useReducer</Link></li>
                <li><Link href="/day1/03-hooks/03-custom-hooks">Custom Hooks</Link></li>
                <li><Link href="/day1/03-hooks/04-memoization">Memoization</Link></li>
                <li><Link href="/day1/03-hooks/05-react-compiler">React Compiler (Next.js 16)</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.day}>
          <h2><Link href="/day2">📅 Gün 2 - Routing & State Management</Link></h2>

          <div className={styles.topics}>
            <div className={styles.topic}>
              <h3><Link href="/day2/01-routing">React Router</Link></h3>
              <ul>
                <li><Link href="/day2/01-routing/01-react-router-basics">Basic Routing</Link></li>
                <li><Link href="/day2/01-routing/02-nested-routes">Nested Routes</Link></li>
                <li><Link href="/day2/01-routing/03-dynamic-routes">Dynamic Routes</Link></li>
                <li><Link href="/day2/01-routing/04-profile-page">Profile Page (Nested + Dynamic)</Link></li>
              </ul>
            </div>

            <div className={styles.topic}>
              <h3><Link href="/day2/02-nextjs-router">Next.js Router</Link></h3>
              <ul>
                <li><Link href="/day2/02-nextjs-router/01-basics">Next.js Router Basics</Link></li>
                <li><Link href="/day2/02-nextjs-router/02-comparison">React Router vs Next.js</Link></li>
                <li><Link href="/day2/02-nextjs-router/03-api-routes">API Routes</Link></li>
                <li><Link href="/day2/02-nextjs-router/04-middleware">Middleware (Proxy)</Link></li>
              </ul>
            </div>

            <div className={styles.topic}>
              <h3><Link href="/day2/03-state-management">State Management</Link></h3>
              <ul>
                <li><Link href="/day2/03-state-management/01-context-api">Context API</Link></li>
                <li><Link href="/day2/03-state-management/02-context-with-reducer">Context + Reducer</Link></li>
                <li className={styles.example}><Link href="/day2/03-state-management/03-todo-app">Örnek: To-Do App</Link></li>
              </ul>
            </div>

            <div className={styles.topic}>
              <h3><Link href="/day2/04-rendering">Rendering Patterns</Link></h3>
              <ul>
                <li><Link href="/day2/04-rendering/01-ssr">SSR (Server Side Rendering)</Link></li>
                <li><Link href="/day2/04-rendering/02-csr">CSR (Client Side Rendering)</Link></li>
                <li><Link href="/day2/04-rendering/03-ssg">SSG (Static Site Generation)</Link></li>
                <li><Link href="/day2/04-rendering/04-isr">ISR (Incremental Static Regeneration)</Link></li>
              </ul>
            </div>

            <div className={styles.topic}>
              <h3>Ödev: Mini Project</h3>
              <ul>
                <li><Link href="/day2/05-mini-project">User Directory (SSR + CSR + Context)</Link></li>
              </ul>
            </div>

            <div className={styles.topic}>
              <h3><Link href="/day2/06-scss-bonus">🎨 BONUS: SCSS</Link></h3>
              <ul>
                <li><Link href="/day2/06-scss-bonus/01-basics">SCSS Basics</Link></li>
                <li><Link href="/day2/06-scss-bonus/02-deep-dive">SCSS Deep Dive</Link></li>
              </ul>
            </div>

            <div className={styles.topic}>
              <h3>🚀 BONUS: Next.js 15 vs 16</h3>
              <ul>
                <li><Link href="/day2/07-nextjs15-vs-16-bonus">Next.js 15 vs 16 Karşılaştırması</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Workshop Materyalleri - 2026</p>
        <p>Berk Safranbolulu</p>
        <p>berksafranbolulu@gmail.com</p>
      </footer>
    </div>
  );
}
