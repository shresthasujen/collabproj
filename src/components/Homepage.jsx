import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Facts from "./Facts";
import About from "./About";
import Classes from "./Classes";
import Appointment from "./Appointment";
import Team from "./Team";
import Testimonial from "./Testimonial";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Facts />
      <About />
      <Classes />
      <Appointment />
      <Team />
    </div>
  );
};

export default Homepage;
