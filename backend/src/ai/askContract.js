import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.GEMINI_API_KEY,
  temperature: 0.1,
});

const askContract = async (question, relevantChunks) => {
  const context = relevantChunks.join("\n\n");
  const prompt = `

You are a legal contract assistant.

Answer ONLY using the provided contract context.

If the answer cannot be found in the context, say:

"I could not find that information in the contract."

Contract Context:

${context}

Question:

${question}

`;
  const response = await llm.invoke(prompt);
  return response.content;
};
export default askContract;
