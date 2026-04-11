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
    issuer: "Coursera",
    year: "Mar 2023",
    type: "certification",
    image: getImage("IBM_DS.jpg"),
    description: "Comprehensive professional certification covering data science methodologies, Python, SQL, machine learning, and data visualization.",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera (Stanford)",
    year: "2023",
    type: "certification",
    image: getImage("ML_Specialization.jpg"),
    description: "Advanced specialization in supervised learning, unsupervised learning, recommender systems, and reinforcement learning.",
  },
  {
    title: "Data Analyst Professional",
    issuer: "DataCamp",
    year: "2022",
    type: "certification",
    image: getImage("Data_Analyst.jpg"),
    description: "Professional certification in data analysis using Python, pandas, statistical methods, and data visualization techniques.",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    year: "2022",
    type: "certification",
    image: getImage("Python_DS.jpg"),
    description: "Certification covering Python programming fundamentals, data structures, and libraries for data science applications.",
  },
  {
    title: "Deep Learning with TensorFlow",
    issuer: "Coursera",
    year: "2023",
    type: "certification",
    image: getImage("Deep_Learning_TF.jpg"),
    description: "Hands-on certification in building and training deep neural networks using TensorFlow and Keras.",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2023",
    type: "certification",
    image: getImage("AWS_Cloud.jpg"),
    description: "Foundational certification covering AWS cloud concepts, services, security, architecture, and pricing.",
  },
  {
    title: "Natural Language Processing",
    issuer: "Coursera",
    year: "2022",
    type: "certification",
    image: getImage("NLP.jpg"),
    description: "Specialization in NLP techniques including text classification, sentiment analysis, and sequence models.",
  },
  {
    title: "SQL for Data Science",
    issuer: "UC Davis (Coursera)",
    year: "2022",
    type: "certification",
    image: getImage("SQL_DS.jpg"),
    description: "Certification in SQL querying, data manipulation, aggregation, and database design for data science workflows.",
  },
  {
    title: "FDP on AI & Machine Learning",
    issuer: "AICTE / ISTE",
    year: "2023",
    type: "fdp",
    image: getImage("FDP_AI_ML.jpg"),
    description: "Faculty Development Program covering advanced AI/ML concepts, hands-on labs, and pedagogical methods.",
  },
  {
    title: "Workshop on Deep Learning",
    issuer: "IIT Bombay",
    year: "2023",
    type: "fdp",
    image: getImage("Workshop_DL.jpg"),
    description: "Intensive workshop on deep learning architectures, CNNs, RNNs, and practical applications in research.",
  },
  {
    title: "FDP on Data Analytics",
    issuer: "NPTEL / SWAYAM",
    year: "2022",
    type: "fdp",
    image: getImage("FDP_Data_Analytics.jpg"),
    description: "Faculty program on data analytics methodologies, statistical modeling, and big data tools.",
  },
  {
    title: "Workshop on Cloud Computing & MLOps",
    issuer: "Google Developer Groups",
    year: "2022",
    type: "fdp",
    image: getImage("Workshop_MLOps.jpg"),
    description: "Hands-on workshop covering cloud-native ML pipelines, model deployment, and MLOps best practices.",
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
              { number: "10+", label: "Certifications" },
              { number: "5+", label: "FDP / Workshops" },
              { number: "50+", label: "Mentees Guided" },
              { number: "100+", label: "Training Sessions" },
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
