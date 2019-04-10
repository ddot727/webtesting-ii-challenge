import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
afterEach(cleanup);

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders!", () => {
    render(<App />);
  });
  it("renders 'slowest'", () => {
    const { getByText } = render(<App />);
    getByText(/slowest/i);
  });
  it("renders numbers of hits after hit function is fired", () => {
    const { getByText } = render(<App />);
    const button = getByText(/hits/i);
    fireEvent.click(button);
    getByText(/Hits/);
  });
  it("renders numbers of strikes after strike function is fired", () => {
    const { getByText } = render(<App />);
    const button = getByText(/strikes/i);
    fireEvent.click(button);
    getByText(/Strikes/);
  });
  it("renders numbers of fouls after foul function is fired", () => {
    const { getByText } = render(<App />);
    const button = getByText(/foul/i);
    fireEvent.click(button);
    getByText(/Fouls/);
  });
});

describe("<Dashboard />", () => {
  it("renders!", () => {
    render(<Dashboard />);
  });
  it("renders 'STRIKE'", () => {
    const { getByText } = render(<App />);
    getByText(/strike/i);
  });
  it("fires hit function", () => {
    const { getByText } = render(<Dashboard />);
    const button = getByText(/hit/i);
    fireEvent.click(button);
  });
});

describe("<Display />", () => {
  it("renders!", () => {
    render(<Display />);
  });
  it("renders the number of hits", () => {
    const { getByText } = render(<App />);
    getByText(/Hits: 0/);
  });
  it("renders the number of fouls", () => {
    const { getByText } = render(<App />);
    getByText(/Fouls: 0/);
  });
});
