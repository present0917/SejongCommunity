import { useState } from "react";
import PrintFetch from "../http/PrintFetch";
import Alertlist from "../../etc/Alertlist";
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
            alert page
            {/* <button onClick={fetchtest}>fetch</button> */}
            <Alertlist data={1} key={1}></Alertlist>
        </div>
    )
}
export default Alert