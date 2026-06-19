import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SummaryTab from "@/components/contracts/SummaryTab";
import RisksTab from "@/components/contracts/RisksTab";

interface ContractPageProps {
  params: {
    id: string;
  };
}
export default function ContractPage({ params }: ContractPageProps) {
  const contractId = params.id;
  return (
    <div className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold">Contract Analysis</h1>

        <p className="text-muted-foreground">Contract ID: {contractId}</p>
      </div>

      {/* Tabs */}

      <Tabs defaultValue="summary">
        <TabsList>
          <TabsTrigger value="summary">Summary</TabsTrigger>

          <TabsTrigger value="risks">Risks</TabsTrigger>

          <TabsTrigger value="clauses">Clauses</TabsTrigger>
        </TabsList>

        {/* Summary Tab */}

        <TabsContent value="summary">
          <SummaryTab contractId={contractId} />
        </TabsContent>

        {/* Risks Tab */}

        <TabsContent value="summary">
          <RisksTab contractId={contractId} />
        </TabsContent>

        {/* Clauses Tab */}

        <TabsContent value="clauses">
          <div className="rounded-lg border p-6">Clauses will appear here</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
