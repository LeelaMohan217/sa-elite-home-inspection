function SectionEyebrow({ children, tone = 'light', className = '' }) {
  const toneClasses = tone === 'dark' ? 'text-accent-light' : 'text-accent-dark'
  return (
    <p
      className={`flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.16em] ${toneClasses} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </p>
  )
}

export default SectionEyebrow
