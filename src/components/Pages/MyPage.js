import Rec from "../../etc/Rec"
import { useState,useEffect } from 'react';
import '../../etc/Button.css'
import FixUserModal from "../Modal/FixUserModal";
import Maketreemodal from "../Modal/Maketreemodal";
import { useNavigate } from "react-router-dom";
const MyPage = (prop) => {
 
  const navigate = useNavigate();
        const [searchData, setSearchData] = useState([]);
        const [signUpOpen, setSignUpOpen] = useState(false);
        const [maketreeOpen, setmaketreeOpen] = useState(false);


        async function fetchData() {   //마이페이지정보
          const response = await fetch("/members");
          if (!response.ok) {
            throw new Error('Failed to fetch Search data');
          }
          const data = await response.json();
          if (!data) {
            throw new Error('No Search Data');
          }
          console.log(data);
        //   const mapping = await data.posts.map((element) => {
        //   return {
        //       id: response.studentId,
        //       nickname: response.nickname,
        //     };
        //   });
          setSearchData(data);
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


        async function logincheck() {   //test
          console.log('check');
          const response = await fetch(`/login`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
             
          });

          if (!response.ok) {
            throw new Error('Failed to check');
          }
          console.log(response);
        }


        function mytree(){

          navigate(`/tree/${1}`); // 받은 값으로 이동하도록
        }
      

        async function deletemytree() {   //내트리지우기
          const response = await fetch("");
          if (!response.ok) {
            throw new Error('Failed to fetch del tree data');
          }
          const data = await response.json();
          if (!data) {
            throw new Error('No Search Data');
          }
          console.log(data);
        //   const mapping = await data.posts.map((element) => {
        //   return {
        //       id: response.studentId,
        //       nickname: response.nickname,
        //     };
        //   });
          setSearchData(data);
<<<<<<< HEAD
=======
          
>>>>>>> origin/master
        }


        useEffect(()=>{
          fetchData();
        },[])
        return (
        <div>
            <Rec data={searchData}></Rec>
            {/* 로그아웃함수도 Rec속에있다. */}
<<<<<<< HEAD
            <button onClick={() => { setSignUpOpen(true); }}>정보 수정</button>
=======
            <button onClick={() => { setSignUpOpen(true);   } }>정보 수정</button>
>>>>>>> origin/master

            <button onClick={() => { setmaketreeOpen(true);   }}>트리생성</button>


            <button onClick={() => { mytree(); prop.func(false)  } }>내 트리</button> 
            <button onClick={() => { deletemytree(); prop.func(false)  } }>트리삭제</button> 
            <button onClick={logincheck}>check</button>
            {/* prop.func(false) */}
            <FixUserModal signUpOpen={signUpOpen} setSignUpOpen={setSignUpOpen}> </FixUserModal>
            <Maketreemodal maketreeOpen={maketreeOpen} setmaketreeOpen={setmaketreeOpen}></Maketreemodal>
            
        </div>
    )
}
export default MyPage