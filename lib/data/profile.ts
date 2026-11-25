// Single source of truth for personal details. Used by the home page, /about,
// the footer and page metadata, so facts only need to be updated in one place.

export const profile = {
  name: "Mohan Giri",
  role: "Machine Learning Engineer",
  location: "Helsinki, Finland",
  email: "mohan_gi@hotmail.com",
  siteUrl: "https://girimohan.vercel.app",
  resume: "/images/profile/resume_mohan.pdf",
  photo: "/images/profile/profile.png",
  heroPhoto: "/images/profile/profile2.JPG",
  links: {
    github: "https://github.com/girimohan",
    linkedin: "https://www.linkedin.com/in/mohan-giri-37b87a186/",
    substack: "https://aifinpost.substack.com",
  },
  newsletter: {
    name: "AIFinPost",
    url: "https://aifinpost.substack.com",
    description: "A weekly English-language briefing on Finland's AI ecosystem.",
  },
  // One sentence that answers "what do you do?"
  headline: "I build machine learning systems end to end: from the raw data feed to the model, the evaluation and the app people actually use.",
  intro:
    "M.Sc. student in Computer Science (Machine Learning & AI) at the University of Helsinki. Before that: a B.Sc. at HAMK, an ML internship in industrial computer vision, and eight years leading service teams at Silja Line.",
  status: "M.Sc. student at the University of Helsinki",
  lookingFor: "Open to ML / AI engineering roles in Finland",
}

export interface Experience {
  role: string
  company: string
  period: string
  summary: string
  points: string[]
  tech: string[]
}

export const experience: Experience[] = [
  {
    role: "Founder (side business)",
    company: "Barmo",
    period: "2026 – present",
    summary: "A small business I started for websites, AI automation and bookkeeping for small businesses and gig workers in Finland. Just getting started.",
    points: [
      "Built barmo.fi, a bilingual site prerendered to static HTML.",
      "Built Barmo Accounts, a bookkeeping service with an OCR + local-LLM pipeline that pre-fills documents for human review.",
      "Runs BPIL, an R&D project on Finnish public procurement data.",
    ],
    tech: ["Next.js", "Supabase", "FastAPI", "Ollama", "DuckDB"],
  },
  {
    role: "Machine Learning Engineer Intern",
    company: "HAMK Smart",
    period: "Jun 2024 – Nov 2024",
    summary: "Computer vision for detecting and classifying blisters on colour-coated metal surfaces.",
    points: [
      "Compared a classical machine-vision approach (OpenCV) with deep-learning detection (YOLO).",
      "Built a Django web app for inspecting samples and comparing them against standard reference images.",
      "Worked on model optimisation and inference speed.",
    ],
    tech: ["Python", "PyTorch", "YOLO", "OpenCV", "Django"],
  },
  {
    role: "Summer Project Developer",
    company: "Cinia Oy",
    period: "Sep 2023 – Jan 2024",
    summary: "Call-volume forecasting for a Finnish tech company.",
    points: [
      "Combined call history with Finnish weather data and calendar events as external factors.",
      "Built the data pipeline and ARIMA / SARIMAX forecasting models.",
      "Created dashboards for exploring trends.",
    ],
    tech: ["Python", "Pandas", "scikit-learn", "ARIMA / SARIMAX"],
  },
  {
    role: "Service Manager",
    company: "Silja Line",
    period: "Jul 2013 – Aug 2021",
    summary: "Led cabin service teams on passenger ships.",
    points: [
      "Coordinated staff and daily operations in a high-pressure, customer-facing environment.",
    ],
    tech: [],
  },
]

export interface Education {
  school: string
  degree: string
  period: string
  note: string
  url: string
}

export const education: Education[] = [
  {
    school: "University of Helsinki",
    degree: "M.Sc. Computer Science — Machine Learning & AI",
    period: "2025 – present",
    note: "Coursework and research in machine learning, multi-agent LLM systems and data science.",
    url: "https://www.helsinki.fi/en",
  },
  {
    school: "HAMK University of Applied Sciences",
    degree: "Bachelor of Computer Applications",
    period: "2021 – 2024",
    note: "Thesis: Smart Parking Assistant (YOLOv5 + Rasa chatbot).",
    url: "https://www.hamk.fi/en/",
  },
]

export const certifications = [
  { title: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services", year: "2023" },
  { title: "Data Analyst in Power BI", issuer: "DataCamp", year: "2023" },
]

// Skills are grouped by what they are used for, and every group is backed by
// at least one project on this site.
export const skills: { group: string; items: string[] }[] = [
  {
    group: "Machine learning",
    items: ["PyTorch", "scikit-learn", "Gradient boosting", "Computer vision (YOLO, OpenCV)", "NLP (Hugging Face, spaCy)", "Time-series forecasting"],
  },
  {
    group: "LLMs & retrieval",
    items: ["RAG pipelines", "LangChain / LangGraph", "Ollama (local models)", "ChromaDB / Qdrant", "Evaluation of LLM systems"],
  },
  {
    group: "Data & MLOps",
    items: ["Pandas / Polars", "DuckDB / Parquet / SQL", "Entity resolution", "MQTT streaming", "Docker", "GitHub Actions CI", "pytest"],
  },
  {
    group: "Software",
    items: ["Python", "TypeScript", "Next.js / React", "FastAPI / Flask / Django", "PostgreSQL / Supabase", "Electron"],
  },
]

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Finnish", level: "Intermediate" },
  { name: "Nepali", level: "Native" },
]
