import { Route, Routes} from "react-router-dom";
import My from "./components/Pages/My";
import Search from "./components/Pages/Search";
import App from "./App";

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/my" element={<My />} />
      </Routes>
  );
};

export default Router;