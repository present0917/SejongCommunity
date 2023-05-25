import { useState,useEffect } from "react";
import PrintFetch from "../http/PrintFetch";
import Alertlist from "../../etc/Alertlist";
import { Link } from "react-router-dom";
const Alert = (props) => {
    const [testData,setTestData] = useState([])

    async function alarm() {
        const response = await fetch('/login');
        const data = await response.json();
      console.log(data);
      setTestData(data.alarmCount);

    };
    useEffect(() => {
        alarm();
      }, []);

      useEffect(() => {
        console.log("Updated testData:", testData);
      }, [testData]);

    return (
        <div>
          <ul>
            {/* {testData.map((data) => (
                
          <li key={Math.random()}>
            <Link to={`/tree/${data.id}`}>
            {data.name} 트리에 {data.count}개의 알림이 있습니다.
            </Link>
          </li>
        ))} */}
      </ul>

        </div>
    )
}
export default Alert