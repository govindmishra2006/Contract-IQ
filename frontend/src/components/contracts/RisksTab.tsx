"use client";
import { useState, useEffect } from "react";

interface RiskTabProps {
  contractId: string;
}

export default function RiskTab({ contractId }: RiskTabProps) {
  const [risks, setRisks] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchRisks() {
      try {
        const response = await fetch(
          `http://localhost:5001/api/ai/risks/${contractId}`,
        );
        const data = await response.json();
        console.log(data);
        setRisks(data.risks);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchRisks();
  }, [contractId]);

  if (loading) {
    return <div className="rounded-lg border p-6">Loading risks...</div>;
  }

  return (
    <div
      className="

        rounded-lg

        border

        p-6

        whitespace-pre-wrap

      "
    >
      {risks}
    </div>
  );
}
