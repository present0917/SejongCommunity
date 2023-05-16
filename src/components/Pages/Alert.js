import { useState,useEffect } from "react";
import PrintFetch from "../http/PrintFetch";
import Alertlist from "../../etc/Alertlist";
import { Link } from "react-router-dom";
const Alert = () => {
    const [testData,setTestData] = useState([])

    async function alarm() {
        const response = await fetch('/login');
        const data = await response.json();

       console.log(data);
        console.log(data.alarmCount);
        setTestData(Object.entries(data.alarmCount));
    };
    

    useEffect(() => {
        alarm();
        console.log('실행');
      }, []);

      useEffect(() => {
        console.log("Updated testData:", testData);
      }, [testData]);

    return (
        <div>
          <ul>
            {testData.map(([key, value]) => (
                
          <li key={key}>
            <Link to={`/tree/${key}`}>
            {key}번 트리에 {value}개의 알림이 있습니다.
            </Link>
          </li>
        ))}
      </ul>

        </div>
    )
}
export default Alert