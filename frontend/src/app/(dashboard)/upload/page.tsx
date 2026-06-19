import UploadForm from "@/components/contracts/UploadForm";
import ContractSummary from "@/components/contracts/ContractSummary";
export default function UploadPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold">
        Upload
      </h1>
        <UploadForm />
        <ContractSummary/>
    </div>
  );
}