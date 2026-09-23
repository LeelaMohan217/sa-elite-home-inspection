import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.16, 1, 0.3, 1];

// Counts from 0 up to `value` as soon as it is on screen (half visible).
// `startAfter` (seconds since the component mounted) lets an entrance
// sequence hold the count back until the number has faded in; once that
// time has passed, scrolling it into view starts counting immediately.
// Screen readers get the final number; people who prefer reduced motion
// see it straight away.
function CountUp({ value, prefix = "", suffix = "", duration = 1.6, startAfter = 0 }) {
  const ref = useRef(null);
  const mountedAt = useRef(performance.now());
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView || reduceMotion) return;

    const elapsed = (performance.now() - mountedAt.current) / 1000;
    const controls = animate(0, value, {
      duration,
      delay: Math.max(0, startAfter - elapsed),
      ease: EASE_OUT,
      onUpdate: (latest) => setCount(latest),
    });

    return () => controls.stop();
  }, [inView, reduceMotion, value, duration, startAfter]);

  const format = (n) => `${prefix}${Math.round(n).toLocaleString("en-US")}${suffix}`;

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden="true">{format(reduceMotion ? value : count)}</span>
      <span className="sr-only">{format(value)}</span>
    </span>
  );
}

export default CountUp;
