import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, TrendingUp, Cpu, BarChart3, Database, LineChart, Sigma, Users, Server, Code, Layers, Eye } from "lucide-react";

const coreStrengths = [
  { icon: Brain, label: "End-to-End ML Systems" },
  { icon: TrendingUp, label: "Predictive Analytics" },
  { icon: Cpu, label: "AI Product Development" },
  { icon: BarChart3, label: "Data Storytelling" },
];

const leftSkillGroups = [
  {
    title: "Machine Learning & AI",
    icon: Brain,
    skills: ["Python", "Regression", "Classification", "Clustering", "PCA", "NLP", "Neural Networks", "Transfer Learning", "Ensemble Methods", "LIME"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy", "PySpark", "NLTK", "Matplotlib", "Seaborn"],
  },
  {
    title: "Cloud & Deployment",
    icon: Server,
    skills: ["AWS", "Docker", "MLflow", "DVC", "CI/CD", "Git", "GitHub", "Flask", "Streamlit"],
  },
];

const rightSkillGroups = [
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "BigQuery", "RDBMS"],
  },
  {
    title: "Visualization",
    icon: Eye,
    skills: ["Tableau", "Power BI", "Looker", "Excel", "GenAI Tools"],
  },
  {
    title: "Mathematics",
    icon: Sigma,
    skills: ["Statistics", "Probability", "Hypothesis Testing", "Calculus", "Time Series"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Leadership", "Problem Solving", "Critical Thinking", "Team Collaboration", "Business Understanding"],
  },
];

const SkillGroup = ({ group, delay }: { group: typeof leftSkillGroups[0]; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const Icon = group.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
      style={{ boxShadow: "0 2px 12px rgba(15, 23, 42, 0.06)" }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <h4 className="text-base font-semibold text-foreground">{group.title}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-sm font-medium rounded-full bg-muted text-muted-foreground border border-border transition-all duration-300 hover:bg-accent hover:text-white hover:border-accent hover:shadow-md cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(217_91%_60%/0.04),transparent_60%)]" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Skills & Expertise</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for designing, deploying, and scaling intelligent data solutions.
          </p>
        </motion.div>

        {/* Core Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {coreStrengths.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-5 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                style={{ boxShadow: "0 2px 12px rgba(15, 23, 42, 0.06)" }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Two-column skills */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left - 3/5 */}
          <div className="lg:col-span-3 space-y-5">
            {leftSkillGroups.map((group, i) => (
              <SkillGroup key={group.title} group={group} delay={0.1 * i} />
            ))}
          </div>

          {/* Right - 2/5 */}
          <div className="lg:col-span-2 space-y-5">
            {rightSkillGroups.map((group, i) => (
              <SkillGroup key={group.title} group={group} delay={0.1 * i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
