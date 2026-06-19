🚀 ContractIQ

AI-Powered Contract Intelligence Platform

ContractIQ transforms complex legal contracts into actionable insights using Generative AI, Retrieval-Augmented Generation (RAG), Semantic Search, and Contract Intelligence.

Upload a contract and instantly:

* 📄 Generate concise AI summaries
* ⚠️ Detect legal and business risks
* 🔍 Extract key clauses
* 🤖 Chat with contracts using RAG
* 📊 Compare contracts intelligently
* ✍️ Generate AI-powered redlines and revisions

Built to reduce contract review time from hours to minutes.

⸻

✨ Features

🔐 Authentication & Security

* JWT Authentication
* Protected Routes
* Secure Password Hashing using bcrypt
* User-specific contract ownership
* Authorization middleware

⸻

📂 Contract Management

* Upload PDF contracts
* AWS S3 document storage
* MongoDB persistence
* Automatic text extraction
* Contract metadata tracking

⸻

🧠 AI Contract Intelligence

📄 Contract Summarization

Generate executive-level summaries of lengthy legal agreements.

Example:

* Parties involved
* Contract duration
* Key obligations
* Termination conditions
* Payment terms

⸻

⚠️ Risk Analysis

Identify:

* Missing clauses
* Ambiguous language
* Liability exposure
* Termination risks
* Compliance concerns

⸻

📋 Clause Extraction

Automatically extract:

* Payment Clauses
* Confidentiality Clauses
* Termination Clauses
* Liability Clauses
* Intellectual Property Clauses
* Governing Law Clauses

⸻

🤖 Contract Chat (RAG)

Ask natural language questions:

“What is the payment schedule?”

“Can either party terminate early?”

“What are the confidentiality obligations?”

Powered by:

* Text Chunking
* Embeddings
* Semantic Search
* Retrieval Augmented Generation

⸻

🔄 Contract Comparison

Compare two contracts and identify:

* Missing clauses
* Changed obligations
* Modified liabilities
* Legal differences

⸻

✍️ AI Redlining

Generate improved legal language.

Example:

Input:

Either party may terminate at any time.

Output:

Either party may terminate this agreement by providing thirty (30) days written notice to the other party.

⸻

🏗️ System Architecture

                     ┌──────────────┐
                     │    User      │
                     └──────┬───────┘
                            │
                            ▼
                ┌─────────────────────┐
                │     Next.js App     │
                └─────────┬───────────┘
                          │
                          ▼
                ┌─────────────────────┐
                │   Express Backend   │
                └─────────┬───────────┘
                          │
         ┌────────────────┼────────────────┐
         ▼                ▼                ▼
    MongoDB            AWS S3         Gemini AI
 User Data         Contract Files    Intelligence
         ▼                ▼                ▼
   Metadata      Extracted PDFs     Summary
                                  Risks
                                  Clauses
                                  Chat
                                  Comparison
                                  Redlining

🧰 Tech Stack

Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* shadcn/ui

Backend

* Node.js
* Express.js
* JWT Authentication
* Multer

Database

* MongoDB
* Mongoose

Cloud

* AWS S3

AI Layer

* Google Gemini
* Embeddings
* Semantic Search
* RAG Pipeline

Developer Tools

* Git
* GitHub
* Postman
* VS Code

⸻

🧠 RAG Pipeline

Contract PDF
      │
      ▼
Text Extraction
      │
      ▼
Chunking
      │
      ▼
Embeddings
      │
      ▼
Vector Similarity Search
      │
      ▼
Relevant Context Retrieval
      │
      ▼
Gemini
      │
      ▼
Grounded Answer

⸻

📁 Project Structure

ContractIQ
├── frontend
│   ├── Next.js
│   ├── TypeScript
│   ├── Tailwind
│   └── shadcn/ui
│
├── backend
│   ├── Express
│   ├── MongoDB
│   ├── JWT
│   ├── AWS S3
│   └── AI Services
│
├── contracts
├── embeddings
├── ai
├── routes
├── controllers
└── models

⸻

🎯 Key Engineering Challenges Solved

Large Document Processing

Contracts are:

* Chunked
* Embedded
* Indexed
* Retrieved efficiently

⸻

Retrieval-Augmented Generation

Avoids hallucinations by grounding AI responses in contract content.

⸻

AI-Powered Legal Analysis

Combines:

* Summarization
* Risk Detection
* Clause Understanding
* Contract Reasoning

⸻

Secure Multi-User Architecture

Each user can:

* Upload contracts
* Access only their contracts
* Generate private AI analyses

⸻

🚀 Future Roadmap

Phase 2

* Vector Database Integration
* Pinecone / Weaviate
* Multi-document Retrieval
* Streaming AI Responses

Phase 3

* Team Workspaces
* Contract Collaboration
* Version History
* Approval Workflows

Phase 4

* Enterprise SaaS
* Role-Based Access Control
* Audit Logs
* Compliance Dashboard

⸻

📈 Impact

ContractIQ reduces contract review time by leveraging AI-powered legal intelligence and semantic retrieval systems.

Designed as a production-grade AI SaaS platform capable of scaling from individual professionals to enterprise legal teams.

⸻

👨‍💻 Author

Govind Mishra

B.Tech Computer Science Engineering

AI • Full Stack Development • Generative AI • SaaS Engineering

Building intelligent software that combines modern web engineering with AI systems.