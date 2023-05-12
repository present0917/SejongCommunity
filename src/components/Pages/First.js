import Doyouknow from "../../etc/Doyouknow"
import './First.css'
const First =()=>
{

    return(
        <div>
            <div>(알람와있으면) n 개의 알람이 있습니다 확인해보세요 (누르면 alert로 redirect)</div>
            <div>최근 글 5개정도?</div>
            
            <div className="kknow">
            <Doyouknow></Doyouknow>
            </div>
        </div>
    )
}
export default First