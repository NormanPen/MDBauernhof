import { Link } from "react-router-dom";
import "./Button.scss";

function Button(props) {
  return (
    <Link to={props.target}>
      <button className={"btn"}>{props.children}</button>
    </Link>
  );
}

export default Button;
