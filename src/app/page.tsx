import Image from "next/image";
import Navbar from '../components/navbar'
import Homme from '../components/home'
import Card1 from '../components/firstcard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-[10%] bg-[#fafafa]">
      <Navbar/>
      <Homme/>
      <Card1 />
    </main>
  );
}
