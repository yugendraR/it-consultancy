import React from "react";
import "./style.css";

const Banner = () => {
  return (
    <section id="banner" className="banner__container">
      <div className="container">
        <h1>
          Let's Boost Your Business
          <br /> With The Latest Technology
        </h1>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
    </section>
  );
};

export default Banner;