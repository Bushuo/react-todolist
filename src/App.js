import React, { Component } from "react";
import Task from "./components/task";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Task />
      </div>
    );
  }
}

export default App;
