import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

// Modern Icon Components
const ChevronDown = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const Mail = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Phone icon component (unused but kept for potential future use)
// const Phone = () => (
//   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//   </svg>
// );

// Github icon component (unused but kept for potential future use)
// const Github = () => (
//   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//   </svg>
// );

const Linkedin = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// ArrowRight icon component (unused but kept for potential future use)
// const ArrowRight = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//   </svg>
// );

const Star = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const ExternalLink = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const Brain = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const Code = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const Database = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const words = useMemo(() => ['AI Engineer', 'Tech Innovator', 'Problem Solver', 'ML Expert', 'AI Consultant'], []);

  // Typing animation effect
  useEffect(() => {
    if (!isTyping) return;
    
    const currentWord = words[currentWordIndex];
    if (typedText.length < currentWord.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentWord.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIsTyping(false);
        setTimeout(() => {
          setTypedText('');
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setIsTyping(true);
        }, 2000);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [typedText, currentWordIndex, isTyping, words]);

  // Project data
  const projects = [
    {
      id: 'voice-agents-ghl',
      title: "Voice AI Agents for GHL CRM",
      subtitle: "Retell & VAPI Integration",
      description: "Built sophisticated voice agents using Retell and VAPI integrated with GoHighLevel (GHL) CRM systems for automated customer interactions.",
      tech: ["Retell", "VAPI", "GoHighLevel", "CRM Integration", "Voice AI"],
      metrics: ["Automated Customer Service", "CRM Integration", "Voice Recognition"],
      gradient: "from-indigo-600 via-purple-600 to-violet-800",
      features: [
        "Advanced voice agent development using Retell technology",
        "Seamless VAPI integration for voice processing",
        "Full GoHighLevel CRM system integration",
        "Automated customer interaction workflows"
      ],
      impact: "Revolutionized customer service operations by automating voice interactions while maintaining full CRM visibility and tracking.",
      demoUrl: "https://www.loom.com/share/9b3a8b9ceeae4d558ddaf0bc15284813?sid=377ea2eb-37a6-44c5-8664-b6078404f7da",
      isVideo: true
    },
    {
      id: 'sms-chatbots-twilio',
      title: "SMS Chatbot Automation",
      subtitle: "Twilio & n8n Integration",
      description: "Engineered sophisticated SMS chatbots using Twilio and n8n for customer engagement and support across multiple business verticals.",
      tech: ["Twilio", "n8n", "SMS Automation", "Customer Engagement", "Workflow Automation"],
      metrics: ["Automated SMS Responses", "Customer Support", "Engagement Tracking"],
      gradient: "from-emerald-600 via-teal-600 to-cyan-800",
      features: [
        "Advanced SMS chatbot development with Twilio",
        "n8n workflow automation for complex scenarios",
        "Multi-channel customer engagement strategies",
        "Real-time support and lead qualification"
      ],
      impact: "Streamlined customer communication processes, reducing response times by 85% while improving customer satisfaction scores.",
      demoUrl: "https://www.loom.com/share/4648438478c248f4b8c5b81428e5d303?sid=621fe7ed-920-4f2c-92be-229f8c4368db",
      isVideo: true
    },
    {
      id: 'voice-ai-solutions',
      title: "End-to-End Voice AI Solutions",
      subtitle: "North American Market Delivery",
      description: "Delivered comprehensive voice AI solutions for multiple clients across North American markets, from concept to deployment.",
      tech: ["Voice AI", "Market Solutions", "Client Delivery", "AI Consulting", "Solution Architecture"],
      metrics: ["Multiple Clients", "North American Markets", "End-to-End Delivery"],
      gradient: "from-orange-600 via-red-600 to-pink-800",
      features: [
        "Complete voice AI solution architecture and development",
        "Multi-client project management and delivery",
        "North American market expansion strategies",
        "AI consulting and technical leadership"
      ],
      impact: "Successfully delivered voice AI solutions to multiple North American clients, establishing strong market presence and client relationships.",
      demoUrl: "https://www.loom.com/share/45f35c2e64184fb286ad3dd605f11c9a?sid=40ea0826-3960-48f0-a2f8-334d8b5df3d3",
      isVideo: true
    },
    {
      id: 'multimodal-rag',
      title: "Multimodal RAG System",
      subtitle: "Advanced PDF QA Pipeline",
      description: "Sophisticated system processing text, images, and tables using SBERT, CLIP, and local LLMs with semantic retrieval.",
      tech: ["SBERT", "CLIP", "Gemma-2B", "FAISS", "PyMuPDF"],
      metrics: ["Multimodal Processing", "Semantic Retrieval", "Local LLM"],
      gradient: "from-orange-600 via-red-600 to-pink-800",
      features: [
        "Multi-format content extraction from complex PDFs",
        "SBERT embeddings for semantic text understanding",
        "CLIP integration for image and chart analysis",
        "Local Gemma-2B deployment for privacy-focused processing"
      ],
      impact: "Enabled organizations to extract insights from thousands of documents automatically, reducing research time by 80%.",
      githubUrl: "https://github.com/SoberSalman/Multimodal-RAG-System",
      demoUrl: "https://github.com/SoberSalman/Multimodal-RAG-System#demo",
      liveUrl: null,
      isVideo: false
    },
    {
      id: 'auto-engage',
      title: "Auto Engage",
      subtitle: "AI Call Automation System",
      description: "Real-time AI voice agent with sub-2 second response latency and 95%+ intent accuracy using advanced RAG architecture.",
      tech: ["Whisper", "GPT-4", "Piper TTS", "LangChain", "FAISS"],
      metrics: ["<2s Latency", "95% Intent Accuracy", "Real-time Processing"],
      gradient: "from-emerald-600 via-teal-600 to-cyan-800",
      features: [
        "Sub-2 second response latency for natural conversations",
        "Advanced Whisper STT integration for accurate speech recognition",
        "GPT-4 powered natural language processing",
        "LangChain-powered RAG for contextual awareness"
      ],
      impact: "Automated customer service operations for multiple businesses, reducing response times by 70% while maintaining 95%+ customer satisfaction.",
      githubUrl: "https://github.com/SoberSalman/AutoEngageFYP",
      demoUrl: "https://github.com/SoberSalman/AutoEngageFYP#demo",
      liveUrl: null,
      isVideo: false
    },
    {
      id: 'digital-coach',
      title: "Digital Coach AI",
      subtitle: "AI-Driven Classroom Feedback System",
      description: "Revolutionary AI system using Azure Speech-to-Text and GPT-4 Turbo for automated classroom observation with 90%+ rubric compliance.",
      tech: ["Azure STT", "GPT-4", "Pinecone", "Docker", "AWS"],
      metrics: ["≤5% WER", "40% Reduction in Hallucinations", "≤8min Processing", "500+ Users"],
      gradient: "from-blue-600 via-purple-600 to-indigo-800",
      features: [
        "Real-time speech-to-text conversion with ≤5% Word Error Rate",
        "GPT-4 Turbo integration for intelligent analysis",
        "RAG implementation with Pinecone for contextual accuracy",
        "Parallel processing pipeline for optimal performance"
      ],
      impact: "Revolutionized classroom assessment processes across multiple educational institutions, saving thousands of hours in manual observation time.",
      githubUrl: null,
      demoUrl: "https://github.com/SoberSalman/DigitalCoachAI",
      liveUrl: null,
      isVideo: false
    },
    {
      id: 'neural-translation',
      title: "Neural Machine Translation",
      subtitle: "Urdu → English Translation",
      description: "GRU-based Seq2Seq model with attention mechanism achieving impressive BLEU scores on custom bilingual corpus.",
      tech: ["PyTorch", "GRU", "Attention", "NumPy"],
      metrics: ["78.4 BLEU Score", "Custom Corpus", "Attention Mechanism"],
      gradient: "from-violet-600 via-purple-600 to-fuchsia-800",
      features: [
        "Custom GRU-based Sequence-to-Sequence architecture",
        "Advanced attention mechanism for context preservation",
        "Custom bilingual corpus creation and preprocessing",
        "BLEU score optimization achieving 78.4 benchmark"
      ],
      impact: "Provided accessible translation services for Urdu-English language pairs, facilitating communication for millions of speakers.",
      githubUrl: null,
      demoUrl: "https://github.com/SoberSalman/NeuralTranslation",
      liveUrl: null,
      isVideo: false
    }
  ];

  // Experience data
  const experiences = [
    {
      title: "AI Engineer",
      company: "Taleemabad",
      period: "Jan '25 – Present",
      location: "Islamabad",
      description: "Leading AI solution development with focus on educational technology and voice AI systems.",
      achievements: [
        "Led Digital Coach development with 90%+ rubric compliance",
        "Reduced feedback hallucinations by 40% using RAG",
        "Optimized processing to ≤8 minutes for 30-min audio",
        "Improved Urdu OCR accuracy by 35% using UTRNet"
      ]
    },
    {
      title: "AI Intern",
      company: "AIO",
      period: "June '24 – Sept '24",
      location: "Islamabad",
      description: "Developed and optimized AI models for speech recognition and text-to-speech applications.",
      achievements: [
        "Reduced Whisper WER from 0.7 to 0.3 using LoRA",
        "Slashed inference time by 65% with CTranslate2",
        "Enhanced TTS models to achieve MOS: 4.2/5",
        "Built Streamlit dashboard improving decision speed by 30%"
      ]
    },
    {
      title: "AI/ML Research Assistant",
      company: "Data Insight Lab, NUCES",
      period: "Aug '23 – May '24",
      location: "Islamabad",
      description: "Conducted research on computer vision, OCR, and synthetic data generation for AI applications.",
      achievements: [
        "Achieved 97% detection accuracy with YOLOv8",
        "96% recognition accuracy using TROCR",
        "Generated synthetic datasets with RNNs",
        "Boosted model robustness by 25%"
      ]
    }
  ];

  // Skills data
  const skills = [
    {
      category: "AI/ML",
      icon: <Brain />,
      skills: ["PyTorch", "OpenCV", "MLFlow", "Hugging Face", "Pinecone", "RAG", "LLMs", "SBERT", "CLIP", "Gemma-2B", "Whisper", "GPT-4", "Piper TTS", "LangChain", "YOLOv8", "TROCR", "RNNs"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      category: "Languages & Frameworks",
      icon: <Code />,
      skills: ["Python", "C++", "C#", "SQL", "FastAPI", "Streamlit", "ONNX", "CTranslate2", "React", "JavaScript"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      category: "Cloud & DevOps",
      icon: <Database />,
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Retell", "VAPI", "Twilio", "n8n", "Azure Speech-to-Text", "GoHighLevel CRM"],
      gradient: "from-green-600 to-emerald-600"
    }
  ];

  const navigateToProject = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setSelectedProject(project);
    setCurrentPage('project-detail');
  };

  const navigateHome = () => {
    setSelectedProject(null);
    setCurrentPage('home');
  };

  if (currentPage === 'project-detail' && selectedProject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={navigateHome}
            className="mb-8 flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300"
          >
            <ChevronDown className="rotate-90" />
            Back to Portfolio
          </button>
          
          <div className="max-w-4xl mx-auto">
            <div className={`bg-gradient-to-br ${selectedProject.gradient} p-1 rounded-3xl mb-8`}>
              <div className="bg-slate-900/95 backdrop-blur-xl rounded-3xl p-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{selectedProject.title}</h1>
                <p className="text-xl text-slate-300 mb-6">{selectedProject.subtitle}</p>
                <p className="text-lg text-slate-200 leading-relaxed">{selectedProject.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold mb-4 text-white">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold mb-4 text-white">Key Metrics</h3>
                <div className="space-y-2">
                  {selectedProject.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center gap-2 text-slate-200">
                      <Star className="text-yellow-400" />
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Features & Capabilities</h3>
              <ul className="space-y-3">
                {selectedProject.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-200">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Business Impact</h3>
              <p className="text-slate-200 leading-relaxed">{selectedProject.impact}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-xl font-semibold hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </a>
              )}
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  {selectedProject.isVideo ? (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      Watch Demo
                    </>
                  ) : (
                    <>
                      <ExternalLink />
                      View Demo
                    </>
                  )}
                </a>
              )}
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <ExternalLink />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Salman
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Hero', 'About', 'Consulting', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <img 
                src="/pfp.jpeg" 
                alt="Salman" 
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-purple-500/30 shadow-2xl"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Salman
            </h1>
            
            <div className="text-2xl md:text-3xl text-slate-300 mb-8">
              I'm a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transforming ideas into intelligent solutions with cutting-edge AI, machine learning, and software engineering expertise. 
              Specialized in voice AI, conversational agents, and end-to-end AI solution delivery for North American markets.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-violet-800 p-1 rounded-3xl hover:scale-105 transition-transform duration-300">
                <div className="bg-slate-900/95 backdrop-blur-lg rounded-3xl p-6 text-center min-w-[160px]">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="text-lg font-bold text-white">AI Engineer</div>
                  <div className="text-sm text-white/70">Innovation</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-800 p-1 rounded-3xl hover:scale-105 transition-transform duration-300">
                <div className="bg-slate-900/95 backdrop-blur-lg rounded-3xl p-6 text-center min-w-[160px]">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="text-lg font-bold text-white">Problem Solver</div>
                  <div className="text-sm text-white/70">Solutions</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-600 via-red-600 to-pink-800 p-1 rounded-3xl hover:scale-105 transition-transform duration-300">
                <div className="bg-slate-900/95 backdrop-blur-lg rounded-3xl p-6 text-center min-w-[160px]">
                  <div className="text-3xl mb-2">🌍</div>
                  <div className="text-lg font-bold text-white">North America</div>
                  <div className="text-sm text-white/70">Market Focus</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-800 p-1 rounded-3xl hover:scale-105 transition-transform duration-300">
                <div className="bg-slate-900/95 backdrop-blur-lg rounded-3xl p-6 text-center min-w-[160px]">
                  <div className="text-3xl mb-2">💼</div>
                  <div className="text-lg font-bold text-white">AI Consultant</div>
                  <div className="text-sm text-white/70">Expert Guidance</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-slate-400 text-slate-300 rounded-xl font-semibold hover:border-white hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              I'm a passionate AI engineer and consultant with expertise in developing cutting-edge artificial intelligence solutions. 
              My focus is on creating innovative voice AI systems, conversational agents, and end-to-end AI solutions that drive business transformation.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              With experience delivering solutions across North American markets, I combine technical expertise with strategic business understanding 
              to help organizations leverage AI for competitive advantage. My work spans from concept development to production deployment, 
              ensuring scalable and maintainable solutions that meet real-world business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section id="consulting" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Consulting Services
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Expert guidance to help you navigate the AI landscape and implement solutions that drive real business value
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-white">AI Career Exploration</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Career path analysis and guidance</li>
                  <li>• Skill gap assessment and development</li>
                  <li>• Industry insights and market trends</li>
                  <li>• Professional development strategies</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Technical AI Solutions</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• End-to-end AI solution architecture</li>
                  <li>• Custom AI model development</li>
                  <li>• System integration and optimization</li>
                  <li>• Performance and scalability consulting</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">🎤</div>
                <h3 className="text-2xl font-bold mb-4 text-white">Voice AI Expertise</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Voice agent development and deployment</li>
                  <li>• CRM integration strategies</li>
                  <li>• Conversational AI optimization</li>
                  <li>• Multi-platform voice solutions</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-slate-300 mb-6">
                Ready to transform your business with AI? Let's discuss your needs and explore how we can work together.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Start Your AI Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-slate-300 text-lg">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-400 font-medium">{exp.period}</span>
                      {exp.location && (
                        <p className="text-slate-500 text-sm">{exp.location}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                  <div className={`bg-gradient-to-br ${project.gradient} p-1 rounded-xl mb-4`}>
                    <div className="bg-slate-900/95 rounded-xl p-4">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-slate-300 text-sm">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-slate-200">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-slate-200">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => navigateToProject(project.id)}
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
                    >
                      View Details
                    </button>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {project.isVideo && (
                        <div className="flex items-center gap-1 text-red-400 text-sm">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                          Video Demo
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${skillGroup.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <div className="text-white">
                      {skillGroup.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-6">{skillGroup.category}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Ready to discuss your next AI project, explore career opportunities in AI, or get expert consulting guidance? I'd love to hear from you!
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-slate-300 mb-4">Get in touch for detailed discussions</p>
                <a 
                  href="mailto:salmanahmadaieng@gmail.com" 
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <Mail />
                  salmanahmadaieng@gmail.com
                </a>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-slate-300 mb-4">Connect professionally</p>
                <a 
                  href="https://www.linkedin.com/in/salman-ahmad-385a29217/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <Linkedin />
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">Currently Available For</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-semibold">
                  AI Consulting
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full text-sm font-semibold">
                  Career Guidance
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-full text-sm font-semibold">
                  Voice AI Solutions
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-semibold">
                  Technical Leadership
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800/50 bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2024 Salman. Crafted with passion for AI innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio; 