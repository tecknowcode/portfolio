import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Data Scientist",
    company: "Freelance | Consultant",
    location: "Remote",
    period: "2021 — Present",
    type: "current",
    achievements: [
      "Delivered 5+ successful projects for clients globally",
      "Achieved 90%+ client satisfaction rating",
      "Built ML models with average 88% accuracy",
      "Specialized in predictive analytics and NLP pipelines",
    ],
    tech: ["Python", "TensorFlow", "AWS", "Docker", "Scikit-learn", "NLP"],
  },
  {
    id: 2,
    title: "Data Science Mentor",
    company: "SBMP&COE, Mumbai",
    location: "Mumbai, India",
    period: "2010 — Present",
    type: "current",
    achievements: [
      "Mentored 100+ students in data science, covering real-world problem solving",
      "Designed and delivered structured curriculum including EDA, model building, and deployment concepts",
      "Guided 50+ final-year and capstone projects from ideation to implementation"
    ],
    tech: ["Python", "SQL", "ML Basics", "Career Coaching"],
  },
  {
    id: 3,
    title: "Data Analytics Intern",
    company: "Ybi Foundation",
    location: "Remote, India",
    period: "2023",
    type: "past",
    achievements: [
      "Performed data cleaning, preprocessing, and exploratory data analysis (EDA) on structured datasets using Python and Pandas.", 
      "Developed dashboards and visualizations in Power BI/Tableau to monitor KPIs and business trends.", 
      "Wrote optimized SQL queries to extract and analyze data from relational databases."
    ],
    tech: ["Python", "SQL", "Power BI", "Excel"],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<number>(1);

  return (
    <section id="experience" className="py-24 md:py-32" style={{ background: "hsl(var(--background))" }}>
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "hsl(var(--accent))" }}>
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4" style={{ color: "hsl(var(--foreground))" }}>
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: "hsl(var(--muted-foreground))" }}>
            Building expertise through diverse projects, mentorship, and continuous learning
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute top-3 bottom-3 w-[2px] rounded-full"
              style={{
                left: "11px",
                background: "linear-gradient(to bottom, hsl(var(--accent)), hsl(var(--accent) / 0.15))",
              }}
            />

            <div className="space-y-2">
              {experiences.map((exp, index) => {
                const isOpen = expanded === exp.id;
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.12 }}
                    className="relative pl-10"
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute top-[14px] flex items-center justify-center rounded-full z-10 transition-all duration-300"
                      style={{
                        left: 0,
                        width: "22px",
                        height: "22px",
                        background: isOpen ? "hsl(var(--accent))" : "hsl(var(--card))",
                        border: `2px solid ${isOpen ? "hsl(var(--accent))" : "hsl(var(--border))"}`,
                        boxShadow: isOpen ? "0 0 0 4px hsl(var(--accent) / 0.12)" : "none",
                      }}
                    >
                      <div
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: "7px",
                          height: "7px",
                          background: isOpen ? "hsl(var(--card))" : "hsl(var(--accent))",
                        }}
                      />
                    </div>

                    {/* Clickable Header */}
                    <button
                      onClick={() => setExpanded(isOpen ? -1 : exp.id)}
                      className="w-full text-left rounded-xl px-5 py-4 transition-all duration-200 group"
                      style={{
                        background: isOpen ? "hsl(var(--card))" : "transparent",
                        boxShadow: isOpen ? "0 1px 4px hsl(var(--foreground) / 0.06)" : "none",
                      }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h3
                              className="text-base font-bold leading-tight transition-colors"
                              style={{ color: isOpen ? "hsl(var(--accent))" : "hsl(var(--foreground))" }}
                            >
                              {exp.company}
                            </h3>
                            <ChevronDown
                              className="shrink-0 transition-transform duration-300"
                              style={{
                                width: "15px",
                                height: "15px",
                                color: "hsl(var(--muted-foreground))",
                                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                              }}
                            />
                          </div>
                          <p
                            className="text-sm mt-0.5 font-medium"
                            style={{ color: "hsl(var(--muted-foreground))" }}
                          >
                            {exp.title}
                          </p>
                        </div>
                        <span
                          className="text-sm font-medium whitespace-nowrap shrink-0"
                          style={{ color: "hsl(var(--muted-foreground))" }}
                        >
                          {exp.period}
                        </span>
                      </div>
                    </button>

                    {/* Expandable Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                          className="overflow-hidden px-5"
                        >
                          <div
                            className="rounded-xl px-5 py-4 mb-4"
                            style={{
                              background: "hsl(var(--muted))",
                              border: "1px solid hsl(var(--border))",
                            }}
                          >
                            {/* Achievements */}
                            <ul className="space-y-2 mb-4">
                              {exp.achievements.map((a, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "hsl(var(--foreground))" }}>
                                  <span
                                    className="mt-[7px] shrink-0 rounded-full"
                                    style={{
                                      width: "6px",
                                      height: "6px",
                                      background: "hsl(var(--accent))",
                                    }}
                                  />
                                  {a}
                                </li>
                              ))}
                            </ul>

                            {/* Divider */}
                            <div className="mb-3" style={{ height: "1px", background: "hsl(var(--border))" }} />

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-2">
                              {exp.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-xs px-3 py-1 rounded-full font-medium transition-colors"
                                  style={{
                                    border: "1px solid hsl(var(--border))",
                                    background: "hsl(var(--card))",
                                    color: "hsl(var(--foreground))",
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
