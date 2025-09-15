import React from "react";
import Hero from "../sections/hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Skills from "../sections/Skills";
import PageTransition from "../components/PageTransition";
const home = () => {
  return (
    <PageTransition>
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
      </main>
    </PageTransition>
  );
};

export default home;
