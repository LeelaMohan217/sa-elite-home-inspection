import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Reveal from './Reveal'
import BlobShape from './BlobShape'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-hairline-dark bg-slate-800 text-paper/80">
     
      <Reveal className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white text-xs font-extrabold tracking-wide text-white">
            SA
          </span>
          <p className="mt-4 text-xl font-extrabold italic text-paper">Elite Home Inspection</p>
          <p className="mt-2 text-sm text-paper/60">
            Thorough, honest home inspections you can rely on before you buy or sell.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-white">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-paper/70">
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-white" aria-hidden="true" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-white" aria-hidden="true" />
              info@saelitehomeinspection.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="shrink-0 text-white" aria-hidden="true" />
              Serving Hyderabad and surrounding areas
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-white">Hours</p>
          <ul className="mt-4 space-y-3 text-sm text-paper/70">
            <li className="flex items-center gap-3">
              <Clock size={16} className="shrink-0 text-white" aria-hidden="true" />
              Mon - Sat: 7:00 AM - 7:00 PM
            </li>
            <li className="flex items-center gap-3">
              <Clock size={16} className="shrink-0 text-white" aria-hidden="true" />
              Sunday: By appointment
            </li>
          </ul>
        </div>
      </Reveal>

      <div className="relative border-t border-hairline-dark py-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-paper/40">
        © {year} SA Elite Home Inspection. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
