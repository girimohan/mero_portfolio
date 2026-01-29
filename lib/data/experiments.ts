export interface Experiment {
  id: string
  title: string
  description: string
  category: "agents" | "llm" | "tools" | "prototypes" | "vibecoding"
  tags: string[]
  status: "active" | "completed" | "exploring"
  date: string
  link?: string
  github?: string
}

export const experiments: Experiment[] = [
  {
    id: "multi-agent-orchestration",
    title: "Multi-Agent System Orchestration",
    description: "Testing various multi-agent architectures using LangGraph for complex task decomposition and parallel execution.",
    category: "agents",
    tags: ["LangGraph", "Multi-Agent", "Orchestration"],
    status: "active",
    date: "2024-12",
  },
  {
    id: "langgraph-prototypes",
    title: "LangGraph Workflow Prototypes",
    description: "Building small prototypes to explore stateful agent workflows, cycles, and human-in-the-loop patterns.",
    category: "prototypes",
    tags: ["LangGraph", "State Machines", "Workflows"],
    status: "active",
    date: "2024-12",
  },
  {
    id: "gemini-cli-experiments",
    title: "Gemini CLI Experiments",
    description: "Exploring Google's Gemini CLI for rapid prototyping and testing various prompting strategies.",
    category: "tools",
    tags: ["Gemini", "CLI", "Google AI"],
    status: "exploring",
    date: "2024-11",
  },
  {
    id: "rag-optimization",
    title: "RAG Pipeline Optimization",
    description: "Experimenting with different chunking strategies, embedding models, and retrieval methods for better RAG performance.",
    category: "llm",
    tags: ["RAG", "Embeddings", "Vector Search"],
    status: "active",
    date: "2024-11",
  },
  {
    id: "vibecoding-sessions",
    title: "Vibecoding Sessions",
    description: "Casual coding experiments - trying new ideas, building fun prototypes, and exploring emerging tools without specific goals.",
    category: "vibecoding",
    tags: ["Experiments", "Learning", "Fun"],
    status: "active",
    date: "2024-12",
  },
  {
    id: "agent-memory-patterns",
    title: "Agent Memory Patterns",
    description: "Testing different memory architectures for conversational agents - short-term, long-term, and episodic memory.",
    category: "agents",
    tags: ["Memory", "Agents", "Architecture"],
    status: "exploring",
    date: "2024-10",
  },
  {
    id: "tool-calling-benchmarks",
    title: "Tool Calling Benchmarks",
    description: "Benchmarking various LLMs on tool-calling tasks to understand strengths and failure modes.",
    category: "llm",
    tags: ["Benchmarks", "Tool Calling", "Evaluation"],
    status: "completed",
    date: "2024-09",
  },
  {
    id: "local-llm-deployment",
    title: "Local LLM Deployment",
    description: "Testing Ollama, LM Studio, and other local LLM solutions for privacy-conscious applications.",
    category: "tools",
    tags: ["Ollama", "Local LLM", "Privacy"],
    status: "completed",
    date: "2024-08",
  },
]

export function getExperiments(): Experiment[] {
  return [...experiments].sort((a, b) => {
    // Sort by date descending (most recent first)
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function getExperimentsByCategory(category: string): Experiment[] {
  const sorted = getExperiments()
  if (category === "all") return sorted
  return sorted.filter((exp) => exp.category === category)
}

export function getExperiment(id: string): Experiment | undefined {
  return experiments.find((exp) => exp.id === id)
}
