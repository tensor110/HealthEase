import Image from "next/image";
import Navbar from '../../components/homecomponents/p1_navbar'
import Homme from '../../components/deliverycomponents/p1_home'
import Company from '../../components/deliverycomponents/p2_company'
import Courier from '../../components/deliverycomponents/p3_courier'
import Choose from '../../components/deliverycomponents/p4_choose'
import Service from '../../components/deliverycomponents/p5_service'
import Order from '../../components/deliverycomponents/p6_order'
import Stats from '../../components/deliverycomponents/p7_stats'
import Says from '../../components/deliverycomponents/p8_says'
import Question from '../../components/deliverycomponents/p9_questions'
import Contact from '../../components/deliverycomponents/p10_contact'
import Footer from "../../components/homecomponents/p10_footer"

export default function Home() {
  return (
    <main className="flex flex-col bg-[#fafafa]">
      <Navbar/>
      <Homme />
      <Company/>
      <Courier/>
      <Choose/>
      <Service/>
      <Order/>
      <Stats/>
      <Says/>
      <Question/>
      <Contact/>
      <Footer />
    </main>
  );
}
