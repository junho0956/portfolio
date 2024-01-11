import styles from './page.module.css';
import Title from "@/components/Title";
import {projects} from "@/common/data";
import Link from "next/link";

export default function Mbti() {
  const mbti = projects[1];
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <Title subtitle={mbti.timestamp} title={mbti.title} />
        
        <div className={styles.description}>
          {mbti.description.map((desc, idx) => (
            <p key={idx}>{desc}</p>
          ))}
          <br/>
        </div>
        
        <div className={styles.subDesc}>
          <strong>URL</strong>
          <span> : </span>
          <Link href={`https://${mbti.serviceUrl}`} target="_blank">
            {mbti.serviceUrl}
          </Link>
        </div>
        
        <div className={styles.subDesc}>
          <strong>개발 기여도</strong>
          <span> : </span>
          <span>100%</span>
        </div>
        
        <div className={styles.subDesc}>
          <strong>기술 스택</strong>
          <br/>
          <span>
            Typescript, React.js, Redux, Styled-components<br/>
            GCP - CE + nginx + pm2<br/>
            AWS - ECS + Docker, code pipeline
          </span>
        </div>
        
        <div className={styles.subDesc}>
          <strong>작업 내용</strong>
          <br/>
          <ul>
            <li>
              <div>프론트엔드 담당</div>
            </li>
            <li>
              <div>PC/MOBILE 반응형 UI 개발</div>
              <div>MBTI 검사 특성상 반응형 UI 로 개발하였습니다.</div>
            </li>
            <li>
              <div>Canvas 를 이용한 Radar 차트 구현</div>
              <div>차트 라이브러리를 이용할 계획이었으나, 디자이너의 요구사항에 맞는 커스텀 디자인을 적용하기 위해 canvas 를 이용하여 Radar 차트를 직접 구현했습니다.</div>
            </li>
          </ul>
        </div>
      
      </div>
    </section>
  )
}
