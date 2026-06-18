import embedText from "./localEmbeddings.js";

const createEmbeddings = async (chunks) => {
  const embeddings = [];

  for (const chunk of chunks) {
    const vector = await embedText(chunk);

    embeddings.push(vector);
  }

  return embeddings;
};

export default createEmbeddings;