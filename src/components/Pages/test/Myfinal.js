import '.././My.css'
import board from '../../../pic/board.png'
import Crdtest from "../../../etc/Crdtest"
import post from "../../../pic/post.png"
import post1 from "../../../pic/post1.png"
import post2 from "../../../pic/post2.png"
import { useState,useEffect } from "react"
import Form from "../../Modal/Form";
import Show from "../../Modal/Show"
import Patchform from '../../Modal/Patchform'
import { useParams } from 'react-router-dom'

const imagePaths = [
  post,
  post1,
  post2
];
const Myfinal = () => {
  const [openid, setopenid] = useState(false);
  const [opendep, setopendep] = useState(false);
  const [ModalIsShown, setModalIsShown] = useState(false);
  const [showmadalshow, setshowmodalshow] = useState(false);
  const [modalwithoutfix, setmodalwithoutfix] = useState(false);
  const [patchmadalshow, setpatchmodalshow] = useState(false);
  const [cardInfo, setCardInfo] = useState(null);
  const [backcardInfo, setbackCardInfo] = useState(null);
  const [idopen, setidopen] = useState(null);
  const [majoropen, setmajoropen] = useState(null);
  const [cards, setCards] = useState([]); //입력 내용 담을곳
  const [ismine, setismine] = useState(false); //입력 내용 담을곳
  const [info,setinfo]=useState('');
  const [tag, settag] = useState([]); //입력 내용 담을곳
  const [val, setval] = useState('retry');
  const params = useParams();
  const showpatchmodal = () => {//수정 모달
    setpatchmodalshow(true);
    // console.log('show');
  };

  const hidepatchmodal = () => { //수정 모달 숨기기
    setpatchmodalshow(false);
  };
  

  function updatecarddata(info)
  {
    setCardInfo(info.data);
    console.log(info);
    showmodal(info);
  }

  async function updatebackcarddata(info)
  {
    await setbackCardInfo(info);
    console.log('여기가인포다')
    console.log(setbackCardInfo);
  }

  async function showmodal(info){// 스티커 눌렀을 때
    try{
      let val = await checkismine(info);
      setval(val);
      console.log(val);
    if(val==2||val==1)
    {
      setshowmodalshow(true);
    }
    else
    setshowmodalshow(false);
    // console.log('show');
    }
    catch(e){
      console.log(e);
    }
    
  };
  async function checkismine(data) { 
    console.log(data.data);
    const stickerid=data.data.stickerKey;
    console.log(stickerid);
    const response = await fetch(`/stickers/${stickerid}`, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const dat = await response.json();
    console.log(dat);
    setbackCardInfo(dat);
    // console.log('허가요청했다.');
    // console.log(dat.errorCode);
    // console.log(dat.data.stickerAuth);
    //0이면 못열고 1이면 del만 가능 2면 fix만
    return dat.data.stickerAuth;
  }


  const hidemodal = () => { //뷰 모달 숨기기
    setshowmodalshow(false);
  };

  const showModalHandler = () => {//입력 모달
    setModalIsShown(true);
    // console.log('show');
  };

  const hideModalHandler = () => { //입력 모달 숨기기
    setModalIsShown(false);
  };
  

  async function deletecard(data) { //삭제
    console.log(data.stickerKey)
    const response = await fetch(`/stickers/${data.stickerKey}` , {
      method: 'DELETE',
    });
    console.log('delete');
    fetchcard();
  }

  async function fix(data) { //수정
    console.log(data);
    data.type=Number(data.type);
    const response = await fetch(`/stickers/${data.stickerKey}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    console.log('fixed');
    console.log(data);
    fetchcard();
  }

  // async function fetchcard() { //불러오기
  //   const num=params.id;
  //   const response = await fetch(`http://localhost:3002/db/`);
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch card data');
  //   }
  //   const data = await response.json();
  //   // if (!data.tree1) {
  //   //   throw new Error('Invalid card data');
  //   // }
  //   const mapping = await data[num].map((element) => {
  //     return {
  //       name: element.name,
  //       text: element.text,
  //       id:element.id,
  //       memo:element.memo,
  //       user:element.user
  //     };
  //   });
  //   setCards(mapping);
  // };

  // async function fetchcard() { //불러오기
  //   const num=params.id;
  //   console.log(num);
  //   const response = await fetch(`http://localhost:3002/${num}`);
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch card data');
  //   }
  //   const data = await response.json();
  //   // if (!data.tree1) {
  //   //   throw new Error('Invalid card data');
  //   // }
    
  //   const mapping = await data.map((element) => {
  //     return {
  //       name: element.name,
  //       text: element.text,
  //       id:element.id,
  //       user:element.user
  //     };
  //   });
  //   setCards(mapping);
  // };

  async function fetchcard() { //불러오기 연동시
    const num=params.id;
    const response = await fetch(`/forest/${num}`);
    if (!response.ok) {
      throw new Error('Failed to fetch card data');
    }
    const data = await response.json();
    const mapping = await data.stickers.map((element) => {
      return {
        type: element.type,
        title: `${element.title}`,
        stickerKey:element.stickerKey,
        message:element.message,
      };
    });
    const treeinfo=await data.tree;
    const status =await data.isMine;
    const tagg=await data.tree.tags;
    const id=await data.tree.requestId;
    const de=await data.tree.requestDepartment;
    setopenid(id);
    setopendep(de);
    settag(tagg);
    setinfo(treeinfo);
    setCards(mapping);
    setismine(status);
  };

    // async function ismine() { //내 트리인지 불러오기
  //   const num=params.id;
  //   const response = await fetch(`/forest/${num}`,;
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch card data');
  //   }
  //   const data = await response.json();
  //   const mapping = await data.map((element) => {
  //     return {
  //      mine:element.ismine
  //     };
  //   });
  //   setismine(mapping.mine);
  // };

  useEffect(() => {
    fetchcard();
  }, []);

  async function postcard(card) { //입력
    console.log(card)
    const response = await fetch(`/stickers?treeId=${params.id}`, {
      method: 'POST',
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    const data = await response.json();
    console.log('데이터');
    console.log(data);
    
    fetchcard();
  }

  function handleClick(data) { // 이거로 값을 채워서 스티커를 post로 보낸다.

    const newObject = {
      // id: Math.random(), // 연동시 주석
      type: Number(`${data.name}`),
      title: `${data.text}`,
      message: `${data.memo}`,

      // user: 1,//연동시주석
      treeId:params.id  
    };
    //  setCards([...cards, newObject]);
    console.log('붙였다');

     postcard(newObject);
  }
 

  return (
    <div>
      <div>
        {info.title}
        {/* {tag.map((tags)=>(
          <div>
            {tags}
            </div>
            ))
        } */}
      </div>
      <div className="container">
        <img src={board} className="board" />
         {cards.map((cardData) => (
          <Crdtest key={Math.random()} data={cardData}
            func={updatecarddata} ismine={ismine}
            back={backcardInfo}
            backfunc={updatebackcarddata} 

          />
        ))} 
      </div>
      
      {/* 
      show에 backcardinfo를 주는거야
      updatecarddata는 가져올때 데이터를 넣자.
      crdtest를 누르면 해당 그거로 auth를 판단해.
      */}
      {showmadalshow && <Show onClose={hidemodal} data={cardInfo} delete={deletecard} open={showpatchmodal} treeid={params.id} auth={val}
      backdata={backcardInfo}
      />}
      {ModalIsShown && <Form onClose={hideModalHandler} onClick={handleClick} />}
      {patchmadalshow && <Patchform onClose={hidepatchmodal} onClick={fix} data={cardInfo} />}
      <div  >
        이 페이지에 스티커를 붙일 때<br></br>
        { openid ?  '학번이공개됩니다.': null }
        { opendep ?  '학과가공개됩니다.': null }
        </div>
      
      <button onClick={showModalHandler} className='test'>스티커붙이기</button>
     
      {/* <span className="spa" onClick={handleClick}>
            <Circle />
            </span>    */}

    </div>
  )
}
export default Myfinal