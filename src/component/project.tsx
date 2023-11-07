import { styled } from 'styled-components';
import gitcatpng from '../asset/gitcat.png';
import linkpng from '../asset/link.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateProject1,
  updateProject2,
  updateActiveProject,
} from '../slice/authslice';

const Project = styled.div``;

const MoviePoster = styled.div.attrs<{
  $y: number;
  $x: number;
  $posterUrl: string;
}>((props) => ({
  style: {
    backgroundImage: `url(${props.$posterUrl})`,
    top: `${props.$y + 15}px`,
    left: `${props.$x + 15}px`,
  },
}))`
  width: 524px;
  height: 326px;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: white;

  z-index: 300;

  visibility: hidden;

  position: fixed; // 마우스 위치에 따라 이동하기 위해 fixed로 설정합니다

  pointer-events: none;
`;

const Paracinema = styled.p`
  font-size: 1em;
  line-height: 1.6em;
  color: #ffbb00;
  cursor: default;

  font-weight: 700;

  &:hover ${MoviePoster} {
    visibility: visible;
  }
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

function Projectcom() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 1000,
    y: 1000,
  });
  const dispatch = useDispatch();

  const [posterUrl, setPosterUrl] = useState(
    'https://user-images.githubusercontent.com/129961035/268938130-12a2b51c-7716-40e8-826a-580e88667142.gif',
  );

  const [isposterUrl, setIsPosterUrl] = useState(true);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    const newIsPosterUrl = !isposterUrl;
    setIsPosterUrl(newIsPosterUrl);

    if (newIsPosterUrl) {
      setPosterUrl(
        'https://user-images.githubusercontent.com/129961035/268938130-12a2b51c-7716-40e8-826a-580e88667142.gif',
      );
    } else {
      setPosterUrl(
        'https://user-images.githubusercontent.com/129961035/268938150-9332c02b-38ff-46e9-aaea-6c2fc07b2819.gif',
      );
    }
  };

  const handleButtonClick = (projectNumber: number) => {
    dispatch(updateActiveProject(projectNumber));
  };

  return (
    <Project>
      <Projectwrap>
        <Projectwrap2>
          <Projecttitle>
            <Paracinema
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
            >
              <MoviePoster
                $x={mousePosition.x}
                $y={mousePosition.y}
                $posterUrl={posterUrl}
              />
              일요시네마
            </Paracinema>
            <a href="https://github.com/codestates-seb/seb45_main_001">
              <Gitcat src={gitcatpng} alt="깃헙링크"></Gitcat>
            </a>
            <a href="http://main-project-vite.s3-website.ap-northeast-2.amazonaws.com/">
              <Gitcat src={linkpng} alt="배포링크"></Gitcat>
            </a>
          </Projecttitle>
          <Paragraph>
            &nbsp;로그인, 회원가입 및 회원정보 검색 기능 담당
          </Paragraph>
        </Projectwrap2>
        <Projectbutton onClick={() => handleButtonClick(1)}>
          이슈 보기
        </Projectbutton>
      </Projectwrap>
      <Projectwrap>
        <Projectwrap2>
          <Projecttitle>
            <Paragraph>Nextjs 써보기</Paragraph>
            <a href="https://github.com/ColmiismaL/solofullproject">
              <Gitcat src={gitcatpng} alt="깃헙링크"></Gitcat>
            </a>
            <a href="/">
              <Gitcat src={linkpng} alt="배포링크"></Gitcat>
            </a>
          </Projecttitle>
          <Paragraph>
            &nbsp;넥스트 js를 사용하여 서버와 프론트 간의 연결 공부
          </Paragraph>
        </Projectwrap2>
        <Projectbutton onClick={() => handleButtonClick(2)}>
          이슈 보기
        </Projectbutton>
      </Projectwrap>
    </Project>
  );
}

export default Projectcom;
