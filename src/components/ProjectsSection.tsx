import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

/* -------------------- Dynamic Project Image Loader -------------------- */

const certImages = import.meta.glob(
  "/src/assets/projects/*.{jpg,png,jpeg}",
  {
    eager: true,
    import: "default",
  }
);

const getImage = (name: string): string => {
  return (certImages[`/src/assets/projects/${name}`] as string) ?? "";
};

/* --------------------------------------------------------------------- */
const categories = [
  "All",
  "Machine Learning",
  "NLP",
  "Web Apps",
  "Analysis",
];

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tech: string[];
  metrics: { accuracy: number; records: string };
  github: string;
  demo: string;
  details: {
    overview: string;
    challenges: string[];
    features: string[];
    tools: string[];
    results: string[];
  };
};

const projects: Project[] = [
  {
    id: 1,
    title: "Loan Status Prediction",
    description:
      "ML model predicting loan approval with 92% accuracy using ensemble methods. Analyzed 50K+ applications with feature engineering.",
    category: "Machine Learning",
    image: "loan_prediction.jpg",
    tech: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
    metrics: { accuracy: 92, records: "50K+" },
    github: "#",
    demo: "#",
    details: {
      overview:
        "End-to-end credit risk model that scores loan applications in real time, combining gradient-boosted trees with a calibrated probability layer.",
      challenges: [
        "Highly imbalanced approval/denial classes",
        "Missing values across income and employment fields",
        "Regulatory need for model explainability",
      ],
      features: [
        "Feature engineering pipeline with 40+ derived signals",
        "SHAP-based explanations for each decision",
        "REST API for downstream banking systems",
      ],
      tools: ["Python", "Scikit-learn", "XGBoost", "Pandas", "SHAP", "FastAPI"],
      results: [
        "92% accuracy, 0.94 ROC-AUC",
        "Reduced manual review workload by 38%",
      ],
    },
  },
  {
    id: 2,
    title: "News Sentiment Analysis",
    description:
      "Real-time sentiment analysis of news articles using NLP and BERT. Processes 10K+ articles daily with 89% accuracy.",
    category: "NLP",
    image: "news_sentiment.png",
    tech: ["Python", "BERT", "NLP", "Flask"],
    metrics: { accuracy: 89, records: "10K+" },
    github: "#",
    demo: "#",
    details: {
      overview:
        "Streaming NLP pipeline that ingests news feeds, classifies sentiment, and surfaces trending narratives across sectors.",
      challenges: [
        "Domain-specific financial language",
        "Sarcasm and mixed-sentiment headlines",
        "Latency budget under 200ms per article",
      ],
      features: [
        "Fine-tuned BERT classifier",
        "Entity-level sentiment aggregation",
        "Live dashboard with trend alerts",
      ],
      tools: ["Python", "BERT", "Hugging Face", "Flask", "Kafka"],
      results: [
        "89% F1 on financial news benchmark",
        "Processes 10K+ articles per day",
      ],
    },
  },
  {
    id: 3,
    title: "Fake Currency Detection",
    description:
      "Computer vision model detecting counterfeit notes with 95% precision. Trained on 20K+ currency images.",
    category: "Machine Learning",
    image: "fake_currency.png",
    tech: ["Python", "TensorFlow", "OpenCV", "CNN"],
    metrics: { accuracy: 95, records: "20K+" },
    github: "#",
    demo: "#",
    details: {
      overview:
        "CNN-based image classifier that authenticates currency notes from a single smartphone photo.",
      challenges: [
        "Varying lighting and angles",
        "Subtle visual differences in counterfeits",
        "On-device inference constraints",
      ],
      features: [
        "Custom CNN with attention layers",
        "Data augmentation for robustness",
        "TFLite export for mobile deployment",
      ],
      tools: ["Python", "TensorFlow", "OpenCV", "TFLite"],
      results: [
        "95% precision, 93% recall",
        "Sub-second inference on mid-range phones",
      ],
    },
  },
  {
    id: 4,
    title: "Phishing URL Detection",
    description:
      "ML system identifying malicious URLs with 91% accuracy. Analyzed URL patterns and domain features.",
    category: "Machine Learning",
    image: "url_phishing.png",
    tech: ["Python", "Random Forest", "Feature Engineering"],
    metrics: { accuracy: 91, records: "100K+" },
    github: "#",
    demo: "#",
    details: {
      overview:
        "Lightweight classifier that flags phishing URLs in browsers and email gateways without relying on blocklists.",
      challenges: [
        "Adversarial URL obfuscation",
        "Concept drift in attack patterns",
        "Strict false-positive tolerance",
      ],
      features: [
        "60+ lexical and host-based features",
        "Random Forest with isotonic calibration",
        "Browser extension prototype",
      ],
      tools: ["Python", "Scikit-learn", "Pandas", "WHOIS"],
      results: [
        "91% accuracy on 100K URL corpus",
        "False-positive rate under 1.2%",
      ],
    },
  },
  {
    id: 5,
    title: "Retail Sales Dashboard",
    description:
      "Interactive analytics dashboard revealing $2M+ in potential revenue optimization for retail chain.",
    category: "Analysis",
    image: "customer_segmentation.png",
    tech: ["Python", "Power BI", "SQL", "Pandas"],
    metrics: { accuracy: 0, records: "1M+" },
    github: "#",
    demo: "#",
    details: {
      overview:
        "Executive analytics suite combining cohort analysis, RFM segmentation, and store-level performance views.",
      challenges: [
        "Disparate POS data sources",
        "Slow legacy reporting cadence",
        "Non-technical executive audience",
      ],
      features: [
        "Automated ETL into a star schema",
        "Interactive drilldowns by store and SKU",
        "Anomaly alerts on margin erosion",
      ],
      tools: ["Power BI", "SQL", "Python", "Pandas"],
      results: [
        "Identified $2M+ in revenue uplift",
        "Reporting cycle cut from weekly to daily",
      ],
    },
  },
  {
    id: 6,
    title: "AI Chatbot Platform",
    description:
      "Intelligent chatbot using GPT and custom training for customer support automation.",
    category: "Web Apps",
    image: "/placeholder.svg",
    tech: ["Python", "FastAPI", "LangChain", "React"],
    metrics: { accuracy: 88, records: "5K+" },
    github: "#",
    demo: "#",
    details: {
      overview:
        "Retrieval-augmented chatbot platform that grounds LLM responses in a company's knowledge base.",
      challenges: [
        "Hallucination control",
        "Multi-tenant data isolation",
        "Smooth handoff to human agents",
      ],
      features: [
        "RAG pipeline with vector search",
        "Conversation analytics dashboard",
        "Plug-in widget for any website",
      ],
      tools: ["Python", "FastAPI", "LangChain", "Pinecone", "React"],
      results: [
        "Deflected 62% of tier-1 support tickets",
        "Average response time under 1.5s",
      ],
    },
  },
];

