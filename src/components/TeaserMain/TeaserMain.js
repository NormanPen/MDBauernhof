import { Link } from 'react-router-dom';
import './TeaserMain.scss';

function TeaserMain(props) {
    return (
        <div className={props.class}>
            <h1>{props.ueberschrift}</h1>
            <p>{props.children}</p>
            <Link to={props.target}>
                <button>{props.btnname}</button>
            </Link>
        </div>
    );
}

export default TeaserMain;