import { useState, useEffect, useContext } from "react";
import "./Alert.css";
import { Link } from "react-router-dom";
import LoadingContext from "../Nav/LoadingContext";
const Alert = (props) => {
  const [testData, setTestData] = useState([]);
  const { updateLoading } = useContext(LoadingContext);
  async function alarm() {
    updateLoading(true, "알림 확인중...");
    const response = await fetch("http://ec2-3-24-166-96.ap-southeast-2.compute.amazonaws.com:8080/login",{
      credentials: 'include'
    })
    ;
    const data = await response.json();
    setTestData(data.alarmCount);
    updateLoading(false);
  }
  useEffect(() => {
    alarm();
  }, []);

  useEffect(() => {}, [testData]);
  if (testData[0] === null) {
    return <></>;
  }
  return (
    <div>
      <ul>
        {testData.map((data) => (
          <li key={Math.random()}>
            <Link to={`/tree/${data.id}`} className="lis">
              <div>{data.name} 보드에 </div>
              {data.count}개의 알림이 있습니다.
              <br></br>
              <br></br>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Alert;
