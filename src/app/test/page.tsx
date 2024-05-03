import Image from "next/image";
import Navbar from "../../components/homecomponents/p1_navbar"
import Homme from '../../components/testnearcomponents/p1_home'
import Testlist from '../../components/testnearcomponents/p2_testlist'
import Schedule from '../../components/testnearcomponents/p3_schedule'
import Footer from "../../components/homecomponents/p10_footer"

export default function Home() {
  return (
    <main className="flex flex-col bg-[#fafafa]">
      <Navbar/>
      <Homme/>
      <Testlist/>
      <Schedule/>
      <Footer />
    </main>
  );
}
