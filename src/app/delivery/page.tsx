import Image from "next/image";
import Navbar from '../../components/homecomponents/navbar'
import Homme from '../../components/deliverycomponent/home'
import Company from '../../components/deliverycomponent/company'
import Courier from '../../components/deliverycomponent/courier'
import Choose from '../../components/deliverycomponent/choose'
import Service from '../../components/deliverycomponent/service'
import Order from '../../components/deliverycomponent/order'
import Stats from '../../components/deliverycomponent/stats'
import Says from '../../components/deliverycomponent/says'
import Question from '../../components/deliverycomponent/questions'
import Contact from '../../components/deliverycomponent/contact'
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
