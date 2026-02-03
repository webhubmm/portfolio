"use client";

import { motion } from "framer-motion";
import { scrollViewport, scrollTransition } from "@/lib/scrollAnimations";

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

        {/* Right 6 col: form card */}
        <motion.div
          className="contact-form-card w-full"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ ...scrollTransition, delay: 0.12 }}
        >
          <form
            className="w-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="contact-form-field">
              <label htmlFor="contact-name" className="contact-form-label">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                className="contact-form-input"
                required
              />
            </div>
            <div className="contact-form-field">
              <label htmlFor="contact-email" className="contact-form-label">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="your@email.com"
                className="contact-form-input"
                required
              />
            </div>
            <div className="contact-form-field">
              <label htmlFor="contact-message" className="contact-form-label">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Your message..."
                className="contact-form-input contact-form-textarea"
                rows={4}
                required
              />
            </div>
            <button type="submit" className="contact-form-submit">
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
