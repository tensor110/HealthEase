import Image from "next/image";
import Navbar from '../../components/homecomponents/navbar'
import Homme from '../../components/homecomponents/home'
import Card1 from '../../components/homecomponents/firstcard'
import Detail from '../../components/homecomponents/details'
import Meet from '../../components/homecomponents/meet'
import Department from '../../components/homecomponents/department'
import Customer from '../../components/homecomponents/customers'
import Team from '../../components/homecomponents/team'
import Contact from '../../components/homecomponents/contact'
import Footer from '../../components/homecomponents/footer'

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
