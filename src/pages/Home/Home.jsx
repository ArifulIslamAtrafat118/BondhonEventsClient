import React, { useEffect, useState } from "react";
import Banner from "../../components/Header/Banner/Banner";
import Newsletter from "../../components/Newsletter";
import FeatureSection from "../../components/FeatureSection";
import GallerySection from "../../components/GallerySection";

function Home() {
  return (
    <>
      <Banner />
      <GallerySection/>
      <FeatureSection/>
      <Newsletter />
    </>
  );
}

export default Home;
