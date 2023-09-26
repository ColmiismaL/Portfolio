import { styled } from 'styled-components';

const Intro = styled.div`
  margin-bottom: 1px;
`;

const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.6em;
  color: #333;
`;

const Gitcat = styled.img`
  margin-left: 5px;
  height: 1rem;
  width: 1rem;
`;

const Projecttitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

function Introcom() {
  return (
    <Intro>
      <Paragraph>Mobile : 010-6847-0345</Paragraph>
      <Paragraph>E-mail : colruck32@gmail.com</Paragraph>
      <br />
      <Paragraph>
        React와 typescript 바탕으로 웹 개발이 가능한 프론트엔드 신입 개발자
        서강의입니다. React,Redux toolkit을 사용한 앱 개발 및 배포 경험이
        있습니다. 기존에 웹 개발에 대한 관심을 갖고 있었고 시각적 기능과 관련이
        더 높은 프론트엔드 개발자가 되기 위해, 6개월 개발 부트캠프인
        코드스테이츠를 수료했습니다. 수료 이후엔 부트캠프에서 다뤘던 작업들을
        바탕으로 새로운 프로젝트나 기본적인 CS를 이해하기 위한 학습을 이어나가고
        있습니다.
      </Paragraph>
    </Intro>
  );
}

export default Introcom;
