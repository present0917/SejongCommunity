import './BottomNavi.css'
import "./FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomNavi=()=>
{
    return (
        <nav className="wrapper">
        <div>
        <FontAwesomeIcon icon="home" /> {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
      </div>
      <div>
        <FontAwesomeIcon icon="compass" />
      </div>
      <div>
        <FontAwesomeIcon icon="plus" />
      </div>
      <div>
        <FontAwesomeIcon icon="medal" />
      </div>
      <div>
        <FontAwesomeIcon icon="user" />
      </div>
      </nav> 
    )
}
export default BottomNavi