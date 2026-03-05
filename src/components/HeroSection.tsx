import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowDown } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const titles = ["Data Scientist", "ML Engineer", "AI Developer", "Analytics Expert"];

export const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentTitle) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentTitle.substring(0, displayText.length - 1)
          : currentTitle.substring(0, displayText.length + 1)
      );
    }, timeout);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--accent)/0.035)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--accent)/0.035)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Soft glow top-left */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full blur-3xl"
          style={{ background: "hsl(var(--secondary)/0.12)" }}
        />
        {/* Soft glow bottom-right */}
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -right-24 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: "hsl(var(--accent)/0.10)" }}
        />
      </div>

      {/* Two-column layout */}
      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 py-16 md:py-24">

          {/* ── LEFT: Text Content ── */}
          <div className="flex-1 max-w-xl text-center md:text-left">

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-base font-medium mb-2"
              style={{ color: "hsl(var(--accent))" }}
            >
              Hi, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3"
            >
              <span className="gradient-text">Siddhesh Masurkar</span>
            </motion.h1>

            {/* Typewriter Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-xl sm:text-2xl font-medium mb-4 h-9 flex items-center justify-center md:justify-start"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              <span>{displayText}</span>
              <span
                className="inline-block w-0.5 h-6 ml-1"
                style={{
                  background: "hsl(var(--accent))",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="inline-flex items-center gap-1.5 mb-5 justify-center md:justify-start"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              <MapPin className="w-3.5 h-3.5" style={{ color: "hsl(var(--accent))" }} />
              <span className="text-sm">Mumbai, India</span>
              <span className="text-base">🇮🇳</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-base md:text-lg leading-relaxed mb-8 max-w-[520px] mx-auto md:mx-0"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              Transforming complex data into strategic insights. I build{" "}
              <span className="font-medium" style={{ color: "hsl(var(--foreground))" }}>
                intelligent ML solutions
              </span>{" "}
              that drive business growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
            >
              <motion.a
                href="#projects"
                className="hero-button"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="hero-button-outline"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Start Your Project
              </motion.a>
            </motion.div>
          </div>

          {/* ── RIGHT: Profile Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
          className="flex-shrink-0 flex items-center justify-center md:flex-1 md:justify-center"
          >
            {/* Glow backdrop */}
            <div
              className="relative flex items-center justify-center"
              style={{ width: 300, height: 300 }}
            >
              <div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{ background: "hsl(var(--accent)/0.15)", transform: "scale(1.25)" }}
              />

              {/* Spinning gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, hsl(var(--accent)), hsl(var(--accent)/0.3), hsl(var(--accent)), transparent)",
                  WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))",
                }}
              />

              {/* Secondary subtle ring */}
              <div
                className="absolute inset-[4px] rounded-full"
                style={{ border: "1.5px solid hsl(var(--accent)/0.2)" }}
              />

              {/* Photo — 260px desktop, 190px on mobile via responsive wrapper */}
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.25 }}
                src={profileAvatar}
                alt="Siddhesh Masurkar"
                className="relative rounded-full object-cover w-[190px] h-[190px] md:w-[260px] md:h-[260px]"
                style={{
                  boxShadow: "0 12px 40px hsl(var(--primary)/0.18)",
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1.5"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};
