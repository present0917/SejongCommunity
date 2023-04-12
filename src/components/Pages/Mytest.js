import Circle from "../../etc/Circle"
import './My.css'
import board from '../../pic/board.png'
import Crd from "../../etc/Crd"
import Crdtest from "../../etc/Crdtest"
import post from "../../pic/post.png"
import post1 from "../../pic/post1.png"
import post2 from "../../pic/post2.png"
import { useState } from "react"
import Form from "../Modal/Form";
import Show from "../Modal/Show"
import testdata from "./testdata.json";
const imagePaths = [
  post,
  post1,
  post2
];
const Mytest = () => {
  const [ModalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
    console.log('show');
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };
  const [cards, setCards] = useState([]);

  // async function fetchcard() {
  //   const response = await fetch('url');
  //   const data = await response.json();
  //   const mapping = await data.results.map((element) => {
  //     return {
  //       name: element.name,
  //       text: element.title,
  //     };
  //   }
  //   );
  //   setTestData(mapping);
  // };


  function handleClick(data) {

    const newObject = {
      id: cards.length + 1,
      image: imagePaths[data.name],
      text: `${data.text}`,
    };
    setCards([...cards, newObject]);
  }
  return (
    <div>
      <div className="container">
        <img src={board} className="board" />
        {testdata.posts.map((cardData) => (
          <Crdtest key={cardData.id} data={cardData}
            func={showModalHandler}
          />
        ))}
      </div>
      {ModalIsShown && <Form onClose={hideModalHandler} onClick={handleClick} />}
      <button onClick={showModalHandler}>test</button>

      {/* <span className="spa" onClick={handleClick}>
            <Circle />
            </span>    */}

    </div>
  )
}
export default Mytest