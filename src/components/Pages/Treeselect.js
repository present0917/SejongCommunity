import { Link } from "react-router-dom"
import { useState ,useEffect} from "react";
import Rec2 from "../../etc/Rec2";
import './Treeselect.css';

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
        const response = await fetch('/forest');
        if (!response.ok) {
          throw new Error('Failed to fetch trees');
        }
        const data = await response.json();

        //const filteredData =Object.keys(data);

        const mapping = await data.data.map((element) => {
          return {
            id: element.treeKey,
            title: element.title,
            maintext: element.description,
            tags: [element.tags],
          };
        });
        console.log(mapping);

        //settrees(filteredData)
        settrees(mapping)

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
        
      <div className="recbox">
        
        
        {trees.map((treedata) => (
          <div key={treedata.id} className="rec2-item">
          <Rec2 data={treedata} />
        </div>
        ))}  
        </div>
        </div>
    )
}
export default Treeselect
