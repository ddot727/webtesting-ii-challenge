import React, { Component } from "react";

class Buttons extends Component {
  render() {
    return (
      <div>
        <button onClick={this.strike}>Strike</button>
        &nbsp;
        <button onClick={this.ball}>Ball</button>
        &nbsp;
        <button onClick={this.foul}>Foul</button>
        &nbsp;
        <button onClick={this.hit}>Hit!</button>
      </div>
    );
  }
}

export default Buttons;
