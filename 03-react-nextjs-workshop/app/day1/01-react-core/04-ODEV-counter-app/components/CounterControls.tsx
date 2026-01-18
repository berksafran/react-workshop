import styles from '../page.module.scss';

type CounterControlsProps = {
    onIncrement: () => void;
    onDecrement: () => void;
    onReset: () => void;
};

export function CounterControls({ onIncrement, onDecrement, onReset }: CounterControlsProps) {
    return (
        <div className={styles.controls}>
            <button onClick={onDecrement} className={styles.button}>
                - Azalt
            </button>
            <button onClick={onReset} className={styles.buttonSecondary}>
                🔄 Sıfırla
            </button>
            <button onClick={onIncrement} className={styles.button}>
                + Artır
            </button>
        </div>
    );
}
