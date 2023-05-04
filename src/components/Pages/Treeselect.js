import { Link } from "react-router-dom"
import { useState ,useEffect} from "react";

const Treeselect =()=>
{
    const [trees, settrees] = useState([]); 
    async function fetchtrees() { //불러오기
        const response = await fetch('http://localhost:3002/db');
        if (!response.ok) {
          throw new Error('Failed to fetch trees');
        }
        const data = await response.json();
        const filteredData = Object.fromEntries(
            Object.entries(data).filter(([key, value]) => /^tree\d+$/.test(key))
          );
          const filteredKeys = Object.keys(filteredData);
        console.log(filteredKeys);
        settrees(filteredKeys)
      };    
      useEffect(() => {
        fetchtrees();
      }, []);
    return(
       
        <div>
            test
             {trees.map((treedata) => (
          
          <li key={treedata}> <Link to={`${treedata}`}>{treedata}</Link> </li>
        ))}  
        <Link to='/my'>test</Link>
        </div>
    )
}
export default Treeselect