import { styled, css, keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f4;
`;

const Card = styled.div`
  display: flex;
  width: 800px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const LeftSection = styled.div`
  width: 50%;
  padding: 30px;
  box-sizing: border-box;
`;

const RightSection = styled.div`
  width: 50%;
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

const Stack = styled.ul`
  font-size: 1em;
  line-height: 1.6em;
  color: #333;
`;

const Stackli = styled.li`
  font-size: 1em;
  line-height: 1.6em;
  color: #333;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

function Mainpage() {
  return (
    <Container>
      <Card>
        <LeftSection>
          <Title>서강의</Title>
          <Subtitle>프론트엔드 개발자</Subtitle>
          <Paragraph>
            React와 typescript 바탕으로 웹 개발이 가능한 프론트엔드 신입 개발자
            서강의입니다. React,Redux toolkit을 사용한 앱 개발 및 배포 경험이
            있습니다. 기존에 웹 개발에 대한 관심을 갖고 있었고 시각적 기능과
            관련이 더 높은 프론트엔드 개발자가 되기 위해, 6개월 개발 부트캠프인
            코드스테이츠를 수료했습니다. 수료 이후엔 부트캠프에서 다뤘던
            작업들을 바탕으로 새로운 프로젝트나 기본적인 CS를 이해하기 위한
            학습을 이어나가고 있습니다.
          </Paragraph>
        </LeftSection>
        <RightSection>
          <Section>
            <Title>스택 & 기술</Title>
            <Stack>
              <Stackli>JavaScript</Stackli>
              <Stackli>React</Stackli>
              <Stackli>Typescript</Stackli>
              <Stackli>HTML</Stackli>
              <Stackli>CSS</Stackli>
              <Stackli>Redux</Stackli>
              <Stackli>Vite</Stackli>
              <Stackli>Git</Stackli>
              <Stackli>AWS(S3)</Stackli>
            </Stack>
          </Section>
          <Section>
            <Title>프로젝트</Title>
            <Paragraph>
              <a href="https://github.com/codestates-seb/seb45_main_001">
                깃헙링크
              </a>
            </Paragraph>
            <Paragraph>프로젝트</Paragraph>
          </Section>
          <Section>
            <Title>교육</Title>
            <Paragraph>교육</Paragraph>
          </Section>
        </RightSection>
      </Card>
    </Container>
  );
}

export default Mainpage;
