import React, { Component } from "react";
import Header from "./components/Header_Footer/Header";
import Featured from "./components/featured/Index";
import VenuInfo from "./components/VenuInfo/Index";
import Highlight from "./components/Highlight/Index";
import Footer from "./components/Header_Footer/Footer";

import Location from "./components/Location/Index";
import { Element } from "react-scroll";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Element name="Featured">
          <Featured />
        </Element>
        <Element name="VenueInfo">
          <VenuInfo />
        </Element>

        <Element name="Highlight">
          <Highlight />
        </Element>
        <Element name="Location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
