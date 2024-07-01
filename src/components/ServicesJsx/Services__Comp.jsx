import React from "react";
import { GrShieldSecurity } from "react-icons/gr";
import { BsLaptop } from "react-icons/bs";

const ServicesComp = () => {
  return (
    <div className="services__servicesComp">
      <div>
        <h1>Our Services For Technology You Need</h1>
        <button className="btn btn-primary">Load More</button>
      </div>
      <div>
        <div>
          <div className="icon">
            <GrShieldSecurity />
          </div>
          <h4>Cyber Security</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div>
          <div className="icon">
            <BsLaptop />
          </div>
          <h4>IT Consultant</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div>
          <div className="icon">
            <GrShieldSecurity />
          </div>
          <h4>Cyber Security</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div>
          <div className="icon">
            <BsLaptop />
          </div>
          <h4>IT Consultant</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesComp;
