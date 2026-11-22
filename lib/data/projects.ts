// Every number on this page comes from the project's README, evaluation output
// or the resume. When adding a project, prefer a smaller honest number with
// its baseline over a big number without context.

export type ProjectCategory = "ml" | "research" | "apps"

export const categoryLabels: Record<ProjectCategory, string> = {
  ml: "ML & Data",
  research: "Research",
  apps: "Apps & Web",
}

export type ProjectTopic = "ml" | "llm" | "data" | "research" | "apps"

/** Topics drive the filters on /projects. A project can have several. */
export const topicLabels: Record<ProjectTopic, string> = {
  ml: "Machine learning",
  llm: "LLMs & RAG",
  data: "Data engineering",
  research: "Research",
  apps: "Apps & Web",
}

export type ProjectStatus = "Live" | "In progress" | "Completed" | "Prototype"

export interface ProjectSection {
  heading: string
  body?: string[]
  bullets?: string[]
}

export interface Project {
  /** Legacy numeric id, kept so old /projects/<id> links still resolve. */
  id: number
  slug: string
  title: string
  tagline: string
  summary: string
  year?: number
  context: string
  category: ProjectCategory
  topics: ProjectTopic[]
  status: ProjectStatus
  metrics?: { value: string; label: string }[]
  tags: string[]
  image?: string
  /** "contain" for charts and figures that must not be cropped. */
  imageFit?: "cover" | "contain"
  /** Monospace lines shown as the cover when there is no image. */
  cover?: string[]
  gallery?: { src: string; caption: string }[]
  links: { demo?: string; github?: string }
  /** Source code is in a private repository. */
  privateCode?: boolean
  sections?: ProjectSection[]
  /** Slugs of related projects, shown at the end of the project page. */
  related?: string[]
}

