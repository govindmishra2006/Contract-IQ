"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { saveToken } from "@/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
      saveToken(data.token);
      alert("Login Successful");
    } catch (error) {
      console.log(error);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div
      className="

        w-full

        max-w-md

        space-y-6

        rounded-lg

        border

        p-6

      "
    >
      <div>
        <h1 className="text-3xl font-bold">Login</h1>

        <p className="text-muted-foreground">Sign in to ContractIQ</p>
      </div>

      <div className="space-y-2">
        <Label>Email</Label>

        <Input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label>Password</Label>

        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="••••••••"
        />
      </div>

      <Button className="w-full" onClick={handleLogin} disabled={loading}>
        {loading ? "Logging In..." : "Login"}
      </Button>
    </div>
  );
}
