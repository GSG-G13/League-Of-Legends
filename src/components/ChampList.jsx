import React, { Component } from "react";
import thresh from "../img/thresh.jpg";

export class ChampList extends Component {
  render() {
    return (
      <>
        <div className="champ-role">
          <label class="form-control">
            <input type="radio" name="radio" />
            Tank
          </label>

          <label class="form-control">
            <input type="radio" name="radio" />
            Support
          </label>

          <label class="form-control">
            <input type="radio" name="radio" />
            Mid
          </label>

          <label class="form-control">
            <input type="radio" name="radio" />
            Adc
          </label>

          <label class="form-control">
            <input type="radio" name="radio" />
            Jungle
          </label>
        </div>
        <div className="champ-container">
          <div className="champ-info">
            <img src={thresh} alt="" />
            <div className="details">
              <h3>Thresh</h3>
            </div>
          </div>

          <div className="champ-info">
            <img src={thresh} alt="" />
            <div className="details">
              <h3>Thresh</h3>
            </div>
          </div> <div className="champ-info">
            <img src={thresh} alt="" />
            <div className="details">
              <h3>Thresh</h3>
            </div>
          </div> <div className="champ-info">
            <img src={thresh} alt="" />
            <div className="details">
              <h3>Thresh</h3>
            </div>
          </div> <div className="champ-info">
            <img src={thresh} alt="" />
            <div className="details">
              <h3>Thresh</h3>
            </div>
          </div> <div className="champ-info">
            <img src={thresh} alt="" />
            <div className="details">
              <h3>Thresh</h3>
            </div>
          </div> <div className="champ-info">
            <img src={thresh} alt="" />
            <div className="details">
              <h3>Thresh</h3>
            </div>
          </div> <div className="champ-info">
            <img src={thresh} alt="" />
            <div className="details">
              <h3>Thresh</h3>
            </div>
          </div> <div className="champ-info">
            <img src={thresh} alt="" />
            <div className="details">
              <h3>Thresh</h3>
            </div>
          </div> <div className="champ-info">
            <img src={thresh} alt="" />
            <div className="details">
              <h3>Thresh</h3>
            </div>
          </div> <div className="champ-info">
            <img src={thresh} alt="" />
            <div className="details">
              <h3>Thresh</h3>
            </div>
          </div>



        </div>
      </>
    );
  }
}

export default ChampList;
