import { ViraLegalLayout, viraLegalMeta } from "@/components/vira/ViraLegalLayout";

export const metadata = viraLegalMeta(
  "Privacy Policy",
  "How Vira AI collects and uses information.",
  "/vira-ai/privacy"
);

export default function ViraPrivacyPage() {
  return (
    <ViraLegalLayout
      title="Privacy Policy"
      description="How Vira AI handles information."
      updated="September 4, 2026"
    >
      <section>
        <p>
          Vira AI is currently used through Telegram. Information processed depends on what Telegram
          provides when you interact with the bot, such as your Telegram user identifier and
          messages you send.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-[#1C244C] mt-6 mb-3">What we use</h2>
        <p>
          We use interaction data to deliver market intelligence, operate alerts, improve the
          product, and keep the service secure. We do not sell personal data.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-[#1C244C] mt-6 mb-3">Retention</h2>
        <p>
          We retain information only as long as needed to operate the service, maintain prediction
          records where applicable, and meet legal requirements.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-[#1C244C] mt-6 mb-3">Contact</h2>
        <p>
          For privacy questions, contact us through the Vira AI Telegram bot or the WebHub Asia
          website.
        </p>
      </section>
    </ViraLegalLayout>
  );
}
