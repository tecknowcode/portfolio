import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const NAMESPACE = "siddhesh-portfolio";
const KEY = "visits";

const useAnimatedCount = (target: number, duration = 1200) => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!target) return;
        let raf = 0;
        const start = performance.now();
        const from = 0;
        const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.floor(from + (target - from) * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [target, duration]);
    return value;
};

export const VisitorCounter = () => {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        let cancelled = false;
        const fetchCount = async () => {
        try {
            const sessionKey = `vc_counted_${NAMESPACE}_${KEY}`;
            const alreadyCounted = sessionStorage.getItem(sessionKey);
            const endpoint = alreadyCounted
            ? `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/`
            : `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`;
            const res = await fetch(endpoint);
            const data = await res.json();
            if (!cancelled && typeof data?.count === "number") {
            setCount(data.count);
            if (!alreadyCounted) sessionStorage.setItem(sessionKey, "1");
            }
        } catch {
            if (!cancelled) setCount(0);
        }
        };
        fetchCount();
        return () => {
        cancelled = true;
        };
    }, []);

    const animated = useAnimatedCount(count ?? 0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-sm"
        >
        <span className="relative flex items-center justify-center">
            <motion.span
                animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inline-flex h-5 w-5 rounded-full bg-secondary/40"
            />
            <Eye className="relative w-4 h-4 text-secondary" />
        </span>
        <div className="flex items-baseline gap-1.5">
            <span className="text-xs uppercase tracking-widest text-primary-foreground/50">
            Visitors
            </span>
            {count === null ? (
            <span className="text-sm font-medium text-primary-foreground/40 tabular-nums">
                ····
            </span>
            ) : (
            <span className="text-sm font-semibold text-primary-foreground/90 tabular-nums">
                {animated.toLocaleString()}
            </span>
            )}
        </div>
        </motion.div>
    );
};
