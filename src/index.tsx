import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// HTML 진입점이 잘못 바뀐 경우 빈 화면으로 숨기지 않고 초기화 오류를 명시한다.
const container = document.getElementById('root');
if (!container) throw new Error('앱을 표시할 root 요소가 없습니다.');

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
