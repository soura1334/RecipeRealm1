import { useRef, useEffect, useState } from "react";
import React from "react";
import "./Slides.css";

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % slides.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const slides = [
    <div key={1} className="slide">
      <img src="" alt="" />
      <div className="user-info">
        <h3>slide 1</h3>
        <p></p>
      </div>
    </div>,
    <div key={2} className="slide">
      <img src="" alt="" />
      <div className="user-info">
        <h3>slide 2</h3>
        <p></p>
      </div>
    </div>,
    <div key={3} className="slide">
     <img src="" alt="" />
      <div className="user-info">
        <h3>slide 3</h3>
        <p></p>
      </div>
    </div>,
    <div key={4} className="slide">
      <img src="" alt="" />
      <div className="user-info">
        <h3>slide 4</h3>
        <p></p>
      </div>
    </div>,
  ];

  return (
    <div className="slides">
      <div className="slider">
        <ul>
          {slides.slice(currentIndex, currentIndex + 2).map((slide, index) => (
            <li key={index}>
              {slide}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slides;
