import React, { Component } from "react";
import "./home.scss";
export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <div className="home__desc">
          <p className="home__desc--title"> So, you want to travel to</p>
          <h3 className="header__desc--title-2">space</h3>
          <p className="home__desc--text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="home__explore">
          <p className="home__explore--text">explore</p>
        </div>
      </div>
    );
  }
}
