import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { authstore } from './store/authstore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={authstore}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
);
