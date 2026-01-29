export interface BlogPost {
  id: number | string
  slug: string
  title: string
  summary: string
  content: string
  category: string
  date: string
  image?: string
  readTime?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "implementing-yolo-hamk",
    title: "Implementing YOLO for Real-time Object Detection at HAMK",
    summary:
      "A deep dive into how I implemented YOLO (You Only Look Once) for real-time object detection during my HAMK internship. Learn about the challenges and solutions in computer vision projects.",
    image: "/images/ui/placeholder.svg?height=400&width=600",
    date: "May 15, 2024",
    readTime: "8 min read",
    category: "Computer Vision",
    content: `
    <p>During my internship at HAMK University of Applied Sciences, I had the opportunity to work on an exciting computer vision project implementing YOLO (You Only Look Once) for real-time object detection.</p>
    
    <h3>Project Overview</h3>
    <p>The project involved developing a real-time object detection system using YOLOv5 and OpenCV. The goal was to create an efficient system that could detect and classify multiple objects in video streams with high accuracy and minimal latency.</p>
    
    <h3>Technical Implementation</h3>
    <p>I used the following technologies and approaches:</p>
    <ul>
      <li>YOLOv5 for object detection with custom dataset training</li>
      <li>OpenCV for video processing and frame manipulation</li>
      <li>Django for creating a web interface to display results</li>
      <li>Python for backend processing and model integration</li>
    </ul>
    
    <h3>Results</h3>
    <p>The final system achieved 95% accuracy with processing speeds of 30+ FPS, making it suitable for real-time applications.</p>
    `,
  },
  {
    id: 2,
    slug: "nlp-thesis-extraction-summarization",
    title: "Extracting and Summarizing Academic Theses with NLP",
    summary:
      "How I built a system to extract thesis information from theseus.fi and summarize concepts using Hugging Face transformers, T5 models, and BERT.",
    image: "/images/ui/placeholder.svg?height=400&width=600",
    date: "June 22, 2024",
    readTime: "10 min read",
    category: "NLP",
    content: `
    <p>In this project, I developed an automated system to extract and summarize academic thesis information from theseus.fi, Finland's national repository for theses and publications.</p>
    
    <h3>Project Architecture</h3>
    <p>The system consisted of several components:</p>
    <ul>
      <li>Web scraping module for data extraction from theseus.fi</li>
      <li>NLP pipeline using Hugging Face transformers</li>
      <li>React Native mobile app for user interface</li>
      <li>Flask API for backend processing</li>
    </ul>
    
    <h3>NLP Implementation</h3>
    <p>I utilized several state-of-the-art models:</p>
    <ul>
      <li>T5 model for text summarization</li>
      <li>BERT for text classification and entity recognition</li>
      <li>Custom fine-tuned models for academic text processing</li>
    </ul>
    
    <h3>Impact</h3>
    <p>The system successfully processed over 10,000 thesis abstracts with high-quality summaries.</p>
    `,
  },
  {
    id: 3,
    slug: "react-native-cross-platform-development",
    title: "Building Cross-platform Apps with React Native",
    summary:
      "My experience building cross-platform mobile applications with React Native, including tips for integrating with Flask APIs and handling state management.",
    image: "/images/ui/placeholder.svg?height=400&width=600",
    date: "July 10, 2024",
    readTime: "6 min read",
    category: "Mobile Development",
    content: `
      <p>React Native has become my go-to framework for cross-platform mobile development. In this post, I'll share insights from building several mobile applications.</p>
      
      <h3>Why React Native?</h3>
      <p>React Native offers several advantages:</p>
      <ul>
        <li>Code reusability across iOS and Android</li>
        <li>Familiar React development patterns</li>
        <li>Strong community and ecosystem</li>
        <li>Near-native performance</li>
      </ul>
      
      <h3>Integration with Flask APIs</h3>
      <p>I've successfully integrated React Native apps with Flask backends.</p>
      
      <h3>Conclusion</h3>
      <p>React Native continues to evolve and remains an excellent choice for cross-platform development.</p>
    `,
  },
  {
    id: 4,
    slug: "nextjs-modern-web-development",
    title: "The Power of Next.js for Modern Web Development",
    summary:
      "Why I chose Next.js for my portfolio website and how it enables better performance, SEO, and developer experience compared to traditional React applications.",
    image: "/images/ui/placeholder.svg?height=400&width=600",
    date: "August 5, 2024",
    readTime: "7 min read",
    category: "Web Development",
    content: `
      <p>Next.js has revolutionized how I approach React development. Here's why I chose it for my portfolio and other projects.</p>
      
      <h3>Key Benefits</h3>
      <p>Next.js provides several advantages over traditional React:</p>
      <ul>
        <li>Server-side rendering for better SEO</li>
        <li>Automatic code splitting</li>
        <li>Built-in performance optimizations</li>
        <li>API routes for full-stack development</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Next.js has become the standard for React applications, providing the perfect balance of performance and developer experience.</p>
    `,
  },
  {
    id: 5,
    slug: "change-in-coding-modern-days",
    title: "Change in Coding in Modern Days: How Coders Survive",
    summary: "A reflection on the rapid evolution of coding practices, tools, and the mindset required for developers to thrive in today's tech landscape.",
  image: "/images/blog/modern-coding-image.jpg",
    date: "June 13, 2025",
    readTime: "7 min read",
    category: "Tech Reflections",
    content: `
      <p>The world of coding has changed dramatically in recent years. With the rise of AI, cloud computing, and ever-evolving frameworks, the life of a coder is more dynamic—and challenging—than ever before.</p>
      <h3>Adapting to Rapid Change</h3>
      <p>Gone are the days when learning one language or framework was enough for a decade. Today, developers must constantly update their skills, adapt to new paradigms, and embrace lifelong learning. The pace of change is relentless, and those who thrive are the ones who stay curious and flexible.</p>
      <h3>The AI Revolution</h3>
      <p>AI tools like Copilot and ChatGPT are transforming how we write code. While some fear automation, savvy coders use these tools to boost productivity, automate repetitive tasks, and focus on creative problem-solving. The key is to see AI as a partner, not a threat.</p>
      <h3>Remote Work and Global Teams</h3>
      <p>The pandemic accelerated remote work, making collaboration skills and asynchronous communication more important than ever. Coders now work with teams across the globe, requiring adaptability, empathy, and strong written communication.</p>
      <h3>Survival Strategies</h3>
      <ul>
        <li><strong>Continuous Learning:</strong> Invest in yourself—take courses, read docs, and experiment with new tech.</li>
        <li><strong>Community:</strong> Engage with developer communities for support, networking, and knowledge sharing.</li>
        <li><strong>Well-being:</strong> Balance is crucial. Avoid burnout by setting boundaries and taking care of your mental health.</li>
        <li><strong>Soft Skills:</strong> Communication, teamwork, and adaptability are as important as technical chops.</li>
      </ul>
      <h3>Conclusion</h3>
      <p>Modern coding is about more than just code—it's about learning, adapting, and thriving in a fast-paced world. The best coders are resilient, resourceful, and always ready for what's next.</p>
    `,
  },
  {
    id: 6,
    slug: "multiagent-llms-2026",
    title: "The Shift from Single to Multi-Agent LLMs: A Student's Perspective",
    summary: "Exploring how large language models are evolving from isolated systems to collaborative multi-agent frameworks, and what this means for the future of AI applications.",
    image: "/images/blog/Multi-Agent-System.jpg",
    date: "January 29, 2026",
    readTime: "6 min read",
    category: "AI & Machine Learning",
    content: `
      <p>In 2026, we are witnessing a significant transformation in how large language models are deployed and utilized. The field is shifting from single-agent systems to collaborative multi-agent frameworks. As a master's student in Computer Science at the University of Helsinki, I have observed this evolution firsthand through both coursework and research projects.</p>
      
      <h3>Understanding the Transition</h3>
      <p>The traditional approach of using a single large language model to handle all aspects of a task is evolving. Modern systems now employ multiple specialized AI agents working in coordination, each contributing their specific expertise to solve complex problems. This architectural shift represents a fundamental change in how we approach AI system design.</p>
      
      <p>During our machine learning course, we implemented a multi-agent system for a research project. The workflow was divided among specialized agents: one focused on literature review, another on data analysis, and a third on structuring written outputs. The results demonstrated clear advantages over single-agent approaches.</p>
      
      <h3>Limitations of Single-Agent Systems</h3>
      <p>Single-agent systems face several inherent challenges:</p>
      <ul>
        <li><strong>Context management:</strong> Large context windows can lead to information loss and reduced accuracy as conversation length increases.</li>
        <li><strong>Lack of specialization:</strong> A generalist model may not achieve optimal performance across diverse tasks requiring domain-specific expertise.</li>
        <li><strong>Limited verification:</strong> Single-agent systems lack internal mechanisms for self-verification and error detection.</li>
      </ul>
      
      <p>Multi-agent architectures address these limitations through task decomposition and specialization. Individual agents can focus on specific domains while maintaining communication protocols to ensure coherent system-wide outputs.</p>
      
      <h3>Practical Applications</h3>
      <p>The most notable implementations of multi-agent systems can be observed in software development tools. Modern AI coding assistants are evolving beyond simple code completion to incorporate multiple specialized agents. These systems typically include agents for code generation, code review, testing, and optimization—each operating within its domain of expertise.</p>
      
      <p>In my thesis research on atmospheric data analysis, I have implemented a multi-agent pipeline where specialized agents handle data preprocessing, feature engineering, and model selection respectively. This modular approach allows each component to operate at peak efficiency while maintaining clear interfaces for inter-agent communication.</p>
      
      <h3>Current Challenges</h3>
      <p>Despite their advantages, multi-agent systems present several technical challenges:</p>
      <ul>
        <li><strong>Coordination complexity:</strong> Orchestrating multiple agents requires sophisticated scheduling and communication protocols to prevent conflicts and ensure efficient collaboration.</li>
        <li><strong>Computational cost:</strong> Running multiple agents increases API calls and computational overhead, which can impact project budgets significantly.</li>
        <li><strong>Debugging difficulty:</strong> Identifying failure points in distributed agent systems requires more sophisticated monitoring and logging infrastructure.</li>
        <li><strong>Design decisions:</strong> Determining when multi-agent architecture provides sufficient benefits over single-agent solutions remains context-dependent and requires careful evaluation.</li>
      </ul>
      
      <h3>Future Directions</h3>
      <p>Current research at the University of Helsinki and elsewhere suggests several promising developments. Emerging frameworks enable dynamic agent team formation based on task requirements. There is also significant progress in agent negotiation protocols and collaborative learning mechanisms where agents improve through mutual interaction.</p>
      
      <p>Efficiency improvements are another active research area. Current work focuses on shared computation and memory architectures to reduce the overhead associated with running multiple agents simultaneously.</p>
      
      <h3>Observations and Recommendations</h3>
      <p>As someone actively engaged with these technologies in both academic and practical contexts, the shift toward multi-agent systems appears well-justified. This approach mirrors human problem-solving strategies, which rely on collaboration and specialization rather than individual expertise across all domains.</p>
      
      <p>The technology is advancing rapidly. Techniques considered novel in recent coursework have already become standard practice. For practitioners developing LLM-based applications, experimenting with multi-agent approaches is advisable. Even simple configurations—such as pairing a generation agent with a critique agent—can yield measurable improvements in output quality.</p>
      
      <h3>Conclusion</h3>
      <p>The evolution from single to multi-agent LLM systems represents a maturation of artificial intelligence architecture. While this transition introduces new complexities in system design and operation, the benefits in terms of specialization, verification, and overall performance make it a compelling direction for the field. As these systems continue to develop, we can expect further refinement in coordination mechanisms and efficiency optimizations.</p>
    `,
  },
]

export function getBlogPosts(): BlogPost[] {
  // Sort by date descending (most recent first)
  return [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })
}

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id.toString() === id)
}