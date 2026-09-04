import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import ViraFooter from "@/components/layout/ViraFooter";

interface LegalPageProps {
  title: string;
  description: string;
  updated: string;
  children: ReactNode;
}

export function ViraLegalLayout({ title, description, updated, children }: LegalPageProps) {
  return (
    <main className="vira-page min-h-screen min-w-0 max-w-full overflow-x-hidden">
      <Navbar />
      <article className="section-container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <p className="mb-4">
            <Link href="/vira-ai" className="text-primary hover:text-third font-medium">
              ← Back to Vira AI
            </Link>
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1C244C] mb-2">{title}</h1>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-gray-500 text-sm mb-12">Last updated: {updated}</p>
          <div className="legal-content max-w-none space-y-8 text-gray-700 leading-relaxed">
            {children}
          </div>
        </div>
      </article>
      <ViraFooter />
    </main>
  );
}

export const viraLegalMeta = (
  title: string,
  description: string,
  path: string
): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title: `${title} | Vira AI`,
    description,
    url: path,
    type: "website",
  },
});
