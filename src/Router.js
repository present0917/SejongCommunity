import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Main from "./components/Pages/Main";
import My from "./components/Pages/My";
import Search from "./components/Pages/Search";
import App from "./App";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/my" element={<My />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;