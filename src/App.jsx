import React from "react";
import Hero from "./components/Hero";
import { HeroWithFeature } from "./components/HeroWithFeature";
import Collections from "./components/Collections";
import Buy from "./components/Buy";
import ImageShockwave from "./components/ImageShockwave";
import CatSleepSection from "./components/CatSleepSection";
import NextSection from "./components/NextSection";
import Newsletter from "./components/Newsletter";
import FooterSection from "./components/FooterSection";
import "./styles/global.css";

export default function App() {
  return (
    <div>
      <HeroWithFeature />
      <Collections />
      <Buy/>
  <ImageShockwave />
  <CatSleepSection />
      <NextSection />
      <Newsletter />
      <FooterSection />
    </div>
  );
}
