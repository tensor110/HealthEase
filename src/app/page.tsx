import Image from "next/image";
import Navbar from '../components/navbar'
import Homme from '../deliveryComponents/home'
import Companies from '../deliveryComponents/companies'
import VideoPart from '../deliveryComponents/videoPart'
import Footer from '../components/footer'


export default function Home() {
  return (
    <main>
      <Navbar/>
      <Homme/>
      <div className="h-[15vh]"></div>
      <Companies />
      <VideoPart />
      <Footer />
    </main>
  );
}
