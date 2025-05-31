import React, { useState, useEffect } from 'react';
import './App.css';

// Icon components (since we can't import lucide-react in this simple setup)
const ChevronDown = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const Mail = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Phone = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPin = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Github = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Linkedin = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const ArrowRight = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Star = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const ExternalLink = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const Brain = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const Code = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const Database = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const words = ['AI Engineer', 'Tech Innovator', 'Problem Solver', 'ML Expert'];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (currentPage === 'home') {
      const currentWord = words[currentWordIndex];
      if (isTyping) {
        if (typedText.length < currentWord.length) {
          const timeout = setTimeout(() => {
            setTypedText(currentWord.slice(0, typedText.length + 1));
          }, 100);
          return () => clearTimeout(timeout);
        } else {
          const timeout = setTimeout(() => setIsTyping(false), 2000);
          return () => clearTimeout(timeout);
        }
      } else {
        if (typedText.length > 0) {
          const timeout = setTimeout(() => {
            setTypedText(typedText.slice(0, -1));
          }, 50);
          return () => clearTimeout(timeout);
        } else {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setIsTyping(true);
        }
      }
    }
  }, [typedText, isTyping, currentWordIndex, currentPage, words]);

  const projects = [
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
      demoUrl: null,
      liveUrl: null
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
      demoUrl: "https://drive.google.com/drive/folders/1yEDuuTIgAuItZXyDx4ZBMtEA49SybUoh",
      // liveUrl: "https://auto-engage.ai"
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
      demoUrl: null,
      liveUrl: null
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
      demoUrl: null,
      liveUrl: null
    }
  ];

  const experiences = [
    {
      role: "AI Engineer",
      company: "Taleemabad",
      period: "Jan '25 – Present",
      location: "Islamabad",
      highlights: [
        "Led Digital Coach development with 90%+ rubric compliance",
        "Reduced feedback hallucinations by 40% using RAG",
        "Optimized processing to ≤8 minutes for 30-min audio",
        "Improved Urdu OCR accuracy by 35% using UTRNet"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      role: "AI Intern",
      company: "AIO",
      period: "June '24 – Sept '24",
      location: "Islamabad",
      highlights: [
        "Reduced Whisper WER from 0.7 to 0.3 using LoRA",
        "Slashed inference time by 65% with CTranslate2",
        "Enhanced TTS models to achieve MOS: 4.2/5",
        "Built Streamlit dashboard improving decision speed by 30%"
      ],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      role: "AI/ML Research Assistant",
      company: "Data Insight Lab, NUCES",
      period: "Aug '23 – May '24",
      location: "Islamabad",
      highlights: [
        "Achieved 97% detection accuracy with YOLOv8",
        "96% recognition accuracy using TROCR",
        "Generated synthetic datasets with RNNs",
        "Boosted model robustness by 25%"
      ],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const skills = {
    "AI/ML": ["PyTorch", "OpenCV", "MLFlow", "Hugging Face", "Pinecone"],
    "Languages": ["Python", "C++", "C#", "SQL"],
    "Cloud/DevOps": ["AWS", "Docker", "Kubernetes", "Jenkins"],
    "Frameworks": ["FastAPI", "Streamlit", "ONNX", "CTranslate2"]
  };

  const navigateToProject = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setSelectedProject(project);
    setCurrentPage('project');
    window.scrollTo(0, 0);
  };

  const navigateHome = () => {
    setCurrentPage('home');
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };

  if (currentPage === 'project' && selectedProject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Background */}
        <div className="fixed inset-0 opacity-30">
          <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"
            style={{
              left: mousePosition.x / 10,
              top: mousePosition.y / 10,
              transition: 'all 0.3s ease-out'
            }}
          />
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <button 
              onClick={navigateHome}
              className="flex items-center space-x-2 text-white/70 hover:text-cyan-400 transition-colors duration-300"
            >
              <span>← Back to Portfolio</span>
            </button>
          </div>
        </nav>

        <div className="pt-24 pb-20">
          <div className="max-w-6xl mx-auto px-6">
            {/* Project Details */}
            <div className={`bg-gradient-to-br ${selectedProject.gradient} p-1 rounded-3xl mb-8`}>
              <div className="bg-slate-900/95 backdrop-blur-lg rounded-3xl p-12">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{selectedProject.title}</h1>
                <p className="text-xl text-white/70 mb-8">{selectedProject.subtitle}</p>
                <p className="text-lg text-white/80 leading-relaxed mb-8">{selectedProject.description}</p>
                
                {/* BUTTONS SECTION - THIS WAS MISSING! */}
                <div className="flex flex-wrap gap-4 mb-12">
                  <a 
                    href={selectedProject.liveUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-600 to-purple-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2 text-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                    </svg>
                    <span>Live Demo</span>
                  </a>
                  
                  {selectedProject.githubUrl && (
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-gray-700 to-gray-900 border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2 text-white"
                    >
                      <Github />
                      <span>Source Code</span>
                    </a>
                  )}
                  
                  <a 
                    href={selectedProject.demoUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2 text-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>View Demo</span>
                  </a>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {selectedProject.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <Star className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {selectedProject.tech.map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-white/10 rounded-xl text-white font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">Impact</h3>
                    <p className="text-white/80">{selectedProject.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur-3xl animate-pulse"
          style={{
            right: mousePosition.x / 15,
            bottom: mousePosition.y / 15,
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              SA
            </div>
            <div className="hidden md:flex space-x-8">
              {['Hero', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="transition-all duration-300 hover:text-cyan-400 text-white/70"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="text-center z-10">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            SALMAN
          </h1>
          <h2 className="text-3xl md:text-5xl font-light mb-8 text-white/90 h-16">
            <span className="border-r-2 border-cyan-400 animate-pulse">
              {typedText}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transforming ideas into intelligent solutions with cutting-edge AI, machine learning, and software engineering expertise
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl backdrop-blur-lg hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-lg font-bold">AI Innovation</div>
              <div className="text-sm opacity-80">Cutting-edge Solutions</div>
            </div>
            <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 p-6 rounded-xl backdrop-blur-lg hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-lg font-bold">Performance</div>
              <div className="text-sm opacity-80">Optimized Systems</div>
            </div>
            <div className="bg-gradient-to-r from-orange-600 to-pink-600 p-6 rounded-xl backdrop-blur-lg hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-lg font-bold">Precision</div>
              <div className="text-sm opacity-80">Accurate Results</div>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#projects" className="group bg-gradient-to-r from-cyan-600 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>View Projects</span>
              <ArrowRight />
            </a>
            <a href="#contact" className="border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full p-1 hover:scale-105 transition-all duration-500">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="/pfp.jpeg" 
                    alt="Salman Ahmad"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="text-8xl items-center justify-center" style={{display: 'none'}}>👨‍💻</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Passionate AI Engineer</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                AI Engineer with a passion for building real-world intelligent systems that blend natural language understanding, agentic reasoning, and scalable deployment.
                Experienced in designing end-to-end AI solutions—from voice-based agents and generative feedback tools to computer vision pipelines.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Proficient in Python, PyTorch, Hugging Face, and cloud platforms (AWS/GCP), with a strong foundation in LLMs, Langchain, NLP, and classical ML.
                Excels in fast-paced environments, bridging research with production through rapid experimentation and robust engineering.
              </p>
              
              <div className="flex items-center space-x-4 text-white/70 mt-8">
                <MapPin />
                <span>Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center space-x-4 text-white/70">
                <Mail />
                <span>salman2002rwp@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4 text-white/70">
                <Phone />
                <span>+92 321 973 9387</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <div className={`text-xl bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent font-semibold`}>
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <div className="text-white/80">{exp.period}</div>
                      <div className="text-white/60">{exp.location}</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <Star />
                        <span className="text-white/80">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${project.gradient} p-1 rounded-3xl hover:scale-[1.02] transition-all duration-500`}>
                  <div className="bg-slate-900/95 backdrop-blur-lg rounded-3xl p-8 h-full">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-white/10 rounded-2xl">
                        <Brain />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <p className="text-white/70">{project.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider">Key Metrics</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <Star />
                            <span className="text-sm text-white/80">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => navigateToProject(project.id)}
                      className="w-full bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl py-3 text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group-hover:bg-white/20 hover:scale-105"
                    >
                      <span>View Details</span>
                      <ExternalLink />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className="group">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 h-full">
                  <div className="flex items-center space-x-3 mb-6">
                    {category === 'AI/ML' && <Brain />}
                    {category === 'Languages' && <Code />}
                    {category === 'Cloud/DevOps' && <Database />}
                    {category === 'Frameworks' && <Database />}
                    <h3 className="text-xl font-bold text-white">{category}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {skillList.map((skill, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                        <span className="text-white/80">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-xl text-white/80 mb-8">
              Ready to discuss your next AI project or explore opportunities? I'd love to hear from you!
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:salman2002rwp@gmail.com" className="group bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                <Mail />
                <span className="font-semibold">Email Me</span>
              </a>
              
              <a href="https://linkedin.com/in/salman-ahmad-385a29217/" className="group bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                <Linkedin />
                <span className="font-semibold">LinkedIn</span>
              </a>
              
              <a href="tel:+923219739387" className="group bg-gradient-to-r from-emerald-500 to-teal-500 p-4 rounded-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                <Phone />
                <span className="font-semibold">Call Me</span>
              </a>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Currently Available For</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full text-sm font-semibold">Full-time Opportunities</span>
              <span className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full text-sm font-semibold">AI Consulting</span>
              <span className="px-4 py-2 bg-gradient-to-r from-orange-600 to-pink-600 rounded-full text-sm font-semibold">Freelance Projects</span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full text-sm font-semibold">Collaborations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Salman Ahmad
          </div>
          <p className="text-white/60 mb-6">
            Crafting intelligent solutions that shape the future
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="https://github.com/SoberSalman" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-cyan-400 transition-colors duration-300 hover:scale-110"
            >
              <Github />
            </a>
            <a 
              href="https://linkedin.com/in/salman-ahmad-385a29217/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-cyan-400 transition-colors duration-300 hover:scale-110"
            >
              <Linkedin />
            </a>
            <a 
              href="mailto:salman2002rwp@gmail.com" 
              className="text-white/40 hover:text-cyan-400 transition-colors duration-300 hover:scale-110"
            >
              <Mail />
            </a>
          </div>
          <div className="text-white/40 text-sm">
            © 2025 Salman Ahmad. Built with React & Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;