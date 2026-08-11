const TONES = {
  accent: 'bg-accent-dark text-paper',
  verified: 'bg-verified text-paper',
  outline: 'border border-accent text-accent-dark',
}

function Tag({ children, tone = 'accent', className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

export default Tag
