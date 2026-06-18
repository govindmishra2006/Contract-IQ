import { ChatOllama } from "@langchain/ollama";

// connect to local ollama model

const llm = new ChatOllama({
  model: "qwen3:8b",
  temperature: 0,
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
