import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, Brain, BarChart2, Layers, Cloud, Database, Eye, Sigma, Binary, GitBranch, Container, Workflow, PieChart, LineChart, BookOpen, FlaskConical, Network, ScanSearch, Cpu, Table2, HardDrive, BarChart, Microscope, Calculator, TrendingUp, Globe, Server } from "lucide-react";

type Skill = {
  label: string;
  icon: React.ElementType;
  category: string;
  featured?: boolean;
};

const skills: Skill[] = [
  // Machine Learning & AI
  { label: "Python", icon: Brain, category: "Machine Learning & AI", featured: true },
  { label: "Regression", icon: TrendingUp, category: "Machine Learning & AI" },
  { label: "Classification", icon: Binary, category: "Machine Learning & AI" },
  { label: "Clustering", icon: Network, category: "Machine Learning & AI" },
  { label: "PCA", icon: ScanSearch, category: "Machine Learning & AI" },
  { label: "NLP", icon: BookOpen, category: "Machine Learning & AI", featured: true },
  { label: "Neural Networks", icon: Cpu, category: "Machine Learning & AI", featured: true },
  { label: "Transfer Learning", icon: Workflow, category: "Machine Learning & AI" },
  { label: "Ensemble Methods", icon: Layers, category: "Machine Learning & AI" },
  { label: "LIME", icon: Microscope, category: "Machine Learning & AI" },

  // Frameworks
  { label: "TensorFlow", icon: FlaskConical, category: "Frameworks", featured: true },
  { label: "PyTorch", icon: FlaskConical, category: "Frameworks", featured: true },
  { label: "Scikit-Learn", icon: Layers, category: "Frameworks", featured: true },
  { label: "Pandas", icon: Table2, category: "Frameworks" },
  { label: "NumPy", icon: Calculator, category: "Frameworks" },
  { label: "PySpark", icon: Cpu, category: "Frameworks" },
  { label: "NLTK", icon: BookOpen, category: "Frameworks" },
  { label: "Matplotlib", icon: LineChart, category: "Frameworks" },
  { label: "Seaborn", icon: BarChart2, category: "Frameworks" },

  // Cloud & Deployment
  { label: "AWS", icon: Cloud, category: "Cloud & Deployment", featured: true },
  { label: "Docker", icon: Container, category: "Cloud & Deployment", featured: true },
  { label: "MLflow", icon: Workflow, category: "Cloud & Deployment" },
  { label: "DVC", icon: GitBranch, category: "Cloud & Deployment" },
  { label: "CI/CD", icon: GitBranch, category: "Cloud & Deployment" },
  { label: "Git", icon: GitBranch, category: "Cloud & Deployment" },
  { label: "GitHub", icon: Globe, category: "Cloud & Deployment" },
  { label: "Flask", icon: Server, category: "Cloud & Deployment" },
  { label: "Streamlit", icon: BarChart, category: "Cloud & Deployment" },

  // Databases
  { label: "PostgreSQL", icon: Database, category: "Databases" },
  { label: "MySQL", icon: Database, category: "Databases" },
  { label: "MongoDB", icon: HardDrive, category: "Databases" },
  { label: "BigQuery", icon: Database, category: "Databases" },
  { label: "RDBMS", icon: Table2, category: "Databases" },

  // Visualization
  { label: "Tableau", icon: BarChart2, category: "Visualization", featured: true },
  { label: "Power BI", icon: PieChart, category: "Visualization", featured: true },
  { label: "Looker", icon: Eye, category: "Visualization" },
  { label: "Excel", icon: Table2, category: "Visualization" },
  { label: "GenAI Tools", icon: Cpu, category: "Visualization" },

  // Mathematics
  { label: "Statistics", icon: BarChart2, category: "Mathematics" },
  { label: "Probability", icon: Sigma, category: "Mathematics" },
  { label: "Hypothesis Testing", icon: Microscope, category: "Mathematics" },
  { label: "Calculus", icon: Calculator, category: "Mathematics" },
  { label: "Time Series", icon: TrendingUp, category: "Mathematics" },
];

