"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { scrollViewport, scrollTransition } from "@/lib/scrollAnimations";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          subject: subject.trim(),
          message: message.trim(),
          email: email.trim() || undefined,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong.");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="section-container py-12 md:py-16">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
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
            Ready to take the next step? Send us a message — we&apos;ll get back to you
            as soon as we can.
          </motion.p>
        </div>

        <motion.div
          className="contact-form-card w-full"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={scrollViewport}
          transition={{ ...scrollTransition, delay: 0.12 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-0">Send a message</h3>
          <form onSubmit={handleSubmit} noValidate>
            <div className="contact-form-field">
              <label className="contact-form-label" htmlFor="contact-name">
                Name <span className="text-red-300">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                className="contact-form-input"
                autoComplete="name"
                required
                maxLength={120}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </div>
            <div className="contact-form-field">
              <label className="contact-form-label" htmlFor="contact-email">
                Your email <span className="text-white/50">(optional)</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                className="contact-form-input"
                autoComplete="email"
                maxLength={254}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="so we can reply"
              />
            </div>
            <div className="contact-form-field">
              <label className="contact-form-label" htmlFor="contact-subject">
                Subject <span className="text-red-300">*</span>
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                className="contact-form-input"
                required
                maxLength={200}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="What is this about?"
              />
            </div>
            <div className="contact-form-field">
              <label className="contact-form-label" htmlFor="contact-message">
                Message <span className="text-red-300">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="contact-form-input contact-form-textarea"
                required
                maxLength={8000}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us more…"
                rows={6}
              />
            </div>

            {status === "success" && (
              <p className="text-green-300 text-sm font-medium" role="status">
                Thanks — your message was sent.
              </p>
            )}
            {status === "error" && errorMessage && (
              <p className="text-red-300 text-sm font-medium" role="alert">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              className="contact-form-submit disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send email"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
