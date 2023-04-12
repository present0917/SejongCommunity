import Circle from "../../etc/Circle"
import './My.css'
import board from '../../pic/board.png'
import Crd from "../../etc/Crd"
import post from "../../pic/post.png"
import post1 from "../../pic/post1.png"
import post2 from "../../pic/post2.png"
import { useState } from "react"
import Form from "../Modal/Form";
import Show from "../Modal/Show"
const imagePaths = [
  post,
 post1,
 post2
];
const My = () => {
  const [ModalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
    console.log('show');
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };
  const test=()=>
  {
    console.log('test');
  }
  const [cards, setCards] = useState([
        {
          id: 1,
          title: "Card 1",
          description: "This is card 1",
          // image: imagePaths[Math.floor(Math.random() * imagePaths.length)],
          image:imagePaths[0],
          text: `it's text ${1}`,
          // top: Math.random() * 50 + "vh", 
          // left: Math.random() * 50 + "vd" 
        }

      ]);
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
                {cards.map((cardData) => (
                    <Crd key={cardData.id} data={cardData} 
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
export default My