import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Footer from "../components/layout/Footer";

const InProcess = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
        <Footer />

    </>
  );
}

export default InProcess;
