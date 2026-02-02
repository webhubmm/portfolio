import Hero from "@/components/sections/home/Hero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <Footer /> */}
    </main>
  );
}
