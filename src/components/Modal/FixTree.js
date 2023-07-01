import Modal from './Modal';
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Rec2f from '../../etc/Rec2f';
import './Viewmytrees.css'
import LoadingContext from '../Nav/LoadingContext';//로딩 context

const Fixtree = (props) => {

    const [usetext, settext] = useState([]);
    const {updateLoading} = useContext(LoadingContext);//로딩창에 대한 state 함수를 context로 받아옴
    const [mytrees, setmytrees] = useState([]);
    const navigate = useNavigate();
    async function fetchData() {
        //트리정보
        updateLoading(true,"보드 불러오는중...");//로딩 on
        const response = await fetch("http://ec2-3-24-166-96.ap-southeast-2.compute.amazonaws.com:8080/members",{
            credentials: 'include'
          })
          ;
        try{
        if (!response.ok) {
            throw new Error("서버 응답 없음");
        }
        const data = await response.json();
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
        } catch(e){
            alert(e);
            navigate("/login");
        } finally {
            updateLoading(false);
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