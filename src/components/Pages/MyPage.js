import Rec from "../../etc/Rec"
import { useState,useEffect } from 'react';
import '../../etc/Button.css'
import FixUserModal from "../Modal/FixUserModal";
import Maketreemodal from "../Modal/Maketreemodal";
import { useNavigate } from "react-router-dom";
import Mystickers from "../Modal/Mystickers";
const MyPage = (prop) => {
 
  
  const navigate = useNavigate();
        const [searchData, setSearchData] = useState([]);
        const [signUpOpen, setSignUpOpen] = useState(false);
        const [maketreeOpen, setmaketreeOpen] = useState(false);
        const [islogin, setislogin] = useState(false);
        const [prname, setprname] = useState("");
        const [prstuid, setstuid] = useState("");
        const [prdep, setdep] = useState("");
        const [prnick, setnick] = useState("");
        const [tomytree, settomytree] = useState("");
        const [isthermytree, setistheremytree] = useState("");
        const [ModalIsShown, setModalIsShown] = useState(false);

        const showModalHandler = () => {//입력 모달
          setModalIsShown(true);
          // console.log('show');
        };
      
        const hideModalHandler = () => { //입력 모달 숨기기
          setModalIsShown(false);
        };
        async function logintest() {
          //실제
          const response = await fetch("/login",);
          
            //서버 응답 x
            if (!response.ok) { 
              navigate('/login');
            }
            const data = await response.json();
            console.log(data);
            if(data==false)
              navigate('/Errorlogin');
      
          
        }
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
          setSearchData(data);
          setprname(data.member.name);
          setdep(data.member.department);
          setstuid(data.member.studentId);
          setnick(data.member.nickname);
          if(data.treeId.length>0){
            settomytree(data.treeId[0].treeKey);
            console.log(data.treeId[0].treeKey);
          }
          
        //   const mapping = await data.posts.map((element) => {
        //   return {
        //       id: response.studentId,
        //       nickname: response.nickname,
        //     };
        //   });
          
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

          navigate(`/tree/${tomytree}`); // 받은 값으로 이동하도록
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
         
        }


        useEffect(()=>{
          fetchData();
        },[])


        function check(){
          const confirm = window.confirm("정말 로그아웃 하시겠습니까?");
          if(confirm==true)
          logout();
        }
                async function logout() {   //로그아웃
                  console.log('out');
                  const response = await fetch(`/logout`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                     
                  });
        
                  if (!response.ok) {
                    throw new Error('Failed to log out');
                  }
                  navigate('/login');
                  console.log(response);
                }


        return (
        <div>
          <div className="myinfo">
          <div>
           {prname}
          </div>
          <div>
          {prdep}
          </div>
          <div>
          {prstuid}
          </div>
          <div>
            {prnick}
          </div>
          </div>
            {/* <Rec data={searchData}></Rec> */}
            {/* 로그아웃함수도 Rec속에있다. */}
            <div className='buttons'>
            <button onClick={() => { setSignUpOpen(true);   } }>정보 수정</button>


            <button onClick={() => { setmaketreeOpen(true);   }}>트리생성</button>


            <button onClick={() => { mytree(); prop.func(false)  } }>내 트리</button> 
            <button onClick={() => { deletemytree(); prop.func(false)  } }>트리삭제</button> 
            <button onClick={() => { setModalIsShown(true)} }>내 스티커</button> 
            </div>
           
            <button className="logoutbutton"onClick={check}>log out</button>
            {/* <button onClick={logincheck}>check</button> */}
            {/* prop.func(false) */}
            <FixUserModal signUpOpen={signUpOpen} setSignUpOpen={setSignUpOpen}> </FixUserModal>
            <Maketreemodal maketreeOpen={maketreeOpen} setmaketreeOpen={setmaketreeOpen}></Maketreemodal>
            
            {ModalIsShown && <Mystickers onClose={hideModalHandler} />}

        </div>
    )
}
export default MyPage