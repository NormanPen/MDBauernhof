import React, { Component, createRef } from "react";


export default class App extends Component {
    scrollDiv = createRef();
  
    scrollSmoothHandler = () => {
      this.scrollDiv.current.scrollIntoView({ behavior: "smooth" });
    };
  
    render() {
      return (
       
          
            
            <button className="longDiv" onClick={this.scrollSmoothHandler}>click me!</button>
            
          


//  <div ref={this.scrollDiv}>hi</div>
    
      );
    }
  }
  