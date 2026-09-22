function SectionEyebrow({ children, tone = "light", className = "" }) {
  const toneClasses = tone === "dark" ? "text-accent-light" : "text-stone";
  return (
    <p
      className={`flex items-center gap-2 text-eyebrow font-medium uppercase ${toneClasses} ${className}`}
    >
      {children}
    </p>
  );
}

export default SectionEyebrow;
