import styles from '../page.module.scss';

type CounterStatsProps = {
    history: number[];
};

export function CounterStats({ history }: CounterStatsProps) {
    return (
        <div className={styles.stats}>
            <div className={styles.stat}>
                <span className={styles.label}>Toplam İşlem:</span>
                <span className={styles.value}>{history.length - 1}</span>
            </div>
            <div className={styles.stat}>
                <span className={styles.label}>En Yüksek:</span>
                <span className={styles.value}>{Math.max(...history)}</span>
            </div>
            <div className={styles.stat}>
                <span className={styles.label}>En Düşük:</span>
                <span className={styles.value}>{Math.min(...history)}</span>
            </div>
        </div>
    );
}
