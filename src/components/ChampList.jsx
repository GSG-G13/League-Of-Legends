import React, { Component } from "react";
import getData from "../utils/getData";
import loading from "../img/loading-gif.gif";

export class ChampList extends Component {
  

  state = {
    champs: []
  };

  componentDidMount() {
    getData()
      .then((data) => Object.values(data.data))
      .then((list) => this.setState({champs:list}))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <>
        <div className="champ-role">
          <label className="form-control">
            <input type="radio" name="radio" />
            Tank
          </label>

          <label className="form-control">
            <input type="radio" name="radio" />
            Support
          </label>

          <label className="form-control">
            <input type="radio" name="radio" />
            Mid
          </label>

          <label className="form-control">
            <input type="radio" name="radio" />
            Adc
          </label>

          <label className="form-control">
            <input type="radio" name="radio" />
            Jungle
          </label>
        </div>
        <div className="champ-container">
          {this.state.champss || this.state.champs > 0 ?( this.state.champs.map((champ) => {
            let imgName = champ.image.full;
            let x = imgName.slice(0, imgName.length - 4);
            let path = x + '_0.jpg';
            return (
              <div className="champ-info" key={champ.id}>
                <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${path}`} alt="champ" />
                <div className="details">
                  <h3>{champ.name}</h3>
                </div>
              </div>
            );
          })) : <img src={loading} alt="loading" className="loading" />}
        </div>
      </>
    );
  }
}

export default ChampList;
