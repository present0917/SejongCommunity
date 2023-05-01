import Rec from "../../etc/Rec"
import { useState,useEffect } from 'react';
import '../../etc/Button.css'
import FixUserModal from "../Modal/FixUserModal";
const MyPage = () => {
 
        const [searchData, setSearchData] = useState([]);
        const [signUpOpen, setSignUpOpen] = useState(false);
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
      
        useEffect(()=>{
          fetchData();
        },[])
        return (
        <div>
            내 정보
            <Rec data={searchData}></Rec>
            <button onClick={() => { setSignUpOpen(true); }}>정보 수정</button>
            <FixUserModal signUpOpen={signUpOpen} setSignUpOpen={setSignUpOpen}></FixUserModal>
        </div>
    )
}
export default MyPage