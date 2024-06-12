import Section1SEO from "./section-1/section-1";
import Section2SEO from "./section-2/section-2";
import Section3SEO from "./section-3/section-3";
import Section4SEO from "./section-4/section-4";
import Section5SEO from "./section-5/section-5";
import Section6SEO from "./section-6/section-6";
import Header from "../../../components/header/header.component";
import Footer from "../../../components/footer/footer.component";
import "./seo.css";

const SEO = () => {
  return (
    <div className="main-container">
      <Header />
      <Section1SEO />
      <Section2SEO />
      <Section3SEO />
      <Section4SEO />
      <Section5SEO />
      <Section6SEO />
      <Footer />
    </div>
  );
};

export default SEO;
