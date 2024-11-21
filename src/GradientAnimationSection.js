import React, { useEffect, useRef } from "react";
import "./App.css";
import Cycle from "./img/Cycle.png";
import Kits from "./img/kits.png";
import Logo from "./img/logo.svg";
import Pic from "./img/Pic.jpg";

function GradientAnimationSection() {
  const visualRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;

      cardRefs.current.forEach((card, index) => {
        const start = index * viewportHeight;
        const end = start + viewportHeight;

        // Update the background visual's filter
        if (scrollTop >= start && scrollTop < end) {
          visualRef.current.className = `video-visual section-${index + 1}`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cards = [
    {
      id:"welcome",
      img: Logo,
      alt: "Logo",
      headline: "Welcome To",
      highlight: "VeloSouth",
      desc: "Join the battle and conquer the arena with unmatched skill and strategy.",
    },
    {
      id:"Ride-info",
      img: Cycle,
      alt: "Cyclist",
      headline: "Learn more About",
      highlight: "Ride Info",
      desc: "Immerse yourself in a world where legends clash and heroes rise to glory.",
    },
    {
      id:"Kits",
      img: Kits,
      alt: "Kit",
      headline: "Buy our",
      highlight: "Kits",
      desc: "Harness powerful spells and enchantments to dominate your foes and change the course of battle.",
    },
    {
      id:"Pics",
      img: Pic,
      alt: "Img of team",
      headline: "Take a look at our ",
      highlight: "Pictures",
      desc: "Lead your team to victory with unparalleled strength and unwavering determination.",
    },
  ];

  return (
    <div className="gradient-animation-section">
      {/* Background visual */}
      <div ref={visualRef} className="video-visual section-1">
        <video
          className="video"
          autoPlay
          loop
          muted
          playsInline
          aria-label="background gradient animation"
        >
          <source
            src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/dynamic-content-lockups-v2/assets/bg-gradient-animation.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Scrollable card content */}
      <div className="scroll-container">
        {cards.map((card, index) => (
          <div
            key={index}
            id={card.id}
            className="card-section"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="content">
              <h2 className="headline">
                {card.headline}
                <span className="text-highlight"> {card.highlight}</span>
              </h2>
              <p className="desc">{card.desc}</p>
            </div>
            <div className="image">
              <img src={card.img} alt={card.alt} className="card-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GradientAnimationSection;
