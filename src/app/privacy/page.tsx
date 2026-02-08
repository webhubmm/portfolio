import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | WebHub Asia",
  description:
    "WebHub Asia Privacy Policy (GDPR compliant). How we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <article className="section-container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1C244C] mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-12">
            Effective Date: February 8, 2026
          </p>

          <div className="legal-content max-w-none space-y-10 text-gray-700 leading-relaxed">
            <section>
              <p>
                WebHub Asia (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                provides software development, SaaS products, mobile applications, and digital
                services. We are committed to protecting personal data and operating in compliance
                with international privacy regulations including the General Data Protection
                Regulation (GDPR).
              </p>
              <p>By using our website or services, you agree to this policy.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1C244C] mt-10 mb-4">
                1. Data We Collect
              </h2>
              <h3 className="text-base font-semibold text-[#182257] mt-6 mb-2">
                Information you provide
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Name</li>
                <li>Email</li>
                <li>Phone</li>
                <li>Company details</li>
                <li>Billing information</li>
                <li>Project requirements</li>
                <li>Support communications</li>
              </ul>
              <h3 className="text-base font-semibold text-[#182257] mt-6 mb-2">
                Automatically collected
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>IP address</li>
                <li>Device & browser</li>
                <li>Usage logs</li>
                <li>Cookies / analytics data</li>
                <li>Client project data</li>
              </ul>
              <p className="mt-4 text-gray-700">
                When clients use our SaaS or applications, we may process data on their behalf as a
                Data Processor.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1C244C] mt-10 mb-4">
                2. Legal Basis for Processing (GDPR)
              </h2>
              <p>We process data under:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
                <li>Contract performance</li>
                <li>Legitimate business interests</li>
                <li>Legal obligations</li>
                <li>User consent (e.g., marketing)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1C244C] mt-10 mb-4">
                3. How We Use Information
              </h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Deliver and maintain services</li>
                <li>Provide support</li>
                <li>Process payments</li>
                <li>Improve performance & security</li>
                <li>Communicate updates</li>
                <li>Marketing with consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1C244C] mt-10 mb-4">
                4. Confidentiality & NDA-Level Protection
              </h2>
              <p>
                We treat all client materials, source code, business information, and data as
                confidential. We will not disclose or use such information except:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
                <li>To deliver contracted services</li>
                <li>When legally required</li>
              </ul>
              <p className="mt-4">
                Our employees and partners are bound by confidentiality obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1C244C] mt-10 mb-4">
                5. Data Sharing
              </h2>
              <p>We never sell data. We may share with trusted subprocessors such as:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
                <li>Cloud hosting</li>
                <li>Payment processors</li>
                <li>Analytics providers</li>
              </ul>
              <p className="mt-4">
                All partners must follow strict security and privacy standards.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1C244C] mt-10 mb-4">
                6. International Transfers
              </h2>
              <p>
                If data is transferred outside your country, we ensure appropriate safeguards
                consistent with GDPR requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1C244C] mt-10 mb-4">
                7. Security Measures
              </h2>
              <p>We use:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
                <li>Access controls</li>
                <li>Encrypted communication</li>
                <li>Secure infrastructure</li>
                <li>Limited personnel access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1C244C] mt-10 mb-4">
                8. Data Retention
              </h2>
              <p>We retain data only as long as required for:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
                <li>Service delivery</li>
                <li>Legal compliance</li>
                <li>Business operations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1C244C] mt-10 mb-4">
                9. Your Rights
              </h2>
              <p>You may request:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 mt-2">
                <li>Access</li>
                <li>Correction</li>
                <li>Deletion</li>
                <li>Restriction</li>
                <li>Data portability</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p className="mt-4">
                Contact:{" "}
                <a href="mailto:privacy@webhubasia.com" className="text-secondary hover:underline">
                  privacy@webhubasia.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1C244C] mt-10 mb-4">
                10. Updates
              </h2>
              <p>We may update this policy periodically.</p>
            </section>

            <hr className="border-gray-200 my-16" />

            <section>
              <h2 className="text-2xl font-bold text-[#1C244C] mt-10 mb-4">
                Terms of Service
              </h2>
              <p className="mb-4">Effective Date: February 8, 2026</p>
              <p>By engaging WebHub Asia, you agree to these terms.</p>
              <h3 className="text-base font-semibold text-[#182257] mt-6 mb-2">1. Services</h3>
              <p>We provide: Custom software development, UI/UX, Cloud solutions, SaaS platforms, Maintenance & consulting.</p>
              <h3 className="text-base font-semibold text-[#182257] mt-6 mb-2">2. Payments</h3>
              <p>Invoices must be paid according to agreed milestones. Late payments may suspend work.</p>
              <h3 className="text-base font-semibold text-[#182257] mt-6 mb-2">3. Intellectual Property</h3>
              <p>Upon full payment: Clients own their custom project deliverables. WebHub Asia retains rights to frameworks, reusable components, and know-how.</p>
              <h3 className="text-base font-semibold text-[#182257] mt-6 mb-2">4. Confidentiality</h3>
              <p>Both parties agree to protect sensitive information.</p>
              <h3 className="text-base font-semibold text-[#182257] mt-6 mb-2">5. Warranties</h3>
              <p>Services are provided professionally but without guarantees of uninterrupted operation.</p>
              <h3 className="text-base font-semibold text-[#182257] mt-6 mb-2">6. Limitation of Liability</h3>
              <p>Our liability is limited to the amount paid for services.</p>
              <h3 className="text-base font-semibold text-[#182257] mt-6 mb-2">7. Termination</h3>
              <p>Either party may terminate under agreed notice conditions.</p>
            </section>

            <hr className="border-gray-200 my-16" />

            <section>
              <h2 className="text-2xl font-bold text-[#1C244C] mt-10 mb-4">
                Refund / Payment Policy
              </h2>
              <p>
                Due to the nature of digital and engineering work: Deposits and completed milestone
                payments are non-refundable. Refunds may apply only if defined in a written
                contract. Change requests outside scope may require additional fees.
              </p>
            </section>

            <hr className="border-gray-200 my-16" />

            <section>
              <h2 className="text-2xl font-bold text-[#1C244C] mt-10 mb-4">
                App Privacy Policy (App Store / Play Store)
              </h2>
              <p>WebHub Asia Mobile Applications Privacy Policy</p>
              <p className="mt-4">We may collect: Account information, Usage data, Device information.</p>
              <p className="mt-4">We use this to: Provide functionality, Improve performance, Offer support.</p>
              <p className="mt-4">We do not sell personal data.</p>
              <p className="mt-4">
                Users may request deletion or access by contacting:{" "}
                <a href="mailto:admin@webhubasia.com" className="text-secondary hover:underline">
                  admin@webhubasia.com
                </a>
              </p>
              <p className="mt-4">Data is protected using industry-standard safeguards.</p>
            </section>

            <section className="pt-8">
              <h2 className="text-xl font-bold text-[#1C244C] mt-10 mb-4">
                Cookie Notice
              </h2>
              <p>
                We use cookies to improve your experience, analyze traffic, and support marketing.
                By continuing to use our website, you agree to our Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
