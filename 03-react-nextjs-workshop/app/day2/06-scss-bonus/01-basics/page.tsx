import styles from './BasicsDemo.module.scss';

export default function ScssBasicsPage() {
    return (
        <div className={styles.basicsDemo}>
            <h1>SCSS Basics - Temel Kavramlar</h1>

            {/* Variables Example */}
            <section className={styles.variablesExample}>
                <h2>1. Variables (Değişkenler)</h2>
                <p>SCSS değişkenleri ile renk, boyut ve diğer değerleri merkezi olarak yönetebilirsiniz.</p>

                <div className={styles.colorPalette}>
                    <div className={`${styles.colorBox} ${styles.primary}`}>
                        <span>Primary</span>
                        <small>#3498db</small>
                    </div>
                    <div className={`${styles.colorBox} ${styles.secondary}`}>
                        <span>Secondary</span>
                        <small>#2ecc71</small>
                    </div>
                    <div className={`${styles.colorBox} ${styles.danger}`}>
                        <span>Danger</span>
                        <small>#e74c3c</small>
                    </div>
                    <div className={`${styles.colorBox} ${styles.warning}`}>
                        <span>Warning</span>
                        <small>#f39c12</small>
                    </div>
                </div>

                <pre style={{ marginTop: '16px', background: '#f8f9fa', padding: '16px', borderRadius: '8px', overflow: 'auto' }}>
                    {`$primary-color: #3498db;
$secondary-color: #2ecc71;

.button {
  background-color: $primary-color;
}`}
                </pre>
            </section>

            {/* Nesting Example */}
            <section className={styles.nestingExample}>
                <h2>2. Nesting (İç İçe Yazım)</h2>
                <p>SCSS ile CSS seçicilerini HTML yapısına benzer şekilde iç içe yazabilirsiniz.</p>

                <div className={styles.parentElement}>
                    <strong>Parent Element</strong>
                    <div className={styles.childElement}>
                        <strong>Child Element</strong>
                        <div className={styles.grandchildElement}>
                            Grandchild Element
                        </div>
                    </div>
                    <div className={`${styles.childElement} ${styles.parentElement}--highlighted`}>
                        <strong>Highlighted Child</strong>
                    </div>
                </div>

                <pre style={{ marginTop: '16px', background: '#f8f9fa', padding: '16px', borderRadius: '8px', overflow: 'auto' }}>
                    {`.parent {
  .child {
    .grandchild {
      color: blue;
    }
  }
  
  &:hover {
    background: gray;
  }
}`}
                </pre>
            </section>

            {/* Mixins Example */}
            <section className={styles.mixinsExample}>
                <h2>3. Mixins (Yeniden Kullanılabilir Stiller)</h2>
                <p>Mixinler ile tekrar eden stil bloklarını parametrelerle yeniden kullanabilirsiniz.</p>

                <div className={styles.buttonGroup}>
                    <button className={styles.primaryButton}>Primary Button</button>
                    <button className={styles.secondaryButton}>Secondary Button</button>
                    <button className={styles.dangerButton}>Danger Button</button>
                </div>

                <pre style={{ marginTop: '16px', background: '#f8f9fa', padding: '16px', borderRadius: '8px', overflow: 'auto' }}>
                    {`@mixin button-style($bg, $text) {
  background-color: $bg;
  color: $text;
  padding: 10px 20px;
}

.primaryButton {
  @include button-style(#3498db, white);
}`}
                </pre>
            </section>

            {/* Parent Selector Example */}
            <section className={styles.parentSelectorExample}>
                <h2>4. Parent Selector (&amp;)</h2>
                <p>& sembolü ile parent seçiciyi referans alabilir ve BEM metodolojisini kolayca uygulayabilirsiniz.</p>

                <div className={`${styles.bemExample} ${styles['bemExample--featured']}`}>
                    <div className={styles.bemExample__header}>
                        BEM Example Header
                    </div>
                    <div className={styles.bemExample__body}>
                        Bu bir BEM (Block Element Modifier) örneğidir. Hover yapın!
                    </div>
                </div>

                <pre style={{ marginTop: '16px', background: '#f8f9fa', padding: '16px', borderRadius: '8px', overflow: 'auto' }}>
                    {`.block {
  &__element {
    // .block__element
  }
  
  &--modifier {
    // .block--modifier
  }
  
  &:hover {
    // .block:hover
  }
}`}
                </pre>
            </section>

            {/* Responsive Example */}
            <section className={styles.responsiveExample}>
                <h2>5. Responsive Design with Mixins</h2>
                <p>Ekran boyutunuza göre renk değişir. Tarayıcı pencerenizi yeniden boyutlandırın!</p>

                <div className={styles.responsiveBox}>
                    Responsive Box
                </div>

                <pre style={{ marginTop: '16px', background: '#f8f9fa', padding: '16px', borderRadius: '8px', overflow: 'auto' }}>
                    {`@mixin respond-to($breakpoint) {
  @if $breakpoint == mobile {
    @media (max-width: 767px) {
      @content;
    }
  }
}

.box {
  @include respond-to(mobile) {
    background: red;
  }
}`}
                </pre>
            </section>
        </div>
    );
}
