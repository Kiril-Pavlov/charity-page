import React from "react";
import BestCharitySection from "../components/BestCharitySection";
import DiscoverSection from "../components/DiscoverSection";
import HomeHero from "../components/HomeHero";
import WhyDonateSection from "../components/WhyDonateSection";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <DiscoverSection/>
      <BestCharitySection/>
      <WhyDonateSection/>
    </div>
  );
};

export default Home;
