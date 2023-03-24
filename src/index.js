import Test from './components/Nav/Test'
import ReactDOM from 'react-dom/client';
import HeaderSearch from './components/Nav/Header/HeaderSearch';
import './index.css';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <Test>
        <Router />
      </Test>
    </BrowserRouter>
  </div>
);
