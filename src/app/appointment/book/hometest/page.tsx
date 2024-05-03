import React from "react";
import Navbar from "../../../../components/home_test/p1_navbar";
import Hometest from "../../../../components/home_test/p2_hometest"
import Footer from '../../../../components/homecomponents/p10_footer'

export default function page() {
  return (
    <div>
      <Navbar />
      <Hometest/>
      <Footer/>
    </div>
  );
}