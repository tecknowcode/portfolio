import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, TrendingUp, Shield, FileText, DollarSign, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Machine Learning", "NLP", "Web Apps", "Analysis"];

const projects = [
  {
    id: 1,
    title: "Loan Status Prediction",
    description: "ML model predicting loan approval with 92% accuracy using ensemble methods. Analyzed 50K+ applications with feature engineering.",
    category: "Machine Learning",
    image: "/placeholder.svg",
    tech: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
    metrics: { accuracy: 92, records: "50K+" },
    icon: DollarSign,
    github: "#",
    demo: "#",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "News Sentiment Analysis",
    description: "Real-time sentiment analysis of news articles using NLP and BERT. Processes 10K+ articles daily with 89% accuracy.",
    category: "NLP",
    image: "/placeholder.svg",
    tech: ["Python", "BERT", "NLP", "Flask"],
    metrics: { accuracy: 89, records: "10K+" },
    icon: FileText,
    github: "#",
    demo: "#",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Fake Currency Detection",
    description: "Computer vision model detecting counterfeit notes with 95% precision. Trained on 20K+ currency images.",
    category: "Machine Learning",
    image: "/placeholder.svg",
    tech: ["Python", "TensorFlow", "OpenCV", "CNN"],
    metrics: { accuracy: 95, records: "20K+" },
    icon: Shield,
    github: "#",
    demo: "#",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    title: "Phishing URL Detection",
    description: "ML system identifying malicious URLs with 91% accuracy. Analyzed URL patterns and domain features.",
    category: "Machine Learning",
    image: "/placeholder.svg",
    tech: ["Python", "Random Forest", "Feature Engineering"],
    metrics: { accuracy: 91, records: "100K+" },
    icon: Shield,
    github: "#",
    demo: "#",
    gradient: "from-red-500 to-orange-500",
  },
  {
    id: 5,
    title: "Retail Sales Dashboard",
    description: "Interactive analytics dashboard revealing $2M+ in potential revenue optimization for retail chain.",
    category: "Analysis",
    image: "/placeholder.svg",
    tech: ["Python", "Power BI", "SQL", "Pandas"],
    metrics: { accuracy: 0, records: "1M+" },
    icon: TrendingUp,
    github: "#",
    demo: "#",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    id: 6,
    title: "AI Chatbot Platform",
    description: "Intelligent chatbot using GPT and custom training for customer support automation.",
    category: "Web Apps",
    image: "/placeholder.svg",
    tech: ["Python", "FastAPI", "LangChain", "React"],
    metrics: { accuracy: 88, records: "5K+" },
    icon: Brain,
    github: "#",
    demo: "#",
    gradient: "from-indigo-500 to-violet-500",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="project-card group"
    >
      {/* Card Header with Gradient */}
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 overflow-hidden`}>
        {/* Icon */}
        <project.icon className="w-12 h-12 text-white/80" />
        
        {/* Decorative Elements */}
        <motion.div
          animate={{ rotate: isHovered ? 45 : 0, scale: isHovered ? 1.1 : 1 }}
          className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: isHovered ? -45 : 0, scale: isHovered ? 1.2 : 1 }}
          className="absolute right-10 -bottom-4 w-20 h-20 bg-white/10 rounded-full"
        />

        {/* Metrics Badge */}
        {project.metrics.accuracy > 0 && (
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-white text-sm font-bold">{project.metrics.accuracy}% Accuracy</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold group-hover:text-secondary transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
            {project.category}
          </span>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Records Processed */}
        <div className="text-sm text-muted-foreground mb-4">
          <span className="font-medium text-foreground">{project.metrics.records}</span> records processed
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex-1 gap-2">
            <Github className="w-4 h-4" />
            Code
          </Button>
          <Button size="sm" className="flex-1 gap-2 bg-secondary hover:bg-secondary/90">
            <ExternalLink className="w-4 h-4" />
            Demo
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world data science projects showcasing ML expertise and problem-solving skills
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? "bg-secondary text-white shadow-lg shadow-secondary/25"
                  : "bg-card hover:bg-secondary/10 border border-border"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="gap-2">
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
