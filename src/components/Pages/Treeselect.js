import { Link } from "react-router-dom"
import { useState ,useEffect} from "react";
import Rec2 from "../../etc/Rec2";

const Treeselect =()=>
{

    const [trees, settrees] = useState([]); 

    // async function fetchtrees() { //불러오기 테스트
    //     const response = await fetch('http://localhost:3002/db');
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch trees');
    //     }
    //     const data = await response.json();
    //     const filteredData = Object.fromEntries(
    //         Object.entries(data).filter(([key, value]) => /^tree\d+$/.test(key))
    //       );
    //       const filteredKeys = Object.keys(filteredData);
    //     console.log(filteredKeys);
    //     settrees(filteredKeys)
    //   };    

      async function fetchtrees() { //불러오기 테스트
        const response = await fetch('http://localhost:3002/db');
        if (!response.ok) {
          throw new Error('Failed to fetch trees');
        }
        const data = await response.json();

        const filteredData =Object.keys(data);

        console.log(filteredData);
        settrees(filteredData)

      };    

      //       async function fetchtrees() { //불러오기 테스트
      //   const response = await fetch('http://localhost:3002/db');
      //   if (!response.ok) {
      //     throw new Error('Failed to fetch trees');
      //   }
      //   const data = await response.json();

       
      // const mapping = await data.map((element) => {
      //   return {
      //     text: element.text,
      //   };
      // });
      // console.log(mapping);

      // };    



      useEffect(() => {
        fetchtrees();
      }, []);

    return(
       
        <div>
            {/* test
             {trees.map((treedata) => (
          
          <li key={treedata}> <Link to={`${treedata}`}>{treedata}</Link> </li>
        ))}   */}

        {trees.map((treedata) => (
          
          <Rec2 key={treedata} data={treedata}></Rec2>
        ))}  

        </div>

    )
}
export default Treeselect