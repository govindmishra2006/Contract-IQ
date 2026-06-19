// Dashboard page
// This will become the main workspace after login
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserInfo from "@/components/dashboard/UserInfo";

export default function DashboardPage() {
  return (
    <main className="p-6">
      {/* Page Heading */}

      <div className="mb-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>

        <p className="text-muted-foreground">Welcome to ContractIQ</p>
      </div>
      <UserInfo/>

      {/* Stats Cards */}

      <div
        className="
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-4
        "
      >
        <Card>
          <CardHeader>
            <CardTitle>Contracts</CardTitle>
          </CardHeader>

          <CardContent>0</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Reports</CardTitle>
          </CardHeader>

          <CardContent>0</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Comparisons</CardTitle>
          </CardHeader>

          <CardContent>0</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Chats</CardTitle>
          </CardHeader>

          <CardContent>0</CardContent>
        </Card>
      </div>
    </main>
  );
}
