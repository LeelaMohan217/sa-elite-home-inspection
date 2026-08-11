import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Reveal from './Reveal'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hairline-dark bg-ink text-paper/80">
      <Reveal className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-accent-light font-mono text-xs font-semibold tracking-wide text-accent-light">
            SA
          </span>
          <p className="mt-4 font-display text-xl italic text-paper">Elite Home Inspection</p>
          <p className="mt-2 text-sm text-paper/60">
            Thorough, honest home inspections you can rely on before you buy or sell.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent-light">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-paper/70">
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-accent-light" aria-hidden="true" />
              (555) 123-4567
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-accent-light" aria-hidden="true" />
              info@saelitehomeinspection.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="shrink-0 text-accent-light" aria-hidden="true" />
              Serving the greater San Antonio area
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent-light">Hours</p>
          <ul className="mt-4 space-y-3 text-sm text-paper/70">
            <li className="flex items-center gap-3">
              <Clock size={16} className="shrink-0 text-accent-light" aria-hidden="true" />
              Mon - Sat: 7:00 AM - 7:00 PM
            </li>
            <li className="flex items-center gap-3">
              <Clock size={16} className="shrink-0 text-accent-light" aria-hidden="true" />
              Sunday: By appointment
            </li>
          </ul>
        </div>
      </Reveal>

      <div className="border-t border-hairline-dark py-4 text-center font-mono text-xs uppercase tracking-[0.14em] text-paper/40">
        © {year} SA Elite Home Inspection. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
