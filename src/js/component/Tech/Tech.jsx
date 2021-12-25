import React, { Component } from "react";
import data from "../../../assets/data.json";
import "./tech.scss";
import launch from "../../../assets/technology/image-launch-vehicle-portrait.jpg";
import space from "../../../assets/technology/image-space-capsule-portrait.jpg";
import spaceport from "../../../assets/technology/image-spaceport-portrait.jpg";
import launchL from "../../../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceL from "../../../assets/technology/image-space-capsule-landscape.jpg";
import spaceportL from "../../../assets/technology/image-spaceport-landscape.jpg";

export default class Tech extends Component {
  constructor(props) {
    super(props);
    this.hanbleChange = this.hanbleChange.bind(this);
    this.state = { focus: 0, img: [launch, launchL] ,screen:undefined};
  }

  hanbleChange(e) {
    let type = e.target.innerHTML;
    let element = document.querySelectorAll(".btnT");
    document.querySelectorAll(".btnT").forEach((item) => {
      item.style.backgroundColor = "none";
    });
    if (type == "1") {
      this.setState({ focus: 0, img: [launch, launchL] });
      element.style.background = "white";
    } else if (type == "2") {
      this.setState({ focus: 1, img: [space, spaceL] });
      element.style.background = "white";
    } else if (type == "3") {
      this.setState({ focus: 2, img: [spaceport, spaceportL] });
      element.style.background = "white";
    }
  }

  goodImg() {
  
  }

  render() {
     
    console.log(this.state.screen)
    return (
      <div className="tech">
        <h3 className="tech__title">
          <span>03</span> SPACE LAUNCH 101
        </h3>
        <div className="tech__card">
          <nav className="tech__card--nav">
            <p
              className="tech__card--nav__element btnT "
              type="one"
              onClick={this.hanbleChange}
            >
              <span style={{ margin: "10px 0 0 28px" }}>1</span>
            </p>
            <p
              className="tech__card--nav__element btnT "
              type="two"
              onClick={this.hanbleChange}
            >
              <span>2</span>
            </p>
            <p
              className="tech__card--nav__element btnT "
              type="three"
              onClick={this.hanbleChange}
            >
              <span>3</span>
            </p>
          </nav>
          <div className="tech__card--desc">
            <p className="tech__card--desc--devise">THE TERMINOLOGY…</p>
            <h1 className="tech__card--desc--title">
              {data.technology[this.state.focus].name}
            </h1>
            <p className="tech__card--desc--details">
              {data.technology[this.state.focus].description}
            </p>
          </div>
          <div className="tech__card--img">
            <img className="tech__card--img--img" src={this.state.img[0]} />
          </div>
        </div>
      </div>
    );
  }
}
