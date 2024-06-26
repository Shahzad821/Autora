import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Project from "./components/Projects/Project";
import AllServices from "./components/AllServices/AllServices";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Project></Project>
      <AllServices></AllServices>
      <Blog></Blog>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default App;
