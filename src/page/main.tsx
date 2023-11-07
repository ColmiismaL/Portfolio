import styled, { css } from 'styled-components';
import Stackcom from '../component/stack';
import Projectcom from '../component/project';
import Educom from '../component/edu';
import Introcom from '../component/int';
import { useDispatch, useSelector } from 'react-redux';
import { DataState } from '../slice/authslice';
import Project1 from '../component/pro1more';
import Project2 from '../component/pro2more';
import { useState, useEffect } from 'react';
import InstructionPopup from '../component/instructionpopup';
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import { updateActiveProject } from '../slice/authslice';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #1d1d1d;
`;

const Card = styled.div`
  display: flex;
  width: 70%;
  height: 85vh;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const LeftSection = styled.div`
  width: 25%;
  padding: 30px;
  box-sizing: border-box;
  overflow-y: auto;
`;

const RightSection = styled.div`
  width: 75%;
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
  const [showPopup, setShowPopup] = useState(true);

  const activeProject = useSelector(
    (state: { data: DataState }) => state.data.activeProject,
  );

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 6000); // 5초 후에 팝업을 숨김
    return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머를 정리
  }, []);

  return (
    <Container>
      {showPopup && <InstructionPopup />}
      <Card>
        <LeftSection>
          <Title>서강의</Title>
          <Subtitle>프론트엔드 개발자</Subtitle>
          <Introcom></Introcom>
        </LeftSection>
        <RightSection>
          {
            {
              null: (
                <>
                  <Section>
                    <Subtitle>스택 & 기술</Subtitle>
                    <Stackcom />
                  </Section>
                  <Section>
                    <Subtitle>프로젝트</Subtitle>
                    <Projectcom />
                  </Section>
                  <Section>
                    <Subtitle>교육</Subtitle>
                    <Educom />
                  </Section>
                </>
              ),
              1: <Project1 />,
              2: <Project2 />,
            }[activeProject || 'null'] // 현재 활성화된 프로젝트에 따라 렌더링할 컴포넌트를 선택합니다.
          }
        </RightSection>
      </Card>
    </Container>
  );
}

export default Mainpage;
