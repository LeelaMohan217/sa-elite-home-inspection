// Flat city skyline for the process cards. The buildings sit below the card
// and rise into place one after another when the card is hovered, starting
// just after the card's text has begun to lift; on leaving they sink quickly
// before the text settles back (on touch
// screens, which have no hover, they are simply shown). Two layers in blue
// tints: taller towers with windows behind, lower blocks and gabled houses
// in front. Each seed gives a different, repeatable skyline.

const W = 400;
const H = 260;

const BACK = "color-mix(in srgb, var(--color-accent-light) 45%, var(--color-paper))";
const FRONT = "color-mix(in srgb, var(--color-accent-light) 80%, var(--color-paper))";

function random(seed) {
  let t = seed * 7919;
  return () => {
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function layout(seed) {
  const rand = random(seed);
  const between = (min, max) => min + rand() * (max - min);
  const row = (minW, maxW, minH, maxH, gap, roofs) => {
    const out = [];
    for (let x = between(-24, -4); x < W; ) {
      const w = between(minW, maxW);
      const pick = rand();
      out.push({ x, w, h: between(minH, maxH), roof: pick < roofs.gable ? "gable" : pick < roofs.gable + roofs.step ? "step" : "flat" });
      x += w + between(gap[0], gap[1]);
    }
    return out;
  };
  return {
    back: row(38, 64, 120, 215, [3, 9], { gable: 0, step: 0.35 }),
    front: row(34, 60, 52, 118, [6, 16], { gable: 0.4, step: 0.15 }),
  };
}

function Building({ b, fill, windows, delay }) {
  const top = H - b.h;
  const cols = windows ? Math.floor((b.w - 8) / 12) : 0;
  const rows = windows ? Math.floor((b.h - 30) / 18) : 0;
  const offset = (b.w - cols * 12 + 5) / 2;

  return (
    <g
      className="translate-y-[108%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-box:fill-box] [transition-delay:calc(var(--d)*0.3)] group-hover:translate-y-0 group-hover:[transition-delay:calc(var(--d)_+_180ms)] motion-reduce:transition-none [@media(hover:none)]:translate-y-0"
      style={{ "--d": `${delay}ms` }}
    >
      <rect x={b.x} y={top} width={b.w} height={b.h} fill={fill} />
      {b.roof === "gable" && (
        <polygon points={`${b.x - 3},${top} ${b.x + b.w / 2},${top - b.w * 0.42} ${b.x + b.w + 3},${top}`} fill={fill} />
      )}
      {b.roof === "step" && (
        <rect x={b.x + b.w * 0.25} y={top - 12} width={b.w * 0.5} height={12} fill={fill} />
      )}
      {Array.from({ length: rows * cols }, (_, k) => (
        <rect
          key={k}
          x={b.x + offset + (k % cols) * 12}
          y={top + 14 + Math.floor(k / cols) * 18}
          width={5}
          height={8}
          fill={FRONT}
        />
      ))}
    </g>
  );
}

function Skyline({ seed = 1, className = "" }) {
  const { back, front } = layout(seed);
  return (
    <svg aria-hidden="true" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMax slice" className={className}>
      {back.map((b, k) => (
        <Building key={`b${k}`} b={b} fill={BACK} windows delay={k * 45} />
      ))}
      {front.map((b, k) => (
        <Building key={`f${k}`} b={b} fill={FRONT} delay={140 + k * 45} />
      ))}
    </svg>
  );
}

export default Skyline;
