import styled from "styled-components";
const imgg = styled.img`
position: relative;
`;
const Card = ({ data }) => {
  const { image, text, top, left,title } = data;
  const style = { top, left }; // 스타일 객체 생성

  return (
    <div className="card">
      <div className="image-container">
        <img src={image} style=
        {{width:"10vw", height:"12vh"}}/>
        <div className="text-container">
          <div className="text">{text}</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
