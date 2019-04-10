import React, { Component } from "react";
import Display from "./Display";

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
        <Display
          strikes={this.state.strikes}
          balls={this.state.balls}
          fouls={this.state.fouls}
          hits={this.state.hits}
        />
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

  strike = e => {
    if (this.state.strikes < 3) {
      this.setState({
        ...this.state,
        strikes: this.state.strikes + 1
      });
    } else {
      this.setState({
        ...this.state,
        strikes: 0,
        balls: 0,
        fouls: 0,
        hits: 0
      });
    }
  };

  ball = e => {
    if (this.state.balls < 4) {
      this.setState({
        ...this.state,
        balls: this.state.balls + 1
      });
    } else {
      this.setState({
        ...this.state,
        strikes: 0,
        balls: 0,
        fouls: 0,
        hits: 0
      });
    }
  };

  foul = e => {
    if (this.state.strikes === 0 || this.state.strikes === 1) {
      this.setState({
        ...this.state,
        strikes: this.state.strikes + 1,
        fouls: this.state.fouls + 1
      });
    } else if (this.state.fouls < 4) {
      this.setState({
        ...this.state,
        fouls: this.state.fouls + 1
      });
    } else {
      this.setState({
        ...this.state,
        strikes: 0,
        balls: 0,
        fouls: 0,
        hits: 0
      });
    }
  };

  hit = e => {
    this.setState({
      ...this.state,
      hits: this.state.hits + 1
    });
  };
}

export default Dashboard;
