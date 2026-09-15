import styles from './App.module.css';
import { profile, projects, skills } from './content';

// 화살표는 링크의 장식이다. 화면 읽기 도구에는 링크 문구만 전달한다.
function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

// 한 페이지 안의 이동은 기본 앵커를 사용한다. 섹션 ID는 메뉴·바로가기·테스트와 연결된다.
// 추후 디자인을 바꾸더라도 ID와 의미 있는 제목 구조는 유지한다.
export default function App() {
  return (
    <>
      <a className={styles.skipLink} href="#main">
        본문으로 건너뛰기
      </a>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="서강의 포트폴리오 처음으로">
          <span className={styles.brandMark} aria-hidden="true">
            S.
          </span>
          <span>
            {profile.name}
            <span className={styles.brandCaption}> / PORTFOLIO</span>
          </span>
        </a>
        <nav aria-label="주 메뉴" className={styles.nav}>
          <a href="#projects">프로젝트</a>
          <a href="#about">소개</a>
          <a className={styles.navContact} href="#contact">
            연결하기 <Arrow />
          </a>
        </nav>
      </header>
      <main id="main">
        <section id="top" className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span className={styles.dot} /> FRONTEND DEVELOPER
            </p>
            <h1 id="hero-title">
              아이디어를
              <br />
              사용할 수 있는
              <br />
              <span>경험으로.</span>
            </h1>
            <p className={styles.introduction}>{profile.introduction}</p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href="#projects">
                만든 프로젝트 보기 <Arrow />
              </a>
              <a
                className={styles.textLink}
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span className={styles.srOnly}>(새 탭)</span>
                <Arrow />
              </a>
            </div>
          </div>
          <div className={styles.heroArt} aria-hidden="true">
            <div className={styles.artTop}>
              <span>IDEA → INTERFACE</span>
              <span>01 / WEB</span>
            </div>
            <div className={styles.orbit}>
              <div className={styles.orbitInner} />
              <span className={styles.orbitPoint} />
            </div>
            <div className={styles.artStatement}>
              작은 생각에서
              <br />
              <strong>작동하는 화면까지.</strong>
            </div>
            <div className={styles.artBottom}>
              <span>REACT / TYPESCRIPT</span>
              <span>✳</span>
            </div>
          </div>
        </section>
        <div className={styles.chapterLine}>
          <span>SELECTED WORK</span>
          <span>만들며 배운 것들 ↓</span>
        </div>
        <section
          id="projects"
          className={styles.section}
          aria-labelledby="projects-title"
        >
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>01 — PROJECTS</p>
              <h2 id="projects-title">직접 만든 경험</h2>
            </div>
            <p>무엇을 만들고, 어떤 역할을 했는지.</p>
          </div>
          {projects.map((project) => (
            <article key={project.id} className={styles.project}>
              <div
                className={styles.projectVisual}
                aria-label="일요시네마 프로젝트를 표현한 그래픽"
              >
                <div className={styles.cinemaMeta}>
                  <span>SUNDAY CINEMA</span>
                  <span>VOL. 01</span>
                </div>
                <div className={styles.cinemaTitle}>
                  SUNDAY
                  <br />
                  <span>CINEMA.</span>
                </div>
                <div className={styles.filmFrames} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.cinemaFooter}>
                  <span>영화가 이어지는 일요일</span>
                  <span aria-hidden="true">▶</span>
                </div>
              </div>
              <div className={styles.projectCopy}>
                <p className={styles.eyebrow}>{project.category}</p>
                <h3>{project.title}</h3>
                <p className={styles.projectContext}>{project.context}</p>
                <p>{project.description}</p>
                <h4>기여한 작업</h4>
                <ul className={styles.contributions}>
                  {project.contributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className={styles.tags} aria-label="사용 기술">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <a
                  className={styles.projectLink}
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  프로젝트 코드 보기 <span className={styles.srOnly}>(새 탭)</span>
                  <Arrow />
                </a>
              </div>
            </article>
          ))}
        </section>
        <section id="about" className={styles.aboutSection} aria-labelledby="about-title">
          <div className={styles.aboutIntro}>
            <p className={styles.eyebrow}>02 — ABOUT</p>
            <h2 id="about-title">
              만드는 즐거움,
              <br />
              이해하는 습관.
            </h2>
            <p>{profile.background}</p>
          </div>
          <div className={styles.skills}>
            {skills.map((skill, index) => (
              <article className={styles.skill} key={skill.title}>
                <span className={styles.skillNumber}>0{index + 1}</span>
                <div>
                  <h3>{skill.title}</h3>
                  <p className={styles.skillDetail}>{skill.detail}</p>
                  <p>{skill.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className={styles.education} aria-labelledby="education-title">
          <p className={styles.eyebrow}>LEARNING JOURNEY</p>
          <div>
            <h2 id="education-title">코드스테이츠 프론트엔드 과정</h2>
            <p>
              JavaScript와 React 기반 학습 · 페어 프로그래밍과 코드 리뷰 · 팀 프로젝트 2회
            </p>
          </div>
        </section>
        <section id="contact" className={styles.contact} aria-labelledby="contact-title">
          <div>
            <p className={styles.eyebrow}>03 — CONNECT</p>
            <h2 id="contact-title">
              다음 이야기는
              <br />
              GitHub에서.
            </h2>
            <p>프로젝트와 코드를 더 자세히 살펴보세요.</p>
          </div>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.contactLink}
          >
            {profile.handle}
            <span className={styles.srOnly}> GitHub (새 탭)</span>
            <Arrow />
          </a>
        </section>
      </main>
      <footer className={styles.footer}>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>생각을 코드로, 코드를 경험으로.</span>
        <a href="#top">맨 위로 ↑</a>
      </footer>
    </>
  );
}
