import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 빌드 자산을 상대 경로로 연결해 /Portfolio/ 같은 하위 경로에서도 불러올 수 있게 한다.
// 이 설정은 URL 경로만 처리하며 GitHub Pages 배포를 활성화하지는 않는다.
export default defineConfig({ plugins: [react()], base: './' });
