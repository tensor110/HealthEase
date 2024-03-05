import Image from "next/image";
import Navbar from "../../components/appointmentcomponents/navbar"
import Find from "../../components/appointmentcomponents/find"
import Icons from "../../components/appointmentcomponents/icons"
import Book from "../../components/appointmentcomponents/book"
import Says from "../../components/deliverycomponents/says"
import Footer from '../../components/homecomponents/footer'

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
