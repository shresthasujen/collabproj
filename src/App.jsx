import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Aboutus from "./components/Aboutus";
import Programs from "./components/Programs";
import Contactus from "./components/pages/Contactus";
import Testimonials from "./components/pages/Testimonials";
import Gallery from "./components/Gallery";
import Signup from "./components/Signup";
import Shelter from "./components/Users/Shelter";
import User from "./components/Users/User";
import Success from "./components/Users/Successfull";

import Ourmission from "./components/pages/Ourmission";

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
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Programs" element={<Programs />} />{" "}
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Ourmissions" element={<Ourmission />} />
          <Route path="/Shelter" element={<Shelter />} />
          <Route path="/User" element={<User />} />
          <Route path="/Success" element={<Success />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
