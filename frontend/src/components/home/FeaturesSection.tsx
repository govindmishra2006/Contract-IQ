import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "AI Contract Summary",

    description:
      "Generate concise summaries of lengthy legal documents instantly.",
  },

  {
    title: "Risk Analysis",

    description:
      "Identify risky clauses and understand legal exposure in seconds.",
  },

  {
    title: "Clause Extraction",

    description: "Automatically extract important clauses and obligations.",
  },

  {
    title: "Contract Comparison",

    description:
      "Compare two contracts side-by-side and highlight differences.",
  },

  {
    title: "AI Contract Chat",

    description: "Ask questions about contracts using natural language.",
  },

  {
    title: "AI Redlining",

    description: "Generate AI-powered contract revisions and improvements.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20">
      {/* Section Heading */}

      <SectionHeading
        title="Features"
        description="Powerful AI tools for contract intelligence."
      />

      {/* Feature Cards */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
