import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";

import Drop from "./components/Drop";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ position: "sticky" }}>
          {" "}
          <Drop />
        </div>

        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
