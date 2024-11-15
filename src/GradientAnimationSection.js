import React from "react";
import "./App.css"; 
import Cycle from "./img/Cycle.png";
import Kits from "./img/kits.png";
import Logo from "./img/logo.svg";
import Pic from "./img/Pic.jpg";

function GradientAnimationSection() {
  return (
    <div className="section">
      <div className="video-visual">
        <video
          className="video"
          autoPlay
          loop
          muted
          poster=""
          aria-label="background gradient animation"
        >
          <source
            src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/bg-gradient-animation.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="section-wrapper">
        <div className="content-wrapper">
          {[
            {
              img: Logo,
              alt: "Logo",
              headline: "Welcome To",
              highlight: "VeloSouth",
              desc: "Join the battle and conquer the arena with unmatched skill and strategy.",
            },
            {
              img: Cycle,
              alt: "cyclist",
              headline: "Learn more About",
              highlight: "Ride Info",
              desc: "Immerse yourself in a world where legends clash and heroes rise to glory.",
            },
            {
              img:Kits,
              alt: "Kit",
              headline: "Buy our",
              highlight: "Kits",
              desc: "Harness powerful spells and enchantments to dominate your foes and change the course of battle.",
            },
            {
              img: Pic,
              alt: "Img of team",
              headline: "Take a look at our ",
              highlight: "Pictures",
              desc: "Lead your team to victory with unparalleled strength and unwavering determination.",
            },
          ].map((content, index) => (
            <div className={`content content-${index + 1}`} key={index}>
              <div className="mobile-visual">
                <img className="card-img" src={content.img} alt={content.alt} />
              </div>
              <div className="meta">
                <h2 className="headline">
                  {content.headline}
                  <span className="text-highlight"> {content.highlight}</span>
                </h2>
                <p className="desc">{content.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="visual">
          <div className="card-wrapper">
            {[
              Logo,
              Cycle,
              Kits,
              Pic,
            ].map((img, index) => (
              <div className={`card card-${index + 1}`} key={index}>
                <img className="card-img" src={img} alt={`Card ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GradientAnimationSection;