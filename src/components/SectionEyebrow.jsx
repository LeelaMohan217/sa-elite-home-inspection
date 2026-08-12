function SectionEyebrow({ children, tone = "light", className = "" }) {
  const toneClasses =
    tone === "dark" ? "text-slate-800" : "text-slate-800";
  return (
    <p
      className={`flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-[0.14em] ${toneClasses} ${className}`}
    >
      {children}
    </p>
  );
}

export default SectionEyebrow;
