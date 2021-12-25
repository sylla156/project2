import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.slide = this.slide.bind(this);
    this.reslide = this.reslide.bind(this);
    this.rendue = this.rendue.bind(this);
    this.state = {rendue: this.props.dest}
  }

  slide() {
    let slide = document.querySelector(".navbar");
    slide.style.transform = "translateX(0px)";
  }

  reslide() {
    let slide = document.querySelector(".navbar");
    slide.style.transform = "translateX(200vw)";
  }

  rendue(e){
    let type = e.target.innerHTML;
    if(type == "01 Destination"){
      this.setState({rendue: this.props.dest});
    }else{
      this.setState({rendue: this.props.home});
    }
  }

  render() {
    return (
      <>
        <div className="header">
          <div className="header__logo">
            <div className="header__logo--logo"></div>
          </div>
          <div className="header__hr"></div>
          <div className="header__nav">
            <p className="header__nav--element start" onClick={this.rendue}>00 Home</p>
            <p className="header__nav--element" onClick={this.rendue}>01 Destination</p>
            <p className="header__nav--element">02 Crew</p>
            <p className="header__nav--element">03 Technology</p>
          </div>
          <div className="btnNav" onClick={this.slide}></div>
        </div>
        <div className="navbar">
          <div className="navbar__exit">
            <p className="navbar__exit--btn" onClick={this.reslide}></p>
          </div>
          <div className="navbar__nav">
            <p className="navbar__nav--element">00 Home</p>
            <p className="navbar__nav--element">01 Destination</p>
            <p className="navbar__nav--element">02 Crew</p>
            <p className="navbar__nav--element">03 Technology</p>
          </div>
        </div>
        {this.state.rendue}
      </>
    );
  }
}
