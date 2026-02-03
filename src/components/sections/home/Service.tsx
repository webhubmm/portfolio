"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { scrollViewport, scrollTransition } from "@/lib/scrollAnimations";
import virtuDetailsImg from "@/assets/images/virtu-details.png";
import virtuLendingImg from "@/assets/images/virtu-lending.png";
import seAppBlurImg from "@/assets/images/se-app-blur.png";
import seAppImg from "@/assets/images/se-app.png";
import seWebAppImg from "@/assets/images/se-web-app.png";
import seProductImg from "@/assets/images/se-product.png";
import aiProductImg from "@/assets/images/ai-product.png";

export default function Service() {
  return (
    <section id="service" className="section-container py-12 md:py-16 flex flex-col items-center">
      <div className="service-container w-full flex flex-col items-center gap-10">
        {/* Section title */}
        <motion.h2
          className="text-title text-primary mb-6"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={scrollTransition}
        >
          We Can <span className="text-secondary">Help</span> You build
        </motion.h2>

        {/* Row: title, content, button */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 text-start">
          <motion.h3
            className="service-row-title"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ ...scrollTransition, delay: 0.08 }}
          >
            Custom Website & Mobile Development
          </motion.h3>
          <motion.p
            className="service-row-content"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ ...scrollTransition, delay: 0.12 }}
          >
            We built scalable web and mobile platforms delivering seamless user experiences, optimized performance, and long-term business growth globally.
          </motion.p>
        </div>

        {/* Card: gradient bg, center image, left/right background images */}
        <motion.div
          className="w-full mt-4"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ ...scrollTransition, delay: 0.18 }}
        >
          <div className="service-card relative flex items-center justify-center overflow-hidden">
            {/* Left: 1st seAppBlur aligned with center; 2nd seApp under 3rd by 30% of center height */}
            <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">
              <div className="service-card-image-wrap absolute -left-[5%] top-0 bottom-0">
                <Image src={seAppBlurImg} alt="" fill className="object-cover object-left" sizes="420px" />
              </div>
              {/* 2nd: under 3rd (center) by 30% of center height => top = 50% + 30% = 80% (center of image at 80%) */}
              <div className="service-card-image-wrap absolute left-[10%] top-[70%] -translate-y-1/2">
                <Image src={seAppImg} alt="" fill className="object-contain object-left" sizes="320px" />
              </div>
            </div>

            {/* Center = 3rd place */}
            <div className="service-card-image-wrap relative z-10">
              <Image
                src={virtuDetailsImg}
                alt="Virtu details"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 200px, 320px"
                priority={false}
              />
            </div>

            {/* Right: 5th seWebApp aligned with center; 4th virtuLending under 3rd by 30% of center height */}
            <div className="absolute right-0 top-0 w-full h-full pointer-events-none z-0">
              <div className="service-card-image-wrap absolute right-0 top-1/2 -translate-y-1/2">
                <Image src={seWebAppImg} alt="" fill className="object-contain object-right" sizes="320px" />
              </div>
              {/* 4th: under 3rd by 30% => center of image at 80% */}
              <div className="service-card-image-wrap absolute right-[10%] top-[70%] -translate-y-1/2">
                <Image src={virtuLendingImg} alt="" fill className="object-contain object-right" sizes="320px" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two blocks in one row: title, content, image below */}
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-4"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ ...scrollTransition, delay: 0.22 }}
        >
          {/* Block 1: End to end Blockchain Applications */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="service-row-title">End to end Blockchain Applications</h3>
            <p className="service-row-content mt-2">
              Developed secure blockchain solutions with smart contracts, transparent transactions, and scalable architecture supporting real-world enterprise use cases.
            </p>
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

          {/* Block 2: Integrated AI Chatbot Solutions */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="service-row-title">Integrated AI Chatbot Solutions</h3>
            <p className="service-row-content mt-2">
              Implemented intelligent AI chatbots to automate support, enhance user engagement, and deliver accurate, real-time responses across platforms.
            </p>
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
      </div>
    </section>
  );
}
