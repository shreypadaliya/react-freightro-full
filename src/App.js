import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/mainpage";
import Solution from "./pages/Solution"; 
import RequestDemo from "./pages/RequestDemo"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/request-demo" element={<RequestDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
