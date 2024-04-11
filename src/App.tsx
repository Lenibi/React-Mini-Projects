import './App.css';
import Carousel from "./components/Carousel";
import React, { useState } from "react";
import Question from "./components/Question";
import Quote from "./components/Quote";
import List from "./components/List";
import GithubSearch from "./components/GithubSearch";
import Video from "./components/Video";
import BmiCalculator from "./components/BmiCalculator";

export default function Home() {
  return (
    <div className="center">
      <b className="headerText">React Mini Projects!</b>
      <section className="gray">
        <b><h1>Project 1: Carousel</h1></b>
        <h2>Press the arrows to scroll through the images!</h2>
        <div>
          <Carousel></Carousel>
        </div>
        <br />
      </section>

      <b><h1>Project 2: FAQ/Accordion</h1></b>
      <h2>Press the + to expand and see the answers!</h2>
      <div className="container1">
        <div className="blue">
          <h2>Frequenly Asked Questions</h2>
          <Question question="What types of products can I sell on my custom online shop?">
            Our custom online shop solutions are versatile and can accommodate a wide range of products, including physical goods, digital downloads, subscriptions, and services. Whether you&apos;re selling clothing, electronics, handmade crafts, or digital artwork, our platform can be tailored to meet your specific product offerings.
          </Question>
          <Question question="How secure is the payment process on my custom online shop?">
            Ensuring the security of your customers&apos; payment information is our top priority. Our custom online shop integrates with trusted payment gateways that comply with industry-standard security protocols, such as SSL encryption and PCI DSS compliance. This provides a secure environment for processing transactions, protecting sensitive data from unauthorized access and ensuring peace of mind for both you and your customers.
          </Question>
          <Question question="Can I customize the design and layout of my online shop to match my brand?">
            Absolutely! We understand the importance of branding and creating a unique identity for your online shop. Our platform offers extensive customization options, allowing you to tailor the design, layout, colors, fonts, and imagery to align with your brand identity. Whether you have specific design requirements or prefer a custom theme, our team will work closely with you to bring your vision to life and create a memorable shopping experience for your customers.
          </Question>
        </div>
      </div>
      <br />

      <section className="gray">
      <b><h1>Project 3: Quote Generator</h1></b>
      <h2>Press the button to generate a new random quote!</h2>
      <Quote></Quote>
      <br />
      </section>

      <b><h1>Project 4: Shopping List</h1></b>
      <h2>Type an item then press the button to add it to the list!</h2>
      <h2>Double click on the list item text to strikethrough</h2>
      <h2>Press the X to delete the list item</h2>
      <List></List>
      <br />

      <section className="gray">
      <b><h1>Project 5: GitHub User Search</h1></b>
      <h2>Search GitHub profiles using the GitHub API!</h2>
      <GithubSearch></GithubSearch>
      <br />
      </section>

      <b><h1>Project 6: Video Player</h1></b>
      <h2>Cycle through the animal videos using the radio buttons!</h2>
      <Video></Video>
      <br />

      <section className="gray">
      <b><h1>Project 7: BMI Calculator</h1></b>
      <h2>Move the sliders to calculate your BMI!</h2>
      <BmiCalculator></BmiCalculator>
      <br />
      </section>
    </div>
  );
}
