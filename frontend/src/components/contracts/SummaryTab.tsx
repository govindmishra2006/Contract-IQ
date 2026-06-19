"use client";
import { useEffect, useState } from "react";
interface SummaryTabProps {
  contractId: string;
}
export default function SummaryTab({ contractId }: SummaryTabProps) {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSummary() {
      try {
        const response = await fetch(
          `http://localhost:5001/api/ai/summary/${contractId}`,
        );
        const data = await response.json();
        setSummary(data.summary);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchSummary();
  }, [contractId]);
  if (loading) {
    return <div className="rounded-lg border-6">Loading summary.... </div>;
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
      {summary}
    </div>
  );
}
