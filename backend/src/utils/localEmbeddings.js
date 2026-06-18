import { pipeline } from "@xenova/transformers";

let extractor = null;

export const getEmbeddingModel = async () => {
  if (!extractor) {
    console.log("Loading MiniLM model...");

    extractor = await pipeline(
      "feature-extraction",
      "Xenova/all-MiniLM-L6-v2"
    );

    console.log("MiniLM loaded!");
  }

  return extractor;
};

const embedText = async (text) => {
  const model = await getEmbeddingModel();

  const output = await model(text, {
    pooling: "mean",
    normalize: true,
  });

  return Array.from(output.data);
};

export default embedText;