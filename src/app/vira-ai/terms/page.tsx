import { ViraLegalLayout, viraLegalMeta } from "@/components/vira/ViraLegalLayout";

export const metadata = viraLegalMeta(
  "Terms of Use",
  "Terms of use for Vira AI, an AI-powered Bitcoin market intelligence product.",
  "/vira-ai/terms"
);

export default function ViraTermsPage() {
  return (
    <ViraLegalLayout
      title="Terms of Use"
      description="How you may use Vira AI."
      updated="September 4, 2026"
    >
      <section>
        <p>
          Vira AI provides AI-generated Bitcoin market information, analysis, and alerts through
          Telegram. By using Vira AI, you agree to these terms.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-[#1C244C] mt-6 mb-3">Informational use only</h2>
        <p>
          Vira AI is a market intelligence product. It does not provide personalized financial,
          investment, or trading advice. You remain responsible for your own decisions.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-[#1C244C] mt-6 mb-3">No performance guarantees</h2>
        <p>
          Markets are uncertain. Signals, alerts, and historical records are probabilistic
          assessments. Past results do not guarantee future outcomes.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-[#1C244C] mt-6 mb-3">Acceptable use</h2>
        <p>
          You may not misuse the service, attempt to disrupt it, or use it for unlawful activity.
          We may update features, availability, or these terms as the product evolves.
        </p>
      </section>
    </ViraLegalLayout>
  );
}
