import Link from 'next/link';
import styles from './ScssBonus.module.scss';

export default function ScssBonusPage() {
    return (
        <div className={styles.scssBonusPage}>
            <div className={styles.header}>
                <h1>SCSS - Bonus Konular</h1>
                <p className={styles.subtitle}>
                    SCSS (Sassy CSS), CSS'in daha güçlü ve esnek bir versiyonudur.
                    Değişkenler, fonksiyonlar, döngüler ve daha fazlasıyla CSS yazmayı kolaylaştırır.
                </p>
            </div>

            <div className={styles.content}>
                <section className={styles.section}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h2>📚 SCSS Basics</h2>
                            <span className={styles.badge}>Temel</span>
                        </div>
                        <p className={styles.cardDescription}>
                            SCSS'in temel özelliklerini öğrenin: Variables, Nesting, Mixins, Imports ve Parent Selector.
                        </p>
                        <ul className={styles.topicList}>
                            <li>✅ Variables (Değişkenler)</li>
                            <li>✅ Nesting (İç İçe Yazım)</li>
                            <li>✅ Mixins (Yeniden Kullanılabilir Stiller)</li>
                            <li>✅ Partials & Imports</li>
                            <li>✅ Parent Selector (&)</li>
                            <li>✅ Responsive Design</li>
                        </ul>
                        <Link href="/day2/06-scss-bonus/01-basics" className={styles.button}>
                            Basics'i İncele →
                        </Link>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={`${styles.card} ${styles.advanced}`}>
                        <div className={styles.cardHeader}>
                            <h2>🚀 SCSS Deep Dive</h2>
                            <span className={`${styles.badge} ${styles.badgeAdvanced}`}>İleri Seviye</span>
                        </div>
                        <p className={styles.cardDescription}>
                            İleri seviye SCSS özellikleri: Functions, Loops, Maps, Extends ve Control Directives.
                        </p>
                        <ul className={styles.topicList}>
                            <li>✅ Custom Functions</li>
                            <li>✅ Control Directives (@if, @for, @each, @while)</li>
                            <li>✅ Maps (Haritalar)</li>
                            <li>✅ @extend (Kalıtım)</li>
                            <li>✅ Interpolation</li>
                            <li>✅ Built-in Functions</li>
                            <li>✅ Modern Module System (@use, @forward)</li>
                        </ul>
                        <Link href="/day2/06-scss-bonus/02-deep-dive" className={`${styles.button} ${styles.buttonAdvanced}`}>
                            Deep Dive'a Geç →
                        </Link>
                    </div>
                </section>
            </div>

            <section className={styles.comparison}>
                <h2>CSS vs SCSS</h2>
                <div className={styles.comparisonGrid}>
                    <div className={styles.comparisonCard}>
                        <h3>CSS</h3>
                        <pre className={styles.codeBlock}>
                            {`.card {
  padding: 20px;
}

.card .header {
  font-size: 24px;
}

.card .header:hover {
  color: blue;
}

.card .body {
  margin-top: 10px;
}`}
                        </pre>
                    </div>

                    <div className={styles.comparisonCard}>
                        <h3>SCSS</h3>
                        <pre className={styles.codeBlock}>
                            {`.card {
  padding: 20px;
  
  .header {
    font-size: 24px;
    
    &:hover {
      color: blue;
    }
  }
  
  .body {
    margin-top: 10px;
  }
}`}
                        </pre>
                    </div>
                </div>
            </section>

            <section className={styles.benefits}>
                <h2>SCSS Avantajları</h2>
                <div className={styles.benefitsGrid}>
                    <div className={styles.benefitCard}>
                        <div className={styles.icon}>🎨</div>
                        <h3>Daha Az Kod</h3>
                        <p>Nesting ve mixinler ile kod tekrarını azaltın</p>
                    </div>
                    <div className={styles.benefitCard}>
                        <div className={styles.icon}>📦</div>
                        <h3>Modüler Yapı</h3>
                        <p>Partials ile stillerinizi organize edin</p>
                    </div>
                    <div className={styles.benefitCard}>
                        <div className={styles.icon}>🔧</div>
                        <h3>Değişkenler</h3>
                        <p>Tema ve renkleri merkezi olarak yönetin</p>
                    </div>
                    <div className={styles.benefitCard}>
                        <div className={styles.icon}>⚡</div>
                        <h3>Fonksiyonlar</h3>
                        <p>Dinamik değer hesaplamaları yapın</p>
                    </div>
                    <div className={styles.benefitCard}>
                        <div className={styles.icon}>🔄</div>
                        <h3>Döngüler</h3>
                        <p>Utility class'ları otomatik oluşturun</p>
                    </div>
                    <div className={styles.benefitCard}>
                        <div className={styles.icon}>🎯</div>
                        <h3>Maintainability</h3>
                        <p>Daha kolay bakım ve güncelleme</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
