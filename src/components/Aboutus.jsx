import React from "react";
import Facts from "../components/Facts";
import About from "../components/About";
import Classes from "./Classes";
import Appointment from "./Appointment";
import Team from "./Team";
import Evoloving from "./evolving/Evolving";
import Testimonial from "./Testimonial";

const Aboutus = () => {
  return (
    <div>
      <Facts />
      <Team />
      <Evoloving></Evoloving>
    </div>
  );
};

export default Aboutus;
