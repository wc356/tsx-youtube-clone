import React, { useState } from "react";

import Navbar from "./Navbar";
import VideosList from "./VideosList";
import Footer from "./Footer";

export enum AppView {
  HOME = "home",
  TRENDING = "trending",
  SUBSCRIPTIONS = "subscriptions",
  LIBRARY = "library",
}

const App = () => {
  const [state, setState] = useState(AppView.HOME);

  return (
    <div className="App">
      <Navbar />
      <VideosList />
      <Footer currentView={state} changeView={setState} />
    </div>
  );
};

export default App;
