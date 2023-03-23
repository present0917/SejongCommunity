import Navi from './components/Nav/Navi';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './components/Pages/SetRouter';
import { BrowserRouter } from 'react-router-dom';
import Set from './components/Pages/Set';
import App from './App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </div>
);
