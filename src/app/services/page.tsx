import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import customSoftwareImg from "@/assets/images/custom-software.png";
import seProductImg from "@/assets/images/se-product.png";
import aiProductImg from "@/assets/images/ai-product.png";

const uiUxPlaceholderImg = customSoftwareImg;

export const metadata: Metadata = {
  title: "Services",
  description:
    "WebHub Asia: custom software, blockchain, AI, and UI/UX design. Scalable web & mobile apps, Web3, intelligent automation, and product design.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | WebHub Asia",
    description:
      "Custom software, blockchain, AI solutions, and UI/UX design from WebHub Asia.",
    url: "/services",
    type: "website",
  },
};

const sections = [
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    subtitle: "Scalable, Secure & High-Performance Digital Solutions",
    intro: [
      "At WebHub Asia, we specialize in building custom software solutions that align perfectly with your business goals. Whether you're a startup or enterprise, we design and develop systems that are scalable, secure, and optimized for performance.",
      "We focus on creating digital products that not only solve problems but also drive growth and efficiency.",
    ],
    listTitle: "Our expertise includes:",
    bullets: [
      "Learning Management Systems (LMS)",
      "Customer Relationship Management (CRM) systems",
      "Enterprise Resource Planning (ERP) solutions",
      "Point of Sale (POS) systems",
      "E-commerce platforms",
      "Custom web applications",
      "Mobile app development (iOS & Android)",
    ],
    image: customSoftwareImg,
    imageAlt: "Custom software development",
  },
  {
    id: "blockchain-development",
    title: "Blockchain Development Services",
    subtitle: "Next-Generation Decentralized Solutions",
    intro: [
      "We provide advanced blockchain development services to help businesses build secure, transparent, and decentralized applications. Our team leverages cutting-edge technologies to deliver high-performance blockchain systems.",
      "From fintech platforms to Web3 ecosystems, we turn your blockchain ideas into reality.",
    ],
    listTitle: "Our blockchain services include:",
    bullets: [
      "Crypto exchange development",
      "Custom token creation (ERC-20, BEP-20, etc.)",
      "NFT marketplace & NFT development",
      "Trading platform development",
      "Smart contract development & auditing",
      "Telegram bot automation for crypto systems",
      "Web3 integration & decentralized apps (dApps)",
    ],
    image: seProductImg,
    imageAlt: "Blockchain development services",
  },
  {
    id: "ai-powered-solutions",
    title: "AI Solutions & Intelligent Systems",
    subtitle: "Empowering Businesses with AI & Automation",
    intro: [
      "We help businesses leverage the power of Artificial Intelligence (AI) to automate processes, improve efficiency, and deliver smarter user experiences.",
      "From simple chatbot integration to advanced agentic AI systems, we build intelligent solutions tailored to your needs.",
    ],
    listTitle: "Our AI services include:",
    bullets: [
      "AI chatbot development (customer support, automation)",
      "Agentic AI systems for business workflows",
      "AI-powered SaaS applications",
      "Machine learning model integration",
      "AI integration into existing platforms",
      "Automation tools & intelligent assistants",
    ],
    image: aiProductImg,
    imageAlt: "AI solutions and intelligent systems",
  },
  {
    id: "ui-ux-product-design",
    title: "UI/UX & Product Design Services",
    subtitle: "Design That Enhances User Experience & Drives Engagement",
    intro: [
      "Great products start with great design. We create visually stunning and highly functional UI/UX designs that provide seamless user experiences across all devices.",
      "Our design approach focuses on usability, accessibility, and conversion optimization.",
    ],
    listTitle: "Our design services include:",
    bullets: [
      "Wireframing & user journey mapping",
      "Web and mobile app UI/UX design",
      "Interactive prototypes",
      "Design systems & component libraries",
      "Branding & custom logo design",
      "Product design strategy",
    ],
    image: uiUxPlaceholderImg,
    imageAlt: "UI/UX and product design",
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="min-h-screen min-w-0 max-w-full overflow-x-hidden">
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
            Custom software, blockchain, AI, and product design—built for startups and enterprises
            who need reliable engineering and clear outcomes from MVP to scale.
          </p>
        </header>

        <div className="project-story-stack w-full flex flex-col gap-16 md:gap-24">
          {sections.map((section, index) => {
            const reverse = index % 2 === 1;
            return (
              <section
                key={section.id}
                id={section.id}
                className="project-story-article w-full scroll-mt-28 md:scroll-mt-32"
              >
                <div
                  className={`project-story-row ${reverse ? "project-story-row--reverse" : ""}`}
                >
                  <div className="project-story-media order-3 md:order-none min-w-0 self-center md:self-auto w-full">
                    <div className="services-detail-media">
                      <Image
                        src={section.image}
                        alt={section.imageAlt}
                        fill
                        className="object-contain object-center p-2 md:p-4"
                        sizes="(max-width: 899px) 100vw, 60vw"
                        priority={section.id === "custom-software-development"}
                      />
                    </div>
                  </div>
                  <div className="project-story-copy order-1 md:order-none">
                    <h2 className="project-story-title">{section.title}</h2>
                    <p className="project-story-subtitle mt-2 md:mt-3">{section.subtitle}</p>
                    {section.intro.map((paragraph, i) => (
                      <p key={i} className="project-story-text mt-4">
                        {paragraph}
                      </p>
                    ))}
                    <p className="project-story-text mt-6 font-semibold text-subtitle">
                      {section.listTitle}
                    </p>
                    <ul className="project-story-text mt-3 list-disc pl-5 space-y-2">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <Link
                      href="/#contact"
                      className="project-story-visit-btn mt-8 inline-flex w-fit"
                    >
                      <span className="project-story-visit-btn-label">Discuss this service</span>
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </article>
      <Footer />
    </main>
  );
}
