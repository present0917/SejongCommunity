import BottomNavi from './components/Bottom/BottomNavi'
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import { BrowserRouter, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

   
    <BrowserRouter>
    <Router />
      <BottomNavi />
    
    </BrowserRouter>
  </div>
);
