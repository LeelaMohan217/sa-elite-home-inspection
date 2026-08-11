import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/prices', label: 'Prices' },
  { to: '/contact', label: 'Contact' },
]

const linkClasses = ({ isActive }) =>
  `text-sm font-medium transition-colors hover:text-blue-700 ${
    isActive ? 'text-blue-700' : 'text-slate-700'
  }`

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <NavLink to="/" className="text-lg font-bold text-slate-900" onClick={() => setOpen(false)}>
          SA Elite <span className="text-blue-700">Home Inspection</span>
        </NavLink>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'} className={linkClasses}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/contact"
          className="hidden rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800 md:inline-block"
        >
          Book Inspection
        </NavLink>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-300 p-2 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-slate-700" />
            <span className="block h-0.5 w-5 bg-slate-700" />
            <span className="block h-0.5 w-5 bg-slate-700" />
          </div>
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={linkClasses}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
