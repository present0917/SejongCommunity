import Circle from "../../etc/Circle"
import './My.css'
import board from '../../pic/board.png'
import Crd from "../../etc/Crd"
import Crdtest from "../../etc/Crdtest"
import post from "../../pic/post.png"
import post1 from "../../pic/post1.png"
import post2 from "../../pic/post2.png"
import { useState,useEffect } from "react"
import Form from "../Modal/Form";
import Show from "../Modal/Show"
import testdata from "./testdata.json";
const imagePaths = [
  post,
  post1,
  post2
];
const Myfinal = () => {
  const [ModalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
    // console.log('show');
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };
  const [cards, setCards] = useState([]);

  async function fetchcard() {
    const response = await fetch('http://localhost:3001/db');
    if (!response.ok) {
      throw new Error('Failed to fetch card data');
    }
    const data = await response.json();
    if (!data.post) {
      throw new Error('Invalid card data');
    }
    const mapping = await data.post.map((element) => {
      return {
        name: element.name,
        text: element.text,
        id:element.id
      };
    });
    setCards(mapping);
    console.log(mapping);
  };

  useEffect(() => {
    fetchcard();
  }, []);


  async function postcard(card) {
    const response = await fetch('http://localhost:3001/post', {
      method: 'POST',
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  function fortest(data) {

    const newObject = {
      id: cards.length + 1,
      image: imagePaths[data.name],
      text: `${data.text}`,
    };
    setCards([...cards, newObject]);
  }
  function handleClick(data) {

    const newObject = {
      id: cards.length + 1,
      name: `${data.name}`,
      text: `${data.text}`,
    };
    // setCards([...cards, newObject]);
     postcard(newObject);
  }
  return (
    <div>
      <div className="container">
        <img src={board} className="board" />
         {cards.map((cardData) => (
          <Crdtest key={cardData.id} data={cardData}
            func={showModalHandler}
          />
        ))} 
      </div>
      {ModalIsShown && <Form onClose={hideModalHandler} onClick={handleClick} />}
      <button onClick={showModalHandler}>test</button>
      <button onClick={fortest}>fortest</button>

      {/* <span className="spa" onClick={handleClick}>
            <Circle />
            </span>    */}

    </div>
  )
}
export default Myfinal