import React from "react";
import Navbar from "../../../../components/physical_appointment/p1_navbar";
import Hero from "../../../../components/physical_appointment/p2_hero"
import Checks from "../../../../components/physical_appointment/p3_checks"
import Need from "../../../../components/physical_appointment/p4_need"
import Footer from '../../../../components/homecomponents/p10_footer'

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Checks/>
      <Need/>
      <Footer/>
    </div>
  );
}