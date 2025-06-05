import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact-me/Contact";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import ProjectDetails from "./components/Projects/ProjectDetails";

import "./App.css";

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
    <Footer />
  </>
);

const ProjectPage = () => (
  <>
    <ProjectDetails />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectPage />} />
    </Routes>
  );
};

export default App;
