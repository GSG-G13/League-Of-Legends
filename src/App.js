import { Component } from "react";
import Landing from "./components/Landing";
import ChampList from "./components/ChampList";
import { getData, getChampData } from "./utils/getData";
import logo from "./img/logo.png";

class App extends Component {
  state = {
    champs: [],
    champName: "",
  };

  componentDidMount() {
    getData()
      .then((data) => Object.values(data.data))
      .then((list) => this.setState({ champs: list }))
      .catch((err) => console.error(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.champName !== this.state.champName) {
      if (this.state.champName !== "") {
        getChampData(this.state.champName)
          .then((data) => Object.values(data.data))
          .then((list) => this.setState({ champs: list }))
          .catch((err) => console.error(err));
      } else {
        getData()
          .then((data) => Object.values(data.data))
          .then((list) => this.setState({ champs: list }))
          .catch((err) => console.error(err));
      }
    }
  }

  componentWillUnmount() {
    this.setState({ lists: [] });
  }
  render() {
    return (
      <div className="App">
        <Landing />
        <div className="search-component">
          <div className="container">
            <img src={logo} alt="logo" className="logo" />
            <input
              type="text"
              placeholder="Search for a champions..."
              value={this.state.champName}
              onChange={(e) => this.setState({ champName: e.target.value })}
            />
          </div>
        </div>
        <ChampList champs={this.state.champs} />
      </div>
    );
  }
}

export default App;
