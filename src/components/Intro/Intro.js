import React from "react";
import "./Intro.css";
import hi from "./hi.png";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="i-left">
        <h2 className="i-intro">Hello, My name is</h2>
        <h1 className="i-name">Kartik</h1>
        {/* <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Web Developer</div>
            <div className="i-title-item">Fron-end Developer</div>
            <div className="i-title-item">Back-end Developer</div>
          </div>
        </div> */}
        <div className="i-desc">
          I am a MERN Stack developer. I create stylish modern websites,
          <br />
          web services and online store
        </div>
      </div>
      <div className="i-right">
        <div className="i-right-container">
          <img src={hi} alt="Hi" className="i-right-container-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
