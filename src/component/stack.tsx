import { styled } from 'styled-components';

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
          <Javascriptimg src="/Javascript.svg" alt="Javascript"></Javascriptimg>
        </Stackli>
        <Stackli>
          <Reactimg src="/React.svg" alt="React"></Reactimg>
        </Stackli>
        <Stackli>
          <Typescriptimg src="/Typescript.svg" alt="Typescript"></Typescriptimg>
        </Stackli>
        <Stackli>
          <Htmlimg src="/HTML5.svg" alt="HTML5"></Htmlimg>
        </Stackli>
        <Stackli>
          <Css3img src="/CSS3.svg" alt="CSS3"></Css3img>
        </Stackli>
        <Stackli>
          <Reduximg src="/Redux.svg" alt="Redux"></Reduximg>
        </Stackli>
        <Stackli>
          <Viteimg src="/Vite.svg" alt="Vite"></Viteimg>
        </Stackli>
        <Stackli>
          <Gitimg src="/Git.svg" alt="Git"></Gitimg>
        </Stackli>
        <Stackli>
          <Amazonimg src="/Amazon_S3.svg" alt="Amazon S3"></Amazonimg>
        </Stackli>
      </Stack>
    </>
  );
}

export default Stackcom;
