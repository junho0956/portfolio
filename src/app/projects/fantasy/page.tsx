import styles from './page.module.css';
import Title from "@/components/Title";
import {projects} from "@/common/data";
import Link from "next/link";

export default function Fantasy() {
  const fantasy = projects[0];
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <Title subtitle={fantasy.timestamp} title={fantasy.title} />

        <div className={styles.description}>
          {fantasy.description.map((desc, idx) => (
            <p key={idx}>{desc}</p>
          ))}
          <br/>
        </div>

        <div className={styles.subDesc}>
          <strong>URL</strong>
          <span> : </span>
          <Link href={`https://${fantasy.serviceUrl}`} target="_blank">
            {fantasy.serviceUrl}
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
          <span>NextJS, Typescript, styled-components, Google Analytics, GCP, Nginx</span>
        </div>

        <div className={styles.subDesc}>
          <strong>작업 내용</strong>
          <br/>
          <ul>
            <li>
              <div>프론트엔드 담당</div>
              <div>프론트엔드 팀원 없이 시작한 프로젝트로 현재까지 모든 개발을 혼자 담당하고 있습니다.</div>
            </li>
            <li>
              <div>PC/MOBILE 반응형 UI 개발</div>
              <div>초기에는 PC 사용자를 주력으로 개발했으나 Google Analytics 기준 80%의 점유율이 App 인 것으로 확인되어 반응형 UI 구현에 집중하였습니다.</div>
              <div>또한 자사 앱 중에서 본 서비스를 웹뷰로 제공해야 하는 기능이 필요하여 웹뷰를 적용하는 과정 중 발생한 문제들을 해결하였습니다.</div>
              <div>서비스 런칭 후 사용자 분들의 피드백을 빠르게 처리하였으며, 특히 모바일 관련 예상하지 못한 문제들을 경험할 수 있었습니다.</div>
            </li>
            <li>
              <div>서버 상태 관리 훅 개발 및 적용</div>
              <div>서버 상태 관리를 위한 훅을 직접 개발하고 프로젝트 전체에 적용하였습니다.</div>
              <div>
                React-Query, SWR 와 같은 유명한 상태 관리 훅들이 존재하지만
                본 서비스에 적용하기에는 적합하지 않다고 판단했습니다.
                가장 큰 이유는
                [수많은 기능들이 필요하지 않음],
                [프론트엔드 1인 개발이다보니 만약 라이브러리를 제대로 이해하고 있지 않다면 서비스 중에 발생한 문제 상황에서의 대처가 불안정할 수 있음]
                이렇게 2가지 였습니다.
              </div>
              <div>
                그래서 서비스에 필요하다고 판단되는 기능들을 모방하여 직접 커스텀 훅을 개발하고 전체 범위에 적용하였습니다.
              </div>
              <div>
                그 결과로 모든 컴포넌트별로 서버 상태 관리가 훨씬 수월해졌으며, 특히 서비스 간에 발생했던 문제에 대한 원인을 빠르게 접근하고 해결할 수 있었습니다.
              </div>
            </li>
            <li>
              <div>소규모 디자인 시스템 개발</div>
              <div>개발 과정에서 3번의 기획 변경이 있었고 이는 곧 디자인과 뷰 개발에 큰 영향을 미쳤습니다.</div>
              <div>그래서 프론트엔드 단에서는 요구사항과 디자인 변경에 따른 작업량을 최소화하기 위해 디자이너와 아래사항을 정리하였습니다.</div>
              <div>
                1. 대표 성격, 색상 등 서비스의 아이덴티티 정하기
                <br/>
                2. 공통적으로 사용할 수 있는 디자인 모듈
                <br/>
                3. 모든 컴포넌트는 최대한 재사용 가능하도록
                <br/>
              </div>
              <div>그 결과로 작은 규모 수준의 디자인 시스템이지만 아래와 같은 경험을 얻을 수 있었습니다.</div>
              <div>
                1. 변화에 대응하기 훨씬 수월하다.
                <br/>
                2. 재사용성이 높아짐으로써 생산성이 향상된다.
                <br/>
                3. 컴포넌트의 구조가 더욱 체계적으로 바뀐다. 하지만 복잡하거나 잘못된 구조는 오히려 역효과를 부를 수도 있다.
              </div>
            </li>
            <li>
              <div>페이지 특성에 맞는 렌더링 방법 사용</div>
              <div>SSR, CSR, ISR, SSG 과 같은 렌더링 방법을 활용하여 페이지별 특성에 맞도록 구현했습니다.</div>
            </li>
            <li>
              <div>기능 및 구현 개발에 집중했습니다.</div>
              <div>
                로그인 프로세스와 같은 기능적인 요소부터 슬라이드, 클립보드, 네비게이션, 애니메이션 등의 구현 능력이 필요한 요소까지 대부분 직접 개발함으로써
                서드파티 라이브러리의 의존성을 낮추고 개발 능력을 키우는 것에 집중했습니다.
              </div>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}
