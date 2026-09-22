function SectionEyebrow({ children, tone = "light", className = "" }) {
  const toneClasses = tone === "dark" ? "text-accent-light" : "text-ink/45";
  return (
    <p
      className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] ${toneClasses} ${className}`}
    >
      {children}
    </p>
  );
}

export default SectionEyebrow;
