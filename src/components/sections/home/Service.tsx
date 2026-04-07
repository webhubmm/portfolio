"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { scrollViewport, scrollTransition } from "@/lib/scrollAnimations";
import customSoftwareImg from "@/assets/images/custom-software.png";
import seProductImg from "@/assets/images/se-product.png";
import aiProductImg from "@/assets/images/ai-product.png";

export default function Service() {
  return (
    <section id="service" className="section-container py-12 md:py-16 flex flex-col items-center">
      <div className="service-container w-full flex flex-col items-center gap-10">
        <motion.h2
          className="text-title text-primary mb-6"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={scrollTransition}
        >
          We Can <span className="text-secondary">Help</span> You build
        </motion.h2>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 text-start w-full">
          <motion.h3
            id="custom-development"
            className="service-row-title"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ ...scrollTransition, delay: 0.08 }}
          >
            Custom Website & Mobile Development
          </motion.h3>
          <motion.div
            className="flex flex-col gap-3 md:max-w-xl"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ ...scrollTransition, delay: 0.12 }}
          >
            <p className="service-row-content">
              We built scalable web and mobile platforms delivering seamless user experiences, optimized performance, and long-term business growth globally.
            </p>
            <Link href="/services#custom-development" className="text-link text-start w-fit">
              Learn more →
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="w-full mt-4"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ ...scrollTransition, delay: 0.18 }}
        >
          <div className="service-card relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={customSoftwareImg}
                alt="Custom Website & Mobile Development"
                fill
                className="object-contain md:object-cover object-center"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority={false}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-4"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ ...scrollTransition, delay: 0.22 }}
        >
          <div className="flex flex-col items-center md:items-start">
            <h3 id="blockchain" className="service-row-title">
              End to end Blockchain Applications
            </h3>
            <p className="service-row-content mt-2">
              Developed secure blockchain solutions with smart contracts, transparent transactions, and scalable architecture supporting real-world enterprise use cases.
            </p>
            <Link href="/services#blockchain" className="text-link mt-3 w-fit">
              Learn more →
            </Link>
            <div className="service-feature-image-block mt-6 w-full max-w-[641px]">
              <Image
                src={seProductImg}
                alt="Blockchain applications"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 641px"
              />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 id="ai-chatbots" className="service-row-title">
              Integrated AI Chatbot Solutions
            </h3>
            <p className="service-row-content mt-2">
              Implemented intelligent AI chatbots to automate support, enhance user engagement, and deliver accurate, real-time responses across platforms.
            </p>
            <Link href="/services#ai-chatbots" className="text-link mt-3 w-fit">
              Learn more →
            </Link>
            <div className="service-feature-image-block mt-6 w-full max-w-[641px]">
              <Image
                src={aiProductImg}
                alt="AI Chatbot solutions"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 641px"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full flex justify-center pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ ...scrollTransition, delay: 0.08 }}
        >
          <Link href="/services" className="btn-base btn-primary inline-flex">
            Explore all services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
