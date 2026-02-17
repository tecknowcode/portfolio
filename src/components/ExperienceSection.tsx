import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Award, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Freelance Data Scientist",
    company: "Self-Employed",
    location: "Mumbai, India",
    period: "2023 - Present",
    type: "current",
    description: "Delivering end-to-end ML solutions for startups and enterprises. Specialized in predictive analytics, NLP, and computer vision projects.",
    achievements: [
      "Delivered 15+ successful projects for clients globally",
      "Achieved 90%+ client satisfaction rating",
      "Built ML models with average 88% accuracy",
    ],
    tech: ["Python", "TensorFlow", "AWS", "Docker"],
  },
  {
    id: 2,
    title: "Data Science Mentor",
    company: "Online Platforms",
    location: "Remote",
    period: "2022 - Present",
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

  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.05),transparent_50%)]" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
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

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden ${
                exp.type === "current" ? "border-l-4 border-l-accent" : ""
              }`}
            >
              {exp.type === "current" && (
                <div className="absolute top-4 right-4">
                  <span className="flex items-center gap-1 text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    Current
                  </span>
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Briefcase className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-secondary font-medium">{exp.company}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" />
                  Key Achievements
                </h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
