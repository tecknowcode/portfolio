import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "IBM Data Science Professional",
    provider: "IBM",
    year: "2023",
    logo: "🔷",
  },
  {
    name: "Machine Learning Specialization",
    provider: "Coursera",
    year: "2023",
    logo: "📚",
  },
  {
    name: "Data Analyst Professional",
    provider: "DataCamp",
    year: "2022",
    logo: "📊",
  },
  {
    name: "Python for Data Science",
    provider: "IBM",
    year: "2022",
    logo: "🐍",
  },
];

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(217_91%_60%/0.04),transparent_60%)]" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">Credentials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in data science and machine learning
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer"
              style={{ boxShadow: "0 2px 12px rgba(15, 23, 42, 0.06)" }}
            >
              <span className="text-4xl block mb-4">{cert.logo}</span>
              <h4 className="font-semibold text-sm text-foreground group-hover:text-secondary transition-colors mb-2 line-clamp-2">
                {cert.name}
              </h4>
              <p className="text-xs text-muted-foreground">
                {cert.provider} • {cert.year}
              </p>
              <ExternalLink className="w-4 h-4 text-muted-foreground mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center gap-12 mt-12"
        >
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">10+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">50+</div>
            <div className="text-sm text-muted-foreground">Mentees</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
