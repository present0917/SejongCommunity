import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import { useState,useEffect } from 'react';
import My from './components/Pages/My';
import Layout from './components/Nav/Layout';
import Error from './components/Pages/Error';
import First from './components/Pages/First';
import Login from './components/Pages/Login';
import Errorl from './components/Pages/Errorl';
import Forcheck from './components/Pages/ForCheck';
import AutoLogin from './context/auto-login';
import Alert from './components/Pages/Alert';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);
  const loginHandler=(id,password)=>
  {
    localStorage.setItem('isLoggedin','1');
  }
  const logoutHandler=(id,password)=>
  {
    localStorage.setItem('isLoggedin','0');
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Forcheck />,
      errorElement: <Error />,
      children: [
        {
          path: '', element: <Layout />,
          children: [
            { index: true, element: <First /> },
            { path: 'my', element: <My /> },
            { path: 'alert', element: <Alert /> },
          ]
        },
      ],
    },
    {
      path: '/login',
      element: <Login onlogin={loginHandler} onlogout={logoutHandler} />,
      errorElement: <Errorl />,
    }
  ]);
  return (
      <AutoLogin.Provider
      value={{
        isLoggedin:isLoggedIn
      }}>
        <RouterProvider router={router} />
      </AutoLogin.Provider>
  );
}
export default App;
