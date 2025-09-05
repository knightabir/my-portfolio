import Aboutme from "@/components/Aboutme";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col gap-16 md:gap-24">
        <div className="max-w-6xl flex justify-center items-center mx-auto">
          <HeroSection />
        </div>
        <div className="max-w-4xl flex justify-center items-center mx-auto">
          <Skills />
        </div>
        <Experience />
        <Aboutme />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
