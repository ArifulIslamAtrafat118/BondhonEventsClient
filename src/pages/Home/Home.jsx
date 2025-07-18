import React, { useEffect, useState } from "react";
import Banner from "../../components/Header/Banner/Banner";
import Newsletter from "../../components/Newsletter";
import FeatureSection from "../../components/FeatureSection";

function Home() {
  return (
    <>
      <Banner />
      <FeatureSection/>
      <Newsletter />
    </>
  );
}

export default Home;
