import React from "react";
import "./style__work.css";

const Work = (props) => {
  return (
    <div className="portfolio__work">
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <p className="text">{props.text}</p>
    </div>
  );
};

export default Work;