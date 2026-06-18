import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.GEMINI_API_KEY,
  temperature:0.1
});

const analyzeRisks = async (contractText) => {
  const prompt = `

You are an expert legal contract reviewer.

Analyze the contract and return ONLY valid JSON.

Return this exact structure:

{

  "riskScore": 0-10,

  "overallRisk": "Low" | "Medium" | "High",

  "risks": [

    {

      "title": "string",

      "severity": "Low" | "Medium" | "High",

      "explanation": "string",

      "recommendation": "string"

    }

  ]

}

Rules:

- Return ONLY JSON.

- Do not wrap JSON in markdown.

- Do not use \`\`\`json.

- No extra text before or after the JSON.

- riskScore must be an integer between 0 and 10.

0 = No Risk
10 = Extremely High Risk

Contract:

${contractText}

`;
const response = await llm.invoke(prompt);
return JSON.parse(response.content);
};

export default analyzeRisks;
