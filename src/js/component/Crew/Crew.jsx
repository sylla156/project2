import React, { Component } from 'react'
import data from "../../../assets/data.json";
import "./crew.scss";
import ansari from "../../../assets/crew/image-anousheh-ansari.png"
import hurley from "../../../assets/crew/image-douglas-hurley.png"
import shuttleworth from "../../../assets/crew/image-mark-shuttleworth.png"
import glover from "../../../assets/crew/image-victor-glover.png"



export default class Crew extends Component {

    constructor(props){
        super(props);
        this.hanbleChange = this.hanbleChange.bind(this);
      }
    
      hanbleChange(e) {
        
      }
    
    render(){
        return(
            <div className="crew">
            <h3 className="crew__title">
              <span>01</span> Meet your crew
            </h3>
            <div className="crew__card">
              <div className="crew__card--desc">
               
                <h1 className="crew__card--desc--role">
                  {data.crew[3].role}
                </h1>
                <p className="crew__card--desc--name">
                  {data.crew[3].name}
                </p>
                <p className="crew__card--desc--bio">
                  {data.crew[3].bio}
                </p>
                
                <nav className="crew__card--desc--nav">
                  <p
                    className="crew__card--desc--nav__element"
                    onClick={this.hanbleChange}
                  >
                    
                  </p>
                  <p
                    className="crew__card--desc--nav__element"
                    onClick={this.hanbleChange}
                  >
                    
                  </p>
                  <p
                    className="crew__card--desc--nav__element"
                    onClick={this.hanbleChange}
                  >
                    
                  </p>
                  <p
                    className="crew__card--desc--nav__element"
                    onClick={this.hanbleChange}
                  >
                   
                  </p>
                </nav>
              </div>
              <div className="crew__card--img">
              <img className="crew__card--img-element"  src={ansari} alt='merde'/>
              </div>
            </div>
          </div>
        );
    }
    
};
