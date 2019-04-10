import React, { Component } from "react";

function Display(props) {
  return (
    <div>
      <h2># of Strikes: {props.strikes}</h2>
      <h2># of Balls: {props.balls}</h2>
      <h2># of Fouls: {props.fouls}</h2>
      <h2># of Hits: {props.hits}</h2>
    </div>
  );
}

export default Display;
