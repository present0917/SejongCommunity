import Rec from "../../etc/Rec"
import { useState,useEffect } from 'react';
import '../../etc/Button.css'
import FixUserModal from "../Modal/FixUserModal";
import Maketreemodal from "../Modal/Maketreemodal";
const MyPage = () => {
 
        const [searchData, setSearchData] = useState([]);
        const [signUpOpen, setSignUpOpen] = useState(false);
        const [maketreeOpen, setmaketreeOpen] = useState(false);
        async function fetchData() {
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
        
        // async function fetchData() {//연동시
        //   const token=sessionStorage.getItem('token');
        //   const response = await fetch(`http://localhost:3001/stickers`, {
        //     method: 'GET',
        //     headers: {
        //       'Authorization': `${token}`
        //     },
        //   });
        //   if (!response.ok) {
        //     throw new Error('Failed to fetch Search data');
        //   }
        //   const data = await response.json();
        //   if (!data) {
        //     throw new Error('No Search Data');
        //   }
        //   setSearchData(data);
        // }

      
        useEffect(()=>{
          fetchData();
        },[])
        return (
        <div>
            <Rec data={searchData}></Rec>
            <button onClick={() => { setSignUpOpen(true); }}>정보 수정</button>

            <button onClick={() => { setmaketreeOpen(true); }}>트리생성</button>

            <button onClick={() => {  }}>내 트리로 이동하기</button>

            <FixUserModal signUpOpen={signUpOpen} setSignUpOpen={setSignUpOpen}> </FixUserModal>
            <Maketreemodal maketreeOpen={maketreeOpen} setmaketreeOpen={setmaketreeOpen}></Maketreemodal>
            
        </div>
    )
}
export default MyPage