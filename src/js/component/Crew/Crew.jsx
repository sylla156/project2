import React, { Component } from "react";
import data from "../../../assets/data.json";
import "./crew.scss";
import ansari from "../../../assets/crew/image-anousheh-ansari.png";
import hurley from "../../../assets/crew/image-douglas-hurley.png";
import shuttleworth from "../../../assets/crew/image-mark-shuttleworth.png";
import glover from "../../../assets/crew/image-victor-glover.png";

export default class Crew extends Component {
  constructor(props) {
    super(props);
    this.hanbleChange = this.hanbleChange.bind(this);
    this.state = { focus: 0, img: hurley };
  }

  hanbleChange(e) {
    let type = e.target.attributes.type.value;
    document.querySelectorAll(".btn").forEach((item) => {
      item.style.opacity = 0.17;
    });
    if (type == "one") {
      this.setState({ focus: 0, img: hurley });
      e.target.style.opacity = 1;
    } else if (type == "two") {
      this.setState({ focus: 1, img: shuttleworth });
      e.target.style.opacity = 1;
    } else if (type == "three") {
      this.setState({ focus: 2, img: glover });
      e.target.style.opacity = 1;
    } else if (type == "four") {
      this.setState({ focus: 3, img: ansari });
      e.target.style.opacity = 1;
    }
  }

  render() {
    return (
      <div className="crew">
        <h3 className="crew__title">
          <span>01</span> Meet your crew
        </h3>
        <div className="crew__card">
          <div className="crew__card--desc">
            <h1 className="crew__card--desc--role">
              {data.crew[this.state.focus].role}
            </h1>
            <p className="crew__card--desc--name">
              {data.crew[this.state.focus].name}
            </p>
            <p className="crew__card--desc--bio">
              {data.crew[this.state.focus].bio}
            </p>

            <nav className="crew__card--desc--nav">
              <p
                className="crew__card--desc--nav__element btn"
                type="one"
                onClick={this.hanbleChange}
              ></p>
              <p
                className="crew__card--desc--nav__element btn"
                type="two"
                onClick={this.hanbleChange}
              ></p>
              <p
                className="crew__card--desc--nav__element btn"
                type="three"
                onClick={this.hanbleChange}
              ></p>
              <p
                className="crew__card--desc--nav__element btn"
                type="four"
                onClick={this.hanbleChange}
              ></p>
            </nav>
          </div>
          <div className="crew__card--img">
            <img
              className="crew__card--img-element"
              src={this.state.img}
              alt="merde"
            />
          </div>
        </div>
      </div>
    );
  }
}
