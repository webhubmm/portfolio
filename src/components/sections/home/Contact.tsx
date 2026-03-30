"use client";

import { motion } from "framer-motion";
import { scrollViewport, scrollTransition } from "@/lib/scrollAnimations";
import { Mail, Phone, Linkedin, Facebook, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-container py-12 md:py-16">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
        {/* Left 6 col: title and content */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <motion.h2
            className="contact-section-title"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={scrollTransition}
          >
            <span className="contact-title-line contact-title-accent">Let&apos;s</span>
            <span className="contact-title-line contact-title-accent">connect</span>
            <span className="contact-title-line">and Ignite</span>
            <span className="contact-title-line">success</span>
          </motion.h2>
          <motion.p
            className="contact-section-content"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewport}
            transition={{ ...scrollTransition, delay: 0.08 }}
          >
            Ready to take the next step? Contact us today to explore how our innovative strategies can propel your business forward. Our team is here to turn your vision into a reality.
          </motion.p>
        </div>

        <motion.div
          className="contact-form-card w-full"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ ...scrollTransition, delay: 0.12 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Contact Information
          </h3>

          <div className="space-y-4 text-gray-300">

            {/* Email */}
            <div className="flex items-center gap-3 hover:text-white transition">
              <Mail size={18} />
              <div>
                <a
                  href="mailto:htetmyatsoe492@gmail.com"
                  className="hover:underline"
                >
                  htetmyatsoe492@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-3 hover:text-white transition">
              <MessageCircle size={18} />
              <a
                href="https://wa.me/6660795235"
                target="_blank"
                className="hover:underline"
              >
                WhatsApp: +66 60795235
              </a>
            </div>

            {/* Telegram */}
            <div className="flex items-center gap-3 hover:text-white transition">
              <Send size={18} />
              <a
                href="https://t.me/htetmyatsoe"
                target="_blank"
                className="hover:underline"
              >
                Telegram: @htetmyatsoe
              </a>
            </div>

            {/* Viber */}
            <div className="flex items-center gap-3 hover:text-white transition">
              <Phone size={18} />
              <a
                href="viber://chat?number=%2B959793148428"
                className="hover:underline"
              >
                Viber: +95 9793148428
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-3 hover:text-white transition">
              <Linkedin size={18} />
              <a
                href="https://www.linkedin.com/company/webhub-asia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WebHub Asia on LinkedIn
              </a>
            </div>

            {/* Facebook */}
            <div className="flex items-center gap-3 hover:text-white transition">
              <Facebook size={18} />
              <a
                href="https://www.facebook.com/share/1DdNisrS4R/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook Profile
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
