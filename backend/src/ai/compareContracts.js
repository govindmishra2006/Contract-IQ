import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const llm = new ChatGoogleGenerativeAI({
    model:"gemini-2.5-flash",
    apiKey:process.env.GEMINI_API_KEY,
    temperature:0.1
});

const compareContracts = async (contract1Clauses, contract2Clauses) => {

  const prompt = `

You are an expert legal contract analyst.

Compare these two contracts using their extracted clauses.

Contract A Clauses:

${JSON.stringify(contract1Clauses, null, 2)}

Contract B Clauses:

${JSON.stringify(contract2Clauses, null, 2)}

Return ONLY valid JSON.

Format:

{

  "addedClauses": [],

  "removedClauses": [],

  "modifiedClauses": [],

  "riskImpact": ""

}

Definitions:

addedClauses:

Clauses present in Contract B but not Contract A.

removedClauses:

Clauses present in Contract A but not Contract B.

modifiedClauses:

Clauses that exist in both contracts but whose content changed significantly.

riskImpact:

A short explanation of whether the changes increased or decreased legal risk.

`;
const response = llm.invoke(prompt);
return (await response).content;
}
export default compareContracts;