import Modal from './Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rec2d from '../../etc/Rec2d';
import './Viewmytrees.css'

const DeleteTree = (props) => {

    const [usetext, settext] = useState([]);
    const [mytrees, setmytrees] = useState([]);






      
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
        const mapping = data.treeId.map((element) => {
            return {
                treeKey: element.treeKey,
                memberKey: element.memberKey,
                title: element.title,
                description: element.description,
                tags: element.tags,
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
                            <Rec2d key={Math.random()} className="mytree"  
                                treeKey={post.treeKey}
                                title={post.title}
                                memberKey={post.memberKey}
                                description={post.description}
                                tags={post.tags}
                                fetch={fetchData}
                            ></Rec2d>
                        ))}
                    </div>


                </div>


                {/* {usetext.data[0].treeKey} */}

            </div>
           
        </Modal >
    );
};

export default DeleteTree;