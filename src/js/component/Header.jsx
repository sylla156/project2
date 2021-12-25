import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.slide = this.slide.bind(this);
    this.offSilde = this.offSilde.bind(this);
    this.view = this.view.bind(this);
    this.viewMobile = this.viewMobile.bind(this);
    this.app = document.querySelector("#app");
    this.change = true;
    this.changeMobile;
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
    if (this.change) {
      setTimeout(() => {
        document.querySelector(".header__nav--element1").style.borderBottom =
          "5px solid #fff";
      }, 100);
      setTimeout(() => {
        document.querySelector(".navbar__nav--element").style.borderRight =
          "5px solid #fff";
      }, 100);
    }
  }

  btnActive(e) {
    document.querySelectorAll(".header__nav--element").forEach((item) => {
      item.style.borderBottom = "";
    });
    this.change = false;
    e.target.style.borderBottom = "5px solid #fff";
  }

  btnActiveMobile(e) {
    document.querySelectorAll(".navbar__nav--element").forEach((item) => {
      item.style.borderRight = "";
    });
    this.change = false;
    e.target.style.borderRight = "5px solid #fff";
  }

  view(e) {
    let type = e.target.innerHTML;
    this.btnActive(e);
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

  viewMobile(e) {
    let type = e.target.innerHTML;
    this.btnActiveMobile(e);
    if (type == "00 Home") {
      this.setState({ view: this.props.home, appStyle: "bgMoom", element: 1 });
      this.offSilde();
    } else if (type == "01 Destination") {
      this.setState({ view: this.props.dest, appStyle: "bgDest", element: 2 });
      this.offSilde();
    } else if (type == "02 Crew") {
      this.setState({ view: this.props.crew, appStyle: "bgCrew", element: 3 });
      this.offSilde();
    } else if (type == "03 Technology") {
      this.setState({ view: this.props.tech, appStyle: "bgTech", element: 4 });
      this.offSilde();
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
            <p className="navbar__nav--element" onClick={this.viewMobile}>
              00 Home
            </p>
            <p className="navbar__nav--element" onClick={this.viewMobile}>
              01 Destination
            </p>
            <p className="navbar__nav--element" onClick={this.viewMobile}>
              02 Crew
            </p>
            <p className="navbar__nav--element" onClick={this.viewMobile}>
              03 Technology
            </p>
          </div>
        </div>
        {this.state.view}
      </>
    );
  }
}
