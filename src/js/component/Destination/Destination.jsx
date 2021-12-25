import React, { Component } from 'react'
import data from "../../../assets/data.json";
export default class Destination extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="destination">
                <h3 className="destination__title">{data.destinations[0].name}</h3>
                <div className="destination__card">
                    <div className="destination__card--img">
                        <img src="../../../assets/destination/background-destination-desktop.jpg" alt="moon"/>
                    </div>
                    <div className="destination__card--desc">
                        <nav className="destination__card--desc--nav">
                            <p className="destination__card--desc--nav__element">{data.destinations[0].name}</p>
                            <p className="destination__card--desc--nav__element">{data.destinations[1].name}</p>
                            <p className="destination__card--desc--nav__element">{data.destinations[2].name}</p>
                            <p className="destination__card--desc--nav__element">{data.destinations[3].name}</p>
                        </nav>
                        <h1 className="destination__card--desc--title">
                        {data.destinations[0].name}
                        </h1>
                        <p className="destination__card--desc--details">
                            {data.destinations[0].description}
                        </p>
                        <div className="destination__card--desc--info">
                        <div className="destination__card--desc--info__distance">{data.destinations[0].distance}</div>
                        <div className="destination__card--desc--info__travel">{data.destinations[0].travel}</div>
                        </div>
                </div>
                </div>
            </div>
        );
    }
    
};
