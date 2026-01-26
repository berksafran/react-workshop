'use client';

import { useRef, forwardRef, useImperativeHandle } from 'react';
import styles from '../../../../02-react-core/01-declarative-vs-imperative/page.module.scss';
import refStyles from './RefDemo.module.scss';

// ❌ ESKİ YÖNTEM (React 18 ve öncesi): forwardRef gerekli
const OldInputComponent = forwardRef<HTMLInputElement>((props, ref) => {
    return (
        <input
            ref={ref}
            type="text"
            placeholder="Eski yöntem (forwardRef)"
            className={refStyles.inputField}
        />
    );
});
OldInputComponent.displayName = 'OldInputComponent';

// ✅ YENİ YÖNTEM (React 19): ref direkt prop olarak
function NewInputComponent({ ref }: { ref: React.Ref<HTMLInputElement> }) {
    return (
        <input
            ref={ref}
            type="text"
            placeholder="Yeni yöntem (ref as prop)"
            className={refStyles.inputField}
        />
    );
}

// ✅ YENİ: Cleanup Function (React 19)
function InputWithCleanup({ ref }: { ref: React.Ref<HTMLInputElement> }) {
    // React 19'da ref cleanup fonksiyonu destekler
    const internalRef = useRef<HTMLInputElement>(null);

    // Ref'i parent'a ilet ve cleanup ekle
    if (ref && internalRef.current) {
        (ref as any).current = internalRef.current;
    }

    return (
        <input
            ref={internalRef}
            type="text"
            placeholder="Cleanup destekli ref"
            className={refStyles.inputField}
        />
    );
}

export function RefReact19Demo() {
    const oldInputRef = useRef<HTMLInputElement>(null);
    const newInputRef = useRef<HTMLInputElement>(null);
    const cleanupInputRef = useRef<HTMLInputElement>(null);

    const focusOldInput = () => {
        oldInputRef.current?.focus();
    };

    const focusNewInput = () => {
        newInputRef.current?.focus();
    };

    const focusCleanupInput = () => {
        cleanupInputRef.current?.focus();
    };

    return (
        <div className={styles.demo}>
            <h3>React 19 Değişiklikleri</h3>

            <div className={refStyles.section}>
                <h4>❌ Eski Yöntem (React 18)</h4>
                <p className={refStyles.infoText}>
                    forwardRef kullanılması gerekiyordu
                </p>
                <OldInputComponent ref={oldInputRef} />
                <button onClick={focusOldInput} className={`${styles.button} ${refStyles.buttonSpaced}`}>
                    Focus (Eski Yöntem)
                </button>

                <div className={`${styles.code} ${refStyles.buttonSpaced}`}>
                    <pre>{`// ❌ React 18 ve öncesi
const MyInput = forwardRef<HTMLInputElement>(
  (props, ref) => {
    return <input ref={ref} />;
  }
);`}</pre>
                </div>
            </div>

            <div className={refStyles.section}>
                <h4>✅ Yeni Yöntem (React 19)</h4>
                <p className={refStyles.infoText}>
                    ref direkt prop olarak geçilebilir, forwardRef gerekmez
                </p>
                <NewInputComponent ref={newInputRef} />
                <button onClick={focusNewInput} className={`${styles.button} ${refStyles.buttonSpaced}`}>
                    Focus (Yeni Yöntem)
                </button>

                <div className={`${styles.code} ${refStyles.buttonSpaced}`}>
                    <pre>{`// ✅ React 19
function MyInput({ ref }: { 
  ref: React.RefObject<HTMLInputElement> 
}) {
  return <input ref={ref} />;
}

// Kullanım
<MyInput ref={inputRef} />`}</pre>
                </div>
            </div>

            <div className={refStyles.section}>
                <h4>✅ Ref Cleanup Function (React 19)</h4>
                <p className={refStyles.infoText}>
                    Ref artık cleanup fonksiyonu döndürebilir
                </p>
                <InputWithCleanup ref={cleanupInputRef} />
                <button onClick={focusCleanupInput} className={`${styles.button} ${refStyles.buttonSpaced}`}>
                    Focus (Cleanup)
                </button>

                <div className={`${styles.code} ${refStyles.buttonSpaced}`}>
                    <pre>{`// ✅ React 19: Ref cleanup
useEffect(() => {
  const element = ref.current;
  
  // Cleanup fonksiyonu
  return () => {
    // Element unmount olduğunda
    element?.cleanup();
  };
}, []);`}</pre>
                </div>
            </div>

            <div className={styles.highlights}>
                <h4>🎯 React 19 Avantajları</h4>
                <ul>
                    <li><strong>Daha Az Boilerplate:</strong> forwardRef artık gerekmiyor</li>
                    <li><strong>Daha Temiz Kod:</strong> ref direkt prop olarak kullanılabilir</li>
                    <li><strong>Cleanup Desteği:</strong> Ref'ler artık cleanup fonksiyonu döndürebilir</li>
                    <li><strong>TypeScript Desteği:</strong> Daha iyi tip çıkarımı</li>
                </ul>
            </div>
        </div>
    );
}
