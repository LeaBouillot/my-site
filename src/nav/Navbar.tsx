import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Home from "../components/Home";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Navbar() {
  return (
    <div>
      <Header />
      <Main>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </Main>
      <Footer />
    </div>
  );
}
