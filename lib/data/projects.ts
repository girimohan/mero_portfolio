export interface Project {
  id: number | string
  slug: string
  title: string
  description: string
  tags: string[]
  image?: string
  images?: string[] // Optional array for multiple images
  subtitle?: string
  category?: string
  demoUrl?: string
  githubUrl?: string
  content?: string
}

export const projects: Project[] = [
  {    id: 1,
    slug: "smart-parking-assistant",
    title: "Smart Parking Assistant",
    subtitle: "Bachelor's Thesis Project",
    description:
      "Developed an intelligent parking management system combining YOLOv5l-based computer vision (97.9% detection precision) with Rasa chatbot interface (92% intent recognition). Implemented transfer learning with synthetic data augmentation on PKLot dataset, integrated Flask REST API for video processing, and created Streamlit web interface for real-time monitoring.",
    image: "/images/projects/yolo_parking.jpg",
    tags: ["Python", "PyTorch", "Rasa", "Flask", "Streamlit", "OpenCV", "YOLO"],
    category: "ml",
    demoUrl: "#",    content: `
      <p>This project represents my Bachelor's thesis work in developing an intelligent parking management system that combines computer vision with conversational AI.</p>
      <h3>Technical Architecture</h3>
      <p>The system integrates multiple technologies:</p>
      <ul>
        <li>YOLOv5l for real-time vehicle detection with 97.9% precision</li>
        <li>Rasa framework for natural language understanding (92% intent recognition)</li>
        <li>Flask REST API for seamless integration</li>
        <li>Streamlit web interface for monitoring</li>
      </ul>
      
      <h3>Key Achievements</h3>
      <p>The project demonstrated significant improvements in parking management efficiency and user experience through AI-driven automation.</p>
    `,
  },
  {
    id: 2,
    slug: "real-time-object-detection-system",
    title: "Real-time Object Detection System",
    subtitle: "HAMK Internship Project",
    description:
      "Implemented YOLO (You Only Look Once) for real-time object detection during internship at HAMK University. Built using YOLOv5, OpenCV for video processing, and Django for web interface. Achieved 95% accuracy with 30+ FPS processing speed. Integrated custom dataset training and model optimization for production deployment.",
    image: "/images/projects/metal_plate.JPG",
    tags: ["YOLOv5", "OpenCV", "Django", "Python", "Computer Vision", "Real-time Processing"],
    category: "ml",
    demoUrl: "#",
    content: `
      <p>During my internship at HAMK University, I developed a comprehensive real-time object detection system using state-of-the-art computer vision techniques.</p>
      
      <h3>Implementation Details</h3>
      <p>The system features:</p>
      <ul>
        <li>YOLOv5 model optimized for real-time performance</li>
        <li>Custom dataset training and validation</li>
        <li>Django web framework for user interface</li>
        <li>OpenCV for video stream processing</li>
      </ul>
      
      <h3>Performance Metrics</h3>
      <p>Achieved exceptional performance with 95% accuracy and 30+ FPS processing speed, making it suitable for production environments.</p>
    `,
  },
  {
    id: 4,
    slug: "tree-species-identification-system",
    title: "Tree Species Identification System",
    subtitle: "Computer Vision Project",
    description:
      "Developed and implemented a computer vision system for automated tree species identification using YOLOv5 deep learning model. Achieved 96.9% precision in identifying five Nordic tree species (Birch, Maple, Pine, Rowan, Spruce). Created an interactive web interface for real-time tree detection and classification.",
    image: "/images/projects/birch-image.jpg",
    tags: ["PyTorch", "YOLOv5", "Python", "Gradio", "Computer Vision"],
    category: "ml",
    demoUrl: "#",
    content: `
      <p>This computer vision project tackles the challenge of automated tree species identification using deep learning techniques.</p>
      
      <h3>Model Development</h3>
      <p>Key technical aspects include:</p>
      <ul>
        <li>YOLOv5 architecture customized for tree detection</li>
        <li>Dataset creation and annotation for Nordic species</li>
        <li>Transfer learning and fine-tuning strategies</li>
        <li>Gradio interface for easy interaction</li>
      </ul>
      
      <h3>Results</h3>
      <p>Achieved 96.9% precision across five tree species, demonstrating the effectiveness of deep learning in environmental applications.</p>
    `,
  },
  {
    id: 5,
    slug: "real-time-speech-sentiment-analysis",
    title: "Real-Time Speech Sentiment Analysis",
    subtitle: "NLP System",
    description:
      "Developed a real-time speech sentiment analysis system integrating Wav2Vec2 and RoBERTa deep learning models. Implemented audio processing, speech-to-text conversion, and sentiment classification pipeline with visualization capabilities using PyTorch, Transformers, and librosa.",
    image: "/images/projects/speech-sentiment-image.png",
    tags: ["Deep Learning", "NLP", "Speech Recognition", "PyTorch", "Sentiment Analysis"],
    category: "ml",
    demoUrl: "#",
    content: `
      <p>This project combines speech recognition with sentiment analysis to create a real-time emotional intelligence system.</p>
      
      <h3>Technical Stack</h3>
      <p>The system integrates:</p>
      <ul>
        <li>Wav2Vec2 for speech-to-text conversion</li>
        <li>RoBERTa for sentiment classification</li>
        <li>PyTorch for model integration</li>
        <li>Real-time audio processing with librosa</li>
      </ul>
      
      <h3>Applications</h3>
      <p>Suitable for customer service analysis, mental health monitoring, and interactive voice response systems.</p>
    `,
  },
  {
    id: 6,
    slug: "gym-management-system",
    title: "Gym Management System",
    subtitle: "Full-Stack Web Application",
    description:
      "Designed and developed comprehensive gym management system with membership management, class scheduling, and payment processing. Built with modern web technologies including responsive design and real-time updates.",
  image: "/images/projects/gym-image.jpg",
    tags: ["Bootstrap", "JavaScript", "HTML", "PHP", "CSS", "MySQL"],
    category: "web",
    demoUrl: "#",
    content: `
      <p>A comprehensive web application designed to streamline gym operations and enhance member experience.</p>
      
      <h3>Core Features</h3>
      <p>The system includes:</p>
      <ul>
        <li>Member registration and profile management</li>
        <li>Class scheduling and booking system</li>
        <li>Payment processing and billing</li>
        <li>Staff management and reporting</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      <p>Built using PHP and MySQL backend with responsive Bootstrap frontend, ensuring cross-platform compatibility.</p>
    `,
  },
  {
    id: 7,
    slug: "e-commerce-testing-framework",
    title: "E-commerce Testing Framework",
    subtitle: "Quality Assurance Project",
    description:
      "Implemented comprehensive automated testing framework for Verkkokauppa.com e-commerce platform using Robot Framework and Selenium. Developed test cases for critical user flows including product search, cart functionality, and checkout process with 95% test coverage.",
    image: "/images/projects/Selenium-automation-testing1.png",
    tags: ["Robot Framework", "Selenium", "Python", "Testing", "QA", "Automation"],
    category: "testing",
    demoUrl: "#",
    content: `
      <p>This project focused on ensuring quality and reliability of e-commerce platforms through comprehensive automated testing.</p>
      
      <h3>Testing Strategy</h3>
      <p>Implemented comprehensive testing covering:</p>
      <ul>
        <li>End-to-end user journey testing</li>
        <li>Cross-browser compatibility testing</li>
        <li>Performance and load testing</li>
        <li>API testing and validation</li>
      </ul>
      
      <h3>Framework Benefits</h3>
      <p>Achieved 95% test coverage with automated regression testing, significantly reducing manual testing effort.</p>
    `,
  },
  {
    id: 3,
    slug: "entity-extraction-clustering-advanced",
    title: "Smart Entity Extraction & Document Clustering",
    subtitle: "Professional No-Code NLP App",
    description:
      "A professional, no-code web app for extracting structured information from unstructured documents (PDFs), generating semantic embeddings, and clustering similar documents. Built with state-of-the-art NLP (spaCy transformer, Hugging Face, sentence-transformers) and a modern Streamlit UI, this app makes advanced document analytics accessible to everyone. Try the live demo on Hugging Face Spaces or explore the code on GitHub.",
    image: "/images/projects/entity_extraction1.png",
    images: [
      "/images/projects/extracted_entities2.png",
      "/images/projects/entity_distribution2.png"
    ],
    tags: [
      "Python", "NLP", "spaCy", "HuggingFace", "sentence-transformers", "Streamlit", "PyMuPDF", "KMeans", "PCA", "Clustering", "Data Science"
    ],
    category: "ml",
    demoUrl: "https://huggingface.co/spaces/Mo11an/entity_extraction",
    githubUrl: "https://github.com/girimohan/entity_extraction",
    content: `
      <h3>Key Features</h3>
      <ul>
        <li>Robust PDF text extraction (PyMuPDF)</li>
        <li>Advanced Named Entity Recognition (spaCy transformer model)</li>
        <li>Interactive entity table and CSV export</li>
        <li>Document embedding and clustering (sentence-transformers, KMeans, PCA)</li>
        <li>Cluster visualization (2D scatter plot)</li>
        <li>Clean, professional UI ready for portfolio and GitHub</li>
        <li>Deployed for live demo and open-source use</li>
      </ul>
      <div class="project-images-grid">
        <figure>
          <img src="/images/projects/extracted_entities2.png" alt="Extracted Entities Table" style="max-width:100%;border-radius:12px;box-shadow:0 2px 8px #0002;" />
          <figcaption>Extracted Entities Table: Interactive table with CSV export option.</figcaption>
        </figure>
        <figure>
          <img src="/images/projects/entity_distribution2.png" alt="Entity Distribution Visualization" style="max-width:100%;border-radius:12px;box-shadow:0 2px 8px #0002;" />
          <figcaption>Entity Distribution: Visualize frequency and types of extracted entities.</figcaption>
        </figure>
      </div>
      <h3>Use Cases</h3>
      <ul>
        <li>Business & M&A due diligence</li>
        <li>Academic research clustering</li>
        <li>Legal document organization</li>
        <li>Competitive intelligence</li>
        <li>HR resume analysis</li>
        <li>Government/policy analytics</li>
        <li>Media & journalism research</li>
      </ul>
      <h3>Future Directions</h3>
      <ul>
        <li>HTML/URL extraction (BeautifulSoup)</li>
        <li>Advanced clustering (HDBSCAN)</li>
        <li>Cosine similarity heatmap</li>
        <li>Entity wordclouds</li>
        <li>Cluster summaries</li>
        <li>Vector search (FAISS/ChromaDB)</li>
        <li>LangChain integration for LLM Q&A</li>
        <li>User authentication</li>
        <li>API endpoints</li>
        <li>UI polish and extensive testing</li>
      </ul>
    `,
  },
  {
    id: 8,
    slug: "sambit-business-portfolio",
    title: "SamBit - Business Portfolio Website",
    subtitle: "Professional Business Website",
    description:
      "A sophisticated business portfolio website for SamBit, a digital solutions company targeting Finnish SMEs. Built with modern React architecture and deployed on Vercel, featuring responsive design, professional UI/UX, and optimized performance for business credibility and lead generation.",
    image: "/images/projects/sambit-ss.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel"],
    category: "web",
    demoUrl: "https://sambit-rho.vercel.app/",
    content: `
      <p>A professional business portfolio website designed for SamBit, showcasing digital solutions for Finnish small and medium enterprises.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Responsive mobile-first design optimized for all devices</li>
        <li>Professional business sections: Services, Portfolio, About, Contact</li>
        <li>Functional contact form with validation</li>
        <li>SEO-optimized with proper meta tags and semantic HTML</li>
        <li>High-performance build with optimized loading times</li>
        <li>Professional color scheme and typography</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      <p>Built with modern web technologies:</p>
      <ul>
        <li>React 18 with TypeScript for type safety</li>
        <li>Vite for fast development and optimized builds</li>
        <li>Tailwind CSS for responsive styling</li>
        <li>Component-based architecture</li>
        <li>Deployed on Vercel with automatic CI/CD</li>
      </ul>
      
      <h3>Business Impact</h3>
      <p>The website effectively communicates SamBit's value proposition to Finnish SMEs, featuring clear pricing (€199 for static websites), quick delivery promises (5-7 days), and professional credibility showcase.</p>
    `,
  },
  {
    id: 9,
    slug: "spiceroute-restaurant-platform",
    title: "SpiceRoute - Online Indian Restaurant Platform",
    subtitle: "Full-Stack E-commerce & Admin Platform",
    description:
      "A comprehensive full-stack online restaurant platform for authentic Indian cuisine, featuring customer ordering, real-time order management, secure payments via Stripe, and complete admin dashboard. Built with React, TypeScript, Supabase, and modern UI components for optimal user experience.",
    image: "/images/projects/main-menu.png",
    images: [
      "/images/projects/main-menu.png",
      "/images/projects/shopping-cart.png",
      "/images/projects/checkout.png",
      "/images/projects/admin-dashboard-spiceRoute.png",
      "/images/projects/menu-management.png",
      "/images/projects/order-management.png"
    ],
    tags: ["React", "TypeScript", "Supabase", "Stripe", "Tailwind CSS", "PostgreSQL", "Real-time", "E-commerce"],
    category: "web",
    demoUrl: "#",
    content: `
      <p>SpiceRoute is a modern, full-stack online restaurant platform designed to provide a seamless experience for both customers ordering authentic Indian cuisine and administrators managing restaurant operations.</p>
      
      <div class="project-images-grid">
        <figure>
          <img src="/images/projects/main-menu.png" alt="SpiceRoute Main Menu Interface" style="max-width:100%;border-radius:12px;box-shadow:0 2px 8px #0002;" />
          <figcaption>Interactive Menu: Browse diverse Indian dishes with descriptions, prices, and dietary tags.</figcaption>
        </figure>
        <figure>
          <img src="/images/projects/shopping-cart.png" alt="Dynamic Shopping Cart" style="max-width:100%;border-radius:12px;box-shadow:0 2px 8px #0002;" />
          <figcaption>Dynamic Cart: Real-time cart management with persistent item tracking.</figcaption>
        </figure>
      </div>
      
      <h3>Customer-Facing Features</h3>
      <ul>
        <li>Interactive menu with detailed dish descriptions, prices, and dietary information</li>
        <li>Dynamic shopping cart with real-time item count and persistent storage</li>
        <li>Secure multi-step checkout process with Stripe payment integration</li>
        <li>Order history and real-time order status tracking</li>
        <li>User profile management with customizable avatars</li>
        <li>Responsive design optimized for all devices</li>
        <li>Special offers and promotions section</li>
      </ul>
      
      <div class="project-images-grid">
        <figure>
          <img src="/images/projects/checkout.png" alt="Secure Checkout Process" style="max-width:100%;border-radius:12px;box-shadow:0 2px 8px #0002;" />
          <figcaption>Secure Checkout: Multi-step process with Stripe payment integration.</figcaption>
        </figure>
        <figure>
          <img src="/images/projects/admin-dashboard-spiceRoute.png" alt="Admin Dashboard" style="max-width:100%;border-radius:12px;box-shadow:0 2px 8px #0002;" />
          <figcaption>Admin Dashboard: Central hub for restaurant management operations.</figcaption>
        </figure>
      </div>
      
      <h3>Admin Management System</h3>
      <ul>
        <li>Comprehensive admin dashboard with role-based access control</li>
        <li>Complete menu and category management with image uploads</li>
        <li>Real-time order management with status updates</li>
        <li>Restaurant information and contact details management</li>
        <li>Special offers and promotions management</li>
        <li>Homepage assets management via Supabase Storage</li>
      </ul>
      
      <div class="project-images-grid">
        <figure>
          <img src="/images/projects/menu-management.png" alt="Menu Management System" style="max-width:100%;border-radius:12px;box-shadow:0 2px 8px #0002;" />
          <figcaption>Menu Management: Add, edit, and manage menu items with categories and images.</figcaption>
        </figure>
        <figure>
          <img src="/images/projects/order-management.png" alt="Order Management Dashboard" style="max-width:100%;border-radius:12px;box-shadow:0 2px 8px #0002;" />
          <figcaption>Order Management: Real-time order tracking and status management.</figcaption>
        </figure>
      </div>
      
      <h3>Technical Architecture</h3>
      <p><strong>Frontend:</strong></p>
      <ul>
        <li>React 18 with TypeScript for type-safe development</li>
        <li>Shadcn/ui and Tailwind CSS for modern, responsive design</li>
        <li>React Router for seamless navigation</li>
        <li>React Hook Form with Zod validation</li>
        <li>Context API for global state management</li>
      </ul>
      
      <p><strong>Backend & Database:</strong></p>
      <ul>
        <li>Supabase with PostgreSQL for robust data management</li>
        <li>Row Level Security (RLS) for data protection</li>
        <li>Supabase Auth for user authentication and sessions</li>
        <li>Real-time subscriptions for instant order updates</li>
        <li>Supabase Storage for secure media asset management</li>
        <li>Edge Functions (Deno) for secure Stripe integration</li>
      </ul>
      
      <h3>Key Development Highlights</h3>
      <ul>
        <li>Implemented secure payment processing with Stripe API</li>
        <li>Built comprehensive authentication and authorization system</li>
        <li>Developed real-time data synchronization for order management</li>
        <li>Created scalable admin panel with dynamic content management</li>
        <li>Optimized for performance and mobile responsiveness</li>
        <li>Implemented robust security measures with RLS policies</li>
      </ul>
    `,
  },
  {
    id: 10,
    slug: "npf-classification",
    title: "NPF Classification",
    subtitle: "ML Competition Project - University of Helsinki",
    description:
      "Developed machine learning models to classify New Particle Formation events from atmospheric data in a Kaggle competition. Achieved 5th place among 149 teams with 93.1% accuracy through advanced feature engineering and ensemble methods, reducing 102 features to 12 most significant predictors.",
    image: "/images/projects/npf-classification.png",
    tags: ["Python", "scikit-learn", "Feature Engineering", "Random Forest", "Bayesian Inference"],
    category: "ml",
    githubUrl: "https://github.com/girimohan/npf_classification",
    content: `
      <p>This atmospheric science project applies machine learning to predict New Particle Formation (NPF) events from complex atmospheric measurements. Developed for the University of Helsinki's machine learning course Kaggle competition, the solution demonstrates expertise in feature engineering and handling high-dimensional scientific data.</p>
      
      <h3>Problem & Approach</h3>
      <p>The challenge involved classifying NPF events from 102 atmospheric features with severe class imbalance. I implemented a multi-stage pipeline combining statistical feature selection, tree-based methods, and L1 regularization to identify the 12 most predictive features—reducing dimensionality by 88% while maintaining accuracy.</p>
      
      <h3>Technical Implementation</h3>
      <p>Built ensemble models using Logistic Regression and Random Forest classifiers with optimized hyperparameters. Applied cross-validation and PCA for robust evaluation. Implemented Bayesian inference to quantify prediction uncertainty and custom class weighting to handle data imbalance effectively.</p>
      
      <h3>Results & Impact</h3>
      <ul>
        <li>Ranked 5th out of 149 competing teams</li>
        <li>93.1% accuracy on binary classification task</li>
        <li>70.2% accuracy on multi-class classification</li>
        <li>88% feature reduction (102 → 12 features) without accuracy loss</li>
        <li>Demonstrated effective handling of imbalanced scientific datasets</li>
      </ul>
    `,
  },
]

export function getProjects(): Project[] {
  return projects
}

export function getProject(id: string): Project | undefined {
  return projects.find(project => project.id.toString() === id)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return projects
  return projects.filter(project => project.category === category)
}