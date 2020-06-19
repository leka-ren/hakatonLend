import React from "react";
import Alert from "./popup/popupAlert";
import Header from "./header/Header";
import dataNav from "./header/dataNav";
import Cover from "./cover/cover";
import Places from "./place/place";
import placeData from "./place/placeData";
import Quote from "./quote/Quote";
import Footer from "./footer/Footer";
import stateShowToggle from "./popup/statePopup";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Alert value={stateShowToggle}/>
      <header>
        <Header value={stateShowToggle} dataNav={dataNav} />
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

export default App;
