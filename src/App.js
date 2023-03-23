import Set from './components/Pages/Set'
import { BrowserRouter } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Login from './components/Pages/Login';
import { Routes,Route } from 'react-router-dom';
function App() {
  const [isLogin, setisLogin]=useState(localStorage.getItem('login'));
  return (
    <Routes>
      <Route path="/" element={<Set/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}
export default App;
