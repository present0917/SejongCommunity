import BottomNavi from './components/Bottom/BottomNavi'
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <Router />
    <BottomNavi/>
    </div>
);
