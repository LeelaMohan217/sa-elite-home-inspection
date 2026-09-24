import { motion, useReducedMotion } from "framer-motion";

// Bottom-to-top reveals that play once when a group scrolls into view.
// Wrap a block in <RevealGroup>; each <RiseUp> inside it slides up on the
// group's cue after its own delay (seconds after the group enters view), so
// elements arrive one after another.

const EASE = [0.16, 1, 0.3, 1];

export function RevealGroup({ as = "div", amount = 0.25, className = "", children }) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </Component>
  );
}

const rise = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE },
  }),
};

export function RiseUp({ as = "div", delay = 0, className = "", children, ...rest }) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component className={className} variants={rise} custom={delay} {...rest}>
      {children}
    </Component>
  );
}

// Image that wipes up from its bottom edge while settling from a slight zoom.
// Triggers on its own, so it works whether it sits beside or below the text.
// The in-view check runs on the unclipped outer frame: a fully clipped element
// never counts as visible, so the wipe would never start.
const wipe = {
  hidden: { clipPath: "inset(100% 0% 0% 0% round 1rem)" },
  visible: (delay = 0) => ({
    clipPath: "inset(0% 0% 0% 0% round 1rem)",
    transition: { duration: 1.2, delay, ease: EASE },
  }),
};

const settle = {
  hidden: { scale: 1.12 },
  visible: (delay = 0) => ({ scale: 1, transition: { duration: 1.6, delay, ease: EASE } }),
};

export function RiseImage({ className = "", imgClassName = "", delay = 0, ...img }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative ${className}`}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div className="absolute inset-0 overflow-hidden rounded-[inherit]" variants={wipe} custom={delay}>
        <motion.img
          {...img}
          className={`h-full w-full object-cover ${imgClassName}`}
          variants={settle}
          custom={delay}
        />
      </motion.div>
    </motion.div>
  );
}
