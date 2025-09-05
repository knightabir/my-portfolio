import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Skills />
      <Contact />
      <h1 className="font-extrabold text-red-600">This is for testing</h1>
    </div>
  );
}
