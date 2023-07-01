import '.././My.css'
import board from '../../../pic/board.png'
import Crdtest from "../../../etc/Crdtest"
import post from "../../../pic/post.png"
import post1 from "../../../pic/post1.png"
import post2 from "../../../pic/post2.png"
import { useState, useEffect, useContext } from "react"
import Form from "../../Modal/Form";
import Show from "../../Modal/Show"
import Patchform from '../../Modal/Patchform'
import { useParams } from 'react-router-dom'
import ErrorModal from '../../Modal/ErrorModal'
import LoadingContext from '../../Nav/LoadingContext'
import { useNavigate } from 'react-router-dom'

const imagePaths = [
  post,
  post1,
  post2
];
const Myfinal = () => {
  const navigate = useNavigate();
  const [openid, setopenid] = useState(false);
  const [opendep, setopendep] = useState(false);
  const [ModalIsShown, setModalIsShown] = useState(false);
  const [errrormodalshow, seterrormodalshow] = useState(false);
  const [showmadalshow, setshowmodalshow] = useState(false);
  const [patchmadalshow, setpatchmodalshow] = useState(false);
  const [cardInfo, setCardInfo] = useState(null);
  const [backcardInfo, setbackCardInfo] = useState(null);
  const [cards, setCards] = useState([]); //입력 내용 담을곳
  const [ismine, setismine] = useState(false); //입력 내용 담을곳
  const [info,setinfo]=useState('');
  const [tag, settag] = useState([]); //입력 내용 담을곳
  const [val, setval] = useState('retry');

  const [errormessage, seterrormessage] = useState('no error');
  const [errorcode, seterrorcode] = useState('no error');
  const {updateLoading} = useContext(LoadingContext)
  const params = useParams();
  const showpatchmodal = () => {//수정 모달
    setpatchmodalshow(true);
  };

  const hidepatchmodal = () => { //수정 모달 숨기기
    setpatchmodalshow(false);
  };
  

  function updatecarddata(info)
  {
    setCardInfo(info.data);
    showmodal(info);
  }

  async function updatebackcarddata(info)
  {
    await setbackCardInfo(info);
  }

  async function showmodal(info){// 스티커 눌렀을 때
    logintest()
    try{
      let val = await checkismine(info);
      setval(val);
    if(val==2||val==1)
    {
      setshowmodalshow(true);
    }
    else
    setshowmodalshow(false);
    }
    catch(e){
      console.log(e);
    }
    
  };
  async function checkismine(data) { 
    const stickerid=data.data.stickerKey;
    updateLoading(true);
    const response = await fetch(`http://ec2-3-24-166-96.ap-southeast-2.compute.amazonaws.com:8080/stickers/${stickerid}`, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const dat = await response.json();
    setbackCardInfo(dat);
    updateLoading(false);
    return dat.data.stickerAuth;
  }


  const hidemodal = () => { //뷰 모달 숨기기
    setshowmodalshow(false);
  };

  const showModalHandler = () => {//입력 모달
    setModalIsShown(true);
  };

  const hideModalHandler = () => { //입력 모달 숨기기
    setModalIsShown(false);
  };
  const hideModalHandlererror = () => { //에러모달
    seterrormodalshow(false);
  };
  
  const showerrormodalhandler = () => {//입력 모달
    seterrormodalshow(true);
  };

  async function deletecard(data) { //삭제
    updateLoading(true,"스티커 삭제 중...");
    const response = await fetch(`http://ec2-3-24-166-96.ap-southeast-2.compute.amazonaws.com:8080/stickers/${data.stickerKey}` , {
      method: 'DELETE',
    });
    fetchcard();
    console.log('삭제단계');
    console.log(response);
    updateLoading(false);
  }

  async function fix(data) { //수정
    data.type=Number(data.type);
    updateLoading(true,"스티커 수정 중...");
    const response = await fetch(`http://ec2-3-24-166-96.ap-southeast-2.compute.amazonaws.com:8080/stickers/${data.stickerKey}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    updateLoading(false);
    fetchcard();
  }


  async function fetchcard() { //불러오기 연동시
    const num=params.id;
    updateLoading(true,"스티커 불러오는 중...");
    const response = await fetch(`http://ec2-3-24-166-96.ap-southeast-2.compute.amazonaws.com:8080/forest/${num}`);
    try{
      if (!response.ok) {
        throw new Error('Failed to fetch card data');
      }
      const data = await response.json();
      console.log(data)
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
    } catch(e) {
      alert(e);
    } finally {
      updateLoading(false);
    }
  };


  useEffect(() => {
    fetchcard();
  }, []);

  async function postcard(card) { //입력
    updateLoading(true,"스티커 붙이는 중...");
    const response = await fetch(`http://ec2-3-24-166-96.ap-southeast-2.compute.amazonaws.com:8080/stickers?treeId=${params.id}`, {
      method: 'POST',
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    try {
      if (data.errorCode !== 0) {
        throw new Error(` ${data.message}`);
      }
    } catch (e) {
      alert(e);
    }
    // if(data.errorCode!=0)
    // {
    //   seterrorcode(data.errorCode);
    //   seterrormessage(data.message);
    //   showerrormodalhandler()
    // }
    updateLoading(false);
    fetchcard();
  }


  async function logintest() {
    console.log('logintest')
    try{
    const response = await fetch("http://ec2-3-24-166-96.ap-southeast-2.compute.amazonaws.com:8080/login");

    if (!response.ok) {
      console.log('re at for');
      navigate("/Errorlogin");
    }
    const data = await response.json();
    if (data.isLogin === false) navigate("/Errorlogin");
  }
  catch(error)
  {
    console.log('redirect from logintest catch')
    navigate('/errorlogin')
  }
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

     postcard(newObject);
  }
 

  return (
    <div>
      <div>
        {info.title}

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

      {errrormodalshow && <ErrorModal onClose={hideModalHandlererror} code={errorcode} message={errormessage}/>}

      <div  >
        이 페이지에 스티커를 붙일 때<br></br>
        { openid ?  '학번이공개됩니다.': null }
        { opendep ?  '학과가공개됩니다.': null }
        </div>
      
      <button onClick={showModalHandler} className='test'>스티커붙이기</button>
     

    </div>
  )
}
export default Myfinal