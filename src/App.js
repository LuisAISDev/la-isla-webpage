//import { Component } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MonstersApp from "./pages/monsters/monstersapp";
import Home from "./pages/home/home";
import PrivateLabelSwimwear from "./pages/private-label-swimwear/private-label";
import AboutUs from "./pages/about-us/about-us";
import ContactUs from "./pages/contact-us/contact-us";
import Journal from "./pages/journal/journal";
import Seo from "./pages/journal/seo/seo";
import Internal from "./pages/journal/journal-internal/journal-internal";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/la-isla-webpage/" element={<Home />} />
        <Route
          exact
          path="/la-isla-webpage/private"
          element={<PrivateLabelSwimwear />}
        />
        <Route exact path="/la-isla-webpage/about" element={<AboutUs />} />
        <Route exact path="/la-isla-webpage/journal" element={<Journal />} />
        <Route exact path="/la-isla-webpage/journal/seo" element={<Seo />} />
        <Route
          exact
          path="/la-isla-webpage/journal/internal"
          element={<Internal />}
        />
        <Route exact path="/la-isla-webpage/contact" element={<ContactUs />} />
        <Route
          exact
          path="/la-isla-webpage/monsters"
          element={<MonstersApp />}
        />
        <Route path="*" element={<Home />} /> {/* Default route (optional) */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
