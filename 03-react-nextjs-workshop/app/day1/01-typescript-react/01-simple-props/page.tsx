import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import { ButtonDemo } from './components/ButtonDemo';
import styles from '../../02-react-core/01-declarative-vs-imperative/page.module.scss';

export default async function SimplePropsPage() {
    const notesPath = path.join(process.cwd(), 'app/day1/01-typescript-react/01-simple-props/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="Simple Props"
            description="React component props typing"
            notesContent={notesContent}
        >
            <section className={styles.section}>
                <h2>🎯 Button Component Demo</h2>
                <p className={styles.description}>
                    TypeScript ile tip güvenli props kullanımı. FC kullanmadan direkt props'a tip verme.
                </p>

                <ButtonDemo />

                <div className={styles.code} style={{ marginTop: '2rem' }}>
                    <pre>{`type ButtonProps = {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
};

const Button = ({ text, onClick, variant = 'primary', disabled = false }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} className={variant}>
      {text}
    </button>
  );
};`}</pre>
                </div>
            </section>

            <section className={styles.highlights}>
                <h3>🎯 Önemli Noktalar</h3>
                <ul>
                    <li><strong>Type tanımlama:</strong> Props için type veya interface kullan</li>
                    <li><strong>Optional props:</strong> ? ile işaretle</li>
                    <li><strong>Default values:</strong> Destructuring sırasında ver</li>
                    <li><strong>Union types:</strong> 'primary' | 'secondary' gibi</li>
                </ul>
            </section>
        </PageContainer>
    );
}
