import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import InfoCards from '../components/InfoCards';
import StudyDestinations from '../components/StudyDestinations';

import VisaConsultancySlider from '../components/VisaConsultancySlider';
import Footer from '../components/Footer';
import ServicesComponent from '../components/ServicesComponent ';
import Reviews from '../components/Reviews';
import DirectContactUs from '../components/DirectContact';
import StaffInfo from '../components/StaffInfo';



const Home = () => {
  return (
    <div>
      {/* Navbar is fixed, so we add a wrapper with padding */}
      <div className="pt-[70px]">
        <Navbar />
      </div>
      
      {/* Main content section */}
      <div className="w-full flex-shrink-0 overflow-hidden">
        <VisaConsultancySlider/>
        <InfoCards/>
        <StudyDestinations/>
        <StaffInfo/>
        <DirectContactUs/>
        <ServicesComponent/>
       
        <Contact />
       
        <Reviews/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
