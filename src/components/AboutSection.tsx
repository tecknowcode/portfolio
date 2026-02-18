import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Users, Wrench, BookOpen, Plane, Brain } from "lucide-react";

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "25+", label: "Projects Completed" },
  { number: "100+", label: "Students Mentored" },
  { number: "5+", label: "Certifications" },
];

const timeline = [
  {
    year: "2025",
    title: "Masters in Data Science & ML",
    institution: "Scaler Academy",
    description: "Advanced specialization in machine learning algorithms, deep learning, and scalable AI systems.",
    icon: Brain,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    year: "2021",
    title: "M.E in Computer Engineering",
    institution: "Mumbai University",
    description: "Research-focused postgraduate degree with emphasis on intelligent computing and data systems.",
    icon: Award,
    gradient: "from-violet-500 to-blue-500",
  },
  {
    year: "2007",
    title: "B.E in Computer Engineering",
    institution: "Mumbai University",
    description: "Foundation in computer science fundamentals, software engineering, and systems design.",
    icon: GraduationCap,
    gradient: "from-blue-600 to-indigo-500",
  },
];

const beyondData = [
  { icon: Users, label: "Mentoring Students" },
  { icon: Wrench, label: "Exploring AI Tools" },
  { icon: BookOpen, label: "Teaching" },
  { icon: Plane, label: "Travel" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-28 bg-muted">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-widest">About Me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 text-foreground">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column — 60% */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {/* Name + Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-1">
              Siddhesh Masurkar
            </h3>
            <p className="text-accent font-semibold text-lg mb-6">
              Senior Data Scientist | AI Solutions Architect
            </p>

            {/* Brand Statement */}
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              I transform complex data into intelligent systems that drive business decisions.
              With over a decade of experience in analytics, machine learning, and education,
              I specialize in building end-to-end AI solutions that create measurable impact.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-3xl font-bold text-accent">{stat.number}</span>
                  <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column — 40% */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            {/* Clean Corporate Timeline */}
            <div className="bg-card rounded-[18px] p-7 border border-border" style={{ boxShadow: '0 6px 20px rgba(0,0,0,0.06)' }}>
              <span className="text-accent font-medium text-xs uppercase tracking-widest">Career Path</span>
              <h4 className="text-xl font-bold text-foreground mt-1 mb-7">Career Journey</h4>

              <div className="relative pl-8">
                {/* Vertical timeline line */}
                <div className="absolute left-[5px] top-2 bottom-2 w-0.5 bg-border" />

                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
                      className="relative group"
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-8 top-5 z-10 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-accent border-[3px] border-card" style={{ boxShadow: '0 0 0 3px hsl(217 91% 60% / 0.15)' }} />
                      </div>

                      {/* Card */}
                      <div className="bg-card rounded-[14px] p-5 border border-border transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-200 cursor-default" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                        }}
                      >
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className="w-10 h-10 rounded-[10px] bg-accent/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                            <item.icon className="w-5 h-5 text-accent" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <span className="text-accent font-semibold text-sm">{item.year}</span>
                            <h5 className="font-semibold text-foreground text-base mt-0.5 leading-snug">{item.title}</h5>
                            <p className="text-muted-foreground text-sm mt-0.5">{item.institution}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Beyond Data */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-10"
            >
              <h4 className="text-xl font-bold text-foreground mb-4">Beyond Data</h4>
              <div className="grid grid-cols-2 gap-3">
                {beyondData.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border"
                  >
                    <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
