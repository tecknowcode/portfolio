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
            {/* Premium Timeline */}
            <div className="relative rounded-2xl p-6 md:p-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(222 47% 11%), hsl(222 47% 5%))' }}>
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20 blur-3xl" style={{ background: 'hsl(217 91% 60%)' }} />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-10 blur-3xl" style={{ background: 'hsl(217 91% 60%)' }} />

              <h4 className="text-xl font-bold text-white mb-8 relative z-10">Career Journey</h4>

              <div className="relative pl-10">
                {/* Glowing vertical line */}
                <div className="absolute left-[13px] top-2 bottom-2 w-px" style={{ background: 'linear-gradient(to bottom, hsl(217 91% 60% / 0.6), hsl(217 91% 60% / 0.1))' }} />
                <div className="absolute left-[12px] top-2 bottom-2 w-[3px] blur-sm" style={{ background: 'linear-gradient(to bottom, hsl(217 91% 60% / 0.4), transparent)' }} />

                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                      className="relative group"
                    >
                      {/* Pulsing timeline dot */}
                      <div className="absolute -left-10 top-5 z-10">
                        <div className="w-[26px] h-[26px] rounded-full flex items-center justify-center" style={{ background: 'hsl(222 47% 11%)' }}>
                          <div className="w-3 h-3 rounded-full pulse-glow" style={{ background: 'hsl(217 91% 60%)' }} />
                        </div>
                      </div>

                      {/* Glass card */}
                      <div
                        className="relative rounded-2xl p-5 backdrop-blur-xl border transition-all duration-500 group-hover:-translate-y-1 cursor-default overflow-hidden"
                        style={{
                          background: 'hsl(217 33% 17% / 0.5)',
                          borderColor: 'hsl(210 40% 98% / 0.08)',
                          boxShadow: '0 4px 24px hsl(222 47% 5% / 0.3)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'hsl(217 91% 60% / 0.3)';
                          e.currentTarget.style.boxShadow = '0 8px 32px hsl(217 91% 60% / 0.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'hsl(210 40% 98% / 0.08)';
                          e.currentTarget.style.boxShadow = '0 4px 24px hsl(222 47% 5% / 0.3)';
                        }}
                      >
                        {/* Gradient border accent on hover */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(135deg, hsl(217 91% 60% / 0.05), transparent)' }} />

                        <div className="flex items-start gap-4 relative z-10">
                          {/* Icon with gradient */}
                          <div
                            className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                          >
                            <item.icon className="w-5 h-5 text-white" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <span className="font-mono text-sm font-bold" style={{ color: 'hsl(217 91% 60%)' }}>{item.year}</span>
                            <h5 className="font-bold text-white text-sm mt-1 leading-snug">{item.title}</h5>
                            <p className="text-xs mt-0.5" style={{ color: 'hsl(215 20% 65%)' }}>{item.institution}</p>
                            <p className="text-xs mt-2 leading-relaxed" style={{ color: 'hsl(215 16% 47%)' }}>{item.description}</p>
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
