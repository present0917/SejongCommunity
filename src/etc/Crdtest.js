
import post from '../pic/post.png'
import post1 from '../pic/post1.png'
import post2 from '../pic/post2.png'
const Crdtest = ( props ) => {
  const { type,title} = props.data;


  let imagePath;
  if (type == 1) {
    imagePath = post;
  } else if (type == 2) {
    imagePath = post1;
  }
  else if (type == 3) {
    imagePath = post2;
  }



  return (
    <div className="Crd">
        <img src={imagePath} style=
        {{width:"12vmin", height:"12vmin"}}
        />
        <div className="text-container" 
        onClick={()=>{
          
          props.func(props);
         
          
          }
          }
          >
          {title}
      </div>
    </div>
  );
};
export default Crdtest;
