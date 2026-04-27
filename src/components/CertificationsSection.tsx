import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Award, BookOpen, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certImages = import.meta.glob(
  "/src/assets/certificates/*.{jpg,png,jpeg}",
  {
    eager: true,
    import: "default",
  }
);

const getImage = (name: string): string => {
  return (certImages[`/src/assets/certificates/${name}`] as string) ?? "";
};

type CertType = "certification" | "fdp";

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  type: CertType;
  image: string;
  description?: string;
}

const certificates: Certificate[] = [
  {
    title: "IBM Data Science Professional",
    issuer: "Coursera IBM",
    year: "Mar 2023",
    type: "certification",
    image: getImage("IBM_DS.jpg"),
    description: "Comprehensive professional certification covering data science methodologies, Python, SQL, machine learning, and data visualization.",
  },
  {
    title: "AWS Associate Solutions Architect",
    issuer: "Udemy",
    year: "2026",
    type: "certification",
    image: getImage("UDEMY_AWS.jpg"),
    description: "Certification covering AWS-based architecture design, scalable deployments, security principles, and efficient resource optimization.",
  },
  {
    title: "Learning Linux for LFCA",
    issuer: "Coursera Learn Quest",
    year: "2022",
    type: "certification",
    image: getImage("LINUX.jpg"),
    description: "Specialization focused on Linux system management, security, cloud environments, and DevOps workflows using real-world tools and practices.",
  },
  {
    title: "Generative AI for Data Scientists",
    issuer: "Coursera IBM",
    year: "2024",
    type: "certification",
    image: getImage("GEN_AI.jpg"),
    description: "Hands-on specialization in generative AI, prompt engineering, and real-world AI applications.",
  },
  {
    title: "Data Engineer",
    issuer: "Datacamp",
    year: "2022",
    type: "certification",
    image: getImage("DE.jpg"),
    description: "Industry-focused certification in data engineering, emphasizing scalable data pipelines, efficient data processing, and modern data architecture.",
  },
  {
    title: "Big Data Hadoop and Spark Developer",
    issuer: "Skillup Simplilearn",
    year: "2022",
    type: "certification",
    image: getImage("HADOOP.jpg"),
    description: "Certification focused on Hadoop ecosystem and Apache Spark for distributed data processing, ETL workflows, and scalable big data solutions.",
  },
  {
    title: "SQL Advanced",
    issuer: "HackerRank",
    year: "2024",
    type: "certification",
    image: getImage("SQL_AD.jpg"),
    description: "Advanced certification demonstrating expertise in complex SQL queries, data manipulation, performance optimization, and analytical problem-solving.",
  },
  {
    title: "SQL Intermediate",
    issuer: "HackerRank",
    year: "2024",
    type: "certification",
    image: getImage("SQL_IN.jpg"),
    description: "Industry-recognized certification showcasing solid SQL skills for querying, analyzing, and transforming structured data.",
  },
  {
    title: "SQL Basic",
    issuer: "HackerRank",
    year: "2024",
    type: "certification",
    image: getImage("SQL_BA.jpg"),
    description: "Foundational certification validating core SQL skills for data querying, filtering, and aggregation.",
  },
  {
    title: "SQL for Data Science",
    issuer: "Coursera UC Davis",
    year: "2023",
    type: "certification",
    image: getImage("DS_SQL.jpg"),
    description: "Certification in SQL querying, data manipulation, aggregation, and database design for data science workflows.",
  },
  {
    title: "SQL",
    issuer: "SCALER",
    year: "2025",
    type: "certification",
    image: getImage("SCALER_SQL.jpg"),
    description: "Comprehensive certification covering SQL fundamentals, data querying, joins, aggregations, and database concepts for effective data analysis.",
  },
  {
    title: "Natural Language Processing",
    issuer: "SCALER",
    year: "2026",
    type: "certification",
    image: getImage("SCALER_NLP.jpg"),
    description: "Industry-focused certification in natural language processing, emphasizing text analytics and real-world NLP model development.",
  },
  {
    title: "Smart Analytics, Machine Learning and AI on Google Cloud",
    issuer: "GOOGLE CLOUD",
    year: "2023",
    type: "certification",
    image: getImage("GG_CLOUD_AI.jpg"),
    description: "Certification focused on building and deploying analytics and machine learning solutions using Google Cloud services like BigQuery, AI Platform, and Dataflow.",
  },
  {
    title: "Modernizing Data Lakes and Data Warehouses with Google Cloud",
    issuer: "GOOGLE CLOUD",
    year: "2023",
    type: "certification",
    image: getImage("GG_CLOUD_LAKE.jpg"),
    description: "Comprehensive certification covering modern data lake and data warehouse architectures, including data ingestion, transformation, and analytics using Google Cloud services.",
  },
  {
    title: "Google Cloud Big Data and Machine Learning Fundamentals",
    issuer: "GOOGLE CLOUD",
    year: "2023",
    type: "certification",
    image: getImage("GG_CLOUD_ML.jpg"),
    description: "Industry-focused certification in big data and machine learning, leveraging Google Cloud for scalable data processing and model development.",
  },
  {
    title: "ETL and Data Pipelines with Shell, Airflow and Kafka",
    issuer: "COURSERA IBM",
    year: "2023",
    type: "certification",
    image: getImage("ETL.jpg"),
    description: "Comprehensive certification covering ETL processes and building scalable data pipelines using Shell scripting, Airflow orchestration, and Kafka streaming.",
  },
  {
    title: "Introduction to Data Engineering",
    issuer: "DATACAMP",
    year: "2022",
    type: "certification",
    image: getImage("INT_DE.jpg"),
    description: "Foundational certification covering data engineering concepts, including data pipelines, ETL processes, and data storage architectures.",
  },
  {
    title: "Data Engineering for Everyone",
    issuer: "DATACAMP",
    year: "2022",
    type: "certification",
    image: getImage("DE_EVONE.jpg"),
    description: "Introductory certification covering fundamental data engineering concepts, including data pipelines, ETL processes, and real-world data workflows.",
  },
  {
    title: "Streamlined Data Ingestion with pandas",
    issuer: "DATACAMP",
    year: "2022",
    type: "certification",
    image: getImage("DE_INGEST.jpg"),
    description: "Industry-focused certification in data ingestion and preprocessing using pandas for building reliable data pipelines.",
  },
  {
    title: "Data Manipulation with pandas",
    issuer: "DATACAMP",
    year: "2022",
    type: "certification",
    image: getImage("DE_MAN.jpg"),
    description: "Certification focused on data manipulation techniques using pandas, including filtering, aggregation, transformation, and data cleaning.",
  },
  {
    title: "Introduction to Shell",
    issuer: "DATACAMP",
    year: "2022",
    type: "certification",
    image: getImage("DE_SHELL_INTRO.jpg"),
    description: "Foundational certification covering shell basics, command-line navigation, and basic scripting for efficient system interaction.",
  },
  {
    title: "Data Processing in Shell",
    issuer: "DATACAMP",
    year: "2022",
    type: "certification",
    image: getImage("DE_SHELL.jpg"),
    description: "Certification focused on processing and manipulating data using shell scripting, including text parsing, automation, and command-line tools.",
  },
  {
    title: "Agenetic AI: Designing Autonomous and Responsible Systems",
    issuer: "Atharva College of Engineering",
    year: "2025",
    type: "fdp",
    image: getImage("AGENTIC_AI.jpg"),
    description: "FDP covering agentic AI systems, autonomous decision-making architectures, and responsible AI design principles.",
  },
  {
    title: "Machine Learning with Python",
    issuer: "Department of Computer Science and Engineering, GNDEC Bidar",
    year: "2022",
    type: "fdp",
    image: getImage("ML_PYTHON.jpg"),
    description: "FDP focused on machine learning algorithms and practical implementation using Python for data-driven problem solving.",
  },
  {
    title: "Exploring latest trend in Big data and Machine Learning",
    issuer: "P R Pote College of Engineering and Management, Amaravati",
    year: "2022",
    type: "fdp",
    image: getImage("BIG_DATA.jpg"),
    description: "Faculty development program exploring recent trends in big data and machine learning, focusing on modern tools, techniques, and real-world applications.",
  },
  {
    title: "Next Gen AI and LLMs: Transforming Pedagogy and Research",
    issuer: "National Institute of Technical Teachers Training and Research",
    year: "2025",
    type: "fdp",
    image: getImage("LLM.jpg"),
    description: "AICTE ATAL Faculty Development Program on Next-Gen AI and LLMs, focusing on transforming pedagogy and research through advanced AI technologies.",
  },
  {
    title: "MongoDB",
    issuer: "NMIMS MPSTME, Mumbai",
    year: "2025",
    type: "fdp",
    image: getImage("MONGO.jpg"),
    description: "Certification covering NoSQL database concepts using MongoDB, including data modeling, querying, and managing scalable document-based databases.",
  },
    {
    title: "Augmented & Virtual Reality with Data Science",
    issuer: "P R Pote College of Engineering and Management, Amaravati",
    year: "2022",
    type: "fdp",
    image: getImage("ARVR.jpg"),
    description: "FDP focused on AR/VR technologies combined with data science concepts for interactive and intelligent system development.",
  },
  {
    title: "Machine Learning & Data Science with Python",
    issuer: "PHN Technology Pvt Ltd",
    year: "2023",
    type: "fdp",
    image: getImage("MLDS.jpg"),
    description: "Certification covering machine learning and data science concepts using Python, including data analysis, model building, and evaluation.",
  },
  {
    title: "Cloud Infrastructure and AWS Technology",
    issuer: "Sai Spurthi Institute of Technology, Telangana",
    year: "2023",
    type: "fdp",
    image: getImage("AWS.jpg"),
    description: "Certification covering cloud infrastructure concepts and AWS technologies, including deployment, scalability, and secure cloud solutions.",
  },
  {
    title: "Cloud Computing & DevOps Engineering",
    issuer: "PHN Technology Pvt Ltd",
    year: "2023",
    type: "fdp",
    image: getImage("CLOUD_DEV.jpg"),
    description: "Certification covering cloud computing and DevOps practices, including CI/CD pipelines, containerization, and scalable infrastructure management.",
  },
  {
    title: "Machine Learning and Deep Learning Applications in Engineering and Science",
    issuer: "Government College of Engineering, Karad",
    year: "2020",
    type: "fdp",
    image: getImage("MLDL.jpg"),
    description: "One-week TEQIP-III sponsored FDP on Machine Learning and Deep Learning Applications in Engineering and Science, focusing on real-world problem solving using advanced ML/DL techniques.",
  },
  {
    title: "Blockchain and Fintech",
    issuer: "S B M Polytechnic, Mumbai",
    year: "2022",
    type: "fdp",
    image: getImage("BC.jpg"),
    description: "Certification covering blockchain fundamentals and FinTech applications, including distributed ledgers, digital transactions, and financial innovations.",
  },
];

