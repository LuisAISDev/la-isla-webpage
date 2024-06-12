import "./journal.css";
import Section1Journal from "./section-1/section-1";
import Section2Journal from "./section-2/section-2";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
const Journal = () => {
  return (
    <div className="main-container">
      <Header />
      <Section1Journal />
      <Section2Journal />
      <Footer />
    </div>
  );
};

export default Journal;
