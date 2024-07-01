import React, { useState } from "react";
import Work from "./Work_box";
import "./style.css";

const Portfolio = () => {
  const [works] = useState([
    {
      img: "https://miro.medium.com/max/1400/0*MYd28f8vpLiE34ij.jpeg",
      title: "Modern UI/UX Dashboard Design",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsam asperiores"
    },
    {
      img:
        "https://i.pinimg.com/originals/80/a1/17/80a1173fb50fe01bac507532338eb336.png",
      title: "Food and Consumation Web App",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsam asperiores"
    },
    {
      img:
        "https://i.pinimg.com/originals/56/ae/76/56ae76f7bc1b3e0edc962cea1af7035f.png",
      title: "Future Social Media Web 3.0 d'App",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsam asperiores"
    }
  ]);

  return (
    <section className="container container__portfolio" id="portfolio">
      {/* {works.map((work, index) => (
        <div key={index} className="portfolio__work">
          <Work img={work.img} title={work.title} text={work.text} />
        </div>
      ))} */}
      <div className="portfolio__header">
        <h1>See Our Works Or Portfolio</h1>
        <button className="btn btn-primary">More About</button>
      </div>
      {works.map((work, index) => (
        <div key={index} className="portfolio__work">
          <Work img={work.img} title={work.title} text={work.text} />
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
