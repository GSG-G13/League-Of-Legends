import { Component } from "react";
import FilterSearch from "./components/FilterSearch";
import Landing from "./components/Landing";
import ChampList from "./components/ChampList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <FilterSearch />
        <ChampList/>
      </div>
    );
  }
}

export default App;
