import summarizeContract from "../ai/summarizeContract.js";
import analyzeRisks from "../ai/analyzeRisks.js";
import Contract from "../models/contract.model.js";

export const testAI = async (req, res) => {
  try {
    const summary = await summarizeContract(`

      This agreement is entered into between Acme Inc and John Doe.

      John Doe will provide consulting services for 12 months.

      Payment will be $5000 per month.

      Either party may terminate with 30 days notice.

    `);
    res.status(200).json({
      summary,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

export const summarizeUploadedContract = async (req, res) => {
  try {
    const contract = await Contract.findById(req.params.id);

    if (!contract) {
      return res.status(404).json({
        message: "Contract was not found",
      });
    }

    // Generate AI summary
    if (contract.summary) {
      return res.status(200).json({
        contractId: contract._id,

        title: contract.title,

        summary: contract.summary,

        cached: true,
      });
    }

    const summary = await summarizeContract(contract.extractedText);
    contract.summary = summary;
    contract.save();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

export const analyzeContractRisks = async (req, res) => {
  try {
    const contract = await Contract.findById(req.params.id);
    if (!contract) {
      return res.status(404).json({
        message: "Contract not found",
      });
    }

    if(contract.riskAnalysis){
        res.status(200).json({
      contractId: contract._id,
      title: contract.title,
      risks: contract.riskAnalysis,
      cached:true
    });
    }
    const risks = await analyzeRisks(contract.extractedText);

    contract.riskAnalysis = risks;
    await contract.save();
    
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
};
