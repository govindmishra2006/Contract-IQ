import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

// connect to local ollama model

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey:process.env.GEMINI_API_KEY,
  temperature:0.1
});

const summarizeContract = async (contractText) => {
  const prompt = `

You are an expert legal assistant.

Summarize the following contract in simple language.

Include:

- Parties involved

- Main purpose

- Key obligations

- Important dates

- Risks and concerns

Contract:

${contractText}

`;

    const response = await llm.invoke(prompt);
    return response.content;
};

export default summarizeContract;
