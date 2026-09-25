import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import SectionEyebrow from './SectionEyebrow'
import { RevealGroup, RiseUp } from './ScrollReveal'
import { legalNav } from '../content/legal'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/prices', label: 'Prices' },
  { to: '/contact', label: 'Contact' },
]

const contact = {
  phone: '+91 96405 47878',
  email: 'elitehomeinspections.info@gmail.com',
  area: 'Serving Hyderabad and surrounding areas',
}

function FooterHeading({ children }) {
  return <p className="text-eyebrow font-medium uppercase text-stone">{children}</p>
}

// One black rounded panel at the bottom of every page: the booking call to
// action on top, and the footer itself as a white card nested inside.
function Footer() {
  return (
    <footer className="bg-paper px-3 pt-16 pb-3 sm:px-4 sm:pt-24 sm:pb-4">
      <div className="relative isolate overflow-hidden rounded-3xl bg-ink text-paper">
        {/* Faint grid, echoing the hero */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.08)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_30%,black_20%,transparent_75%)]"
        />

        {/* Call to action */}
        <RevealGroup className="mx-auto flex max-w-3xl flex-col items-center px-6 pt-20 pb-16 text-center sm:px-8 sm:pt-28 sm:pb-24">
          <RiseUp delay={0}>
            <SectionEyebrow tone="dark" className="justify-center">
              Ready when you are
            </SectionEyebrow>
          </RiseUp>

          <RiseUp as="h2" delay={0.15} className="mt-6 text-balance text-h1 text-paper">
            Ready to book your{' '}
            <span className="font-serif font-normal italic tracking-[-0.01em] text-accent-light">
              inspection?
            </span>
          </RiseUp>

          <RiseUp as="p" delay={0.3} className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-paper/70 sm:text-[17px]">
            Reach out today and we'll get you scheduled with one of our
            certified inspectors.
          </RiseUp>

          <RiseUp delay={0.45} className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Button to="/contact" variant="invert" icon={ArrowRight} className="w-full sm:w-auto">
              Book an Inspection
            </Button>
            <Button to="/prices" variant="outline" className="w-full sm:w-auto">
              View Pricing
            </Button>
          </RiseUp>
        </RevealGroup>

        {/* Footer card */}
        <div className="mx-2 mb-2 rounded-2xl bg-paper text-ink sm:mx-3 sm:mb-3">
          <div className="grid gap-12 px-6 pt-12 pb-10 sm:grid-cols-2 sm:gap-x-10 sm:px-10 sm:pt-14 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Link to="/" aria-label="Akshara Elite Home Inspections home" className="inline-block">
                <Logo className="w-[163px]" />
              </Link>
              <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-stone">
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
                      className="text-ink transition-colors duration-200 hover:text-stone"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Footer legal" className="lg:col-span-3">
              <FooterHeading>Legal</FooterHeading>
              <ul className="mt-5 space-y-3 text-[15px]">
                {legalNav.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-ink transition-colors duration-200 hover:text-stone"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="lg:col-span-4">
              <FooterHeading>Contact</FooterHeading>
              <ul className="mt-5 space-y-3 text-[15px] text-ink">
                <li>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-3 transition-colors duration-200 hover:text-stone"
                  >
                    <Phone size={15} strokeWidth={1.75} className="shrink-0 text-stone" aria-hidden="true" />
                    {contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-3 [overflow-wrap:anywhere] transition-colors duration-200 hover:text-stone"
                  >
                    <Mail size={15} strokeWidth={1.75} className="shrink-0 text-stone" aria-hidden="true" />
                    {contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={15} strokeWidth={1.75} className="mt-1 shrink-0 text-stone" aria-hidden="true" />
                  {contact.area}
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-6 border-t border-hairline py-6 text-center text-sm text-stone sm:mx-10">
            <p>© 2025 Akshara Elite Home Inspections, Hyderabad. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
