import { Link } from "react-router-dom";
import "./Button.scss";

function Button(props) {
  return (
    <Link to={props.target}>
      <button className={"btn btn-"+ props.variant}>{props.children}</button>
    </Link>
  );
}

export default Button;
