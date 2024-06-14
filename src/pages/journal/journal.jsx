import "./journal.css";
import Section1Journal from "./section-1/section-1";
import Section2Journal from "./section-2/section-2";
const Journal = () => {
  return (
    <div className="main-container">
      <Section1Journal />
      <Section2Journal />
    </div>
  );
};

export default Journal;
