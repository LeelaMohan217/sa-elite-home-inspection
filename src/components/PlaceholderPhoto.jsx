import { ImageIcon } from 'lucide-react'
import BlobShape from './BlobShape'

function PlaceholderPhoto({ icon: Icon = ImageIcon, label = 'Photo coming soon', className = '' }) {
  return (
    <div
      className={`relative isolate flex items-center justify-center overflow-hidden rounded-3xl bg-surface ${className}`}
    >
      <BlobShape
        className="absolute -left-12 -top-12 h-48 w-48 opacity-40"
        from="var(--color-accent-light)"
        to="var(--color-accent-vivid)"
      />
      <BlobShape
        className="absolute -bottom-16 -right-10 h-56 w-56 opacity-30"
        from="var(--color-accent)"
        to="var(--color-ink)"
      />
      <div className="relative z-10 flex flex-col items-center gap-2 text-accent-dark/60">
        <Icon size={32} aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-[0.14em]">{label}</span>
      </div>
    </div>
  )
}

export default PlaceholderPhoto
