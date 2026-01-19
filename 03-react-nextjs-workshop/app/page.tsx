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
              <h3>TypeScript + React</h3>
              <ul>
                <li>Simple Props</li>
                <li>Props with Children</li>
                <li>Ödev: Component Types</li>
              </ul>
              <p className={styles.note}>
                💡 Bu konuların sayfaları bulunmamaktadır. Notları NOTES.md dosyalarında bulabilirsiniz.
              </p>
            </div>

            <div className={styles.topic}>
              <h3><Link href="/day1/02-react-core">React Core Concepts</Link></h3>
              <ul>
                <li><Link href="/day1/02-react-core/01-declarative-vs-imperative">Declarative vs Imperative</Link></li>
                <li><Link href="/day1/02-react-core/02-state-and-props">State & Props</Link></li>
                <li><Link href="/day1/02-react-core/03-lifecycle">Lifecycle</Link></li>
                <li><Link href="/day1/02-react-core/04-ODEV-counter-app">Counter App (Mini Ödev)</Link></li>
              </ul>
            </div>

            <div className={styles.topic}>
              <h3><Link href="/day1/03-hooks">Hooks Deep Dive</Link></h3>
              <ul>
                <li><Link href="/day1/03-hooks/01-useState-useEffect">useState & useEffect</Link></li>
                <li><Link href="/day1/03-hooks/02-useReducer">useReducer</Link></li>
                <li><Link href="/day1/03-hooks/03-custom-hooks">Custom Hooks</Link></li>
                <li><Link href="/day1/03-hooks/04-memoization">Memoization (useCallback, useMemo, React.memo)</Link></li>
                <li><Link href="/day1/03-hooks/05-react-compiler">React Compiler (Next.js 16)</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.day}>
          <h2>📅 Gün 2 - Routing & State Management</h2>

          <div className={styles.topics}>
            <div className={styles.topic}>
              <h3><Link href="/day2/01-routing">React Router</Link></h3>
              <ul>
                <li><Link href="/day2/01-routing/01-react-router-basics">Basic Routing</Link></li>
                <li><Link href="/day2/01-routing/02-nextjs-router-basics">Nested Routes</Link></li>
                <li><Link href="/day2/01-routing/03-nested-routes">Dynamic Routes</Link></li>
              </ul>
            </div>

            <div className={styles.topic}>
              <h3>Next.js Router</h3>
              <ul>
                <li><Link href="/day2/nextjs-router/app-router-basics">App Router Basics</Link></li>
                <li><Link href="/day2/nextjs-router/comparison">React Router vs Next.js</Link></li>
                <li><Link href="/day2/nextjs-router/api-routes">API Routes</Link></li>
              </ul>
            </div>

            <div className={styles.topic}>
              <h3>State Management</h3>
              <ul>
                <li><Link href="/day2/state-management/context-api">Context API</Link></li>
                <li><Link href="/day2/state-management/context-reducer">Context + Reducer</Link></li>
                <li><Link href="/day2/state-management/todo-app">To-Do App</Link></li>
                <li><Link href="/day2/state-management/react-memo">React.memo</Link></li>
              </ul>
            </div>

            <div className={styles.topic}>
              <h3>Rendering Patterns</h3>
              <ul>
                <li><Link href="/day2/rendering/ssr-demo">SSR Demo</Link></li>
                <li><Link href="/day2/rendering/csr-demo">CSR Demo</Link></li>
                <li><Link href="/day2/rendering/ssg-demo">SSG Demo</Link></li>
                <li><Link href="/day2/rendering/isr-demo">ISR Demo</Link></li>
                <li><Link href="/day2/rendering/use-client-directive">"use client" Directive</Link></li>
                <li><Link href="/day2/rendering/nextjs-15-vs-16">Next.js 15 vs 16</Link></li>
              </ul>
            </div>

            <div className={styles.topic}>
              <h3>Mini Project</h3>
              <ul>
                <li><Link href="/day2/mini-project/user-directory">User Directory (SSR + CSR + Context)</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Workshop Materyalleri - 2026</p>
        <p>JavaScript & TypeScript temelleri için <code>01-javascript-fundamentals</code> ve <code>02-typescript-fundamentals</code> klasörlerine bakın</p>
      </footer>
    </div>
  );
}
