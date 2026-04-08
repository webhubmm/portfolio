import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import Service from "@/components/sections/home/Service";
import HowYouCanWorkWithUs from "@/components/sections/home/HowYouCanWorkWithUs";
import HowWeWork from "@/components/sections/home/HowWeWork";
import Projects from "@/components/sections/home/Projects";
import Testimonial from "@/components/sections/home/Testimonial";
import Learn from "@/components/sections/home/Learn";
import Contact from "@/components/sections/home/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen min-w-0 max-w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <HowYouCanWorkWithUs />
      <HowWeWork />
      <Projects />
      <Testimonial />
      <Learn />
      <Contact />
      <Footer />
    </main>
  );
}
