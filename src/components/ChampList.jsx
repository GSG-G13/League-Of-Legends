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
              <h2>Thresh</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit deserunt inventore enim, ad similique, alias
                necessitatibus vel id debitis reprehenderit illum. Saepe fugiat
                distinctio quos, perferendis dolorum soluta accusamus dolor.
              </p>
            </div>
          </div>



        </div>
      </>
    );
  }
}

export default ChampList;
