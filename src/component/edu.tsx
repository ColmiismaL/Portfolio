import { styled } from 'styled-components';

const Education = styled.div`
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

function Educom() {
  return (
    <Education>
      <Paragraph>남서울대학교 공간조형디자인전공</Paragraph>
      <Paragraph></Paragraph>
      <Paragraph>코드스테이츠 프론트엔드 45기</Paragraph>
    </Education>
  );
}

export default Educom;
