import Modal from './Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rec2f from '../../etc/Rec2f';
import './Viewmytrees.css'

const Fixtree = (props) => {

    const [usetext, settext] = useState([]);
    const [mytrees, setmytrees] = useState([]);



    console.log(1);


      
    async function fetchData() {
        //트리정보
        const response = await fetch("/members");
        if (!response.ok) {
            throw new Error("Failed to fetch Search data");
        }
        const data = await response.json();
        if (!data) {
            throw new Error("No Search Data");
        }
        //console.log(data);
        const mapping = data.treeId.map((element) => {
            return {
                treeKey: element.treeKey,
                title: element.title,
                dataRange: element.dataRange,
                description: element.description,
                tags: element.tags,
                nick:element.dataRange.nickname,
                allowId:element.requestId,
                allowDepartment:element.requestDepartment
            };
        });

        setmytrees(mapping);
    }



    useEffect(() => {
        
        fetchData();
    }, []);


    return (
        <Modal onClose={props.onClose} style={{ overflow: "auto" }} >
            <div style={{ textDecoration: "none" }}>
                <div>
                    <div className="mytree" >

                        {mytrees.map((post) => (
                            <Rec2f key={Math.random()} className="mytree"  
                                treeKey={post.treeKey}
                                title={post.title}
                                dataRange={post.dataRange}
                                description={post.description}
                                allowId={post.allowId}
                                allowDepartment={post.allowDepartment}
                                tags={post.tags}
                                fetch={fetchData}
                                open={props.plus}
                                closeone={props.onClose}
                                reload={fetchData}
                            ></Rec2f>
                        ))}
                    </div>


                </div>


                {/* {usetext.data[0].treeKey} */}

            </div>
           
        </Modal >
    );
};

export default Fixtree;