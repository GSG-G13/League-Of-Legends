import { Component } from "react";
import FilterSearch from "./components/FilterSearch";
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <FilterSearch />
      </div>
    );
  }
}

export default App;
