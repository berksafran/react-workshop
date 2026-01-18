import styles from '../page.module.scss';

type CounterHistoryProps = {
    history: number[];
};

export function CounterHistory({ history }: CounterHistoryProps) {
    return (
        <div className={styles.history}>
            {history.map((value, index) => (
                <div key={index} className={styles.historyItem}>
                    <span className={styles.historyIndex}>#{index}</span>
                    <span className={styles.historyValue}>{value}</span>
                    {index > 0 && (
                        <span className={styles.historyChange}>
                            {value > history[index - 1] ? '↑' : value < history[index - 1] ? '↓' : '='}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}
