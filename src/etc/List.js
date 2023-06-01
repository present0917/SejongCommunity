

const List = ( props ) => {
  const { top, left} = props.data;
  const style = { top, left }; // 스타일 객체 생성
  return (
    <div className="Crd">
        <div className="text-container" 
        onClick={()=>{
          props.func();
          
          }}>
      </div>
    </div>
  );
};
export default List;
