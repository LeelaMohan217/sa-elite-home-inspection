const TONES = {
  accent: 'bg-gradient-to-br from-accent-vivid/40 via-accent/20 to-transparent',
  ink: 'bg-gradient-to-br from-ink/70 via-accent-dark/30 to-transparent',
  light: 'bg-gradient-to-br from-accent-light/60 via-accent-vivid/20 to-transparent',
}

function GradientOrb({ className = '', tone = 'accent' }) {
  return (
    <div className={`pointer-events-none absolute rounded-full blur-3xl ${TONES[tone]} ${className}`} aria-hidden="true" />
  )
}

export default GradientOrb
