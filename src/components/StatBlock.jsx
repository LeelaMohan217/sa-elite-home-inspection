import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const EASE_OUT = [0.16, 1, 0.3, 1];

function StatBlock({ value, suffix = "", prefix = "", label, index = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration: 1.4,
      delay: index * 0.1,
      ease: EASE_OUT,
      onUpdate: (latest) => setCount(latest),
    });

    return () => controls.stop();
  }, [inView, value, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE_OUT }}
      className="flex flex-col items-center gap-1.5 py-8 text-center sm:py-0"
    >
      <p className="text-4xl font-extrabold tabular-nums text-ink sm:text-[2.75rem]">
        {prefix}
        {Math.round(count).toLocaleString("en-US")}
        {suffix}
      </p>
      <p className="text-sm text-ink/55">{label}</p>
    </motion.div>
  );
}

export default StatBlock;
