"use client";
import React, { useState } from "react";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  let leftArrow = () => {
    let temp = index == 0 ? images.length - 1 : index - 1;
    console.log(temp);
    setIndex(temp);
  };
  let rightArrow = () => {
    let temp = index == images.length - 1 ? 0 : index + 1;
    console.log(temp);
    setIndex(temp);
  };
  return (
    <div className="container1">
      <button className="arrow" onClick={leftArrow}>
        ⬅
      </button>
      <div className="carousel">
        <img src={images[index]} alt="carousel" width="500" />
      </div>
      <button className="arrow" onClick={leftArrow}>
        ⮕
      </button>
    </div>
  );
};

export default Carousel;
