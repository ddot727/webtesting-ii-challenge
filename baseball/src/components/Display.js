import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div>
        <h2># of Strikes: {this.props.state.strikes}</h2>
        <h2># of Balls: {this.props.state.balls}</h2>
        <h2># of Fouls: {this.props.state.fouls}</h2>
        <h2># of Hits: {this.props.state.hits}</h2>
      </div>
    );
  }
}

export default Display;
