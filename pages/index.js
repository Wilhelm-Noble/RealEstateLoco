import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreasContainer from "../components/areas-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesCard from "../components/rent-properties-card";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import FooterSection from "../components/footer-section";

const LandingPage = () => {
  return (
    <div className="w-full h-[5096px] relative bg-gray-white flex flex-col items-center justify-start">
      <Header />
      <Hero />
      <AreasContainer />
      <FeatureContainer />
      <RentPropertiesCard />
      <RentPropertiesForm />
      <Contact />
      <FooterSection
        socialMediaLogo="/social-media-logo@2x.png"
        socialMediaLogo1="/social-media-logo1@2x.png"
        socialMediaLogo2="/social-media-logo2@2x.png"
        socialMediaLogo3="/social-media-logo3@2x.png"
      />
    </div>
  );
};

export default LandingPage;
