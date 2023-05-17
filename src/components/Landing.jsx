import React, { Component } from "react";
import lol from "../video/lol.mp4";

class Landing extends Component {
  videoRef = React.createRef();

  componentDidMount() {
    this.videoRef.current.muted = true;
    this.videoRef.current.play();
  }

  render() {
    return (
      <div className="landing-component">
        <div className="container">
          <video ref={this.videoRef} loop>
            <source src={lol} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}

export default Landing;
