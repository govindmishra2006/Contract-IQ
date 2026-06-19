"use client";

// React state
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function UploadForm() {
  // Stores selected file
  const [file, setFile] = useState<File | null>(null);

  // Runs when user selects a file
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  }

  // Runs when upload button clicked
  async function handleUpload() {
    if(!file)
    {
        alert("Please select a file");
        return;
    }
    try {
        const formData = new FormData();
        formData.append("file",file);

        const response = await fetch("http://localhost:5001/api/contracts/upload",
            {
                method:"POST",
                headers:{Authorization: `Bearer ${localStorage.getItem("token")}`},
                body:formData,
            }
        )
        const data = await response.json();
        const contractId = data.contract._id;
        console.log("Contract ID: ",contractId);
        localStorage.setItem("currentContractId",contractId);
        console.log(data);
        alert(data.message);
    } catch (error) {
        console.log(error);
        alert("Upload Failed");
    }
  }

  return (
    <div className="max-w-xl space-y-4">
      {/* File Input */}

      <Input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />

      {/* Selected File Name */}

      {file && (
        <p className="text-sm text-muted-foreground">Selected: {file.name}</p>
      )}

      {/* Upload Button */}

      <Button onClick={handleUpload}>Upload Contract</Button>
    </div>
  );
}
