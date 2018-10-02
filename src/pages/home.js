import React from "react";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const HomePage = () => (
  <div>
    <Header />
    <About />
    <Resume />
    <Portfolio />
    {/* <Testimonials /> */}
    <Footer />
  </div>
);

export default HomePage;
