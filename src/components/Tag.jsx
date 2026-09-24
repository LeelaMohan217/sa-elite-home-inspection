const TONES = {
  accent: 'bg-accent text-paper',
  verified: 'bg-accent text-paper',
  outline: 'border border-accent text-accent',
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
