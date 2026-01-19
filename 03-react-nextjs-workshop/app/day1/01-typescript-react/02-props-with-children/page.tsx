import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import { Card } from './components/Card';
import styles from '../../02-react-core/01-declarative-vs-imperative/page.module.scss';

export default async function PropsWithChildrenPage() {
    const notesPath = path.join(process.cwd(), 'app/day1/01-typescript-react/02-props-with-children/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="Props with Children"
            description="PropsWithChildren kullanımı"
            notesContent={notesContent}
        >
            <section className={styles.section}>
                <h2>🎯 Card Component Demo</h2>
                <p className={styles.description}>
                    PropsWithChildren ile children prop'u tip güvenli şekilde kullanma.
                </p>

                <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
                    <Card title="Kart 1">
                        <p>Bu bir kart içeriğidir. Children olarak geçildi.</p>
                    </Card>
                    <Card title="Kart 2">
                        <p>İkinci kart içeriği.</p>
                        <button style={{ padding: '0.5rem 1rem', marginTop: '0.5rem' }}>
                            Aksiyon
                        </button>
                    </Card>
                </div>

                <div className={styles.code} style={{ marginTop: '2rem' }}>
                    <pre>{`import { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren<{
  title: string;
}>;

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};`}</pre>
                </div>
            </section>

            <section className={styles.highlights}>
                <h3>🎯 Önemli Noktalar</h3>
                <ul>
                    <li><strong>PropsWithChildren:</strong> React'ten import et</li>
                    <li><strong>Generic type:</strong> Kendi props'larını generic olarak geç</li>
                    <li><strong>Children:</strong> Otomatik olarak ReactNode tipinde</li>
                    <li><strong>Flexible:</strong> Children'a herhangi bir JSX geçebilirsin</li>
                </ul>
            </section>
        </PageContainer>
    );
}
