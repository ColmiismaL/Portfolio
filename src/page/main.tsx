import { styled } from 'styled-components';
import Stackcom from '../component/stack';
import Projectcom from '../component/project';
import Educom from '../component/edu';
import Introcom from '../component/int';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #1d1d1d;
`;

const Card = styled.div`
  display: flex;
  width: 1280px;
  height: 720px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const LeftSection = styled.div`
  width: 28%;
  padding: 30px;
  box-sizing: border-box;
`;

const RightSection = styled.div`
  width: 72%;
  padding: 30px;
  background-color: #f9f9f9;
  box-sizing: border-box;
  overflow-y: auto;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #666;
`;

const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.6em;
  color: #333;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const Gitcat = styled.img`
  height: 20px;
  width: 20px;
`;

function Mainpage() {
  return (
    <Container>
      <Card>
        <LeftSection>
          <Title>서강의</Title>
          <Subtitle>프론트엔드 개발자</Subtitle>
          <Introcom></Introcom>
        </LeftSection>
        <RightSection>
          <Section>
            <Subtitle>스택 & 기술</Subtitle>
            <Stackcom></Stackcom>
          </Section>
          <Section>
            <Subtitle>프로젝트</Subtitle>
            <Projectcom></Projectcom>
          </Section>
          <Section>
            <Subtitle>교육</Subtitle>
            <Educom></Educom>
          </Section>
        </RightSection>
      </Card>
    </Container>
  );
}

export default Mainpage;
