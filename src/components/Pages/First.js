import "./First.css";
import { useState } from "react";
const First = () => {
  return (
    <div>
      <div>
        (알람와있으면) n 개의 알람이 있습니다 확인해보세요 (누르면 alert로
        redirect)
      </div>
      <div className="alertContainer">
        <div className="treeAlert">3</div>
      </div>
    </div>
  );
};
export default First;
