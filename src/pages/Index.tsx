import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import BackgroundHero from "../components/BackgrounHero";
import LogoScroll from "@/components/LogoScroll";
import CallToAction from "@/components/CallToAction";
import Services from "../components/Services";
import Methodology from "../components/Methodology";
import Stats from "../components/Stats";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".reveal-on-scroll");

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.85) {
          el.classList.add("active");
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Navbar />

      <main>
        <section id="home">
          <BackgroundHero />
        </section>

        <section id="brands">
          <LogoScroll />
        </section>

        <section id="cta">
          <CallToAction />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="methodology">
          <Methodology />
        </section>

        <section id="stats">
          <Stats />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="reviews">
          <Reviews />
        </section>

        <section id="faq">
          <FAQ />
        </section>
      </main>

      <footer id="contact">
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
