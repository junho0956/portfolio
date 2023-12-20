import Image from 'next/image'
import styles from './page.module.css';
import {IMAGES} from "@/common/images";
export default function Home() {
  return (
      <main className={styles.main}>
          <header className={styles.header}>
              <div className={styles.wrapper}>
                  <h1>junho0956</h1>
                  <ul>
                      <li><Image src={IMAGES.icon.github} alt="github" layout="fill" /></li>
                  </ul>
              </div>
          </header>
          <section className={styles.introduction}>
              <div className={styles.wrapper}>
                  <div className={styles.job}>Frontend Developer</div>
                  <div className={styles.name}>김준호</div>
                  <p className={styles.introduce}>
                      프론트엔드 개발자입니다.
                  </p>
              </div>
          </section>
          <section className={styles.record}>
              <div className={styles.wrapper}>
                이력
              </div>
          </section>
          <section className={styles.education}>
              <div className={styles.wrapper}>
                교육
              </div>
          </section>
      </main>
  )
}
