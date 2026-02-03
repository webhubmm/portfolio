"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { scrollViewport, scrollTransition } from "@/lib/scrollAnimations";
import testimonialBg from "@/assets/images/testimonial-bg.png";
import avatar1 from "@/assets/images/avatar-1.png";
import avatar2 from "@/assets/images/avatar-2.png";

const testimonials = [
  {
    avatar: avatar1,
    name: "Jane Cooper",
    role: "CEO, VirtuLearn",
    message:
      "Webhub delivered an outstanding platform that exceeded our expectations. Their team's expertise and dedication made the entire process smooth and efficient.",
  },
  {
    avatar: avatar2,
    name: "Robert Fox",
    role: "Founder, Sports Empire",
    message:
      "Professional, responsive, and results-driven. We couldn't be happier with our new booking system. Highly recommend for any serious project.",
  },
  {
    avatar: avatar1,
    name: "Sarah Wilson",
    role: "CTO, TechStart",
    message:
      "From concept to launch, the team was exceptional. Clean code, on-time delivery, and great communication throughout.",
  },
  {
    avatar: avatar2,
    name: "Mike Johnson",
    role: "Product Lead",
    message:
      "They transformed our vision into reality. The platform is fast, scalable, and our users love it. Five stars.",
  },
];

function TestimonialCard({ item }: { item: (typeof testimonials)[0] }) {
  return (
    <div className="testimonial-card flex-shrink-0">
      <div className="flex items-center gap-4 justify-center flex-wrap">
        <div className="testimonial-card-avatar">
          <Image
            src={item.avatar}
            alt={item.name}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="testimonial-card-name">{item.name}</span>
          <span className="testimonial-card-role">{item.role}</span>
        </div>
      </div>
      <p className="testimonial-card-message">{item.message}</p>
    </div>
  );
}

export default function Testimonial() {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonial"
      className="testimonial-section py-12 min-[800px]:py-24 flex flex-col min-[800px]:flex-row min-[800px]:items-center min-h-[560px] w-full overflow-x-hidden"
      style={{
        backgroundImage: `url(${testimonialBg.src})`,
      }}
    >
      {/* Title: top on mobile (<800px), absolute left on desktop */}
      <motion.h2
        className="testimonial-title order-first"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={scrollViewport}
        transition={scrollTransition}
      >
        <span className="testimonial-title-line">What</span>
        <span className="testimonial-title-line">People</span>
        <span className="testimonial-title-line">say</span>
        <span className="testimonial-title-line">about</span>
        <span className="testimonial-title-line">us</span>
      </motion.h2>

      {/* Marquee: continuous smooth scroll, duplicated content for infinite loop */}
      <div className="testimonial-carousel-area w-full pt-6 min-[800px]:pt-48 pb-8 min-[800px]:ml-[26%] min-[800px]:w-[100%] flex justify-center overflow-hidden min-w-0">
        <div className="testimonial-marquee-mask relative w-full min-w-0 max-w-[450px] min-[800px]:max-w-none overflow-hidden flex-1 min-[800px]:flex-none">
          <div
            className="testimonial-marquee-track flex gap-4 min-[800px]:gap-6 flex-nowrap w-max"
            style={{ minHeight: 320 }}
          >
            {marqueeItems.map((item, index) => (
              <TestimonialCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
