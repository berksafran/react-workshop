import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import styles from '../../02-react-core/01-declarative-vs-imperative/page.module.scss';

export default async function CustomHooksPage() {
    const notesPath = path.join(process.cwd(), 'app/day1/03-hooks/03-custom-hooks/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="Custom Hooks"
            description="Kendi hook'larını oluştur ve kodunu yeniden kullan"
            notesContent={notesContent}
        >
            <section className={styles.section}>
                <h2>🎣 Custom Hook Nedir?</h2>
                <p className={styles.description}>
                    Custom hook, React hook'larını kullanarak kendi mantığını kapsülleyen fonksiyondur.
                    "use" ile başlamalı ve diğer hook'ları çağırabilir.
                </p>

                <div className={styles.code}>
                    <pre>{`function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

// Kullanımı
const { data, loading } = useFetch('/api/users');`}</pre>
                </div>
            </section>

            <section className={styles.highlights}>
                <h3>🎯 Avantajlar</h3>
                <ul>
                    <li><strong>Kod tekrarını önler:</strong> Aynı mantığı farklı component'lerde kullan</li>
                    <li><strong>Okunabilirlik:</strong> Kompleks mantık hook içinde gizlenir</li>
                    <li><strong>Test edilebilirlik:</strong> Hook'u bağımsız test edebilirsin</li>
                    <li><strong>Composition:</strong> Hook'ları birleştirerek güçlü yapılar oluştur</li>
                </ul>
            </section>
        </PageContainer>
    );
}
