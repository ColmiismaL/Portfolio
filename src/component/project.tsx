import { styled } from 'styled-components';
import gitcat from '../assets/gitcat.png';

const Project = styled.div`
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

function Projectcom() {
  return (
    <Project>
      <Projecttitle>
        <Paragraph>일요시네마</Paragraph>
        <a href="https://github.com/codestates-seb/seb45_main_001">
          <Gitcat src="/gitcat.png" alt="깃헙링크"></Gitcat>
        </a>
      </Projecttitle>
      <Paragraph>프로젝트 컴포넌트</Paragraph>
    </Project>
  );
}

export default Projectcom;
