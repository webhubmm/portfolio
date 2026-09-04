import { ViraLegalLayout, viraLegalMeta } from "@/components/vira/ViraLegalLayout";

export const metadata = viraLegalMeta(
  "Risk Disclaimer",
  "Important risks related to cryptocurrency trading and Vira AI market analysis.",
  "/vira-ai/risk"
);

export default function ViraRiskPage() {
  return (
    <ViraLegalLayout
      title="Risk Disclaimer"
      description="Cryptocurrency trading involves substantial risk."
      updated="September 4, 2026"
    >
      <section>
        <p>
          Vira AI provides informational and AI-generated market analysis only. It is not financial
          advice, a brokerage, or a signal service that guarantees profit.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-[#1C244C] mt-6 mb-3">Market uncertainty</h2>
        <p>
          Bitcoin and other crypto assets can be highly volatile. No system can reliably predict
          future prices. Confidence scores, whale alerts, and trend assessments are not promises of
          market direction.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-[#1C244C] mt-6 mb-3">You bear the risk</h2>
        <p>
          You can lose money trading cryptocurrency. Do not trade with funds you cannot afford to
          lose. Consider independent professional advice before making financial decisions.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-[#1C244C] mt-6 mb-3">Historical records</h2>
        <p>
          Past performance, including any published prediction history, does not guarantee future
          results.
        </p>
      </section>
    </ViraLegalLayout>
  );
}
