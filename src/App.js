import { Component } from "react";
import Landing from "./components/Landing";
import ChampList from "./components/ChampList";
import { getData, getChampData } from "./utils/getData";
import logo from "./img/logo.png";

const roles = ["All", "Tank", "Support", "Mage", "Fighter", "Marksman"];

class App extends Component {
  state = {
    champs: [],
    searchChamps: [],
    champName: "",
    champRole: "All",
  };

  componentDidMount() {
    // console.log('componentDidMount');

    getData()
      .then((data) => Object.values(data.data))
      .then((list) => this.setState({ champs: list }))
      .catch((err) => console.error(err));
  }

  // componentDidUpdate(){
  //   console.log(this.state.champRole);
  // }
 

  componentDidUpdate(prevProps, prevState) {

    if (prevState.champName !== this.state.champName) {
      if (this.state.champName !== "") {
        getChampData(this.state.champName)
          .then((data) => Object.values(data.data))
          .then((list) => this.setState({ champs: list }))
          .catch((err) => console.error(err));
      } 
    } else if(prevState.champRole !== this.state.champRole) {
      getData()
        .then((data) => Object.values(data.data))
        .then((list) => {
          const x = list.filter(
            (ele) => ele.tags[0] === this.state.champRole
          );
          console.log(x);
          this.setState({ champs: x });
        });
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
        <div className="champ-role">
          {roles.map((role) => {
            return (
              <label className="form-control" key={role}>
                <input
                  type="radio"
                  name="radio"
                  value={role}
                  onChange={(e) => this.setState({ champRole: e.target.value })}
                  checked={this.state.champRole === role ? true : false}
                />
                {role}
              </label>
            );
          })}
        </div>
        <ChampList champs={this.state.champs} />
      </div>
    );
  }
}

export default App;
