import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const llm = new ChatGoogleGenerativeAI({
    model:"gemini-2.5-flash",
    apiKey:process.env.GEMINI_API_KEY,
    temperature:0.1
});

const redlineClause = async (clause) => {

  const prompt = `

You are a senior legal counsel.

Review the following contract clause.

Clause Type:

${clause.clauseType}

Clause Text:

${clause.text}

Generate a safer and more balanced version.

Return ONLY valid JSON.

{

  "originalClause": "",

  "suggestedClause": "",

  "reason": "",

  "riskReduction": ""

}

`;
const response = await llm.invoke(prompt)
return response.content;
}
export default redlineClause;   