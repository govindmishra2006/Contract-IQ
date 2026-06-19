// Layout used for all dashboard pages

import { ReactNode } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

interface DashboardGroupLayoutProps {
  children: ReactNode;
}

export default function DashboardGroupLayout({
  children,
}: DashboardGroupLayoutProps) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}