"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { scrollViewport, scrollTransition } from "@/lib/scrollAnimations";
import customSoftwareImg from "@/assets/images/custom-software.png";
import seProductImg from "@/assets/images/se-product.png";
import aiProductImg from "@/assets/images/ai-product.png";

const uiUxPlaceholderImg = customSoftwareImg;

const services = [
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    tagline: "Build Scalable Web & Mobile Applications for Modern Businesses",
    body: "We develop high-performance, scalable custom software solutions tailored to your business needs — from web platforms to mobile apps. Our systems are designed for performance, security, and long-term growth.",
    includes:
      "LMS, CRM, ERP, POS, E-commerce platforms & mobile applications",
    href: "/services#custom-software-development",
    image: customSoftwareImg,
    imageAlt: "Custom Software Development",
  },
  {
    id: "blockchain-development",
    title: "Blockchain Development Services",
    tagline: "Secure, Transparent & Scalable Blockchain Solutions",
    body: "We build end-to-end blockchain applications that power modern digital ecosystems. From crypto platforms to smart contracts, we deliver secure and scalable solutions for real-world use cases.",
    includes: "Crypto exchanges, custom tokens, NFTs, trading platforms & Telegram bots",
    href: "/services#blockchain-development",
    image: seProductImg,
    imageAlt: "Blockchain development",
  },
  {
    id: "ai-powered-solutions",
    title: "AI-Powered Solutions",
    tagline: "Transform Your Business with AI & Automation",
    body: "We integrate advanced AI technologies into your systems to automate workflows, enhance user experience, and unlock intelligent decision-making.",
    includes: "AI chatbots, agentic AI systems, and AI integration into existing platforms",
    href: "/services#ai-powered-solutions",
    image: aiProductImg,
    imageAlt: "AI-powered solutions",
  },
  {
    id: "ui-ux-product-design",
    title: "UI/UX & Product Design",
    tagline: "Design That Converts, Engages & Scales",
    body: "We create modern, intuitive, and user-focused designs that enhance usability and drive engagement across web and mobile platforms.",
    includes: "Wireframes, UI/UX design, product design systems & custom branding",
    href: "/services#ui-ux-product-design",
    image: uiUxPlaceholderImg,
    imageAlt: "UI/UX and product design",
  },
] as const;

export default function Service() {
  return (
    <section id="service" className="section-container py-12 md:py-16 flex flex-col items-center">
      <div className="service-container w-full flex flex-col items-center gap-10 md:gap-12">
        <motion.h2
          className="text-title text-primary text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={scrollTransition}
        >
          We Can <span className="text-secondary">Help</span> You build
        </motion.h2>

        <motion.div
          className="service-preview-grid w-full"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ ...scrollTransition, delay: 0.06 }}
        >
          {services.map((item, index) => (
            <article key={item.id} className="service-preview-card">
              <h3 id={item.id} className="service-preview-card-title service-row-title">
                {item.title}
              </h3>
              <p className="service-row-content font-semibold text-primary mt-3">{item.tagline}</p>
              <p className="service-row-content mt-3">{item.body}</p>
              <p className="service-row-content text-sm md:text-base opacity-90 mt-3">
                <span className="font-semibold">Includes:</span> {item.includes}
              </p>
              <Link href={item.href} className="text-link mt-4 inline-flex w-fit">
                Learn more →
              </Link>
              <div className="service-preview-card-visual mt-auto pt-6">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-contain p-3 md:p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            </article>
          ))}
        </motion.div>

        <motion.div
          className="w-full flex justify-center pt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ ...scrollTransition, delay: 0.1 }}
        >
          <Link href="/services" className="btn-base btn-primary inline-flex">
            Explore all services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
