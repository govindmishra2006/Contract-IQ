"use client";
import { useState } from "react";
import { Button } from "../ui/button";

export default function ContractSummary() {
  const [summary, setSummary] = useState("");
  async function generateSummary() {
    try {
      const contractId = localStorage.getItem("currentContractId");
      const response = await fetch(
        `http://localhost:5001/api/ai/summary/${contractId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      const data = await response.json();
      console.log(data);
      setSummary(data.summary);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="mt-8">
      <Button onClick={generateSummary}>Generate Summary</Button>

      <div
        className="

    mt-6

    rounded-lg

    border

    p-6

    whitespace-pre-wrap

  "
      >
        {summary}
      </div>
    </div>
  );
}
