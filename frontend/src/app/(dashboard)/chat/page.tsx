"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { getRequest } from "@/services/api";

export default function ChatPage() {
  const [response, setResponse] = useState("");

  async function handleTestAI() {
    try {
      const data = await getRequest("/ai/test");

      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);

      setResponse("Failed to connect to backend");
    }
  }

  return (
    <div>
      <h1 className="mb-6 text-4xl font-bold">AI Chat</h1>

      <Button onClick={handleTestAI}>Test Backend</Button>

      <pre className="mt-6">{response}</pre>
    </div>
  );
}
