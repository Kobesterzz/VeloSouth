import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./css/App.css";
import Cycle from "./img/Cycle.png";
import Kits from "./img/kits.png";
import Logo from "./img/logo.svg";
import Pic from "./img/Pic.jpg";
import Footer from "./footer";
import "@fortawesome/fontawesome-free/css/all.min.css";


function GradientAnimationSection() {
  const visualRef = useRef(null);
  const cardRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Filter out null/undefined elements in cardRefs before iterating
      cardRefs.current
        .filter(Boolean) // Skip null/undefined refs
        .forEach((card, index) => {
          const start = index * viewportHeight;
          const end = start + viewportHeight;

          if (scrollTop >= start && scrollTop < end) {
            // Safely update visualRef's className
            if (visualRef.current) {
              visualRef.current.className = `video-visual section-${index + 1}`;
            }

            // Update the body class for dynamic text highlight color
            document.body.className = `section-${index + 1}`;
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
      id: "welcome",
      img: Logo,
      alt: "Logo",
      headline: "Welcome To",
      highlight: "VeloSouth",
      desc: "Experience the thrill of cycling and join a community built for riders.",
    },
    {
      id: "Ride-info",
      img: Cycle,
      alt: "Cyclist",
      headline: "Learn more About",
      highlight: "Ride Info",
      desc: "Find routes, tips, and all you need for our rides.",
      externalLink: "https://strava.app.link/He00SyGz6Pb", // External link
    },
    {
      id: "Kits",
      img: Kits,
      alt: "Kit",
      headline: "Buy our",
      highlight: "Kits",
      desc: "Upgrade your ride with stylish and performance-driven gear.",
      externalLink: "https://jakroo.com/store-front?storeId=ryC2fsCfT", // External link
    },
    {
      id: "Pics",
      img: Pic,
      alt: "Img of team",
      headline: "Take a look at our ",
      highlight: "Pictures",
      desc: "View moments from past rides, showcasing our cycling efforts.",
      externalLink: "https://www.instagram.com/velosouth_dfw/", // External link
    },
  ];

  return (
    <div className="gradient-animation-section">
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
              {card.link ? (
                <button onClick={() => navigate(card.link)} className="link">
                  →
                </button>
              ) : card.externalLink ? (
                <button
                  onClick={() => window.open(card.externalLink, "_blank")}
                  className="link"
                >
                  →
                </button>
              ) : null}
            </div>
            <div className="image">
              <img src={card.img} alt={card.alt} className="card-img" />
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default GradientAnimationSection;
