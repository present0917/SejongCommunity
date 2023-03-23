import { Route, Routes} from "react-router-dom";
import My from "./My";
import Search from "./Search";
import First from "./First";
import Login from "./Login";
const SetRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<First/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/my" element={<My />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
};

export default SetRouter;