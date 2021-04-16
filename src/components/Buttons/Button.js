import { Link } from "react-router-dom";
import "./Button.scss";

function Button(props) {
  return (
    <>
    <Link to={props.btnTarget}> 
    <button className={props.btnClassName}>{props.btnText}</button>
    </Link>
      <h1>{props.überschrift}</h1>
      </>
  );
}

export default Button;

/*
<Link to={props.button.target}>
      <button className={"btn btn-"+ props.button.variant}>{props.buttonchildren}</button>
    </Link> */