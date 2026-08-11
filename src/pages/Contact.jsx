import { useState } from 'react'
import PageHero from '../components/PageHero'

const initialForm = { name: '', email: '', phone: '', message: '' }

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
        title="Contact Us"
        subtitle="Have a question or ready to schedule? Send us a message and we'll respond within one business day."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Get in Touch</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>
              <span className="font-semibold text-slate-900">Phone:</span> (555) 123-4567
            </li>
            <li>
              <span className="font-semibold text-slate-900">Email:</span>{' '}
              info@saelitehomeinspection.com
            </li>
            <li>
              <span className="font-semibold text-slate-900">Service Area:</span> Greater San
              Antonio, TX
            </li>
            <li>
              <span className="font-semibold text-slate-900">Hours:</span> Mon - Sat, 7 AM - 7 PM
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-700 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-700 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-700 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-700 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full rounded-md bg-blue-700 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-sm font-medium text-green-700">
              Thanks! We'll be in touch shortly.
            </p>
          )}
        </form>
      </section>
    </div>
  )
}

export default Contact
