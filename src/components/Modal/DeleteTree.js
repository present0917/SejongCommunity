import Modal from './Modal';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rec2d from '../../etc/Rec2d';
import './Viewmytrees.css'
import LoadingContext from '../Nav/LoadingContext';//로딩 context

const DeleteTree = (props) => {
    const {updateLoading} = useContext(LoadingContext);//로딩창에 대한 state 함수를 context로 받아옴
    const [mytrees, setmytrees] = useState([]);






      
    async function fetchData() {
        //트리정보
        updateLoading(true,"보드 불러오는중...");//로딩 on
        const response = await fetch("/members");
        try{
            if (!response.ok) {
                throw new Error("보드를 불러올 수 없습니다.");
            }
            const data = await response.json();
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
        } catch(e) {
            alert(e);
        } finally {
            updateLoading(false);//로딩off
        }
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