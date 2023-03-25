import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Search from './components/Pages/Search';
import My from './components/Pages/My';
import Layout from './components/Nav/Layout';
import Error from './components/Pages/Error';
import First from './components/Pages/First';
import Login from './components/Pages/Login';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { path: '', element: <First /> },
        { path: 'login', element: <Login/> },
        { path: 'my', element: <My /> },
      ],
    }
  ]);
  return (

    <>
      <RouterProvider router={router} />
    </>

  );
}
export default App;
