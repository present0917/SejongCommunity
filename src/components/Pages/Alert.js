import { useState,useEffect } from "react";
import './Alert.css'
import { Link } from "react-router-dom";
const Alert = (props) => {
    const [testData,setTestData] = useState([])

    async function alarm() {
        const response = await fetch('/login');
        const data = await response.json();
      setTestData(data.alarmCount);

    };
    useEffect(() => {
        alarm();
      }, []);

      useEffect(() => {
      }, [testData]);

    return (
        <div >
          <ul>
            {testData.map((data) => (
                
          <li key={Math.random()}>
            <Link to={`/tree/${data.id}`}   className="lis">
            <div>{data.name} 트리에 </div>{data.count}개의 알림이 있습니다.
            <br></br><br></br>
            </Link>
          </li>
          
        ))}
        
      </ul>

        </div>
    )
}
export default Alert