import React from "react";
import StickyCTA from "./components/StickyCTA";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import ValueProposal from "./components/ValueProposal";
import Automation from "./components/Automation";
import Security from "./components/Security";
import Control from "./components/Control";
import Revenue from "./components/Revenue";
import Sessions from "./components/Sessions";

function App() {
  return (
    <div>
      <StickyCTA />
      <Navbar />
      <Hero />
      <Problems />
      <ValueProposal />
      <Automation />
      <Security />
      <Control />
      <Revenue />
      <Sessions />
    </div>
  );
}

export default App;