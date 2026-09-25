// Hover wash for service cards (place inside a `group relative isolate
// overflow-hidden` card): a pale navy tint that rises from the
// bottom with two layers of drifting waves along its top edge. Each wave
// strip is twice the card's width and repeats every 300 units, so sliding it
// left by half loops seamlessly.
const WAVE_PATH =
  "M0 20 Q75 2 150 20 T300 20 T450 20 T600 20 T750 20 T900 20 T1050 20 T1200 20 V40 H0 Z";
const WAVE_TOP = "color-mix(in srgb, var(--color-accent-light) 55%, var(--color-paper))";
// Kept a touch lighter than the full tint so grey text stays above 4.5:1.
const WAVE_BASE = "color-mix(in srgb, var(--color-accent-light) 80%, var(--color-paper))";

function WaveWash() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[72%] translate-y-[calc(100%+2.5rem)] transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-focus-visible:translate-y-0 motion-reduce:transition-none"
    >
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="absolute bottom-[calc(100%-1px)] left-0 h-9 w-[200%] overflow-visible animate-wave opacity-60 [animation-direction:reverse] [animation-duration:11s] motion-reduce:animate-none"
        style={{ fill: WAVE_TOP }}
      >
        <path d={WAVE_PATH} transform="translate(0 -6)" />
      </svg>
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="absolute bottom-[calc(100%-1px)] left-0 h-6 w-[200%] animate-wave motion-reduce:animate-none"
        style={{ fill: WAVE_TOP }}
      >
        <path d={WAVE_PATH} />
      </svg>
      <div
        className="h-full"
        style={{ background: `linear-gradient(to top, ${WAVE_BASE}, ${WAVE_TOP})` }}
      />
    </div>
  );
}

export default WaveWash;
