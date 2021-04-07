import { Link } from "react-router-dom";
import "./TeaserMain.scss";

function TeaserMain(props) {
  return (
    <div className="teaser-main">
      <img src={props.img} alt={props.imgAlt} className="img-teaser-main" />
      <h1>{props.ueberschrift}</h1>
      <p>{props.children}</p>
      <Link to={props.target}>
        <button className="teaser-btn">{props.btnText}</button>
      </Link>
    </div>
  );
}

export default TeaserMain;
