import HeaderDefault from "./HeaderDefault";
import HeaderSearch from "./HeaderSearch";
import { Route, Routes} from "react-router-dom";

const HeaderRouter = () => {
    return(
    <Routes>
      <Route path="/" element={<HeaderDefault/>} />
       <Route path="/hsearch" element={<HeaderSearch />} />
     </Routes>
     )
};
export default HeaderRouter