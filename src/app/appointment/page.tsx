import Image from "next/image";
import Navbar from "../../components/appointmentcomponents/p1_navbar"
import Find from "../../components/appointmentcomponents/p2_find"
import Icons from "../../components/appointmentcomponents/p3_icons"
import Book from "../../components/appointmentcomponents/p4_book"
import Says from "../../components/deliverycomponents/p8_says"
import Footer from '../../components/homecomponents/p10_footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#fafafa]">
      <Navbar/>
      <Find />
      <Icons/>
      <Book/>
      <Says/>
      <Footer />
    </main>
  );
}
