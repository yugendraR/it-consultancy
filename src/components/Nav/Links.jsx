import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";

const Links = () => {
  const links = [
    "home",
    "about",
    "services",
    "portfolio",
    "testimony",
    "news",
    "contact"
  ];

  const [linksVisibility, setLinksVisibility] = useState(false);

  const toggleVisibility = () => {
    setLinksVisibility(!linksVisibility);
  };

  return (
    <>
      <div className="links__button hide__button">
        <button className="btn menu" onClick={toggleVisibility}>
          <RiMenu3Line />
        </button>
      </div>
      <div className={`links ${!linksVisibility ? "hide__links" : ""}`}>
        {links.map((link, index) => {
          return (
            <a
              key={index}
              className={!index ? "active" : ""}
              href={`#${link}`}
              onClick={toggleVisibility}
            >
              {link}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Links;