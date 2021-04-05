import Kontaktfooter from "../../components/Footer/KontaktFooter";
import TeaserMain from "../../components/TeaserMain/TeaserMain";

import "./Home.scss";
import Button from "../../components/Buttons/Button";
//import bauernhof from "../../images/Bauernhof.png";
//import ovalhellblau from "../../images/OvalHellblau.svg";

function Home() {
  return (
    <div className="home">
      <Button target="/programm"></Button>
      <TeaserMain
        ueberschrift="Hi"
        variant="blue"
        target="/programm"
        btnText="asdasads"
      >
        asdasdasdasd
      </TeaserMain>
      <h1>Herzlich Willkommen auf unserem Hof</h1>
      <p>Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem.</p>
      <h2>Willkommen</h2>
      <p>
        Erlebniswelt Bauernhof ist gegründet worden um: den Kindern direkt vor
        Ort die Natur nahezubringen, um Ihnen ein Gefühl für die Schönheit der
        "Schöpfung" zu vermitteln und die Welt auch noch für nachkommende
        Generationen in diesem Umfang zu erhalten.
      </p>

      <h3>Margot & Hans Döpper</h3>
      <p>
        Erlebniswelt Bauernhof ist gegründet worden um: den Kindern direkt vor
        Ort die Natur nahezubringen, um Ihnen ein Gefühl für die Schönheit der
        "Schöpfung" zu vermitteln und die Welt auch noch für nachkommende
        Generationen in diesem Umfang zu erhalten.
      </p>
      <button>Über Uns</button>

      <h3>Spielend lernen</h3>
      <p>
        Like the name of this Barley Lemon Bar and her appeal, fresh and
        exciting are what she wants you and your skin to feel after spending a
        pleasurable time in the shower.
      </p>
      <button>Zum Programm</button>

      <h2>Unsere Tiere</h2>
      <p>
        In this reinvented flick, which hovers like a Matisse cutout between the
        lashline and brow bone, curved crease of the eyelid, while the top is a
        long, flat line that extends past the outer corners.
      </p>
      <button>Tiere kennenlernen</button>

      <Kontaktfooter></Kontaktfooter>
    </div>
  );
}

export default Home;
