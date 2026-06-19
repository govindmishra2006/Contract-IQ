"use client";

import { useEffect, useState } from "react";
import { postRequest } from "@/services/api";

export default function UserInfo() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await postRequest("/users/me", {});
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, []);
  if (!user) {
    return <p>Loading User...</p>;
  }
  return (
    <div>
      <h2 className="text-xl font-bold">{user.fullName}</h2>

      <p>{user.email}</p>
    </div>
  );
}