const filters = [
  { label: "Featured", value: "Featured", icon: Star },
  { label: "Machine Learning & AI", value: "Machine Learning & AI", icon: Brain },
  { label: "Frameworks", value: "Frameworks", icon: Layers },
  { label: "Cloud & Deployment", value: "Cloud & Deployment", icon: Cloud },
  { label: "Databases", value: "Databases", icon: Database },
  { label: "Visualization", value: "Visualization", icon: Eye },
  { label: "Mathematics", value: "Mathematics", icon: Sigma },
  { label: "All", value: "All" },
];

const SkillChip = ({ skill, index }: { skill: Skill; index: number }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, delay: index * 0.02 }}
      className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border cursor-default select-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
      style={{
        background: "hsl(var(--card))",
        borderColor: "hsl(var(--border))",
      }}
      whileHover={{
        borderColor: "hsl(var(--accent) / 0.35)",
        backgroundColor: "hsl(var(--accent) / 0.04)",
      }}
    >
      <span
        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300"
        style={{ background: "hsl(var(--accent) / 0.1)" }}
      >
        <Icon
          className="w-3.5 h-3.5 transition-colors duration-300"
          style={{ color: "hsl(var(--accent))" }}
          strokeWidth={1.75}
        />
      </span>
      <span className="text-sm font-medium" style={{ color: "hsl(var(--foreground))" }}>
        {skill.label}
      </span>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills =
    activeFilter === "All"
      ? skills
      : activeFilter === "Featured"
      ? skills.filter((s) => s.featured)
      : skills.filter((s) => s.category === activeFilter);

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "hsl(var(--muted) / 0.3)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, hsl(var(--accent) / 0.04) 0%, transparent 60%)" }}
      />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: "hsl(var(--accent))" }}>
            Skills & Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4" style={{ color: "hsl(var(--foreground))" }}>
            Technical{" "}
            <span
              style={{
                background: "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent-hover, var(--accent))))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Arsenal
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "hsl(var(--muted-foreground))" }}>
            A comprehensive toolkit for designing, deploying, and scaling intelligent data solutions.
          </p>
        </motion.div>

        {/* Filter Chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;
            const FilterIcon = filter.icon;
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer select-none"
                style={
                  isActive
                    ? {
                        background: "hsl(var(--accent))",
                        color: "hsl(var(--accent-foreground))",
                        borderColor: "transparent",
                        boxShadow: "0 4px 16px hsl(var(--accent) / 0.25)",
                        transform: "scale(1.03)",
                      }
                    : {
                        background: "hsl(var(--card))",
                        color: "hsl(var(--muted-foreground))",
                        borderColor: "hsl(var(--border))",
                      }
                }
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "hsl(var(--accent) / 0.4)";
                    (e.currentTarget as HTMLButtonElement).style.color = "hsl(var(--foreground))";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 2px 8px hsl(var(--accent) / 0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "hsl(var(--border))";
                    (e.currentTarget as HTMLButtonElement).style.color = "hsl(var(--muted-foreground))";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                  }
                }}
              >
                {FilterIcon && (
                  <FilterIcon
                    className="w-3.5 h-3.5 flex-shrink-0"
                    strokeWidth={2}
                    fill={isActive && filter.value === "Featured" ? "currentColor" : "none"}
                  />
                )}
                {filter.label}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Chips Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {filteredSkills.map((skill, i) => (
              <SkillChip key={`${activeFilter}-${skill.label}`} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Count Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ color: "hsl(var(--muted-foreground))", background: "hsl(var(--muted))" }}>
            {filteredSkills.length} skill{filteredSkills.length !== 1 ? "s" : ""} {activeFilter !== "All" ? `in ${activeFilter}` : "total"}
          </span>
        </motion.div>
      </div>
    </section>
  );
};
