import Image from "next/image";
import Navbar from '../../components/homecomponents/navbar'
import Homme from '../../components/deliverycomponents/home'
import Company from '../../components/deliverycomponents/company'
import Courier from '../../components/deliverycomponents/courier'
import Choose from '../../components/deliverycomponents/choose'
import Service from '../../components/deliverycomponents/service'
import Order from '../../components/deliverycomponents/order'
import Stats from '../../components/deliverycomponents/stats'
import Says from '../../components/deliverycomponents/says'
import Question from '../../components/deliverycomponents/questions'
import Contact from '../../components/deliverycomponents/contact'
import Footer from "../../components/homecomponents/footer"

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
