import { Routes, Route } from 'react-router-dom';
import Mainpage from './page/main.tsx';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <GlobalStyle>
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </GlobalStyle>
  );
}

export default App;
