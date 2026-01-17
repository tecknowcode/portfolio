import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Award, Download, Code2, LineChart, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Code2,
    title: "Technical Excellence",
    description: "Proficient in Python, SQL, and cutting-edge ML frameworks",
  },
  {
    icon: LineChart,
    title: "Data-Driven",
    description: "Transforming raw data into actionable business insights",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Building AI solutions that solve real-world problems",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Data Science Freelancer",
    description: "Delivering ML solutions for startups and enterprises",
    icon: Briefcase,
  },
  {
    year: "2023",
    title: "Advanced Certifications",
    description: "IBM, Coursera, DataCamp specializations completed",
    icon: Award,
  },
  {
    year: "2022",
    title: "B.Sc. Data Science",
    description: "Graduated with focus on Machine Learning & Analytics",
    icon: GraduationCap,
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">About Me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            The <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate data scientist on a mission to unlock the power of data and machine learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Hello, I'm Siddhesh! 👋</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Based in vibrant <span className="text-foreground font-medium">Mumbai, India</span>, 
                  I'm a data scientist who believes that every dataset tells a story waiting to be discovered.
                </p>
                <p>
                  My journey into data science began with a simple curiosity: 
                  <span className="text-secondary font-medium"> How can we make machines learn from patterns humans can't see?</span> 
                  This question led me to dive deep into machine learning, NLP, and computer vision.
                </p>
                <p>
                  Today, I specialize in building <span className="text-accent font-medium">end-to-end ML pipelines</span>, 
                  predictive models, and data-driven solutions that help businesses make smarter decisions.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-secondary/5 hover:bg-secondary/10 transition-colors"
                  >
                    <item.icon className="w-8 h-8 mx-auto mb-2 text-secondary" />
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Resume Download */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="mt-8"
              >
                <Button className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-accent to-secondary/20" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.15 }}
                  className="relative pl-20"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-secondary" />
                  </div>
                  
                  {/* Content */}
                  <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <span className="text-secondary font-mono text-sm">{item.year}</span>
                    <h4 className="text-lg font-bold mt-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
