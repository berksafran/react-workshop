import styles from '../page.module.scss';

type CounterDisplayProps = {
    count: number;
    title: string;
};

export function CounterDisplay({ count, title }: CounterDisplayProps) {
    return (
        <div className={styles.display}>
            <h3>{title}</h3>
            <div className={styles.count}>{count}</div>
        </div>
    );
}
