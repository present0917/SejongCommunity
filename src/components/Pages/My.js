import Circle from "../../etc/Circle"
import './My.css'
import board from '../../pic/board.png'
import Card from "../../etc/Card"
const My = () => {
    const cards = [
        {
          id: 1,
          title: "Card 1",
          description: "This is card 1",
          image: "https://via.placeholder.com/50",
          text: "it's text 1",
          top: "20vh", // top 속성 추가
          left: "50%" // left 속성 추가
        },
        {
          id: 2,
          title: "Card 2",
          description: "This is card 2",
          image: "https://via.placeholder.com/50",
          top: "20%", // top 속성 추가
          left: "20%" // left 속성 추가
        },
        {
          id: 3,
          title: "Card 3",
          description: "This is card 3",
          image: "https://via.placeholder.com/50",
          top: "30%", // top 속성 추가
          left: "30%" // left 속성 추가
        }
      ];
    return (
        <div>
            <div className="container">
                <img src={board} className="board" />
                {cards.map((cardData) => (
                    <Card key={cardData.id} data={cardData} />
                ))}
            </div>

            <Circle />
        </div>
    )
}
export default My