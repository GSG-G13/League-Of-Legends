import { Component } from 'react';
import logo from "../img/logo.png";

class FilterSearch extends Component {
  render() {
    return (
      <div className='search-component'>
        <div className="container">
          <img src={logo} alt="logo" className="logo" />
          <input type='text' placeholder='Search for a champions...' />
        </div>
      </div>
    )
  }
}

export default FilterSearch;
