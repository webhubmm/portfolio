import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import customSoftwareImg from "@/assets/images/custom-software.png";
import seProductImg from "@/assets/images/se-product.png";
import aiProductImg from "@/assets/images/ai-product.png";

export const metadata: Metadata = {
  title: "Services",
  description:
    "WebHub Asia services: custom web and mobile development, blockchain applications, and AI chatbot solutions. Explore how we build scalable products.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | WebHub Asia",
    description:
      "Custom software, blockchain, and AI solutions from WebHub Asia.",
    url: "/services",
    type: "website",
  },
};

const sections = [
  {
    id: "custom-development",
    title: "Custom Website & Mobile Development",
    body: [
      "We design and engineer responsive web applications and native-quality mobile experiences tailored to your product vision. From discovery and UX through launch and iterations, we focus on performance, accessibility, and codebases that your team can grow with.",
      "Our stacks cover modern frontends, robust APIs, cloud deployment, and CI/CD—so you get reliable releases and measurable business outcomes, not throwaway prototypes.",
    ],
    image: customSoftwareImg,
    imageAlt: "Custom web and mobile development",
  },
  {
    id: "blockchain",
    title: "End-to-end Blockchain Applications",
    body: [
      "We build secure, audited smart contracts and dApps with transparent on-chain logic and pragmatic off-chain integrations. Whether you need token economies, NFT marketplaces, or enterprise-grade settlement layers, we align architecture with compliance and real-world ops.",
      "Security, gas efficiency, and upgrade strategies are part of every engagement—so your protocol can scale without sacrificing trust.",
    ],
    image: seProductImg,
    imageAlt: "Blockchain product development",
  },
  {
    id: "ai-chatbots",
    title: "Integrated AI Chatbot Solutions",
    body: [
      "We implement conversational AI that fits your data, tone, and channels—support portals, Slack, WhatsApp, or in-app assistants. Retrieval-augmented workflows and guardrails keep answers accurate and on-brand.",
      "From prompt design to monitoring and analytics, we ship automation that reduces load on your team while improving customer satisfaction.",
    ],
    image: aiProductImg,
    imageAlt: "AI chatbot integration",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <article className="section-container py-16 md:py-24">
        <header className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-link mb-4">
            <Link href="/">← Back to home</Link>
          </p>
          <h1 className="text-title text-primary mb-6">
            All <span className="text-secondary">Services</span>
          </h1>
          <p className="text-content text-balance">
            A single partner for strategy, design, engineering, and launch. Below is how we help teams ship serious software—from first MVP to scale.
          </p>
        </header>

        <div className="flex flex-col gap-20 md:gap-28 max-w-5xl mx-auto">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 md:scroll-mt-32"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                <div className="relative w-full aspect-[4/3] rounded-[28px] overflow-hidden bg-[radial-gradient(74.23%_74.59%_at_50%_50%,#29398B_0%,#1D254F_100%)]">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={section.id === "custom-development"}
                  />
                </div>
                <div>
                  <h2 className="service-row-title mb-6">{section.title}</h2>
                  {section.body.map((paragraph, i) => (
                    <p
                      key={i}
                      className="service-row-content mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                  <Link
                    href="/#contact"
                    className="btn-base btn-primary inline-flex mt-8"
                  >
                    Discuss this service
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>
      </article>
      <Footer />
    </main>
  );
}
