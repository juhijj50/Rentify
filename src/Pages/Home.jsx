import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Hero from "../Components/HomePage/Hero/Hero";
import Steps from "../Components/HomePage/Steps/Steps";
import Testimonials from "../Components/HomePage/Testimonials/Testimonials";
import FeaturedCars from "../Components/HomePage/FeaturedCars/FeaturedCars";
import FooterSection from "../Components/HomePage/FooterSection/FooterSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Steps />
      <FeaturedCars />
      <Testimonials />
      <FooterSection />

      

    </div>
  );
}
