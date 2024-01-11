import styles from './Project.module.css';
import Link from "next/link";

export default function Project(props:PROJECT) {
  return (
    <Link href={props.detailUrl}>
      <div className={styles.wrapper}>
        {props.type && <div className={styles.type}>{props.type}</div>}
        <div className={styles.title}>{props.title}</div>
        <Link href={`https://${props.serviceUrl}`} target="_blank">
          <span className={styles.serviceUrl}>
            {props.serviceUrl}
          </span>
        </Link>
        {props.description.map((desc, idx) => (
          <p key={idx}>{desc}</p>
        ))}
      </div>
    </Link>
  )
}
