import { styled } from 'styled-components';
import Javascript from '../asset/Javascript.svg';
import React from '../asset/React.svg';
import Typescript from '../asset/Typescript.svg';
import HTML5 from '../asset/HTML5.svg';
import CSS3 from '../asset/CSS3.svg';
import Redux from '../asset/Redux.svg';
import Vite from '../asset/Vite.svg';
import Git from '../asset/Git.svg';
import Amazon_S3 from '../asset/Amazon_S3.svg';

const Stack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 1em;
  line-height: 1.6em;
  color: #333;
  padding: 0;
`;

const Stackli = styled.li`
  font-size: 1em;
  line-height: 1.6em;
  list-style-type: none;
`;

const Javascriptimg = styled.img``;

const Amazonimg = styled.img``;

const Reactimg = styled.img``;

const Reduximg = styled.img``;

const Htmlimg = styled.img``;

const Css3img = styled.img``;

const Gitimg = styled.img``;

const Typescriptimg = styled.img``;

const Viteimg = styled.img``;

function Stackcom() {
  return (
    <>
      <Stack>
        <Stackli>
          <Javascriptimg src={Javascript} alt="Javascript"></Javascriptimg>
        </Stackli>
        <Stackli>
          <Reactimg src={React} alt="React"></Reactimg>
        </Stackli>
        <Stackli>
          <Typescriptimg src={Typescript} alt="Typescript"></Typescriptimg>
        </Stackli>
        <Stackli>
          <Htmlimg src={HTML5} alt="HTML5"></Htmlimg>
        </Stackli>
        <Stackli>
          <Css3img src={CSS3} alt="CSS3"></Css3img>
        </Stackli>
        <Stackli>
          <Reduximg src={Redux} alt="Redux"></Reduximg>
        </Stackli>
        <Stackli>
          <Viteimg src={Vite} alt="Vite"></Viteimg>
        </Stackli>
        <Stackli>
          <Gitimg src={Git} alt="Git"></Gitimg>
        </Stackli>
        <Stackli>
          <Amazonimg src={Amazon_S3} alt="Amazon S3"></Amazonimg>
        </Stackli>
      </Stack>
    </>
  );
}

export default Stackcom;
