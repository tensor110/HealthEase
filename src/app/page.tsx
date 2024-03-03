import Image from "next/image";
import Navbar from '../components/navbar'
import Homme from '../components/home'
import Card1 from '../components/firstcard'
import Detail from '../components/details'
import Meet from '../components/meet'
import Department from '../components/department'
import Customer from '../components/customers'
import Team from '../components/team'


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
    </main>
  );
}