const tabs: { label: string; value: CertType; icon: React.ReactNode }[] = [
  { label: "Certifications", value: "certification", icon: <Award className="w-4 h-4" /> },
  { label: "FDP / Workshops", value: "fdp", icon: <BookOpen className="w-4 h-4" /> },
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<CertType>("certification");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const filtered = certificates.filter((c) => c.type === activeTab);

  const closeModal = useCallback(() => setSelectedCert(null), []);

  // Escape key + scroll lock
  useEffect(() => {
    if (!selectedCert) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedCert, closeModal]);

  return (
    <>
      <section id="certifications" className="py-24 md:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(217_91%_60%/0.04),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(217_91%_60%/0.03),transparent_50%)]" />

        <div className="section-container relative z-10" ref={ref}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-widest">
              Credentials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              Professional <span className="gradient-text">Development</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A curated collection of industry certifications and faculty development programs
              demonstrating continuous learning and expertise in AI, Machine Learning, and Data Science.
            </p>
          </motion.div>

          {/* Pill Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex items-center gap-2 p-1.5 bg-muted rounded-full border border-border">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`
                    relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                    ${
                      activeTab === tab.value
                        ? "bg-accent text-accent-foreground shadow-md"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid — 5 cols desktop, 3 cols md, 2 cols sm, 1 col mobile */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 max-w-[1400px] mx-auto"
            >
              {filtered.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  onClick={() => setSelectedCert(cert)}
                  whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
                  className="group cursor-pointer bg-card border border-border rounded-2xl overflow-hidden"
                  style={{ boxShadow: "0 2px 12px hsl(var(--foreground) / 0.05)" }}
                >
                  {/* Thumbnail — no zoom on hover */}
                  <div className="relative overflow-hidden aspect-[3/2]">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Hover overlay — click cue only */}
                    <div className="absolute inset-0 bg-primary/55 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="flex items-center gap-1.5 text-primary-foreground text-xs font-medium bg-accent/90 px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                        <ExternalLink className="w-3.5 h-3.5" />
                        View
                      </span>
                    </div>
                    {/* Type badge */}
                    <div className="absolute top-2.5 left-2.5">
                      <Badge
                        variant="outline"
                        className={`text-[9px] uppercase tracking-wider px-2.5 py-1 font-semibold backdrop-blur-sm shadow-sm transition-shadow duration-300 group-hover:shadow-md ${
                          cert.type === "certification"
                            ? "bg-[#EEF2FF] text-[#4F46E5] border-[#C7D2FE] dark:bg-[rgba(79,70,229,0.15)] dark:text-[#A5B4FC] dark:border-[rgba(165,180,252,0.3)] group-hover:shadow-[0_0_8px_rgba(79,70,229,0.25)] dark:group-hover:shadow-[0_0_8px_rgba(165,180,252,0.2)]"
                            : "bg-[#ECFEFF] text-[#0891B2] border-[#67E8F9] dark:bg-[rgba(6,182,212,0.15)] dark:text-[#67E8F9] dark:border-[rgba(103,232,249,0.3)] group-hover:shadow-[0_0_8px_rgba(6,182,212,0.25)] dark:group-hover:shadow-[0_0_8px_rgba(103,232,249,0.2)]"
                        }`}
                      >
                        {cert.type === "certification" ? "Certification" : "FDP"}
                      </Badge>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="p-3.5">
                    <h4 className="font-semibold text-xs text-foreground line-clamp-2 mb-1 group-hover:text-accent transition-colors duration-300 leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-[11px] text-muted-foreground leading-none">
                      {cert.issuer} &middot; {cert.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 max-w-4xl mx-auto"
          >
            {[
              { number: "25+", label: "Certifications" },
              { number: "15+", label: "FDP / Workshops" },
              { number: "100+", label: "Mentees Guided" },
              { number: "10+", label: "Training Sessions" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                whileHover={{ y: -4, boxShadow: "0 8px 28px hsl(var(--accent) / 0.14)", transition: { duration: 0.2 } }}
                className="flex flex-col items-center justify-center text-center rounded-2xl px-6 py-8 transition-colors duration-300 cursor-default"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  boxShadow: "0 2px 12px hsl(var(--foreground) / 0.05)",
                }}
              >
                <span className="text-4xl font-extrabold mb-2 leading-none text-accent">
                  {stat.number}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={closeModal}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

            {/* Modal panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 24 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 bg-card border border-border rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden"
              style={{ boxShadow: "0 32px 80px hsl(var(--foreground) / 0.12), 0 0 0 1px hsl(var(--border))" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-card/90 backdrop-blur-sm border border-border hover:bg-muted hover:border-accent/40 transition-all duration-200 shadow-md"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-foreground" />
              </button>

              {/* Certificate image — fully contained, not cropped */}
              <div className="w-full bg-muted/30 flex items-center justify-center p-6 pt-10">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full max-h-[55vh] object-contain rounded-xl"
                  style={{ filter: "drop-shadow(0 4px 24px hsl(var(--foreground) / 0.12))" }}
                />
              </div>

              {/* Meta row */}
              <div className="px-6 py-5 border-t border-border flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                  <Badge
                    variant="outline"
                    className={`text-[10px] uppercase tracking-wider mb-2 px-2.5 py-1 font-semibold ${
                      selectedCert.type === "certification"
                        ? "bg-[#EEF2FF] text-[#4F46E5] border-[#C7D2FE] dark:bg-[rgba(79,70,229,0.15)] dark:text-[#A5B4FC] dark:border-[rgba(165,180,252,0.3)]"
                        : "bg-[#ECFEFF] text-[#0891B2] border-[#67E8F9] dark:bg-[rgba(6,182,212,0.15)] dark:text-[#67E8F9] dark:border-[rgba(103,232,249,0.3)]"
                    }`}
                  >
                    {selectedCert.type === "certification" ? "Certification" : "FDP / Workshop"}
                  </Badge>
                  <h3 className="text-lg font-bold text-foreground mb-0.5">
                    {selectedCert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedCert.issuer} &middot; {selectedCert.year}
                  </p>
                </div>
                {selectedCert.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed sm:max-w-xs sm:text-right">
                    {selectedCert.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
