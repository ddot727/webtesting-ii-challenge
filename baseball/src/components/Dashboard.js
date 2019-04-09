import React, { Component } from "react";
import Display from "./Display";
import Buttons from "./Buttons";

class Dashboard extends Component {
  state = {
    strikes: 0,
    balls: 0,
    fouls: 0,
    hits: 0
  };
  render() {
    return (
      <div>
        <Display state={this.state} />
        <Buttons state={this.state} />
      </div>
    );
  }
}

export default Dashboard;
