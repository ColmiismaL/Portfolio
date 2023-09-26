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

function Mainpage() {
  return (
    <Container>
      <Card>
        <LeftSection>
          <Title>홍길동</Title>
          <Subtitle>웹 개발자</Subtitle>
          <Paragraph>
            안녕하세요! 저는 사용자 친화적인 웹사이트와 애플리케이션을 만들기
            위해 항상 노력하고 있습니다.
          </Paragraph>
        </LeftSection>
        <RightSection>
          <Title>스택 & 기술</Title>
          <Paragraph>
            - JavaScript <br />
            - React <br />
            - Node.js <br />
            - Express <br />
            - MongoDB <br />
          </Paragraph>
        </RightSection>
      </Card>
    </Container>
  );
}

export default Mainpage;
