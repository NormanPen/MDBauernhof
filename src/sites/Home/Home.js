import Kontaktfooter from "../../components/Footer/KontaktFooter";
import Header from "../../components/Header/Header";
import TextModule from "../../components/TextModule/TextModule"

import "./Home.scss";

const home = {
  header: {
    headerHeadline: "Herzlich Willkommen auf unserem Hof",
    btnText: "Jetzt Entdecken",
    btnTarget: "/überuns",
    headerText:"Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem.",
    headerImage: "adasads",
    headerImageAlt: "Bauerhof"
  },
  TextModule: {
    headline: "Willkommen",
    text: 'Erlebniswelt Bauernhof ist gegründet worden um: den Kindern direkt vor Ort die Natur nahezubringen, um Ihnen ein Gefühl für die Schönheit der "Schöpfung" zu vermitteln und die Welt auch noch für nachkommende Generationen in diesem Umfang zu erhalten.'
  }
  
}
function Home(props) {


  return (
    <div className="home">
    
      
      <Header
      headerHeadline={home.header.headerHeadline}
      btnText={home.header.btnText}
      btnTarget={home.header.btnTarget}
      
      headerImage={home.header.headerImage}
      headerImageAlt={home.header.headerImageAlt}>{home.header.headerText}</Header>

<main>
        <TextModule 
        textModuleHeadline={home.TextModule.headline}
        textModuleText={home.TextModule.text}/>


      </main>

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
