import Image from "next/image";
import Navbar from '../../components/homecomponents/p1_navbar'
import Homme from '../../components/testnearcomponents/home'
import Testlist from '../../components/testnearcomponents/testlist'
import Schedule from '../../components/testnearcomponents/schedule'
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