const ProjectCard = ({
  project,
  index,
  isExpanded,
  onToggle,
}: {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className={`group flex flex-col rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden ${
        isExpanded ? "xl:col-span-2" : ""
      }`}
    >
      {/* Image Banner */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={getImage(project.image) || project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
        {project.metrics.accuracy > 0 && (
          <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-border">
            <span className="text-foreground text-xs font-medium">
              {project.metrics.accuracy}% Accuracy
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3 gap-3">
          <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded shrink-0">
            {project.category}
          </span>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 bg-secondary/10 text-secondary rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expanded details */
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-2 pb-4 space-y-4 text-sm">
                <p className="text-muted-foreground leading-relaxed">
                  {project.details.overview}
                </p>

                <DetailBlock title="Results" items={project.details.results} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle */}
        <button
          onClick={onToggle}
          className="self-start text-xs font-medium text-secondary inline-flex items-center gap-1 mb-4 hover:underline"
        >
          {isExpanded ? "Show Less" : "View Details"}
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          <Button asChild variant="outline" size="sm" className="flex-1 gap-2">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              Code
            </a>
          </Button>
          <Button asChild size="sm" className="flex-1 gap-2 bg-secondary hover:bg-secondary/90">
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const DetailBlock = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
      {title}
    </h4>
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="text-sm text-muted-foreground flex gap-2 leading-relaxed"
        >
          <span className="text-secondary mt-1.5 w-1 h-1 rounded-full bg-secondary shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world data science projects showcasing ML expertise and problem-solving skills
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                setExpandedId(null);
              }}
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

        <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isExpanded={expandedId === project.id}
                onToggle={() =>
                  setExpandedId(expandedId === project.id ? null : project.id)
                }
              />
            ))}
          </AnimatePresence>
        </motion.div>

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
