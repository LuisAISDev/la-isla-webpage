//import { Component } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MonstersApp from "./pages/monstersapp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/la-isla-webpage/monsters" element={<MonstersApp/>} />
      </Routes>
    </Router>
  );
};

export default App;
