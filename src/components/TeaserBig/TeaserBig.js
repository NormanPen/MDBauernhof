import Button from "../Buttons/Button";

function TeaserBig(props) {
  return (
    <div>

    
 


  <header>
    <h1>{props.headerHeadline}</h1>
    <p>{props.headerText}</p>
    <Button btnClassName="btn btn-blue"
            btnTarget={props.btnTarget}
            btnText={props.btnText} />
    <img src={props.headerImage} alt={props.headerImageAlt}></img>
  </header>

  
 
  </div>
  );
}

export default TeaserBig;