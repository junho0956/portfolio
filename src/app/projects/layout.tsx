import styles from "@/app/projects/layout.module.css";

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {children}
      </div>
    </section>
  )
}
