import styles from './DeepDiveDemo.module.scss';

export default function ScssDeepDivePage() {
    return (
        <div className={styles.deepDiveDemo}>
            <h1>SCSS Deep Dive - İleri Seviye Konular</h1>

            {/* Functions Example */}
            <section className={styles.functionsExample}>
                <h2>1. Custom Functions</h2>
                <p>SCSS ile kendi fonksiyonlarınızı oluşturabilir ve değer hesaplamaları yapabilirsiniz.</p>

                <div className={styles.functionDemo}>
                    <div className={`${styles.demoBox} ${styles.pxToRem}`}>
                        <strong>px-to-rem()</strong>
                        <p>24px → 1.5rem</p>
                    </div>
                    <div className={`${styles.demoBox} ${styles.spacing}`}>
                        <strong>spacing()</strong>
                        <p>spacing(6) = 48px</p>
                    </div>
                    <div className={`${styles.demoBox} ${styles.gridWidth}`}>
                        <strong>grid-width()</strong>
                        <p>6/12 columns = 50%</p>
                    </div>
                </div>

                <pre className={styles.codeBlock}>
                    {`@function px-to-rem($px, $base: 16px) {
  @return $px / $base * 1rem;
}

@function spacing($multiplier) {
  @return 8px * $multiplier;
}

.text {
  font-size: px-to-rem(24px); // 1.5rem
  padding: spacing(6); // 48px
}`}
                </pre>
            </section>

            {/* Loops Example */}
            <section className={styles.loopsExample}>
                <h2>2. Loops (@each, @for)</h2>
                <p>Döngüler ile otomatik olarak utility class'lar oluşturabilirsiniz.</p>

                <h3>@each ile Renk Sınıfları</h3>
                <div className={styles.colorGrid}>
                    <div className={`${styles.colorBox} bg-primary`}>Primary</div>
                    <div className={`${styles.colorBox} bg-secondary`}>Secondary</div>
                    <div className={`${styles.colorBox} bg-success`}>Success</div>
                    <div className={`${styles.colorBox} bg-danger`}>Danger</div>
                    <div className={`${styles.colorBox} bg-warning`}>Warning</div>
                    <div className={`${styles.colorBox} bg-info`}>Info</div>
                </div>

                <pre className={styles.codeBlock}>
                    {`$theme-colors: (
  primary: #3498db,
  secondary: #2ecc71,
  danger: #e74c3c
);

@each $name, $color in $theme-colors {
  .bg-#{$name} {
    background-color: $color;
  }
}`}
                </pre>

                <h3>@for ile Grid Sistemi</h3>
                <div className={styles.gridDemo}>
                    <div className={`${styles.gridBox} col-12`}>col-12 (100%)</div>
                    <div className={`${styles.gridBox} col-6`}>col-6 (50%)</div>
                    <div className={`${styles.gridBox} col-6`}>col-6 (50%)</div>
                    <div className={`${styles.gridBox} col-4`}>col-4</div>
                    <div className={`${styles.gridBox} col-4`}>col-4</div>
                    <div className={`${styles.gridBox} col-4`}>col-4</div>
                </div>

                <pre className={styles.codeBlock}>
                    {`@for $i from 1 through 12 {
  .col-#{$i} {
    width: percentage($i / 12);
  }
}`}
                </pre>
            </section>

            {/* Extend Example */}
            <section className={styles.extendExample}>
                <h2>3. @extend (Kalıtım)</h2>
                <p>@extend ile ortak stilleri paylaşabilir ve kod tekrarını azaltabilirsiniz.</p>

                <div className={`${styles.cardVariant} ${styles.primary}`}>
                    <strong>Primary Card</strong>
                    <p>Bu card %card-base placeholder'ını extend ediyor.</p>
                </div>

                <div className={`${styles.cardVariant} ${styles.secondary}`}>
                    <strong>Secondary Card</strong>
                    <p>Aynı base stilleri kullanıyor ama farklı border rengi.</p>
                </div>

                <div className={`${styles.cardVariant} ${styles.danger}`}>
                    <strong>Danger Card</strong>
                    <p>Hover yapın - tüm kartlar aynı hover efektini paylaşıyor!</p>
                </div>

                <pre className={styles.codeBlock}>
                    {`%card-base {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 24px;
  
  &:hover {
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  }
}

.primary-card {
  @extend %card-base;
  border-left: 4px solid blue;
}

.secondary-card {
  @extend %card-base;
  border-left: 4px solid green;
}`}
                </pre>
            </section>

            {/* Conditionals Example */}
            <section className={styles.conditionalsExample}>
                <h2>4. Conditionals (@if, @else)</h2>
                <p>Koşullu ifadeler ile dinamik stiller oluşturabilirsiniz.</p>

                <div className={styles.themeBoxes}>
                    <div className={`${styles.themeBox} ${styles.dark}`}>
                        <strong>Dark Theme</strong>
                        <p>@if $theme == 'dark'</p>
                    </div>
                    <div className={`${styles.themeBox} ${styles.light}`}>
                        <strong>Light Theme</strong>
                        <p>@else if $theme == 'light'</p>
                    </div>
                    <div className={`${styles.themeBox} ${styles.default}`}>
                        <strong>Default Theme</strong>
                        <p>@else</p>
                    </div>
                </div>

                <pre className={styles.codeBlock}>
                    {`@mixin theme-variant($theme) {
  @if $theme == 'dark' {
    background-color: #2c3e50;
    color: white;
  } @else if $theme == 'light' {
    background-color: #ecf0f1;
    color: #2c3e50;
  } @else {
    background-color: white;
    color: black;
  }
}

.dark-box {
  @include theme-variant('dark');
}`}
                </pre>
            </section>

            {/* Maps Example */}
            <section className={styles.mapsExample}>
                <h2>5. Maps (Haritalar)</h2>
                <p>Maps ile karmaşık veri yapılarını organize edebilir ve kolayca erişebilirsiniz.</p>

                <div className={styles.shadowBoxes}>
                    <div className="shadow-sm">shadow-sm</div>
                    <div className="shadow-base">shadow-base</div>
                    <div className="shadow-md">shadow-md</div>
                    <div className="shadow-lg">shadow-lg</div>
                    <div className="shadow-xl">shadow-xl</div>
                    <div className="shadow-2xl">shadow-2xl</div>
                </div>

                <pre className={styles.codeBlock}>
                    {`$shadows: (
  sm: 0 1px 2px rgba(0, 0, 0, 0.05),
  base: 0 2px 4px rgba(0, 0, 0, 0.1),
  md: 0 4px 8px rgba(0, 0, 0, 0.12),
  lg: 0 8px 16px rgba(0, 0, 0, 0.15)
);

@each $name, $shadow in $shadows {
  .shadow-#{$name} {
    box-shadow: $shadow;
  }
}

// Kullanım
.card {
  box-shadow: map-get($shadows, md);
}`}
                </pre>
            </section>

            <section className={styles.functionsExample}>
                <h2>6. Built-in Functions</h2>
                <p>SCSS birçok yerleşik fonksiyon sunar:</p>

                <ul style={{ lineHeight: '1.8' }}>
                    <li><strong>Color Functions:</strong> lighten(), darken(), saturate(), desaturate(), rgba()</li>
                    <li><strong>Math Functions:</strong> percentage(), round(), ceil(), floor(), abs(), min(), max()</li>
                    <li><strong>String Functions:</strong> quote(), unquote(), to-upper-case(), to-lower-case()</li>
                    <li><strong>List Functions:</strong> length(), nth(), join(), append()</li>
                    <li><strong>Map Functions:</strong> map-get(), map-merge(), map-has-key(), map-keys(), map-values()</li>
                </ul>

                <pre className={styles.codeBlock}>
                    {`$base-color: #3498db;

.element {
  color: lighten($base-color, 20%);
  background: darken($base-color, 10%);
  border: 1px solid saturate($base-color, 30%);
  
  width: percentage(0.5); // 50%
  padding: round(10.6px); // 11px
}`}
                </pre>
            </section>
        </div>
    );
}
