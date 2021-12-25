import React, { Component } from "react";
import data from "../../../assets/data.json";
import "./destination.scss";
import mars from "../../../assets/destination/image-mars.png";
import moon from "../../../assets/destination/image-moon.png";
import titan from "../../../assets/destination/image-titan.png";
import europa from "../../../assets/destination/image-europa.png";

export default class Destination extends Component {
  constructor(props) {
    super(props);
    this.hanbleChange = this.hanbleChange.bind(this);
    this.state = { focus: 0, img: moon };
    this.change = true;
  }

  btnActive(e) {
    document
      .querySelectorAll(".destination__card--desc--nav__element")
      .forEach((item) => {
        item.style.borderBottom = "";
      });
    this.change = false;
    e.target.style.borderBottom = "5px solid #fff";
  }

  hanbleChange(e) {
    let type = e.target.innerText;
    this.btnActive(e);
    if (type === "Moon") {
      this.setState({ focus: 0, img: moon });
    } else if (type === "Mars") {
      this.setState({ focus: 1, img: mars });
    } else if (type === "Europa") {
      this.setState({ focus: 2, img: europa });
    } else if (type === "Titan") {
      this.setState({ focus: 3, img: titan });
    }
  }

  render() {
    if (this.change) {
      setTimeout(() => {
        document.querySelector(
          ".destination__card--desc--nav__element"
        ).style.borderBottom = "5px solid #fff";
      }, 100);
    }
    return (
      <div className="destination">
        <h3 className="destination__title">
          <span>01</span> Pick your destination
        </h3>
        <div className="destination__card">
          <img className="destination__card--img" src={this.state.img} />
          <div className="destination__card--desc">
            <nav className="destination__card--desc--nav">
              <p
                className="destination__card--desc--nav__element"
                onClick={this.hanbleChange}
              >
                {data.destinations[0].name}
              </p>
              <p
                className="destination__card--desc--nav__element"
                onClick={this.hanbleChange}
              >
                {data.destinations[1].name}
              </p>
              <p
                className="destination__card--desc--nav__element"
                onClick={this.hanbleChange}
              >
                {data.destinations[2].name}
              </p>
              <p
                className="destination__card--desc--nav__element"
                onClick={this.hanbleChange}
              >
                {data.destinations[3].name}
              </p>
            </nav>
            <h1 className="destination__card--desc--title">
              {data.destinations[this.state.focus].name}
            </h1>
            <p className="destination__card--desc--details">
              {data.destinations[this.state.focus].description}
            </p>
            <p className="destination__card--desc--hr"></p>
            <div className="destination__card--desc--info">
              <div className="destination__card--desc--info__distance">
                <p>AVG. DISTANCE</p>{" "}
                {data.destinations[this.state.focus].distance}
              </div>
              <div className="destination__card--desc--info__travel">
                <p>Est. travel time</p>{" "}
                {data.destinations[this.state.focus].travel}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
