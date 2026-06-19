import summarizeContract from "../ai/summarizeContract.js";
import analyzeRisks from "../ai/analyzeRisks.js";
import Contract from "../models/contract.model.js";
import chunkText from "../utils/chunkText.js";
import askContract from "../ai/askContract.js";
import createEmbeddings from "../utils/createEmbeddings.js";
import searchChunks from "../utils/searchChunks.js";
import embedText from "../utils/localEmbeddings.js";
import extractClauses from "../ai/extractClauses.js";
import compareContracts from "../ai/compareContracts.js";
import redlineClause from "../ai/redlineClause.js";

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

    await contract.save();

    return res.status(200).json({
      contractId: contract._id,

      title: contract.title,

      summary,

      cached: false,
    });
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

    if (contract.riskAnalysis) {
      return res.status(200).json({
        contractId: contract._id,
        title: contract.title,
        risks: contract.riskAnalysis,
        cached: true,
      });
    }
    const risks = await analyzeRisks(contract.extractedText);

    contract.riskAnalysis = risks;
    await contract.save();

    return res.status(200).json({
      contractId: contract._id,

      title: contract.title,

      risks,

      cached: false,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

export const chatWithContract = async (req, res) => {
  try {
    const contract = await Contract.findById(req.params.id);
    if (!contract) {
      return res.status(404).json({
        message: "Contract not found",
      });
    }
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({
        message: "Questions is required",
      });
    }
    const chunks = await chunkText(contract.extractedText);

    const chunkEmbeddings = await createEmbeddings(chunks);

    const queryEmbedding = await embedText(question);

    const relevantChunks = await searchChunks(
      queryEmbedding,
      chunkEmbeddings,
      chunks,
    );

    const answer = await askContract(question, relevantChunks);

    return res.status(200).json({
      question,
      answer,
      relevantChunks,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const extractContractClauses = async(req,res)=>{
  try {
    const contractId = req.params.id;
    const contract = await Contract.findById(contractId);

    if(!contract)
    {
      return res.status(404).json({
        message:"Contract Not found"
      })
    }

    if(!contract.extractedText){
      return res.status(400).json({
        message:"Contract Text was not found"
      })
    }

    const response = await extractClauses(contract.extractedText);
    const cleanedResponse = response

  .replace(/```json/g, "")

  .replace(/```/g, "")

  .trim();
    let clauses;

    try {
      clauses = JSON.parse(cleanedResponse);
    } catch (error) {
      return res.status(500).json({
        message:"Invalid JSON response from gemini"
      })
    }
    contract.clauses = clauses;
    await contract.save();

    return res.status(200).json({
      message:"Clauses extracted successfully",
      clauses
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message:error.message
    })
  }
}
export const compareTwoContracts = async(req,res)=>{
  try {
    const {contract1Id,contract2Id} = req.body;
    if(!contract1Id || !contract2Id)
    {
      return res.status(400).json({
        message:"Both contract IDs are required"
      })
    }
    const contract1 = await Contract.findById(contract1Id);
    const contract2 = await Contract.findById(contract2Id);

    if(!contract1 || !contract2)
    {
      return res.status(404).json({
        message:"One or both contracts not found"
      })
    }
    if (!contract1.clauses?.length) {

      return res.status(400).json({

        message: "Contract 1 has no extracted clauses",

      });

    }

    if (!contract2.clauses?.length) {

      return res.status(400).json({

        message: "Contract 2 has no extracted clauses",

      });
    }
    const response = await compareContracts(contract1.clauses,contract2.clauses);
    const cleanedResponse = response

      .replace(/```json/g, "")

      .replace(/```/g, "")

      .trim();
    
    const comparison = JSON.parse(cleanedResponse);
    return res.status(200).json({
      comparison
    })
  } catch (error) {
      console.log(error)
      return res.status(500).json({
        message:error.message
      })
  }
}
export const redlineContractClause = async(req,res)=>{
  try {
    const {contractId,clauseType} = req.body;
    if(!contractId || !clauseType)
    {
      return res.status(400).json({
        message:"Both contract ID and clause type are required"
      })
    }
    const contract = await Contract.findById(contractId);
    if(!contract)
    {
      return res.status(404).json({
        message:"Contract not found"
      })
    }
    const clause = contract.clauses.find((c)=>c.clauseType.toLowerCase() === clauseType.toLowerCase());
    if(!clause)
    {
      return res.status(404).json({
        message:"Clause not found in contract"
      })
    }
    const response = await redlineClause(clause);
    const cleanedResponse = response

      .replace(/```json/g, "")

      .replace(/```/g, "")

      .trim();
    
    const redline = JSON.parse(cleanedResponse);
    return res.status(200).json({
      redline
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message:error.message
    })
  }
}