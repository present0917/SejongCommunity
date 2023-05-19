import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import Myfinal from "./components/Pages/test/Myfinal";
import Layout from "./components/Nav/Layout";
import Error from "./components/Pages/Error/Error";
import First from "./components/Pages/First";
import Login from "./components/Pages/Login/Login";

import Forcheck from "./components/Pages/ForCheck";
import AutoLogin from "./context/auto-login";
import Alert from "./components/Pages/Alert";
import Search from "./components/Pages/Search";
import MyPage from "./components/Pages/MyPage";
import Treeselect from "./components/Pages/Treeselect";
import Dynamictest from "./components/Pages/test/Dynamictest";
import Check from "./components/Pages/Check";
import Errorlogin from "./components/Pages/Error/Errorlogin";
//  import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Forcheck />,
      errorElement: <Error />,
      children: [
        {
          path: "",
          element: <Layout />,
          children: [
            { index: true, element: <First /> },
            { path: "my", element: <Myfinal /> },
            { path: "alert", element: <Alert /> },
            { path: "search", element: <Search /> },
            { path: "mypage", element: <MyPage /> },
            { path: "tree", element: <Treeselect /> },
            { path: "tree/:id", element: <Myfinal /> },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    { path: "errorlogin", element: <Errorlogin /> },
  ]);
  return (

      <RouterProvider router={router} />

  );
}
export default App;
