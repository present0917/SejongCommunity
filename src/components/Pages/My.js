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
          image: imagePaths[Math.floor(Math.random() * imagePaths.length)],
          text: `it's text ${1}`,
          // top: Math.random() * 50 + "vh", 
          // left: Math.random() * 50 + "vd" 
        },
        {
          id: 2,
          title: "Card ",
          description: "This is card 1",
          image: imagePaths[Math.floor(Math.random() * imagePaths.length)],
          text: "it's text",
        },
        {
          id: 3,
          title: "Card 1",
          description: "This is card 1",
          image: imagePaths[Math.floor(Math.random() * imagePaths.length)],
          text: "it's text ",
        },
        {
          id: 4,
          title: "Card 1",
          description: "This is card 1",
          image: imagePaths[Math.floor(Math.random() * imagePaths.length)],
          text: "it's text ",
        },
        {
          id: 5,
          title: "Card 1",
          description: "This is card 1",
          image: imagePaths[Math.floor(Math.random() * imagePaths.length)],
          text: "it's text ",
        },
        {
          id: 6,
          title: "Card 1",
          description: "This is card 1",
          image: imagePaths[Math.floor(Math.random() * imagePaths.length)],
          text: "it's text ",
        },

        {
          id: 7,
          title: "Card 1",
          description: "This is card 1",
          image: imagePaths[Math.floor(Math.random() * imagePaths.length)],
          text: "it's text ",
        },
        
      ]);
      function handleClick() {
        const newObject = {
          id: cards.length + 1,
          image: imagePaths[Math.floor(Math.random() * imagePaths.length)],
          text: `${cards.length+1} card`,
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
            {ModalIsShown && <Form onClose={hideModalHandler} />}
            <button onClick={showModalHandler}>test</button>
            
            <span className="spa" onClick={handleClick}>
              
            <Circle />
            </span>   

        </div>
    )
}
export default My