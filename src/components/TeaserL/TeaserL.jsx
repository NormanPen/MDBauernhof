import React from 'react';

class TeaserL extends React.Component {
  render() {
    return (
        <div>
            <h1>{this.props.ueberschrift}</h1> 
            <p>{this.props.inhalt}</p>
        </div>
    );
 
    
  }
         

  
}

export default TeaserL;