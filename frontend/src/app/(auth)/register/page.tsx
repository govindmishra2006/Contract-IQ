// Register page
// Rendered at /register
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5001/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        alert(data.message || "Registration failed");

        return;
      }

      alert("Account created successfully");
    } catch (error) {
      console.error(error);

      alert("Registration failed");
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
        <h1 className="text-3xl font-bold">Create Account</h1>

        <p className="text-muted-foreground">Start using ContractIQ today</p>
      </div>

      {/* Full Name */}

      <div className="space-y-2">
        <Label>Full Name</Label>

        <Input
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder="John Doe"
        />
      </div>

      {/* Email */}

      <div className="space-y-2">
        <Label>Email</Label>

        <Input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="john@example.com"
        />
      </div>

      {/* Password */}

      <div className="space-y-2">
        <Label>Password</Label>

        <Input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="••••••••"
        />
      </div>

      <Button className="w-full" onClick={handleRegister} disabled={loading}>
        {loading ? "Creating Account..." : "Create Account"}
      </Button>
    </div>
  );
}
