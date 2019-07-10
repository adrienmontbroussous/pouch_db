import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Base from "./db.js";

class App extends React.Component {
  render() {
    const base = new Base("coucou");
    base.createNotes({});
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
