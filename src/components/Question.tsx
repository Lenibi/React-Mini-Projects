"use client";
import React, { Children, useState } from "react";

interface Props {
  question: string;
  children: string;
}
const Question = ({ question, children }: Props) => {
  const [visibility, setVisibility] = useState("hidden");
  const [sign, setSign] = useState("+");
  const click = () => {
    if (visibility == "hidden") {
      setSign("-");
      setVisibility("");
    } else {
      setSign("+");
      setVisibility("hidden");
    }
  };
  return (
    <>
      <div className="white">
        <div className="container3">
          <b>{question}</b>
          <button className="button1" onClick={click}>
            {sign}
          </button>
        </div>
        <p className={"leftText " + visibility}>{children}</p>
      </div>
    </>
  );
};

export default Question;
