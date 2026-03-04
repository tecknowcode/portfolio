import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Brain, BarChart2, Layers, Cloud, Database, Eye, Sigma, Binary, GitBranch, Container, Workflow, PieChart, LineChart, BookOpen, FlaskConical, Network, ScanSearch, Cpu, Table2, HardDrive, BarChart, Microscope, Calculator, TrendingUp, Globe, Server } from "lucide-react";

type Skill = {
  label: string;
  icon: React.ElementType;
  featured?: boolean;
};

type Category = {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: "Featured",
    icon: Star,
    skills: [
      { label: "Python", icon: Brain, featured: true },
      { label: "NLP", icon: BookOpen, featured: true },
      { label: "Neural Networks", icon: Cpu, featured: true },
      { label: "TensorFlow", icon: FlaskConical, featured: true },
      { label: "PyTorch", icon: FlaskConical, featured: true },
      { label: "Scikit-Learn", icon: Layers, featured: true },
      { label: "AWS", icon: Cloud, featured: true },
      { label: "Docker", icon: Container, featured: true },
      { label: "Tableau", icon: BarChart2, featured: true },
      { label: "Power BI", icon: PieChart, featured: true },
    ],
  },
  {
    title: "Machine Learning & AI",
    icon: Brain,
    skills: [
      { label: "Python", icon: Brain },
      { label: "Regression", icon: TrendingUp },
      { label: "Classification", icon: Binary },
      { label: "Clustering", icon: Network },
      { label: "PCA", icon: ScanSearch },
      { label: "NLP", icon: BookOpen },
      { label: "Neural Networks", icon: Cpu },
      { label: "Transfer Learning", icon: Workflow },
      { label: "Ensemble Methods", icon: Layers },
      { label: "LIME", icon: Microscope },
    ],
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: [
      { label: "TensorFlow", icon: FlaskConical },
      { label: "PyTorch", icon: FlaskConical },
      { label: "Scikit-Learn", icon: Layers },
      { label: "Pandas", icon: Table2 },
      { label: "NumPy", icon: Calculator },
      { label: "PySpark", icon: Cpu },
      { label: "NLTK", icon: BookOpen },
      { label: "Matplotlib", icon: LineChart },
      { label: "Seaborn", icon: BarChart2 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { label: "AWS", icon: Cloud },
      { label: "Docker", icon: Container },
      { label: "MLflow", icon: Workflow },
      { label: "DVC", icon: GitBranch },
      { label: "CI/CD", icon: GitBranch },
      { label: "Git", icon: GitBranch },
      { label: "GitHub", icon: Globe },
      { label: "Flask", icon: Server },
      { label: "Streamlit", icon: BarChart },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { label: "PostgreSQL", icon: Database },
      { label: "MySQL", icon: Database },
      { label: "MongoDB", icon: HardDrive },
      { label: "BigQuery", icon: Database },
      { label: "RDBMS", icon: Table2 },
    ],
  },
  {
    title: "Visualization",
    icon: Eye,
    skills: [
      { label: "Tableau", icon: BarChart2 },
      { label: "Power BI", icon: PieChart },
      { label: "Looker", icon: Eye },
      { label: "Excel", icon: Table2 },
      { label: "GenAI Tools", icon: Cpu },
    ],
  },
  {
    title: "Mathematics",
    icon: Sigma,
    skills: [
      { label: "Statistics", icon: BarChart2 },
      { label: "Probability", icon: Sigma },
      { label: "Hypothesis Testing", icon: Microscope },
      { label: "Calculus", icon: Calculator },
      { label: "Time Series", icon: TrendingUp },
    ],
  },
];

const SkillTag = ({ skill, index, featured }: { skill: Skill; index: number; featured?: boolean }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.015 }}
      className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border cursor-default select-none transition-all duration-200"
      style={{
        background: featured ? "hsl(var(--accent) / 0.07)" : "hsl(var(--card))",
        borderColor: featured ? "hsl(var(--accent) / 0.25)" : "hsl(var(--border))",
      }}
      whileHover={{
        y: -2,
        backgroundColor: "hsl(var(--accent) / 0.08)",
        borderColor: "hsl(var(--accent) / 0.3)",
      }}
    >
      <Icon
        className="w-3.5 h-3.5 flex-shrink-0 transition-colors duration-200"
        style={{ color: "hsl(var(--accent))" }}
        strokeWidth={1.75}
      />
      <span className="text-sm font-medium" style={{ color: "hsl(var(--foreground))" }}>
        {skill.label}
      </span>
    </motion.div>
  );
};

const CategoryBlock = ({ category, catIndex }: { category: Category; catIndex: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const CatIcon = category.icon;
  const isFeatured = category.title === "Featured";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: catIndex * 0.07 }}
      className="mb-10 last:mb-0"
    >
      {/* Category Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <span
          className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
          style={{ background: "hsl(var(--accent) / 0.1)" }}
        >
          <CatIcon className="w-3.5 h-3.5" style={{ color: "hsl(var(--accent))" }} strokeWidth={2} />
        </span>
        <h3 className="text-base font-semibold" style={{ color: "hsl(var(--foreground))" }}>
          {category.title}
        </h3>
        <span
          className="text-xs font-medium px-2 py-0.5 rounded-full ml-1"
          style={{ background: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" }}
        >
          {category.skills.length}
        </span>
        <div className="flex-1 h-px ml-1" style={{ background: "hsl(var(--border))" }} />
      </div>

      {/* Skills Wrap */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <SkillTag key={skill.label} skill={skill} index={i} featured={isFeatured} />
        ))}
      </div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const totalSkills = new Set(categories.flatMap((c) => c.skills.map((s) => s.label))).size;

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
          className="text-center mb-14"
        >
          <span className="font-semibold text-sm uppercase tracking-widest" style={{ color: "hsl(var(--accent))" }}>
            Skills & Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4" style={{ color: "hsl(var(--foreground))" }}>
            Technical{" "}
            <span
              style={{
                background: "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent) / 0.7))",
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

        {/* Category Blocks */}
        <div
          className="rounded-2xl border p-6 md:p-8"
          style={{ background: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}
        >
          {categories.map((cat, i) => (
            <CategoryBlock key={cat.title} category={cat} catIndex={i} />
          ))}
        </div>

        {/* Count Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8"
        >
          <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ color: "hsl(var(--muted-foreground))", background: "hsl(var(--muted))" }}>
            {totalSkills} unique skills across {categories.length} categories
          </span>
        </motion.div>
      </div>
    </section>
  );
};
