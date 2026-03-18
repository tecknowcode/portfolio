import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, BookOpen, TrendingUp, Brain } from "lucide-react";

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "15+", label: "Projects Completed" },
  { number: "100+", label: "Students Mentored" },
  { number: "25+", label: "Certifications" },
];

const careerJourney = [
  {
    period: "2024 – 2026",
    role: "Masters in DSML",
    org: "Scalar Academy",
    icon: TrendingUp,
    current: true,
    bullets: [],
  },
  {
    period: "2017 – 2020",
    role: "ME in Computer Engineering",
    org: "Mumbai University",
    icon: Brain,
    current: false,
    bullets: [],
  },
  {
    period: "2003 – 2007",
    role: "BE in Computer Engineering",
    org: "Mumbai University",
    icon: Briefcase,
    current: false,
    bullets: [],
  },
  {
    period: "2000 – 2003",
    role: "Diploma in Computer Engg.",
    org: "MSBTE",
    icon: Briefcase,
    current: false,
    bullets: [],
  },
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
              Data Scientist | ML Engineer
            </p>

            {/* Brand Statement */}
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 text-justify">
              I transform complex data into intelligent systems that drive business decisions.
              With over a 5 years of experience in analytics, machine learning, and education,
              I specialize in building end-to-end AI solutions that create measurable impact. 
            <br></br>
              I am experienced Data Scientist (5+ years) skilled in machine learning, deep learning, 
              time series forecasting, and statistical modeling with hands-on expertise in NLP, PyTorch. 
            <br></br>  
              Proven track record of building scalable, interpretable models and delivering actionable 
              insights in collaboration with cross-functional teams. Passionate about mentoring, knowledge 
              sharing, and exploring emerging areas like LLM, agentic AI. 
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
            {/* Career Journey Timeline */}
            <div className="bg-card rounded-[18px] p-7 border border-border shadow-sm">
              <span className="text-accent font-medium text-xs uppercase tracking-widest">Career Path</span>
              <h4 className="text-xl font-bold text-foreground mt-1 mb-7">Academic Foundation</h4>

              <div className="relative pl-9">
                {/* Vertical line */}
                <div className="absolute left-[7px] top-1 bottom-1 w-px bg-accent/20" />

                <div className="space-y-6">
                  {careerJourney.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.role}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
                        className="relative group"
                      >
                        {/* Timeline marker */}
                        <div className="absolute -left-9 top-4 z-10">
                          <div className={`w-[15px] h-[15px] rounded-full border-2 flex items-center justify-center ${item.current ? 'bg-accent border-accent' : 'bg-card border-accent/50'}`}>
                            {item.current && <div className="w-1.5 h-1.5 rounded-full bg-card" />}
                          </div>
                        </div>

                        {/* Entry card */}
                        <div className="bg-muted/40 rounded-[14px] p-4 border border-border transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent/30 group-hover:shadow-md cursor-default">
                          {/* Header row */}
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 rounded-[8px] bg-accent/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-4 h-4 text-accent" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2 flex-wrap">
                                <h5 className="font-semibold text-foreground text-sm leading-snug">{item.role}</h5>
                                <span className="text-accent/70 text-xs font-medium shrink-0">{item.period}</span>
                              </div>
                              <p className="text-muted-foreground text-xs mt-0.5">{item.org}</p>
                            </div>
                          </div>

                          {/* Bullet points */}
                          <ul className="space-y-1.5 pl-1">
                            {item.bullets.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/50 shrink-0" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};
