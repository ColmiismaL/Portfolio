export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  context: string;
  contributions: string[];
  technologies: string[];
  repositoryUrl: string;
}

export const profile = {
  name: '서강의',
  handle: 'ColmiismaL',
  githubUrl: 'https://github.com/ColmiismaL',
  introduction:
    'React와 TypeScript로 웹에서의 경험을 만듭니다. 화면을 구현하는 일부터 사용자 흐름을 다듬는 일까지, 직접 만든 프로젝트로 소개합니다.',
  background:
    '게임메이커와 Unity, 게임 모딩으로 시작한 만들기의 즐거움을 웹 개발로 이어가고 있습니다. 코드스테이츠 프론트엔드 과정을 수료하고, 프로젝트와 CS 학습을 통해 기초를 다져 왔습니다.',
};

export const projects: Project[] = [
  {
    id: 'sunday-cinema',
    number: '01',
    title: '일요시네마',
    category: 'TEAM PROJECT · WEB',
    description:
      '영화 예고편을 둘러보고, 별점과 댓글로 감상을 나누는 영화 리뷰 프로젝트입니다.',
    context: '4인 팀 · 4주 · 프론트엔드',
    contributions: [
      '헤더와 회원정보 관련 화면 및 기능 구현',
      '검색 자동완성 기능 구현',
      'Webpack에서 Vite로 전환하고 AWS S3로 배포한 프로젝트에 참여',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'Vite',
      'Styled-components',
      'AWS S3',
    ],
    repositoryUrl: 'https://github.com/codestates-seb/seb45_main_001',
  },
];

export const skills = [
  {
    title: '화면과 인터랙션',
    detail: 'React · TypeScript · JavaScript',
    description:
      '컴포넌트를 구성하고 검색, 회원정보 등 사용자가 직접 만나는 기능을 구현했습니다.',
  },
  {
    title: '스타일과 구조',
    detail: 'HTML · CSS · Styled-components',
    description:
      '화면의 구조와 스타일을 나누고, 웹의 기본 요소를 활용해 내용을 표현합니다.',
  },
  {
    title: '협업과 배포',
    detail: 'Git · Redux Toolkit · Vite · AWS S3',
    description:
      '팀 프로젝트에서 상태 관리와 빌드 도구를 사용하고 정적 웹 배포를 경험했습니다.',
  },
];
