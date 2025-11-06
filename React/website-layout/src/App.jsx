import React from "react";
import Headerss from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Headerss />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;