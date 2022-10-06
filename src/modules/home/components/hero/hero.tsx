import React from "react";
import EmblaCarousel from "./EmblaCarousel";

const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Hero = () => (
  <main>
  <EmblaCarousel slides={slides} />
  </main>
)
export default Hero;
