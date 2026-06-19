"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
export default function CounterDemo() {
  const [count, setCount] = useState(0);
  return (
    <div className="mt-12 text-center">
      <h3 className="text-2xl font-bold">Counter Demo</h3>

      <p className="mt-4">Current Count: {count}</p>

      <div className="mt-4 flex justify-center gap-3">
        <Button onClick={() => setCount(count + 1)}>Increase</Button>

        <Button variant="outline" onClick={() => setCount(count - 1)}>
          Decrease
        </Button>
      </div>
    </div>
  );
}
