import React from 'react'
import './about-us.css'
import SectionOne from './section-1/section-1-about'
import SectionTwo from './section-2/section-2-about'
import SectioThree from './section-3/section-3-about'
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <SectionOne/>
      <SectionTwo/>
      <SectioThree/>
      <Footer />
    </div>
  )
}

export default AboutUs