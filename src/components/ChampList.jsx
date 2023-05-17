import React, { Component } from "react";
import loading from "../img/loading-gif.gif";

export class ChampList extends Component {



  render() {

    const {champs} = this.props
    return (
      <>
        <div className="champ-container">
          {champs || champs.length > 0 ?( champs.map((champ) => {
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
