import React from "react";
import AboutImg from "../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
            At our restaurant, we believe that great food is crafted from the finest ingredients and a passion for culinary excellence. 
            What makes our dishes truly special is our commitment to sourcing fresh, locally-sourced produce and high-quality proteins, 
            combined with time-honored cooking techniques and innovative flavors. 
            </p>
            <p>
            Each dish is thoughtfully prepared by our talented chefs, 
            who take pride in creating a memorable dining experience that excites the palate and nourishes the soul. From our signature recipes 
            to our seasonal specials, we strive to celebrate the rich tapestry of flavors and traditions that make our food unique. 
            Join us to discover the art of good eating, where every bite tells a story.
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
