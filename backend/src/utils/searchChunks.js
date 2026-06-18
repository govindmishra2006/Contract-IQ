const cosineSimilarity = (a, b) => {
  const dotProduct = a.reduce(
    (sum, val, i) => sum + val * b[i],
    0
  );

  const magnitudeA = Math.sqrt(
    a.reduce((sum, val) => sum + val * val, 0)
  );

  const magnitudeB = Math.sqrt(
    b.reduce((sum, val) => sum + val * val, 0)
  );

  return dotProduct / (magnitudeA * magnitudeB);
};

const searchChunks = async (
  queryEmbedding,
  chunkEmbeddings,
  chunks,
  topK = 3
) => {
  const scores = chunkEmbeddings.map(
    (embedding, index) => ({
      chunk: chunks[index],
      score: cosineSimilarity(
        queryEmbedding,
        embedding
      ),
    })
  );

  scores.sort(
    (a, b) => b.score - a.score
  );

  return scores
    .slice(0, topK)
    .map((item) => item.chunk);
};

export default searchChunks;