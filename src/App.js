import React, { Component } from "react";
import "./App.css";
import FetchData from "./components/FetchData";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <FetchData />
      </div>
    );
  }
}

export default App
