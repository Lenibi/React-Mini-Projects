"use client";
import React, { useState, ChangeEvent, useMemo } from "react";

const BmiCalculator = () => {
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(150);
  const bmi = useMemo(() => {
    const heightMeters = height / 100;
    return (weight / heightMeters / heightMeters).toFixed(1);
  }, [weight, height]);
  const onChangeWeight = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setWeight(Number(value));
  };

  const onChangeHeight = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setHeight(Number(value));
  };
  return (
    <div className="bmiText">
      <p>{"Weight: " + weight.toString() + "kg"}</p>
      <input
        className="slider"
        onChange={onChangeWeight}
        type="range"
        min="40"
        max="220"
        step="1"
        value={weight}
      />
      <p>{"Height: " + height.toString() + "cm"}</p>
      <input
        className="slider"
        onChange={onChangeHeight}
        type="range"
        min="140"
        max="220"
        step="1"
        value={height}
      />
      <p>Your BMI is</p>
      <div className="blueDiv">{bmi}</div>
    </div>
  );
};

export default BmiCalculator;
