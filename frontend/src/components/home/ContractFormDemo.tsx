"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContractFormDemo() {
  const [contractName, setContractName] = useState("");
  function handleSubmit() {
    alert(`Contract Name: ${contractName}`);
  }
  return (
    <div className="mt-12 max-w-md mx-auto">
      <Label>Contract Name</Label>

      <Input
        placeholder="Enter contract name"
        value={contractName}
        onChange={(event) => setContractName(event.target.value)}
      />

      <Button className="mt-4 w-full" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}
