import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import logo from '../assets/Logo-full-light.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/prices', label: 'Prices' },
  { to: '/contact', label: 'Contact' },
]

const contact = {
  phone: '+91 98765 43210',
  email: 'info@saelitehomeinspection.com',
  area: 'Serving Hyderabad and surrounding areas',
}

const hours = [
  { days: 'Mon – Sat', time: '7:00 AM – 7:00 PM' },
  { days: 'Sunday', time: 'By appointment' },
]

function FooterHeading({ children }) {
  return (
    <p className="text-eyebrow font-medium uppercase text-paper/45">{children}</p>
  )
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-16 pb-12 sm:grid-cols-2 sm:gap-x-10 sm:px-8 sm:pt-20 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-3">
          <Link to="/" aria-label="AKSHARA Elite Home Inspections home" className="inline-block">
            <img
              src={logo}
              alt="AKSHARA Elite Home Inspections"
              width={641}
              height={108}
              className="h-9 w-auto"
            />
          </Link>
          <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-paper/60">
            Thorough, honest home inspections you can rely on before you buy or sell.
          </p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <FooterHeading>Explore</FooterHeading>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-[15px] lg:grid-cols-1">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-paper/70 transition-colors duration-200 hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <FooterHeading>Contact</FooterHeading>
          <ul className="mt-5 space-y-3 text-[15px] text-paper/70">
            <li>
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-3 transition-colors duration-200 hover:text-paper"
              >
                <Phone size={15} strokeWidth={1.75} className="shrink-0 text-paper/45" aria-hidden="true" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-3 [overflow-wrap:anywhere] transition-colors duration-200 hover:text-paper"
              >
                <Mail size={15} strokeWidth={1.75} className="shrink-0 text-paper/45" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={15} strokeWidth={1.75} className="mt-1 shrink-0 text-paper/45" aria-hidden="true" />
              {contact.area}
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <FooterHeading>Hours</FooterHeading>
          <dl className="mt-5 space-y-3 text-[15px]">
            {hours.map((row) => (
              <div key={row.days} className="flex justify-between gap-6 border-b border-paper/10 pb-3">
                <dt className="whitespace-nowrap text-paper/70">{row.days}</dt>
                <dd className="whitespace-nowrap text-paper">{row.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-2 border-t border-paper/10 py-6 text-sm text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} AKSHARA Elite Home Inspections. All rights reserved.</p>
          <p>Hyderabad, India</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
