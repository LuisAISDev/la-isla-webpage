//import { Component } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MonstersApp from "./pages/monsters/monstersapp";
import Home from "./pages/home/home";

const App = () => {
  return (
    <Router >
      <Routes>
        <Route exact path="/la-isla-webpage/" element={<Home />} />
        <Route exact path="/la-isla-webpage/monsters" element={<MonstersApp />} />
        <Route path="*" element={<Home />} />  {/* Default route (optional) */}
      </Routes>
    </Router>
  );
};

export default App;
