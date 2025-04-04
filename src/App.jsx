import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

import "./App.css"; 
import Experience from "./components/Experience/Experience";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
