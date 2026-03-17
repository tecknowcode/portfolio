import { motion } from "framer-motion";

// Data nodes distributed along each orbit ring
const outerNodes = [0, 72, 144, 216, 288]; // 5 nodes, every 72°
const innerNodes = [30, 120, 210, 300];     // 4 nodes, every 90°

interface NodeProps {
  angle: number;       // degrees – position on ring
  radius: number;      // px from center
  size?: number;       // dot size in px
  delay?: number;
}

const DataNode = ({ angle, radius, size = 4, delay = 0 }: NodeProps) => {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: "50%",
        top: "50%",
        x: x - size / 2,
        y: y - size / 2,
        background: "hsl(var(--accent))",
        boxShadow: "0 0 6px 2px hsl(var(--accent)/0.55)",
      }}
      animate={{ opacity: [0.3, 1, 0.3], scale: [0.85, 1.25, 0.85] }}
      transition={{
        duration: 2.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
};

export const OrbitRings = () => {
  const containerSize = 520; // larger than photo container (390px) so rings extend beyond
  const outerRadius = 230;
  const innerRadius = 175;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: containerSize,
        height: containerSize,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* ── Deep glow behind photo ── */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 320,
          height: 320,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, hsl(var(--accent)/0.22) 0%, hsl(var(--accent)/0.06) 60%, transparent 100%)",
        }}
      />

      {/* ── Outer orbit ring (clockwise, 14s) ── */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        style={{
          border: "1px solid hsl(var(--accent)/0.22)",
          boxShadow: "0 0 8px hsl(var(--accent)/0.08) inset",
        }}
      >
        {outerNodes.map((angle, i) => (
          <DataNode
            key={i}
            angle={angle}
            radius={outerRadius}
            size={4}
            delay={i * 0.55}
          />
        ))}
      </motion.div>

      {/* ── Inner orbit ring (counter-clockwise, 11s) ── */}
      <motion.div
        className="absolute rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
        style={{
          width: innerRadius * 2,
          height: innerRadius * 2,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          border: "1px solid hsl(var(--accent)/0.18)",
          boxShadow: "0 0 6px hsl(var(--accent)/0.06) inset",
        }}
      >
        {innerNodes.map((angle, i) => (
          <DataNode
            key={i}
            angle={angle}
            radius={innerRadius}
            size={3.5}
            delay={i * 0.7}
          />
        ))}
      </motion.div>

      {/* ── Dashed accent arc (static, decorative) ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${containerSize} ${containerSize}`}
        fill="none"
        style={{ opacity: 0.12 }}
      >
        <circle
          cx={containerSize / 2}
          cy={containerSize / 2}
          r={outerRadius + 18}
          stroke="hsl(var(--accent))"
          strokeWidth="0.75"
          strokeDasharray="6 14"
        />
        <circle
          cx={containerSize / 2}
          cy={containerSize / 2}
          r={innerRadius - 18}
          stroke="hsl(var(--accent))"
          strokeWidth="0.75"
          strokeDasharray="4 10"
        />
      </svg>
    </div>
  );
};
