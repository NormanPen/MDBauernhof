import { Link } from 'react-router-dom';

function KontaktFooter() {
    return(
        <div>
            <h1>Kontakt</h1>
            <p>Sie möchten mehr Informationen oder eine Buchung anfragen? Dann kontaktieren Sie uns gerne.</p>
            <Link to="/Kontakt">
            <button>Jetzt Kontakt aufnehmen</button>
                </Link>
        </div>
    );
}

export default KontaktFooter;