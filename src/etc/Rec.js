import classes from "./Rec.module.css";
const Rec = (props) => {


  return (
    <li className={classes.meal}>
      <div className="myinfo">


        <h3>{props.data.studentId} </h3>

        <div>{props.data.name} </div>
        <div>{props.data.department} </div>
        <div>닉네임: {props.data.nickname}</div>
      </div>
    </li>
  );
};

export default Rec;
