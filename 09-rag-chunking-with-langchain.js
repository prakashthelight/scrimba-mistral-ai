import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

import fs from 'fs';

// RAG - Chunking text with LangChain
// Split a document into chunks of 250 characters with an overlap of 40 characters
// Using langchain/text_splitter
// Optimize for smaller chunks without losing context

async function splitDocument() {
  const text = fs.readFileSync('handbook.txt', 'utf-8');
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 250,
    chunkOverlap: 40,
  });

  const output = await splitter.createDocuments([text]);
  console.log(output);
}

splitDocument();
