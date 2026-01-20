import { promises as fs } from 'fs';
import path from 'path';
import { PageContainer } from '@/app/components/PageContainer';
import styles from './page.module.scss';
import { CounterApp } from './components/CounterApp';
import Image from 'next/image';
import CounterAppImage from './image.png';

export default async function CounterAppHomeworkPage() {
    const notesPath = path.join(process.cwd(), 'app/day1/02-react-core/04-ODEV-counter-app/NOTES.md');
    const notesContent = await fs.readFile(notesPath, 'utf-8');

    return (
        <PageContainer
            title="📚 Ödev: Counter App"
            description="State yönetimi pratiği - Sayaç uygulaması"
            notesContent={notesContent}
        >
            <section className={styles.section}>
                <h2>🎯 Ödev Açıklaması</h2>
                <p className={styles.description}>
                    Bu ödevde, <code>useState</code> hook'unu kullanarak basit bir sayaç uygulaması yapacaksınız.
                    Bu uygulama, React'te state yönetimini ve event handling'i anlamanız için tasarlanmıştır.
                </p>

                <div className={styles.imageContainer}>
                    <Image
                        src={CounterAppImage}
                        alt="Counter App Example"
                        className={styles.image}
                        priority
                    />
                </div>

                <div className={styles.highlights}>
                    <h3>📋 Temel Gereksinimler</h3>
                    <ul>
                        <li><strong>Artır Butonu:</strong> Sayacı 1 artıran buton</li>
                        <li><strong>Azalt Butonu:</strong> Sayacı 1 azaltan buton</li>
                        <li><strong>Sıfırla Butonu:</strong> Sayacı 0'a döndüren buton</li>
                        <li><strong>Görsel Gösterim:</strong> Mevcut sayaç değerini ekranda gösterin</li>
                        <li><strong>Geçmiş Gösterim:</strong> Sayaç değişikliklerinin geçmişini bir liste halinde gösterin</li>
                        <li><strong>Toplam İşlem Sayısı:</strong> Basılan butonların toplam sayısını gösterin</li>
                        <li><strong>En Yüksek Sayı:</strong> Basılan butonların en yüksek sayısını gösterin</li>
                        <li><strong>En Düşük Sayı:</strong> Basılan butonların en düşük sayısını gösterin</li>
                    </ul>
                </div>

                <div className={styles.commonMistakes}>
                    <h3>⚠️ Sık Yapılan Hatalar</h3>
                    <ul>
                        <li><strong>Direkt State Değiştirme:</strong> ❌ <code>count = count + 1</code> yerine ✅ <code>setCount(count + 1)</code></li>
                        <li><strong>Fonksiyon Çağırma:</strong> ❌ <code>onClick={'{increment()}'}</code> yerine ✅ <code>onClick={'{increment}'}</code></li>
                        <li><strong>useState Import Unutma:</strong> useState'i import etmeyi unutmayın</li>
                        <li><strong>State İsimlendirme:</strong> State ve setter fonksiyonunu doğru isimlendirin: <code>[value, setValue]</code></li>
                    </ul>
                </div>
            </section>
        </PageContainer>
    );
}
