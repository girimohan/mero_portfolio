export interface Project {
  id: number | string
  slug: string
  title: string
  description: string
  tags: string[]
  image?: string
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
    image: "/images/ui/placeholder.svg?height=400&width=600",
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
    image: "/images/ui/placeholder.svg?height=400&width=600",
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
    id: 3,
    slug: "academic-thesis-extraction-summarization",
    title: "Academic Thesis Extraction & Summarization",
    subtitle: "NLP Research Project",
    description:
      "Developed an automated system to extract thesis information from theseus.fi and summarize academic concepts. Utilized Hugging Face transformers, T5 model for summarization, and BERT for text classification. Built React Native mobile app with Flask API backend. Processed 10,000+ thesis abstracts with high-quality automated summaries.",
    image: "/images/ui/placeholder.svg?height=400&width=600",
    tags: ["Hugging Face", "T5", "BERT", "React Native", "Flask", "NLP", "Transformers"],
    category: "ml",
    demoUrl: "#",
    content: `
      <p>This project focused on automating the extraction and summarization of academic content using advanced NLP techniques.</p>
      
      <h3>NLP Pipeline</h3>
      <p>The system implements:</p>
      <ul>
        <li>Web scraping for data collection from theseus.fi</li>
        <li>T5 transformer model for text summarization</li>
        <li>BERT for classification and entity recognition</li>
        <li>Custom preprocessing and postprocessing pipelines</li>
      </ul>
      
      <h3>Mobile Application</h3>
      <p>Built a React Native app providing intuitive access to processed academic content with Flask API backend.</p>
    `,
  },
  {
    id: 4,
    slug: "tree-species-identification-system",
    title: "Tree Species Identification System",
    subtitle: "Computer Vision Project",
    description:
      "Developed and implemented a computer vision system for automated tree species identification using YOLOv5 deep learning model. Achieved 96.9% precision in identifying five Nordic tree species (Birch, Maple, Pine, Rowan, Spruce). Created an interactive web interface for real-time tree detection and classification.",
    image: "/images/ui/placeholder.svg?height=400&width=600",
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
    image: "/images/ui/placeholder.svg?height=400&width=600",
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
    image: "/images/ui/placeholder.svg?height=400&width=600",
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
    image: "/images/ui/placeholder.svg?height=400&width=600",
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