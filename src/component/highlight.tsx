import { useEffect } from 'react';
import styled from 'styled-components';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';

interface CodeProps {
  codeInput: string;
}

const Component = styled.div`
  background-color: #2e2e2e;
  border-radius: 6px;
  margin: 16px 0px;
`;

const Code: React.FC<CodeProps> = ({ codeInput }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [codeInput]);

  return (
    <Component>
      <pre>
        <code>{codeInput}</code>
      </pre>
    </Component>
  );
};

export default Code;
