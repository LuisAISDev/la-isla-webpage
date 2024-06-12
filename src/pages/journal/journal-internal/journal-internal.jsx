import Section1Interna from "./section-1/section-1";
import Section2Interna from "./section-2/section-2";
import Section3Interna from "./section-3/section-3";
import Section4Interna from "./section-4/section-4";
import Header from "../../../components/header/header.component";
import Footer from "../../../components/footer/footer.component";
const Interna = () => {
  return (
    <div className="main-container">
      <Header />
      <Section1Interna />
      <Section2Interna />
      <Section3Interna />
      <Section4Interna />
      <Footer />
    </div>
  );
};

export default Interna;
