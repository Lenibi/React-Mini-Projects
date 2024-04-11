"use client";
import React from "react";
import { useState, useEffect } from "react";

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState<{ text: string; author: string } | null>(null);
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);
  const newQuote = () => {
    let temp = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[temp]);
  };
  return (
    <div className="container2">
      <button className="button2" onClick={newQuote}>
        New Quote
      </button>
      <h2>{quote?.text}</h2>
      <i>{quote?.author}</i>
    </div>
  );
};

export default Quote;
