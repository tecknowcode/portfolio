import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Freelance Data Scientist",
    company: "Self-Employed",
    location: "Mumbai, India",
    period: "2023 — Present",
    type: "current",
    description: "Delivering end-to-end ML solutions for startups and enterprises. Specialized in predictive analytics, NLP, and computer vision projects.",
    achievements: [
      "Delivered 15+ successful projects for clients globally",
      "Achieved 90%+ client satisfaction rating",
      "Built ML models with average 88% accuracy",
      "Specialized in predictive analytics and NLP pipelines",
    ],
    tech: ["Python", "TensorFlow", "AWS", "Docker", "Scikit-learn", "NLP"],
  },
  {
    id: 2,
    title: "Data Science Mentor",
    company: "Online Platforms",
    location: "Remote",
    period: "2022 — Present",
    type: "current",
    description: "Mentoring aspiring data scientists and helping them transition into tech careers through personalized guidance.",
    achievements: [
      "Mentored 50+ students in data science fundamentals",
      "Created comprehensive learning resources",
      "Helped 20+ mentees land their first DS role",
    ],
    tech: ["Python", "SQL", "ML Basics", "Career Coaching"],
  },
  {
    id: 3,
    title: "Data Analytics Intern",
    company: "Tech Startup",
    location: "Mumbai, India",
    period: "2022",
    type: "past",
    description: "Worked on business intelligence and analytics projects, building dashboards and automating reporting workflows.",
    achievements: [
      "Automated 10+ weekly reports saving 20 hours/week",
      "Built interactive Power BI dashboards",
      "Analyzed customer data revealing key insights",
    ],
    tech: ["Python", "SQL", "Power BI", "Excel"],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<number>(1);

  return (
    <section id="experience" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.04),transparent_50%)]" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">Experience</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building expertise through diverse projects, mentorship, and continuous learning
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-secondary via-accent to-secondary/20" />

            <div className="space-y-0">
              {experiences.map((exp, index) => {
                const isOpen = expanded === exp.id;
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative pl-12 pb-10"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-1 w-9 h-9 rounded-full border-2 flex items-center justify-center z-10 transition-colors duration-300 ${
                      exp.type === "current"
                        ? "border-secondary bg-secondary/10"
                        : "border-accent/50 bg-background"
                    }`}>
                      <div className={`w-3 h-3 rounded-full ${exp.type === "current" ? "bg-secondary" : "bg-accent/50"}`} />
                    </div>

                    {/* Header row */}
                    <button
                      onClick={() => setExpanded(isOpen ? -1 : exp.id)}
                      className="w-full text-left group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-bold text-foreground group-hover:text-secondary transition-colors">
                              {exp.company}
                            </h3>
                            <ChevronDown
                              className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                            />
                          </div>
                          <p className="text-secondary text-sm font-medium mt-0.5">{exp.title}</p>
                        </div>
                        <span className="text-sm text-muted-foreground whitespace-nowrap mt-0.5">{exp.period}</span>
                      </div>
                    </button>

                    {/* Expandable content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 rounded-xl border border-border bg-card p-5">
                            <ul className="space-y-2 mb-4">
                              {exp.achievements.map((a, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                  <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                  {a}
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                              {exp.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground hover:border-secondary hover:text-secondary transition-colors"
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
