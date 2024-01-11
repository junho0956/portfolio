import styles from './page.module.css';
import Title from "@/components/Title";
import bind from 'classnames';
import {educations, experiences, projects} from "@/common/data";
import Record from "@/components/Record";
import Project from "@/components/Project";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className={bind(styles.introduction, styles.section)}>
        <div className={styles.wrapper}>
          <Title subtitle="Frontend Developer" title="김준호" />
          <p className={styles.introduce}>
            <Link href="https://main.projectwith.io" target="_blank">위플레이라이트</Link>에서 2년차 프론트엔드 개발자로 일하고 있습니다.<br/>
            문제를 해결하고 비즈니스의 성장에 기여하는 일을 최우선으로 합니다.<br/>
            주도적으로 업무를 진행할 수 있는 환경을 선호합니다.
          </p>
        </div>
      </section>
      <section className={bind(styles.record, styles.section)}>
        <div className={styles.wrapper}>
          <Title subtitle="Experience" title="이력" />
          {experiences.map((i, idx) => (
              <Record key={idx} {...i} />
          ))}
        </div>
      </section>
      <section className={bind(styles.education, styles.section)}>
        <div className={styles.wrapper}>
          <Title subtitle="Education" title="교육" />
          <div>
            {educations.map((i, idx) => (
              <Record key={idx} {...i} />
            ))}
          </div>
        </div>
      </section>
      <section className={bind(styles.projects, styles.section)}>
        <div className={styles.wrapper}>
          <Title subtitle="Projects" title="프로젝트" />
          <div className={styles.projectList}>
            {projects.map(project => (
              <Project key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
      <section className={bind(styles.contact, styles.section)}>
        <div className={styles.wrapper}>
          <Title subtitle="Contact" title="연락" />
          <div>거주지 : 서울특별시 영등포구</div>
          <div>이메일 : junho0956@naver.com</div>
        </div>
      </section>
    </>
  )
}