// Array order is the display order: strongest and most recent work first.
export const projects: Project[] = [
  {
    id: 11,
    slug: "helsinki-tram-mlops",
    title: "Helsinki Tram MLOps",
    tagline: "Live tram tracking and 5-minute delay forecasts for every tram in Helsinki.",
    summary:
      "An end-to-end pipeline on real data: it streams GPS positions of all Helsinki trams from HSL's public feed, cleans them into a daily dataset, trains a model that forecasts each tram's delay five minutes ahead, and shows everything in a live dashboard that runs around the clock on a cloud VM.",
    year: 2026,
    context: "Personal project",
    category: "ml",
    topics: ["ml", "data", "llm"],
    status: "Live",
    metrics: [
      { value: "35.2 s", label: "forecast error (MAE) vs 64.7 s for the naive baseline" },
      { value: "~100", label: "trams tracked live, refreshed every 15 s" },
      { value: "1.08 M", label: "rows in the out-of-sample backtest" },
    ],
    tags: ["Python", "MQTT", "scikit-learn", "DuckDB", "Parquet", "Streamlit", "LLM tool calling", "Docker", "GitHub Actions"],
    image: "/images/projects/tram-dashboard_live.png",
    gallery: [
      { src: "/images/projects/tram-dashboard_live.png", caption: "Live view: every tram on the map, coloured by punctuality, with a line-by-line status board." },
      { src: "/images/projects/tram-dashboard_ask.png", caption: "Ask page: a question in plain language, answered from the punctuality history, with the lookup it used listed under the answer." },
      { src: "/images/projects/tram-dashboard_forecast.png", caption: "Forecast panel: each tram's predicted delay five minutes ahead." },
      { src: "/images/projects/tram-model_evaluation.png", caption: "Backtest: model error compared with the persistence and line × hour baselines." },
    ],
    links: {
      demo: "https://fip-86-50-253-12.kaj.poutavm.fi",
      github: "https://github.com/girimohan/helsinki-tram-mlops",
    },
    related: ["public-procurement-intelligence", "npf-classification"],
    sections: [
      {
        heading: "How it works",
        bullets: [
          "Ingest: subscribes to HSL's high-frequency positioning feed over MQTT (about 100 messages per second) and keeps one position per tram every 10 seconds.",
          "Process: deduplicates, fixes data issues and writes one Parquet partition per day.",
          "Train: builds features, splits by time, trains gradient boosting and saves a versioned model with its metrics.",
          "Serve: a Streamlit dashboard with Live, Ask, History, Model health and System pages, running around the clock on a CSC cloud VM.",
        ],
      },
      {
        heading: "Ask: questions in plain language",
        body: [
          "The Ask page lets anyone question the data in their own words: \"When is the next tram at Lasipalatsi?\", \"How is line 4 doing right now?\", \"Which line has been least punctual this week?\". An LLM picks among seven read-only tools and writes the answer from what they return. It never sees the data otherwise and cannot run queries of its own, and every answer lists the lookups behind it.",
        ],
        bullets: [
          "Tools: next arrivals from HSL's realtime predictions, stop search over static GTFS, live line status with the model's 5-minute forecast, service alerts, punctuality history, live forecast accuracy and detected incidents.",
          "Fast lookups: the GTFS-RT archiver keeps the latest poll of tram trips in one small file, so a lookup takes milliseconds instead of scanning the day's archive (about 19 s).",
          "Any OpenAI-compatible API works (Groq's free tier by default). Visitors share one quota, so questions are capped per minute, per day and per visit.",
        ],
      },
      {
        heading: "Evaluation",
        body: [
          "The model is compared with a persistence baseline (\"the delay stays as it is\") in a rolling-origin backtest: each day is predicted by a model trained only on earlier days, and training rows whose target would leak into the test day are removed. Without that purge, an early run overstated the improvement (45% instead of 32%).",
          "Across all observations the model's error is 35.2 s against 64.7 s for persistence. Most of that gain comes from trams waiting at the terminus. For trams already en route, the improvement is smaller but consistent: 5.8 s, with a 95% bootstrap interval of 5.7–6.0 s.",
        ],
      },
      {
        heading: "Data problems found in the raw feed",
        bullets: [
          "The delay field is positive when a tram is ahead of schedule, so the sign had to be flipped.",
          "Some trams stay signed into a journey hours after it ends, which looks like a 2-hour delay. In the first live run, these rows pushed the mean delay to +237 s instead of −3 s.",
          "The broker sometimes delivers the same message twice.",
          "Timestamps are UTC, which shifted the hour-of-day charts by 2–3 hours.",
        ],
      },
    ],
  },
  {
    id: 12,
    slug: "multi-agent-llm-failure-modes",
    title: "Failure Modes in Multi-Agent LLM Systems",
    tagline: "A chaos-engineering study of how multi-agent coding pipelines break.",
    summary:
      "Seminar paper at the University of Helsinki. I injected controlled faults into ChatDev, a multi-agent coding framework, to measure how failure patterns from the MAST taxonomy affect the quality of the generated code. Everything ran locally with qwen2.5-coder:14b through Ollama.",
    year: 2026,
    context: "Research paper · University of Helsinki",
    category: "research",
    topics: ["llm", "research"],
    status: "Completed",
    metrics: [
      { value: "1,480", label: "experiment runs across 6 coding tasks" },
      { value: "1,200", label: "conversation traces automatically annotated" },
      { value: "−5.0 pp", label: "pass rate under a false assumption (p = 0.049)" },
    ],
    tags: ["Python", "LLM agents", "Ollama", "ChatDev", "HumanEval", "Statistics"],
    image: "/images/projects/mast-pass-rates.png",
    imageFit: "contain",
    gallery: [
      { src: "/images/projects/mast-pass-rates.png", caption: "Pass rate per fault condition compared with the baseline." },
      { src: "/images/projects/mast-pertask-heatmap.png", caption: "Per-task pass rates: most effects are concentrated in specific tasks." },
    ],
    links: {},
    related: ["fintax-retrieval-benchmark", "rag-sales-analysis"],
    privateCode: true,
    sections: [
      {
        heading: "Question",
        body: [
          "Multi-agent LLM systems fail in ways that a single model does not: agents withhold information, act on wrong assumptions or never stop. The MAST taxonomy names these failure modes. This study asks how much each one actually hurts the result.",
        ],
      },
      {
        heading: "Method",
        bullets: [
          "Five conditions: a baseline, three kinds of information withholding, and a false assumption injected into the prompt.",
          "Each generated program is scored against HumanEval unit tests.",
          "Every trace is labelled automatically to check that each injection triggered the failure it was meant to trigger, and no other.",
        ],
      },
      {
        heading: "Findings",
        bullets: [
          "False context is more harmful than missing context. Withholding information had almost no effect, because downstream agents could recover it from other channels.",
          "The false assumption lowered the pass rate in an unexpected way. Agents ignored the false instruction itself, but it changed their high-level plan. The resulting multi-file designs failed at assembly: NameErrors rose from 22% to 34% of failures.",
          "Removing the loop-exit signal made the pipeline run 3.6× longer, with no fallback.",
          "Seeing a failure pattern in the conversation does not mean it caused harm. What matters is whether the missing content can be recovered.",
        ],
      },
    ],
  },
  {
    id: 13,
    slug: "kushmabazar",
    title: "KushmaBazar",
    tagline: "A bilingual community marketplace for Kushma, Nepal. Live in production.",
    summary:
      "A buy-and-sell site for a town in western Nepal, in English and Nepali. Sellers post listings with photos, an admin reviews them before they go live, and buyers message sellers through a private real-time chat that needs no account.",
    year: 2026,
    context: "Personal project",
    category: "apps",
    topics: ["apps"],
    status: "Live",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Airtable", "Pusher", "Vercel Blob", "Vitest"],
    image: "/images/projects/kushmabazar.png",
    links: { demo: "https://www.kushmabazar.com" },
    privateCode: true,
    sections: [
      {
        heading: "Features",
        bullets: [
          "English ↔ Nepali toggle across the whole site.",
          "Listings by category and location, with photo upload.",
          "Admin panel to approve submissions, read messages and manage chats.",
          "Private buyer-seller chat over Pusher, using a secret link instead of accounts.",
          "SEO basics: sitemap, Open Graph images and structured data.",
        ],
      },
      {
        heading: "Engineering",
        bullets: [
          "Airtable as the database and Vercel Blob for photos.",
          "GitHub Actions runs lint, type-check, formatting, unit tests and a build on every pull request. Vercel builds a preview for every branch.",
          "Optional error reporting with Sentry.",
        ],
      },
    ],
  },
  {
    id: 1,
    slug: "smart-parking-assistant",
    title: "Smart Parking Assistant",
    tagline: "Parking-space detection with a chatbot you can ask for a free spot.",
    summary:
      "My bachelor's thesis. A YOLOv5 model finds free and occupied parking spaces in camera footage, and a Rasa chatbot answers questions about availability in plain language. A Flask API handles the video processing, and Streamlit provides the interface.",
    year: 2024,
    context: "Bachelor's thesis · HAMK",
    category: "ml",
    topics: ["ml"],
    status: "Completed",
    metrics: [
      { value: "97.9%", label: "detection precision (YOLOv5l)" },
      { value: "92%", label: "chatbot intent recognition" },
    ],
    tags: ["Python", "PyTorch", "YOLOv5", "Rasa", "Flask", "Streamlit", "OpenCV"],
    image: "/images/projects/yolo_parking.jpg",
    links: { github: "https://github.com/girimohan/smartparking" },
    sections: [
      {
        heading: "Approach",
        bullets: [
          "YOLOv5l fine-tuned on the PKLot dataset, with synthetic images added to cover more conditions.",
          "Rasa handles the conversation, for example \"is there space near the entrance?\"",
          "Video is processed locally, and only aggregated occupancy is stored.",
        ],
      },
    ],
  },
  {
    id: 10,
    slug: "npf-classification",
    title: "New Particle Formation Classification",
    tagline: "5th out of 149 teams in the University of Helsinki ML course competition.",
    summary:
      "Classifying days with and without new particle formation events from 102 atmospheric measurements. Feature selection reduced the input to 12 features without losing accuracy.",
    year: 2025,
    context: "Kaggle competition · University of Helsinki",
    category: "ml",
    topics: ["ml"],
    status: "Completed",
    metrics: [
      { value: "5th / 149", label: "final leaderboard rank" },
      { value: "93.1%", label: "binary accuracy" },
      { value: "102 → 12", label: "features after selection" },
    ],
    tags: ["Python", "scikit-learn", "Feature selection", "Logistic regression", "Random forest"],
    image: "/images/projects/npf_classification.png",
    imageFit: "contain",
    links: { github: "https://github.com/girimohan/npf_classification" },
    sections: [
      {
        heading: "Approach",
        bullets: [
          "Statistical tests, tree-based importances and L1 regularisation combined to select features.",
          "Logistic regression and random forests with class weighting, because the classes were imbalanced.",
          "Cross-validation for model selection. Accuracy on the harder four-class version of the task was 70.2%.",
        ],
      },
    ],
  },
  {
    id: 14,
    slug: "cancer-type-classification",
    title: "Cancer Type from Mutational Signatures",
    tagline: "Predicting cancer type from whole-genome mutation patterns.",
    summary:
      "Group project using the PCAWG dataset (2,771 whole-genome samples). We classified 23 cancer types from trinucleotide mutation profiles and compared SVMs, random forests, XGBoost, an MLP and a 1D CNN. The best model came within about 4 points of a published reference, which also used additional mutation types.",
    year: 2026,
    context: "Group project · University of Helsinki",
    category: "ml",
    topics: ["ml"],
    status: "Completed",
    metrics: [
      { value: "85.9%", label: "accuracy, 23 cancer types (MLP)" },
      { value: "~90%", label: "published reference using more data types" },
    ],
    tags: ["Python", "PyTorch", "scikit-learn", "XGBoost", "Bioinformatics"],
    links: { github: "https://github.com/girimohan/mutation-catalog-group-project-2026" },
    sections: [
      {
        heading: "What made the difference",
        bullets: [
          "Biology-informed features: signature activities, mutation burden and ratio indices on top of the 96-channel spectrum.",
          "SVM baseline 80.5% → MLP with engineered features 85.9% (F1 0.854).",
          "Reference: Jiao et al. 2020, Nature Communications. They reached ~90% with structural variants, copy-number changes and indels, which we did not use.",
        ],
      },
    ],
  },
  {
    id: 15,
    slug: "fintax-retrieval-benchmark",
    title: "FinTax",
    tagline: "Retrieval-first research on Finnish tax law: find the right provision before generating anything.",
    summary:
      "General-purpose LLMs answer Finnish tax questions fluently but unreliably. They mix up tax years, invent section numbers and blend in other countries' rules. If the answer comes from the wrong provision, generation can't fix it. So FinTax treats retrieval as the research problem: build a benchmark of real sole-proprietor questions with gold provisions, then measure BM25, dense and hybrid retrievers on it before any RAG is built.",
    year: 2026,
    context: "Research project",
    category: "research",
    topics: ["llm", "research"],
    status: "In progress",
    metrics: [
      { value: "7", label: "statutes ingested from Finlex with provenance" },
      { value: "6", label: "research questions, written down before experiments" },
    ],
    tags: ["Python", "Information retrieval", "BM25", "Embeddings", "Finlex API", "pytest", "mypy (strict)"],
    links: {},
    privateCode: true,
    related: ["rag-sales-analysis", "pdf-qa-chatbot", "multi-agent-llm-failure-modes"],
    cover: [
      "question (fi)  →  retriever  →  provision §",
      "               BM25 · dense · hybrid",
      "",
      "eval: Recall@k · MRR · nDCG",
      "status: corpus done, baselines next",
    ],
    sections: [
      {
        heading: "Research questions",
        bullets: [
          "How well do BM25, dense and hybrid retrievers find the correct provision for real questions written in Finnish?",
          "Which chunking unit works best for legal text: section (§), subsection (momentti), fixed windows or hierarchical?",
          "How much does handling Finnish morphology (lemmatisation, compound splitting) help lexical retrieval?",
          "Are multilingual embedding models good enough for Finnish legal language?",
          "How should temporal validity be represented so that retrieval returns the version of the law that applies to the tax year?",
        ],
      },
      {
        heading: "Done so far",
        bullets: [
          "Statute ingestion from the Finlex open-data API, recording the source, retrieval date, statute number and version of every document.",
          "Dated in-force snapshots. Finlex's consolidated texts mix current and not-yet-in-force wording, and the build step separates them so every provision has a validity window.",
          "A strict-typed, tested codebase. Raw data is immutable, and all cleaning happens in code.",
        ],
      },
      {
        heading: "Next",
        body: [
          "Verohallinto guidance ingestion, the FinTaxBench question set with a labelling guide, chunking variants, and the first BM25, dense and hybrid baselines reported with Recall@k, MRR and nDCG. Generation (FinTaxRAG) only starts once retrieval has a written evaluation.",
          "There are no retrieval results yet. This page will be updated when the first baselines are in.",
        ],
      },
    ],
  },
  {
    id: 24,
    slug: "public-procurement-intelligence",
    title: "Public Procurement Intelligence (BPIL)",
    tagline: "Turning ten years of Finnish public spending data into evidence-backed buyer intelligence.",
    summary:
      "R&D under Barmo, my side business. A research codebase that asks whether fragmented Finnish public data can tell a supplier who buys what, from whom and how that is changing, and later, whether purchasing can be forecast better than simple recurrence. It combines purchase invoices from OpenProcurement.fi, EU tender notices from TED, the PRH company register and Statistics Finland into one DuckDB warehouse with provenance back to the source file row.",
    year: 2026,
    context: "Research project",
    category: "research",
    topics: ["data", "research", "ml"],
    status: "In progress",
    metrics: [
      { value: "23.5 M", label: "invoice rows, 2016–2026 (€98.8 bn)" },
      { value: "97.1%", label: "of spend linked to a valid Business ID" },
      { value: "95.4 → 99.2%", label: "name-matching precision after fixing failure modes" },
    ],
    tags: ["Python", "DuckDB", "Polars", "SQL", "Entity resolution", "Pydantic", "pytest"],
    links: {},
    privateCode: true,
    related: ["helsinki-tram-mlops", "fintax-retrieval-benchmark"],
    sections: [
      {
        heading: "Approach",
        body: [
          "Claims are earned in order: correct data, then descriptive intelligence, then baselines, then ML, then opportunity signals. Each step can falsify the idea. The ML evaluation protocol, including a point-in-time dataset in which no feature may use data from after the prediction date, was written down before any model was trained.",
        ],
      },
      {
        heading: "Entity resolution experiment",
        body: [
          "Can supplier rows without a Business ID be matched to the company register by name? I hid the known ID for 100,121 name variants and measured the rule against them.",
        ],
        bullets: [
          "Normalised name only: 95.4% precise.",
          "Requiring the same legal form: 98.5%. This fixed cross-border collisions such as a Swedish AB matching a Finnish Oy.",
          "Also requiring the company name to be valid during the spend period: 99.2%. 88% of the remaining errors were recycled names, where a dissolved company's name had been registered again by a new company.",
          "Without these guards, about 5% of name-resolved relationships would have been silently wrong.",
        ],
      },
      {
        heading: "What the data actually says",
        bullets: [
          "21.5% of procurement spend goes to other public bodies and 8% to the organisation itself, so naive \"top supplier\" rankings mislead.",
          "Only central government (about 58 buyers over 129 months) forms a dense, long panel. Municipal coverage is a handful of organisations, not a national dataset.",
          "Source files are rewritten in place without versioning, so the pipeline keeps its own dated snapshots with checksums.",
          "One city's 2020 data is missing entirely despite being declared as covered. The gap is flagged and masked rather than treated as zero spend.",
        ],
      },
      {
        heading: "Status",
        body: [
          "The data foundation is done, with 58 tests, and per-buyer profiles are being generated. Baselines and ML are next. Prediction is still unproven: for stable categories, simple recurrence may well be enough.",
        ],
      },
    ],
  },
  {
    id: 25,
    slug: "barmo-accounts",
    title: "Barmo Accounts",
    tagline: "Bookkeeping for couriers and sole traders, with AI that reads their receipts and earnings reports.",
    summary:
      "The bookkeeping service of Barmo, my side business. Couriers and other sole traders upload their monthly earnings reports, fuel receipts and bills, and the app tracks income, expenses, VAT and tax-year figures per client. A separate extraction service reads each document and pre-fills a review form, so the bookkeeper checks the numbers instead of typing them in.",
    year: 2026,
    context: "Barmo · side business",
    category: "apps",
    topics: ["apps", "llm"],
    status: "Live",
    tags: ["Next.js", "TypeScript", "Supabase", "FastAPI", "PaddleOCR", "pdfplumber", "Ollama (Mistral)"],
    image: "/images/projects/barmo-accounts.png",
    links: { demo: "https://accounts.barmo.fi" },
    privateCode: true,
    related: ["barmo-bookkeeping", "fintax-retrieval-benchmark", "barmo-website"],
    sections: [
      {
        heading: "Document extraction pipeline",
        bullets: [
          "Digital PDFs are read with pdfplumber. Scanned PDFs and phone photos fall back to PaddleOCR.",
          "An extractor registry picks a parser by document type (Wolt or other platform earnings, fuel receipts, phone bills). Fast regex parsing runs first.",
          "Only when the regex result has low confidence is the text sent to a local Mistral model through Ollama, with a prompt specific to the document type. The documents never go to a third-party AI API.",
          "The structured result pre-fills a form, and a person reviews and saves it. Nothing is written to the books automatically.",
        ],
      },
      {
        heading: "The rest of the app",
        bullets: [
          "Per-client monthly entries, VAT periods and tax-year summaries.",
          "Clients get a private upload link, so they don't need an account to send documents.",
          "Google Drive sync for documents, plus English and Finnish guides on Finnish VAT and tax filing.",
          "Adding a new document type means adding one extractor, one prompt and one registry entry.",
        ],
      },
    ],
  },
  {
    id: 16,
    slug: "rag-sales-analysis",
    title: "RAG Sales Analysis",
    tagline: "Ask business questions about a sales dataset in plain English, fully offline.",
    summary:
      "A local question-answering app over the Superstore sales dataset (9,994 orders, 2014–2017). It runs entirely on your machine: sentence-transformer embeddings, ChromaDB and Llama 3 through Ollama, with a FastAPI backend and a Streamlit front end. It's a compact, readable example of a RAG pipeline and of the problems you hit when you point one at tabular data.",
    year: 2026,
    context: "Personal project",
    category: "ml",
    topics: ["llm"],
    status: "Completed",
    tags: ["Python", "RAG", "ChromaDB", "sentence-transformers", "Ollama", "Llama 3", "FastAPI", "Streamlit"],
    links: { github: "https://github.com/girimohan/rag-sales-analysis" },
    related: ["fintax-retrieval-benchmark", "pdf-qa-chatbot"],
    sections: [
      {
        heading: "How it works",
        bullets: [
          "Two kinds of documents in the vector store: pre-computed summaries (totals, rankings and trends) and one short sentence per order row.",
          "A keyword classifier routes each question. Analytical questions (\"which region is most profitable?\") go to the summaries, and lookups (\"profit for order CA-2017-115805\") go to the rows.",
          "The retrieved context is passed to Llama 3 running locally in Ollama. No data leaves the machine.",
        ],
      },
      {
        heading: "Why the summaries matter",
        body: [
          "Retrieving individual rows can't answer \"what is total profit by region?\": the model would see a handful of rows and guess a total. Pre-computing aggregates and retrieving those instead is the main design decision here, and it's the part most worth copying.",
        ],
      },
      {
        heading: "Known limitations",
        bullets: [
          "Each question is answered on its own, with no conversation history.",
          "Unusual combinations of dimensions fall back to row-level chunks and can give inaccurate totals.",
          "Slow when the model runs on a CPU.",
        ],
      },
    ],
  },
  {
    id: 17,
    slug: "barmo-bookkeeping",
    title: "Barmo Bookkeeping",
    tagline: "Desktop bookkeeping for Finnish platform workers and their bookkeeper.",
    summary:
      "A Windows desktop app that tracks income, expenses and VAT per client, and produces the figures needed for the Finnish tax portal (OmaVero). It includes a VAT-period breakdown with PDF reports, depreciation for tax returns, a mileage log and a step-by-step filing guide.",
    year: 2026,
    context: "Barmo · side business",
    category: "apps",
    topics: ["apps"],
    status: "Completed",
    tags: ["Next.js", "TypeScript", "Prisma", "SQLite", "Electron", "React PDF", "Jest"],
    links: { github: "https://github.com/girimohan/invoicing" },
    sections: [
      {
        heading: "Details that matter",
        bullets: [
          "Income is assigned to a VAT period by when the work was done, not by invoice date.",
          "Totals are never summed across clients, because each client files separately.",
          "Old invoicing records stay fully reportable after the workflow changed.",
        ],
      },
    ],
  },
  {
    id: 18,
    slug: "merobihey",
    title: "Merobihey",
    tagline: "A marriage-first matchmaking platform for Nepali people.",
    summary:
      "A matchmaking web app for people in Nepal and the diaspora, with profile verification and privacy by default. Server-only keys are kept out of the browser bundle, and the app has unit tests plus Playwright end-to-end tests.",
    year: 2026,
    context: "Personal project",
    category: "apps",
    topics: ["apps"],
    status: "Live",
    tags: ["TanStack Start", "React", "TypeScript", "Supabase", "Tailwind CSS", "Playwright"],
    image: "/images/projects/merobihey.png",
    links: { demo: "https://merobihey.vercel.app" },
    privateCode: true,
  },
  {
    id: 19,
    slug: "barmo-website",
    title: "barmo.fi",
    tagline: "Website for Barmo, my side business: websites, AI automation and bookkeeping for small businesses.",
    summary:
      "The site for Barmo, a small side business I started in 2026. It's an English/Finnish site built with React and prerendered to static HTML: each route gets its own title, canonical URL, hreflang links and sitemap entry. All copy lives in typed content files, so a missing translation fails the type-check.",
    year: 2026,
    context: "Barmo · side business",
    category: "apps",
    topics: ["apps"],
    status: "Live",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "SSG / prerender", "Vercel"],
    image: "/images/projects/barmo-site.png",
    links: { demo: "https://barmo.fi" },
    privateCode: true,
    related: ["barmo-accounts", "public-procurement-intelligence"],
  },
  {
    id: 20,
    slug: "bhasaghar",
    title: "BhasaGhar",
    tagline: "Nepali language classes for diaspora children. Platform in development.",
    summary:
      "A bilingual (English/Nepali) learning platform with courses, student and parent dashboards, an admin area for courses, teachers and students, and Stripe payments. Built on Next.js and Supabase.",
    year: 2026,
    context: "Personal project",
    category: "apps",
    topics: ["apps"],
    status: "In progress",
    tags: ["Next.js 16", "React 19", "Supabase", "Stripe", "next-intl", "Tailwind CSS"],
    links: { github: "https://github.com/girimohan/bhasaghar" },
  },
  {
    id: 21,
    slug: "bill-tracker",
    title: "Bill Tracker",
    tagline: "A local-first desktop app for tracking recurring bills.",
    summary:
      "Electron + React app with a dashboard, a calendar view and recurring bills that roll forward when paid. All data stays in a local SQLite database. The renderer is sandboxed and can reach the database only through a narrow preload bridge.",
    year: 2026,
    context: "Personal project",
    category: "apps",
    topics: ["apps"],
    status: "Completed",
    tags: ["Electron", "React", "TypeScript", "SQLite", "Zustand", "Recharts"],
    links: { github: "https://github.com/girimohan/bill-tracking" },
  },
  {
    id: 22,
    slug: "migraine-risk-api",
    title: "Migraine Risk Prediction",
    tagline: "Junction 2025: explainable migraine-risk estimates from daily habits and wearable data.",
    summary:
      "The prediction service built at Junction 2025 for a migraine challenge. A FastAPI backend combines a rule engine, built from ten research-backed triggers, with a random forest. A hybrid router uses the model only when it is confident and otherwise falls back to the rules. Every prediction comes with the reasons behind it and suggestions. A passive-monitoring mode turns wearable data into risk alerts without manual input.",
    year: 2025,
    context: "Junction 2025 hackathon",
    category: "ml",
    topics: ["ml"],
    status: "Prototype",
    metrics: [
      { value: "10", label: "research-backed triggers in the rule engine" },
      { value: "≥ 80%", label: "model confidence needed before ML overrides the rules" },
    ],
    tags: ["Python", "FastAPI", "scikit-learn", "Pydantic", "Fitbit API", "React", "Gemini API"],
    links: { github: "https://github.com/girimohan/junction2025-aurora-ai-service" },
    sections: [
      {
        heading: "How it works",
        bullets: [
          "Rule engine: weighted scoring of triggers such as stress, sleep, caffeine, skipped meals, weather changes and hormonal phase. It is fully explainable.",
          "Random forest: trained on 18 features. The hybrid router uses it only above 80% confidence.",
          "Passive monitoring: a Fitbit OAuth integration and a wearable simulator map HRV, sleep and activity to features. Hourly background checks raise an alert only when risk is high and rising.",
          "A small React companion app (prototype) for logging days and showing the prediction.",
        ],
      },
      {
        heading: "Honest caveats",
        bullets: [
          "The random forest was trained on 500 synthetic samples. Its 96% test accuracy shows that it learned the data generator, not how it would perform on real patients.",
          "On the same inputs, the rules and the model often disagreed sharply (for example 100% vs 46% risk). This is why the API always reports which source produced the prediction, together with its explanation.",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "entity-extraction-clustering",
    title: "Entity Extraction & Document Clustering",
    tagline: "Upload PDFs, extract named entities and group similar documents.",
    summary:
      "A Streamlit app that extracts text from PDFs, runs spaCy transformer NER, and clusters documents by sentence-transformer embeddings with K-means. The results are shown as an interactive table and a 2D PCA plot, and can be exported to CSV.",
    year: 2025,
    context: "Personal project",
    category: "ml",
    topics: ["ml"],
    status: "Live",
    tags: ["Python", "spaCy", "sentence-transformers", "scikit-learn", "Streamlit", "PyMuPDF"],
    image: "/images/projects/entity_extraction1.png",
    gallery: [
      { src: "/images/projects/extracted_entities2.png", caption: "Extracted entities, with CSV export." },
      { src: "/images/projects/entity_distribution2.png", caption: "Distribution of entity types." },
    ],
    links: {
      demo: "https://huggingface.co/spaces/Mo11an/entity_extraction",
      github: "https://github.com/girimohan/entity_extraction",
    },
  },
  {
    id: 23,
    slug: "pdf-qa-chatbot",
    title: "PDF Q&A Chatbot",
    tagline: "Chat with your documents, with answers that cite their sources.",
    summary:
      "A RAG chatbot built with LangChain and Qdrant. It uses Mistral 7B through Ollama locally and FLAN-T5 when deployed, keeps conversation memory, and cites the source passages behind each answer.",
    year: 2025,
    context: "Personal project",
    category: "ml",
    topics: ["llm"],
    status: "Completed",
    tags: ["Python", "LangChain", "Qdrant", "Ollama", "Streamlit"],
    links: { github: "https://github.com/girimohan/pdf-qa-chatbot-rag" },
    related: ["rag-sales-analysis", "fintax-retrieval-benchmark"],
  },
  {
    id: 2,
    slug: "metal-surface-blister-detection",
    title: "Blister Detection on Coated Metal",
    tagline: "Industrial quality inspection with computer vision (HAMK Smart internship).",
    summary:
      "Detecting and classifying blisters on colour-coated metal plates. During the internship I compared classical machine vision (OpenCV) with deep-learning detection, and built a Django web app for comparing samples with standard reference images. A follow-up YOLOv8 study combined synthetic and real training data.",
    year: 2024,
    context: "Internship · HAMK Smart",
    category: "ml",
    topics: ["ml"],
    status: "Completed",
    metrics: [
      { value: "97.5%", label: "precision (YOLOv8s, synthetic-data training)" },
      { value: "90.5%", label: "mAP@50" },
    ],
    tags: ["Python", "PyTorch", "YOLO", "OpenCV", "Django", "Gradio"],
    image: "/images/projects/metal_plate.JPG",
    links: { github: "https://github.com/girimohan/blister_detection_yolov8" },
    sections: [
      {
        heading: "Notes",
        bullets: [
          "The reported metrics are from the model trained on synthetic data. A separate model was fine-tuned for real-world images.",
          "Recall (85.3%) is lower than precision, so the model misses some small blisters.",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "tree-species-identification",
    title: "Tree Species Identification",
    tagline: "Recognising five Nordic tree species from photos.",
    summary:
      "A YOLOv5 model trained on a self-collected and annotated dataset of birch, maple, pine, rowan and spruce, with a Gradio interface for trying it on new photos.",
    context: "Computer vision project",
    category: "ml",
    topics: ["ml"],
    status: "Completed",
    metrics: [{ value: "96.9%", label: "precision across 5 species" }],
    tags: ["Python", "PyTorch", "YOLOv5", "Gradio"],
    image: "/images/projects/birch-image.jpg",
    links: {},
  },
  {
    id: 5,
    slug: "speech-sentiment-analysis",
    title: "Speech Sentiment Analysis",
    tagline: "Record speech and get a transcript, its sentiment and audio features.",
    summary:
      "Wav2Vec2 transcribes the audio, a RoBERTa or DistilBERT classifier labels the sentiment, and librosa extracts pitch, tempo and spectral features. Everything runs in a Gradio app that records audio straight from the browser.",
    year: 2024,
    context: "Personal project",
    category: "ml",
    topics: ["ml"],
    status: "Completed",
    tags: ["Python", "PyTorch", "Transformers", "Wav2Vec2", "librosa", "Gradio"],
    image: "/images/projects/speech-sentiment-image.png",
    links: { github: "https://github.com/girimohan/audio_sentiment_analysis" },
  },
  {
    id: 9,
    slug: "spiceroute-restaurant-platform",
    title: "SpiceRoute",
    tagline: "Online ordering and admin platform for a restaurant.",
    summary:
      "Customers browse the menu, order and pay with Stripe. Staff manage the menu, orders and content from an admin dashboard with real-time order updates. Built on React and Supabase, with row-level security and Edge Functions for payments.",
    context: "Full-stack project",
    category: "apps",
    topics: ["apps"],
    status: "Completed",
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "Stripe", "Tailwind CSS"],
    image: "/images/projects/main-menu.png",
    gallery: [
      { src: "/images/projects/main-menu.png", caption: "Menu with dietary tags." },
      { src: "/images/projects/shopping-cart.png", caption: "Cart." },
      { src: "/images/projects/checkout.png", caption: "Checkout with Stripe." },
      { src: "/images/projects/admin-dashboard-spiceRoute.png", caption: "Admin dashboard." },
      { src: "/images/projects/menu-management.png", caption: "Menu management." },
      { src: "/images/projects/order-management.png", caption: "Real-time order management." },
    ],
    links: {},
    privateCode: true,
  },
  {
    id: 8,
    slug: "sambit-business-website",
    title: "SamBit",
    tagline: "Business website for a small web-development service.",
    summary:
      "A single-page site with services, portfolio, pricing and a validated contact form. Built with React, TypeScript, Vite and Tailwind, and deployed on Vercel.",
    year: 2025,
    context: "Website",
    category: "apps",
    topics: ["apps"],
    status: "Live",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel"],
    image: "/images/projects/sambit-ss.png",
    links: { demo: "https://sambit-rho.vercel.app/" },
    privateCode: true,
  },
  {
    id: 7,
    slug: "e-commerce-test-automation",
    title: "E-commerce Test Automation",
    tagline: "Automated UI tests for a Finnish online store.",
    summary:
      "Robot Framework and Selenium tests for the main user journeys on Verkkokauppa.com: product search, adding to the cart and the steps up to checkout.",
    context: "Quality assurance project",
    category: "apps",
    topics: ["apps"],
    status: "Completed",
    tags: ["Robot Framework", "Selenium", "Python", "QA"],
    image: "/images/projects/Selenium-automation-testing1.png",
    links: {},
  },
]

// Smaller projects, coursework and quick prototypes: listed but not given a page.
export const smallerProjects: { title: string; description: string; year: number; tags: string[]; href?: string }[] = [
  { title: "PromptArchitect", description: "Turns a goal into a structured system prompt for an agent, using Gemini behind a serverless function.", year: 2026, tags: ["React", "Gemini API"], href: "https://prompt-architect-lime.vercel.app" },
  { title: "Multi-agent loop experiments", description: "A LangGraph orchestrator–researcher–synthesis system with injected disagreements. A precursor to the MAST study.", year: 2026, tags: ["LangGraph", "Ollama"] },
  { title: "Course Subscription App", description: "Course listing and subscription flow on ServiceNow UI Builder, built as a technical assignment.", year: 2025, tags: ["ServiceNow"], href: "https://github.com/girimohan/course-subscription-app" },
  { title: "Election Machine", description: "Team project: candidate matching with admin, candidate and voter roles. RESTful Java servlets, JSP and JPA.", year: 2024, tags: ["Java", "JPA", "REST"], href: "https://github.com/girimohan/emc-rest" },
  { title: "S3 Image Processing Lambda", description: "Runs when an image is uploaded to S3 and logs its metadata to CloudWatch.", year: 2023, tags: ["AWS Lambda", "S3"], href: "https://github.com/girimohan/aws-lambda" },
  { title: "CNN Image Classification", description: "Comparison of VGG, ResNet, Inception and Xception on an image classification task.", year: 2023, tags: ["Keras", "CNNs"], href: "https://github.com/girimohan/ImageRecognition" },
  { title: "Gym website", description: "Multi-page responsive site from a web development course.", year: 2022, tags: ["HTML", "CSS"], href: "https://github.com/girimohan/project-gym" },
]

export function getProjects(): Project[] {
  return projects
}

/** Accepts a slug, or a legacy numeric id from older links. */
export function getProject(idOrSlug: string): Project | undefined {
  return projects.find((p) => p.slug === idOrSlug || String(p.id) === idOrSlug)
}
