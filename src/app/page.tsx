import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import Service from "@/components/sections/home/Service";
import Projects from "@/components/sections/home/Projects";
import Testimonial from "@/components/sections/home/Testimonial";
import Learn from "@/components/sections/home/Learn";
import Contact from "@/components/sections/home/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Projects />
      <Testimonial />
      <Learn />
      <Contact />
      <Footer />
    </main>
  );
}
