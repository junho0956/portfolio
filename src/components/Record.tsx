import styles from './Record.module.css';

export default function Record(props:RECORD) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.timeRecord}>
                <div className={styles.time}>{props.timestamp}</div>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.subTitle}>{props.subTitle}</div>
            </div>
            <div className={styles.records}>
                {props.records.map((record, idx) => (
                    <div className={styles.record} key={idx}>{record}</div>
                ))}
            </div>
        </div>
    )
}
