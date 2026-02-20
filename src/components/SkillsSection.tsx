import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Database, Sigma, Server, Layers, Eye } from "lucide-react";

const skillGroups = [
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
];

const SkillRow = ({ group, delay }: { group: typeof skillGroups[0]; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const Icon = group.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
    >
      <div className="flex items-center gap-3 sm:min-w-[220px] flex-shrink-0">
        <div className="w-10 h-10 rounded-[10px] bg-accent/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        <h4 className="text-base font-semibold text-foreground whitespace-nowrap">{group.title}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="px-3.5 py-1.5 text-[13px] font-medium rounded-full bg-card text-muted-foreground border border-border transition-all duration-200 hover:border-accent hover:text-accent cursor-default"
            style={{ boxShadow: "none" }}
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
    <section
      id="skills"
      className="py-24 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(59,130,246,0.04) 0%, rgba(59,130,246,0) 100%)",
        }}
      />

      <div className="section-container relative z-10" ref={ref}>
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

        <div className="flex flex-col">
          {skillGroups.map((group, i) => (
            <div key={group.title}>
              <SkillRow group={group} delay={0.08 * i} />
              {i < skillGroups.length - 1 && (
                <div className="h-px bg-border my-7" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
