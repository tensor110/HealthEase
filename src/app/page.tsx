import Image from "next/image";
import Navbar from '../components/homecomponents/p1_navbar'
import Homme from '../components/homecomponents/p2_home'
import Card1 from '../components/homecomponents/p3_firstcard'
import Detail from '../components/homecomponents/p4_details'
import Meet from '../components/homecomponents/p5_meet'
import Department from '../components/homecomponents/p6_department'
import Customer from '../components/homecomponents/p7_customers'
import Team from '../components/homecomponents/p8_team'
import Contact from '../components/homecomponents/p9_contact'
import Footer from '../components/homecomponents/p10_footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#fafafa]">
      <Navbar/>
      <Homme/>
      <Card1 />
      <Detail/>
      <Meet />
      <Department />
      <Customer />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
