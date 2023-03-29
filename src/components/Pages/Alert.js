import { useState } from "react";
import PrintFetch from "../http/PrintFetch";

const Alert = () => {
    const [testData,setTestData] = useState([])
    async function fetchtest() {
        const response = await fetch('https://swapi.dev/api/films');
        const data = await response.json();
        const mapping = await data.results.map((element)=>{
            return{
                id:element.episode_id,
                title:element.title,
            };
        }
        );
        setTestData(mapping);
    };
    return (

        <div>
            alert
            <button onClick={fetchtest}>fetch</button>
            <PrintFetch data={testData} key={testData.id}></PrintFetch>
        </div>
    )
}
export default Alert