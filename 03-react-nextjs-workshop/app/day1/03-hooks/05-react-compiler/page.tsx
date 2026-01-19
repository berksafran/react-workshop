import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import styles from '../../02-react-core/01-declarative-vs-imperative/page.module.scss';

export default async function ReactCompilerPage() {
    const notesPath = path.join(process.cwd(), 'app/day1/03-hooks/05-react-compiler/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="React Compiler"
            description="Next.js 16 ile gelen otomatik memoization"
            notesContent={notesContent}
        >
            <section className={styles.section}>
                <h2>🚀 React Compiler Nedir?</h2>
                <p className={styles.description}>
                    React Compiler (React Forget), kodunuzu otomatik olarak optimize eder.
                    useCallback, useMemo ve React.memo'ya artık ihtiyaç yok!
                </p>

                <div className={styles.code}>
                    <pre>{`// Önce (Manuel Memoization)
const handleClick = useCallback(() => {
  console.log('clicked');
}, []);

const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

// Sonra (React Compiler ile)
const handleClick = () => {
  console.log('clicked');
};

const expensiveValue = computeExpensiveValue(a, b);
// Compiler otomatik olarak optimize eder!`}</pre>
                </div>
            </section>

            <section className={styles.highlights}>
                <h3>🎯 Avantajlar</h3>
                <ul>
                    <li><strong>Otomatik optimizasyon:</strong> Manuel memoization'a gerek yok</li>
                    <li><strong>Daha temiz kod:</strong> useCallback/useMemo kalabalığı yok</li>
                    <li><strong>Performans:</strong> Compiler daha iyi optimize edebilir</li>
                    <li><strong>Next.js 16:</strong> Built-in olarak geliyor</li>
                </ul>
            </section>
        </PageContainer>
    );
}
