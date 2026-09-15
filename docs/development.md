# 서강의 포트폴리오

React와 TypeScript로 만든 개인 개발 포트폴리오입니다. 프로젝트 기여 내용, 사용 기술, 교육 경험과 GitHub 링크를 제공합니다.

## 실행

Node.js 24 LTS와 npm을 사용합니다. 명령은 저장소 루트에서 실행하세요.

```sh
npm ci
npm run dev
```

`package-lock.json`을 유일한 잠금 파일로 관리합니다. 패키지를 바꿀 때 이 파일도 함께 커밋하세요.

## 검증

```sh
npm run format:check
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm test
npm audit --audit-level=high
```

Playwright는 빌드 결과를 대상으로 데스크톱·모바일 표시, 내비게이션, 320px 화면의 가로 넘침, 접근성, 동작 감소 설정을 검사합니다. 외부 사이트의 현재 가동 여부는 자동 테스트에서 확인하지 않습니다.

## 구조

- `src/content.ts`: 소개와 프로젝트·기술 데이터
- `src/App.tsx`: 의미 있는 HTML로 구성한 페이지
- `src/App.module.css`: 컴포넌트 스타일과 반응형 배치
- `src/index.css`: 전역 스타일
- `tests/portfolio.spec.ts`: 실제 브라우저 검사
- `.github/workflows/ci.yml`: PR과 main 변경 시 자동 검사
- `.github/dependabot.yml`: 의존성과 Actions 업데이트 제안

## 콘텐츠 수정

내용은 기존 README와 화면에 있던 사실을 바탕으로 옮겼습니다. 프로젝트 이미지는 실제 화면 캡처가 아닌 CSS 그래픽입니다. 경력·성과·연락처를 공개하기 전에 최신 정보로 확인하세요.

프로젝트는 `src/content.ts`의 `Project` 타입에 맞춰 추가합니다. 공개 가능한 실제 스크린샷과 확인된 문제 해결 사례를 추가하면 상세 내용을 보강할 수 있습니다. 기존 팀 프로젝트의 HTTP 배포 주소는 현재 운영 여부가 확인되지 않아 화면에 노출하지 않았습니다.

## 배포

```sh
npm run build
npm run preview
```

정적 결과물은 `dist/`에 생성됩니다. `preview`는 로컬 확인용입니다. 2026-09-16 확인 시 저장소의 GitHub Pages는 비활성 상태(`has_pages: false`)이며, 현재 워크플로는 검사만 수행합니다. 따라서 `main` 병합만으로 등록된 홈페이지 주소에 새 화면이 배포되지는 않습니다.

Vite의 상대 경로 설정으로 정적 파일을 하위 경로에서도 제공할 수 있게 했습니다. 실제 호스팅의 HTTPS, 경로, 캐시 설정과 링크는 배포 환경에서 따로 확인해야 합니다. 공개 URL 확정 후 canonical URL과 소셜 공유 이미지를 추가하세요.

## 개편 내용

- Create React App에서 Vite로 전환하고 실행·빌드 경로 통일
- 사용하지 않는 Redux, Router, Styled-components 및 기존 도구 의존성 제거
- TypeScript·ESLint·Prettier 설정 분리 및 npm 잠금 파일 재생성
- 모바일 레이아웃, 본문 바로가기, 키보드 포커스, 한국어 메타데이터 추가
- 기존 저장소 이력 보존, 별도 브랜치에서 변경 검토

2023년 원문 이력서는 [resume-2023.md](resume-2023.md)에 보존했습니다. 루트 README는 기존 이력서 구성을 유지합니다.

## 후속 디자인 작업

현재 화면은 개발 환경 정비와 함께 만든 초기 개편안입니다. 기존 디자인과의 간격, 색상, 타이포그래피, 프로젝트 표현 방식은 이후 사용자와 함께 조정합니다.

- 소개와 프로젝트 내용은 `src/content.ts`, 배치와 스타일은 `src/App.module.css`에서 관리합니다.
- 이번 병합에서는 화면을 추가로 변경하지 않습니다. 후속 변경은 별도 브랜치와 PR에서 검토합니다.
- 디자인 변경 시 섹션 ID, 제목 구조, 키보드 이동, 모바일 가로 넘침과 색상 대비를 유지·재검증합니다.
