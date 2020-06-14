import React, { Component } from "react";

import Accordion from "../Components/Accordion";
import Footer from "../Components/Footer";
import CarouselBox from "../Components/CarouselBox";

import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
          crossOrigin="anonymous"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="css/style.css" />
        <title>Welcome to myTunes</title>

        {/* Sellers Section */}
        <section id="sellers" className="section back bg-white">
          <div class="container col">
            <h2 className="section-head text-center">Sellers</h2>
            <CarouselBox />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}
