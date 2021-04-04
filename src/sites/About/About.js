import Kontaktfooter from "../../components/Footer/KontaktFooter";
import Button from "../../components/Buttons/Button";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <h1>Über Uns</h1>
      <p>
        Margot Döpper wollte nicht nur Landwirtin sein. Heute organisiert sie,
        unterstützt von ihrem Mann Hans Döpper, Kindergeburtstage auf dem
        Bauernhof. In einem Kurs der Landwirtschaftskammer erwarb sie das nötige
        Know-how.{" "}
      </p>
      <Button target="/">
        Test Button
      </Button>
      <button>Jetzt entdecken</button>

      <h2>Willkommen</h2>
      <p>
        Erlebniswelt Bauernhof ist gegründet worden um: den Kindern direkt vor
        Ort die Natur nahezubringen, um Ihnen ein Gefühl für die Schönheit der
        "Schöpfung" zu vermitteln und die Welt auch noch für nachkommende
        Generationen in diesem Umfang zu erhalten. Seit 2007 gibt es nun die
        Erlebniswelt Bauernhof. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.
      </p>

      <h3>Der Hof</h3>
      <p>Auf dem Bauernhof in der 4. Generatinon gibt es viel zu entdecken.</p>
      <button>Zu unserem Programm</button>
      <Kontaktfooter></Kontaktfooter>
    </div>
  );
}

export default About;
