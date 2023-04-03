const Card = ({ data }) => {
  const { image, text, top, left } = data;
  const style = { top, left }; // 스타일 객체 생성

  return (
    <div className="card" style={style}>
      <div className="image-container">
        <img src={image} alt="" />
        <div className="text-container">
          <div className="text">{text}</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
