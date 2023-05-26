import Modal from './Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import Rec2s from '../../etc/Rec2small';
import './Viewmytrees.css'
const Viewmytrees = (props) => {

    const [usetext, settext] = useState([]);
    const [mytrees, setmytrees] = useState([]);
    async function deletemytree() {   //내트리지우기
        const response = await fetch("/stickers");
        if (!response.ok) {
            throw new Error('Failed to fetch del tree data');
        }
        const data = await response.json();
        if (!data) {
            throw new Error('No Search Data');
        }
        settext(data.data);
    }
    async function fetchData() {
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
        deletemytree();
        fetchData();
    }, []);


    return (
        <Modal onClose={props.onClose} style={{ overflow: "auto" }} >
            <div style={{ textDecoration: "none" }}>
                <div>
                    <div className="mytree" 
                    onClick={props.onClose}
                    >

                        {mytrees.map((post) => (
                            <Rec2s key={Math.random()} className="mytree" 
                             onClick={props.onClose}
                                treeKey={post.treeKey}
                                title={post.title}
                                memberKey={post.memberKey}
                                description={post.description}
                                tags={post.tags}
                            ></Rec2s>
                        ))}
                    </div>


                </div>


                {/* {usetext.data[0].treeKey} */}

            </div>
        </Modal >
    );
};

export default Viewmytrees;