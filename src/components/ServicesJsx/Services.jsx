import React from "react";
import Intro from "./Intro";
import ServicesComp from "./Services__Comp";
import "./style.css";

const Services = () => {
  return (
    <section id="services" className="container container__services">
      <Intro />
      <ServicesComp />
    </section>
  );
};

export default Services;
