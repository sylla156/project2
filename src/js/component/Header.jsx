import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.slide = this.slide.bind(this);
    this.offSilde = this.offSilde.bind(this);
    this.view = this.view.bind(this);
    this.app = document.querySelector("#app");
    this.state = { view: this.props.home, appStyle: "bgMoon", element: 1 };
  }

  componentDidMount() {
    this.setState({ view: this.props.home, appStyle: "bgMoom" });

  }

  slide() {
    let slide = document.querySelector(".navbar");
    slide.style.transform = "translateX(0px)";
  }

  offSilde() {
    let slide = document.querySelector(".navbar");
    slide.style.transform = "translateX(200vw)";
  }

  style() {
    this.app.classList = "";
    this.app.classList.add(this.state.appStyle);
  }


  view(e) {
    let type = e.target.innerHTML;
    if (type == "00 Home") {
      this.setState({ view: this.props.home, appStyle: "bgMoom", element: 1 });
    } else if (type == "01 Destination") {
      this.setState({ view: this.props.dest, appStyle: "bgDest", element: 2 });
    } else if (type == "02 Crew") {
      this.setState({ view: this.props.crew, appStyle: "bgCrew", element: 3 });
    } else if (type == "03 Technology") {
      this.setState({ view: this.props.tech, appStyle: "bgTech", element: 4 });
    }
  }

  render() {
    this.style();
    return (
      <>
        <div className="header">
          <div className="header__logo">
            <div className="header__logo--logo"></div>
          </div>
          <div className="header__hr"></div>
          <div className="header__nav">
            <p
              className="header__nav--element header__nav--element1 start"
              onClick={this.view}
            >
              00 Home
            </p>
            <p
              className="header__nav--element header__nav--element2"
              onClick={this.view}
            >
              01 Destination
            </p>
            <p
              className="header__nav--element header__nav--element3"
              onClick={this.view}
            >
              02 Crew
            </p>
            <p
              className="header__nav--element header__nav--element4"
              onClick={this.view}
            >
              03 Technology
            </p>
          </div>
          <div className="btnNav" onClick={this.slide}></div>
        </div>
        <div className="navbar">
          <div className="navbar__exit">
            <p className="navbar__exit--btn" onClick={this.offSilde}></p>
          </div>
          <div className="navbar__nav">
            <p className="navbar__nav--element">00 Home</p>
            <p className="navbar__nav--element">01 Destination</p>
            <p className="navbar__nav--element">02 Crew</p>
            <p className="navbar__nav--element">03 Technology</p>
          </div>
        </div>
        {this.state.view}
      </>
    );
  }
}
