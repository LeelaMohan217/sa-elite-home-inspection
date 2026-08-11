import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionEyebrow from '../components/SectionEyebrow'
import Reveal from '../components/Reveal'
import Button from '../components/Button'

const initialForm = { name: '', email: '', phone: '', message: '' }

const inputClasses =
  'mt-1 w-full rounded-sm border border-hairline bg-paper px-3 py-2 text-sm text-ink'

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')

    // TODO: wire up to a form backend (e.g. Formspree/Resend) once an endpoint exists.
    await new Promise((resolve) => setTimeout(resolve, 600))

    setStatus('success')
    setForm(initialForm)
  }

  return (
    <div>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Have a question or ready to schedule? Send us a message and we'll respond within one business day."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 md:grid-cols-2">
        <Reveal>
          <SectionEyebrow>Reach Us</SectionEyebrow>
          <h2 className="mt-3 font-display text-2xl text-ink">Get in touch.</h2>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex items-center gap-3 text-ink/70">
              <Phone size={16} className="shrink-0 text-brass" aria-hidden="true" />
              <span>
                <span className="font-medium text-ink">Phone:</span> (555) 123-4567
              </span>
            </li>
            <li className="flex items-center gap-3 text-ink/70">
              <Mail size={16} className="shrink-0 text-brass" aria-hidden="true" />
              <span>
                <span className="font-medium text-ink">Email:</span> info@saelitehomeinspection.com
              </span>
            </li>
            <li className="flex items-center gap-3 text-ink/70">
              <MapPin size={16} className="shrink-0 text-brass" aria-hidden="true" />
              <span>
                <span className="font-medium text-ink">Service Area:</span> Greater San Antonio, TX
              </span>
            </li>
            <li className="flex items-center gap-3 text-ink/70">
              <Clock size={16} className="shrink-0 text-brass" aria-hidden="true" />
              <span>
                <span className="font-medium text-ink">Hours:</span> Mon - Sat, 7 AM - 7 PM
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal index={1} as="form" onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-ink">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-ink">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-ink">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          <Button type="submit" variant="primary" disabled={status === 'submitting'} className="w-full">
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </Button>

          <AnimatePresence>
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-sm font-medium text-verified"
              >
                <CheckCircle2 size={16} aria-hidden="true" />
                Thanks! We'll be in touch shortly.
              </motion.p>
            )}
          </AnimatePresence>
        </Reveal>
      </section>
    </div>
  )
}

export default Contact
