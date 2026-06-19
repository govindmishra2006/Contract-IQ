// Layout used by all dashboard pages

import { ReactNode } from "react";
import Link from "next/link";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}

      <aside
        className="
          w-64
          border-r
          p-4
        "
      >
        <h2 className="mb-6 text-xl font-bold">ContractIQ</h2>

        <nav className="space-y-2">
          <Link
            href="/dashboard"
            className="block rounded-md px-3 py-2 hover:bg-muted"
          >
            Dashboard
          </Link>

          <Link
            href="/upload"
            className="block rounded-md px-3 py-2 hover:bg-muted"
          >
            Upload
          </Link>

          <Link
            href="/contracts"
            className="block rounded-md px-3 py-2 hover:bg-muted"
          >
            Contracts
          </Link>

          <Link
            href="/compare"
            className="block rounded-md px-3 py-2 hover:bg-muted"
          >
            Compare
          </Link>

          <Link
            href="/chat"
            className="block rounded-md px-3 py-2 hover:bg-muted"
          >
            AI Chat
          </Link>

          <Link
            href="/redline"
            className="block rounded-md px-3 py-2 hover:bg-muted"
          >
            Redlining
          </Link>
        </nav>
      </aside>

      {/* Main Content */}

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
