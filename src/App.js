import React from "react";
import Header from "./header/Header";
import dataNav from "./header/dataNav";
import Cover from "./cover/cover";
import Places from "./place/place";
import placeData from "./place/placeData";
import Quote from "./quote/Quote";
import Footer from "./footer/Footer";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header dataNav={dataNav} state={this.activeState} />
        </header>
        <section>
          <Cover />
          <Places placeData={placeData} />
          <Quote />
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;
