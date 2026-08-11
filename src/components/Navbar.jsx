import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Button from './Button'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/prices', label: 'Prices' },
  { to: '/contact', label: 'Contact' },
]

const menuVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, staggerChildren: 0.04, delayChildren: 0.05 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0 },
}

function Logo() {
  return (
    <span className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center border border-brass font-mono text-xs font-semibold tracking-wide text-brass-dark">
        SA
      </span>
      <span className="leading-tight">
        <span className="block font-display text-lg italic text-ink">Elite</span>
        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">
          Home Inspection
        </span>
      </span>
    </span>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ease-out ${
        scrolled
          ? 'border-hairline bg-paper/90 shadow-[0_1px_0_rgba(23,19,15,0.04)] backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <NavLink to="/" aria-label="SA Elite Home Inspection home">
          <Logo />
        </NavLink>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative py-1 text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-brass after:transition-all after:duration-200 ${
                    isActive
                      ? 'text-ink after:w-full'
                      : 'text-ink/70 after:w-0 hover:text-brass-dark hover:after:w-full'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button to="/contact" variant="primary" icon={ArrowRight}>
            Book Inspection
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-hairline text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-1 border-t border-hairline bg-paper px-4 py-4 md:hidden"
          >
            {links.map((link) => (
              <motion.li key={link.to} variants={itemVariants}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `block py-2 text-sm font-medium ${isActive ? 'text-ink' : 'text-ink/70'}`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.li>
            ))}
            <motion.li variants={itemVariants} className="pt-2">
              <Button to="/contact" variant="primary" icon={ArrowRight} className="w-full">
                Book Inspection
              </Button>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
