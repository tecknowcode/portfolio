import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const skillCategories = [
  {
    name: "Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "R", level: 75 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    name: "ML & AI",
    icon: "🤖",
    skills: [
      { name: "Scikit-learn", level: 92 },
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Keras", level: 88 },
    ],
  },
  {
    name: "Data Tools",
    icon: "📊",
    skills: [
      { name: "Pandas", level: 95 },
      { name: "NumPy", level: 93 },
      { name: "Matplotlib", level: 88 },
      { name: "Power BI", level: 82 },
    ],
  },
  {
    name: "Databases",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 85 },
      { name: "SQLite", level: 90 },
    ],
  },
];

const softSkills = [
  { skill: "Problem Solving", value: 95 },
  { skill: "Communication", value: 88 },
  { skill: "Teamwork", value: 90 },
  { skill: "Analytical Thinking", value: 92 },
  { skill: "Adaptability", value: 85 },
  { skill: "Leadership", value: 80 },
];

const COLORS = ["#3B82F6", "#10B981", "#8B5CF6", "#F59E0B", "#EC4899", "#06B6D4"];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-secondary font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
        />
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">Skills</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            The <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills honed through projects and continuous learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Tabs & Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skillCategories.map((category, index) => (
                <motion.button
                  key={category.name}
                  onClick={() => setActiveCategory(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === index
                      ? "bg-secondary text-white shadow-lg shadow-secondary/25"
                      : "bg-card hover:bg-secondary/10"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Skills Grid */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span>{skillCategories[activeCategory].icon}</span>
                {skillCategories[activeCategory].name}
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-8">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </motion.div>

            {/* Quick Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {["Git", "Docker", "AWS", "Streamlit", "Flask", "FastAPI", "Jupyter", "NLP", "Computer Vision", "Deep Learning"].map(
                (skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="skill-badge cursor-default"
                  >
                    {skill}
                  </motion.span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Soft Skills Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-center">Soft Skills</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={softSkills}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis 
                    dataKey="skill" 
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                  />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="hsl(var(--secondary))"
                    fill="hsl(var(--secondary))"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart for skill distribution */}
            <div className="h-48 mt-4">
              <h4 className="text-sm font-medium text-center mb-2 text-muted-foreground">Focus Areas</h4>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: "ML/AI", value: 35 },
                      { name: "Data Analysis", value: 25 },
                      { name: "NLP", value: 20 },
                      { name: "Visualization", value: 20 },
                    ]}
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {COLORS.slice(0, 4).map((color, index) => (
                      <Cell key={`cell-${index}`} fill={color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
