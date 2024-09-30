"use client";
import React from "react";
import { useState, useEffect } from "react";

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState<{ text: string; author: string } | null>(null);
  // useEffect(() => {
  //   fetch("https://zenquotes.io/api/quotes") //"https://type.fit/api/quotes"
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setQuotes(json);
  //       setQuote(json[0]);
  //     });
  // }, []);


  // Old quote api stopped working, so using a new API
  useEffect(() => {
    fetchNewQuote();
  }, []);

  const fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((json) => {
        setQuote({
          text: json.content,
          author: json.author,
        });
      })
      .catch((error) => {
        console.log("Error fetching quotes:", error);
      });
  };
  

  


  // useEffect(() => {
  //   fetch("https://zenquotes.io/api/quotes") // Or "https://type.fit/api/quotes"
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return res.json();
  //     })
  //     .then((json) => {
  //       setQuotes(json);
  //       setQuote(json[0]);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching quotes:", error);
  //     });
  // }, []);

  
  // const newQuote = () => {
  //   let temp = Math.floor(Math.random() * quotes.length);
  //   setQuote(quotes[temp]);
  // };
  return (
    <div className="container2">
      <button className="button2" onClick={fetchNewQuote}> 
        New Quote
      </button>
      <h2>{quote?.text}</h2>
      <i>{quote?.author}</i>
    </div>
  );
};

export default Quote;
