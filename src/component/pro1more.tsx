import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateActiveProject } from '../slice/authslice';
import Code from './highlight';

const Project = styled.div``;

const Paragraph = styled.p`
  font-size: 0.9em;
  line-height: 1.6em;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  color: #666;
`;

const Projectwrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Projectwrap2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Projectbutton = styled.button`
  width: 80px;
  height: 32px;
  background-color: #ffbb00;
  color: #1d1d1d;
  border: none;
  text-align: center;
  align-items: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 2px;
  transition: background-color 0.3s;
  margin-right: 5%;

  &:hover {
    background-color: #ffd76a;
  }
`;

function Project1() {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(updateActiveProject(null));
  };

  return (
    <Project>
      <Projectwrap>
        <Projectwrap2>
          <Subtitle>일요시네마</Subtitle>
        </Projectwrap2>
        <Projectbutton onClick={handleButtonClick}>돌아가기</Projectbutton>
      </Projectwrap>
      <Paragraph>
        <br />
        영화 소개(예고편), 유튜브 요약본!! /별점/리뷰 사이트 <br />팀 명 :
        일요시네마 <br /> 프로젝트 명 : 일요시네마 <br /> 프로젝트 기간 :
        2023.08.25 ~ 2023.09.19
      </Paragraph>
      <Paragraph>
        <br />
        1. 스타일드 컴포넌트 관련 props 이슈
      </Paragraph>
      <Code
        codeInput={`const HeaderStyle = styled.header<{ $scrolled: boolean }>'
        background-color: \${(props) =>
          props.$scrolled ? '#1d1d1d' : 'transparent'};
        ';`}
      />
      <Paragraph>
        스타일드 컴포넌트에 props를 건네줄 때 $를 붙여야 자식 요소에 예를 들어
        다른 하위 div에 div scrolled:=false 같은 불필요한 요소가 붙는 경우를
        막을 수 있습니다. 처음 작업할 때는 그걸 모르고 그냥 넘겨버려서 에러가
        여러 차례 나기도 했었습니다.
      </Paragraph>
      <Paragraph>
        <br />
        2. typescript의 type을 any로 설정하는 부분
      </Paragraph>
      <Code
        codeInput={`"@typescript-eslint/no-explicit-any": "warn",
"no-unused-vars": "off",
"@typescript-eslint/no-unused-vars": "warn",`}
      />
      <Paragraph>
        원래 typescript에서 type을 any로 설정하는 것을 지양하는 것이 맞기 때문에
        에러를 주지만 저는 당장에 서버에서 들어오는 리스폰스가 아직 정해져있지
        않기 때문에 any를 warn으로 해주는 것으로 처리했었습니다. 초창기나
        테스트등이 필요할 때는 타입스크립트 설정을 통해서 경고를 주고 안주고를
        바꿔두는게 편할 듯 싶습니다.
      </Paragraph>
      <Paragraph>
        <br />
        3. seo와 웹표준화 등과 관련한 이슈
      </Paragraph>
      <Code
        codeInput={` <meta charset="UTF-8" />
<meta name="title" content="일요시네마" />
<meta name="description" content="추천영화(예고편) 별점/댓글 프로젝트" />
<meta name="keywords" content="영화, 평점, 예고편" />
<meta name="author" content="FE 김희목, FE 서강의, FE 정진용, BE 박찬우, BE 김동주, Be 장정규" />
<meta name="copyright" content="© 2023, 이 작품은 MIT 라이센스에 따라 배포됩니다." />
<meta property="og:title" content="일요시네마" />
<meta property="og:description" content="추천영화(예고편) 별점/댓글 프로젝트" />
<meta property="og:image" content="https://main-project-vite.s3.amazonaws.com/Group35.png" />
<title>일요시네마 - 추천영화(예고편) 별점/댓글 프로젝트</title>`}
      />
      <Paragraph>
        seo 최적화와 웹표준화 등을 시도하려 했었으며 meta 부분을 만들고
        section이나 title등 웹표준화 등을 시도하려고 하는 중입니다.
      </Paragraph>
    </Project>
  );
}

export default Project1;
