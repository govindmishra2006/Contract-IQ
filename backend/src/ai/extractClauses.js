import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.GEMINI_API_KEY,
  temperature: 0.1,
});

const extractClauses = async (contractText) => {
  const prompt = `

You are an expert legal AI assistant.

Extract the following clauses if they exist:

1. Termination

2. Liability

3. Confidentiality

4. Payment

5. Intellectual Property

6. Indemnification

7. Data Protection

Return ONLY valid JSON.

Example:

[

  {

    "clauseType": "Termination",

    "title": "Termination Clause",

    "text": "Either party may terminate..."

  }

]

Contract:

${contractText}

`;
const response = await llm.invoke(prompt);
return response.content;
};

export default extractClauses;
