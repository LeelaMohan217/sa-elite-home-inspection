import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, ChevronDown } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionEyebrow from '../components/SectionEyebrow'
import Button from '../components/Button'
import { RevealGroup, RiseUp } from '../components/ScrollReveal'
import { contactDetails, propertyTypes, serviceOptions, EMAIL } from '../content/contact'

const initialForm = { name: '', phone: '', email: '', property: '', service: '', message: '' }

const fieldClasses =
  'mt-2 block h-11 w-full rounded-xl border border-hairline bg-paper px-4 text-[15px] text-ink placeholder:text-stone/70 transition-colors focus:border-ink/40 focus:outline-none focus-visible:outline-none'

function Field({ id, label, optional, children }) {
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between text-sm font-medium text-ink">
        {label}
        {optional && <span className="text-xs font-normal text-stone">Optional</span>}
      </label>
      {children}
    </div>
  )
}

function Select({ id, name, value, onChange, options, placeholder }) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`${fieldClasses} appearance-none pr-10 ${value ? '' : 'text-stone/70'}`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        strokeWidth={1.75}
        className="pointer-events-none absolute right-4 bottom-3.5 text-stone"
        aria-hidden="true"
      />
    </div>
  )
}

// Until a form backend is connected, sending opens the visitor's email app
// with the enquiry addressed to us, so no message is ever silently lost.
function buildMailto(form) {
  const lines = [
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    form.email ? `Email: ${form.email}` : null,
    form.property ? `Property: ${form.property}` : null,
    form.service ? `Service: ${form.service}` : null,
    '',
    form.message,
  ].filter((line) => line !== null)
  const subject = `Inspection enquiry from ${form.name}`
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setSent(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    window.location.href = buildMailto(form)
    setSent(true)
  }

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Let's inspect your"
        accent="home."
        subtitle="Book an inspection or ask us anything. Call, email or send the form, and we'll get back to you within one business day."
      />

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Ways to reach us */}
          <RevealGroup className="lg:col-span-5">
            <RiseUp delay={0}>
              <SectionEyebrow>Reach us</SectionEyebrow>
            </RiseUp>
            <RiseUp as="h2" delay={0.2} className="mt-5 text-balance text-h2 text-ink">
              Talk to an{' '}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-accent">
                inspector.
              </span>
            </RiseUp>
            <RiseUp as="p" delay={0.4} className="mt-6 max-w-md text-pretty text-base leading-relaxed text-stone sm:text-[17px]">
              You'll speak to the people who carry out the inspections, not a
              call centre.
            </RiseUp>

            <ul className="mt-10 border-t border-hairline">
              {contactDetails.map((detail, i) => {
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline bg-paper">
                      <detail.icon size={18} strokeWidth={1.75} className="text-ink" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-stone">{detail.label}</span>
                      <span className="mt-0.5 block text-[15px] font-medium text-ink [overflow-wrap:anywhere]">
                        {detail.value}
                      </span>
                    </span>
                    {detail.href && (
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-ink transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                        <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
                      </span>
                    )}
                  </>
                )
                return (
                  <RiseUp as="li" key={detail.label} delay={0.5 + i * 0.12} className="border-b border-hairline">
                    {detail.href ? (
                      <a href={detail.href} className="group flex items-center gap-4 py-5">
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 py-5">{content}</div>
                    )}
                  </RiseUp>
                )
              })}
            </ul>
          </RevealGroup>

          {/* Enquiry form */}
          <RevealGroup className="lg:col-span-7">
            <RiseUp
              as="form"
              delay={0.2}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-hairline bg-surface p-6 sm:p-8 lg:p-10"
            >
              <h2 className="text-h3 font-medium tracking-tight text-ink">Request an inspection</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-stone">
                Tell us a little about the property and we'll confirm a time.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full name">
                  <input id="name" name="name" type="text" autoComplete="name" required value={form.name} onChange={handleChange} className={fieldClasses} />
                </Field>
                <Field id="phone" label="Phone">
                  <input id="phone" name="phone" type="tel" autoComplete="tel" required value={form.phone} onChange={handleChange} className={fieldClasses} />
                </Field>
                <div className="sm:col-span-2">
                  <Field id="email" label="Email" optional>
                    <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} className={fieldClasses} />
                  </Field>
                </div>
                <Field id="property" label="Property type" optional>
                  <Select id="property" name="property" value={form.property} onChange={handleChange} options={propertyTypes} placeholder="Choose one" />
                </Field>
                <Field id="service" label="Service" optional>
                  <Select id="service" name="service" value={form.service} onChange={handleChange} options={serviceOptions} placeholder="Choose one" />
                </Field>
                <div className="sm:col-span-2">
                  <Field id="message" label="Message">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Location, preferred date, anything we should know"
                      className={`${fieldClasses} h-auto resize-y py-3 leading-relaxed`}
                    />
                  </Field>
                </div>
              </div>

              <Button type="submit" className="mt-8 w-full">
                Send Enquiry
              </Button>

              <AnimatePresence>
                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    role="status"
                    className="mt-4 flex items-start gap-2 text-sm text-ink"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    Your email app should now open with your enquiry ready to send. If it
                    doesn't, email us at {EMAIL} or call us.
                  </motion.p>
                )}
              </AnimatePresence>
            </RiseUp>
          </RevealGroup>
        </div>
      </section>
    </div>
  )
}

export default Contact
