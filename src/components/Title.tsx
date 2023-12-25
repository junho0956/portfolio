import styles from './Title.module.css';

type Props = {
    subtitle: string;
    title: string;
}
export default function Title(props:Props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.subTitle}>{props.subtitle}</div>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.mark} />
        </div>
    )
}
