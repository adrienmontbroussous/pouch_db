import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Base from "./db.js";
import Button from "@material-ui/core/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.init = this.init.bind(this);
    this.state = { base: null };
  }

  componentWillMount() {
    let base = new Base("pointDeVente");
    base.cleanDatabase();
    this.setState({ base: base });
  }

  search() {
    const { base } = this.state;
    base.getPointDeVenteFromNom("CARREFOUR").then(r => console.log(r));
  }

  init() {
    const { base } = this.state;
    base.initDatabase();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button key={"InitDataBase"} onClick={this.init} color="primary">
            Mettre des donnees
          </Button>
          <Button key={"InitDataBase"} onClick={this.search} color="primary">
            Rechercher
          </Button>

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
