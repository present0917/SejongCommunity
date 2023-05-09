import Rec from "../../etc/Rec"
import { useState,useEffect } from 'react';
import '../../etc/Button.css'
import FixUserModal from "../Modal/FixUserModal";
import Maketreemodal from "../Modal/Maketreemodal";
import { useNavigate } from "react-router-dom";
const MyPage = () => {
 
  const navigate = useNavigate();
        const [searchData, setSearchData] = useState([]);
        const [signUpOpen, setSignUpOpen] = useState(false);
        const [maketreeOpen, setmaketreeOpen] = useState(false);


        async function fetchData() {   //마이페이지정보
          const response = await fetch("http://localhost:3001/signup");
          if (!response.ok) {
            throw new Error('Failed to fetch Search data');
          }
          const data = await response.json();
          if (!data) {
            throw new Error('No Search Data');
          }
        //   const mapping = await data.posts.map((element) => {
        //   return {
        //       id: response.studentId,
        //       nickname: response.nickname,
        //     };
        //   });
          setSearchData(data);
        }
        function mytree(){
          navigate('/tree');
        }
        // async function fetchData() {  //마이페이지정보 연동시, 내 트리 번호도 받아야함.
        //   const response = await fetch("/mypage");
        //   if (!response.ok) {
        //     throw new Error('Failed to fetch Search data');
        //   }
        //   const data = await response.json();
        //   if (!data) {
        //     throw new Error('No Search Data');
        //   }
        // //   const mapping = await data.posts.map((element) => {
        // //   return {
        // //       id: response.studentId,
        // //       nickname: response.nickname,
        // //     };
        // //   });
        //   setSearchData(data);
        // }

        
        // async function logout() {   //로그아웃
        //   const response = await fetch("/logout");
        //   if (!response.ok) {
        //     throw new Error('Failed to fetch Search data');
        //   }
        //   const data = await response.json();
        //   if (!data) {
        //     throw new Error('No Search Data');
        //   }
        //   setSearchData(data);
        // }


        function mytree(){

          navigate('/tree');
        }
      


        useEffect(()=>{
          fetchData();
        },[])
        return (
        <div>
            <Rec data={searchData}></Rec>
            <button onClick={() => { setSignUpOpen(true); }}>정보 수정</button>

            <button onClick={() => { setmaketreeOpen(true); }}>트리생성</button>


            <button onClick={() => { mytree() }}>내 트리</button>

            <FixUserModal signUpOpen={signUpOpen} setSignUpOpen={setSignUpOpen}> </FixUserModal>
            <Maketreemodal maketreeOpen={maketreeOpen} setmaketreeOpen={setmaketreeOpen}></Maketreemodal>
            
        </div>
    )
}
export default MyPage