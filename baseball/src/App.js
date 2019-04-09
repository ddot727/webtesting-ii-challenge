import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>America's Slowest Past Time</h1>
          <Dashboard />
        </header>
      </div>
    );
  }
}

export default App;
