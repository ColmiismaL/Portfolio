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
      <Paragraph>교육 컴포넌트</Paragraph>
    </Education>
  );
}

export default Educom;
