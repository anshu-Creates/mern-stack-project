import React from "react";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
import Reviews from "../components/Reviews/Reviews";
import About from "../components/About/About";
import Features from "../components/Features/Features";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Home />
      <Services />
      <Reviews />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
