// Main hero section for ContractIQ homepage

import { Button } from "@/components/ui/button";

import AppContainer from "@/components/layout/AppContainer";

export default function HeroSection() {
  return (
    <section
      className="

        flex

        min-h-[70vh]

        items-center

        justify-center

      "
    >
      <AppContainer>
        <div className="text-center">
          {/* Main Heading */}

          <h1
            className="

              text-5xl

              font-bold

              tracking-tight

              md:text-7xl

            "
          >
            ContractIQ
          </h1>

          {/* Subtitle */}

          <p
            className="

              mt-6

              text-lg

              text-muted-foreground

              md:text-xl

            "
          >
            Upload contracts, analyze risks, extract clauses, compare
            agreements, and redline documents with AI.
          </p>

          {/* Call To Action Buttons */}

          <div
            className="

              mt-8

              flex

              justify-center

              gap-4

            "
          >
            <Button>Get Started</Button>

            <Button variant="outline">View Demo</Button>
          </div>
        </div>
      </AppContainer>
    </section>
  );
}
