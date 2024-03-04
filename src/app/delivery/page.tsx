import Image from "next/image";
import Navbar from '../../components/navbar'
import Homme from '../../delcompo/delhome'
import Company from '../../delcompo/company'



export default function Home() {
  return (
    <main>
      <Navbar/>
      <Homme />
      <Company/>
    </main>
  );
}
