import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import PageHero from '../components/PageHero'
import Button from '../components/Button'
import { LegalNav } from './Legal'
import { getConsent, setConsent, onConsentChange } from '../lib/consent'
import { LAST_UPDATED } from '../content/legal'

const EMAIL = 'elitehomeinspections.info@gmail.com'

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

function Row({ title, children }) {
  return (
    <div className="border-b border-hairline py-8">
      <h2 className="text-h3 font-medium tracking-tight text-ink">{title}</h2>
      <div className="mt-4 space-y-4 text-pretty text-[15px] leading-relaxed text-stone sm:text-base">{children}</div>
    </div>
  )
}

function Consent() {
  const [consent, setLocal] = useState(() => getConsent())
  useEffect(() => onConsentChange(setLocal), [])

  const status = !consent
    ? 'You have not made a choice yet.'
    : consent.optional
      ? `You allowed optional cookies on ${formatDate(consent.date)}.`
      : `You chose essential only on ${formatDate(consent.date)}.`

  return (
    <div>
      <PageHero
        eyebrow="Legal"
        title="Consent Preferences"
        subtitle="See and change the choices you've made, and how to withdraw your consent."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 sm:px-8 sm:pb-24 lg:grid-cols-12 lg:px-10">
        <aside className="lg:col-span-3">
          <LegalNav />
        </aside>

        <article className="max-w-3xl lg:col-span-8 lg:col-start-5">
          <p className="border-b border-hairline pb-6 text-sm text-stone">Last updated: {LAST_UPDATED}</p>

          <Row title="Cookies on this device">
            <div className="rounded-2xl border border-hairline bg-surface p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-ink">Essential</p>
                  <p className="mt-1 text-sm">Remembers your choice on this device. Always on.</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-accent-light/60 px-3 py-1 text-xs font-medium text-accent">
                  <Check size={12} strokeWidth={2.5} aria-hidden="true" /> On
                </span>
              </div>
              <div className="mt-5 border-t border-hairline pt-5">
                <p className="font-medium text-ink">Optional (such as analytics)</p>
                <p className="mt-1 text-sm">
                  We don't use any optional cookies today. If we add them, they will only run if you allow them here.
                </p>
                <p className="mt-4 text-sm font-medium text-ink" role="status">{status}</p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Button onClick={() => setConsent(true)} className="w-full sm:w-auto">
                    Allow optional
                  </Button>
                  <Button variant="secondary" onClick={() => setConsent(false)} className="w-full sm:w-auto">
                    Essential only
                  </Button>
                </div>
              </div>
            </div>
            <p>
              Read more in our <Link to="/cookie-policy" className="font-medium text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink">Cookie Policy</Link>.
            </p>
          </Row>

          <Row title="When you contact us">
            <p>
              When you send an enquiry, call or email us, you agree that we may use the details you give us to reply,
              give you a quote and arrange your inspection, as described in our{' '}
              <Link to="/privacy-policy" className="font-medium text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink">Privacy Policy</Link>.
            </p>
          </Row>

          <Row title="When you book an inspection">
            <p>
              By booking, you agree that we may visit the property, photograph its condition and record our findings
              in a report for you, under our{' '}
              <Link to="/terms" className="font-medium text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink">Terms &amp; Conditions</Link>.
              Please make sure you have the owner's or builder's permission for us to visit.
            </p>
          </Row>

          <Row title="Withdrawing your consent">
            <p>
              You can withdraw your consent at any time by emailing{' '}
              <a href={`mailto:${EMAIL}?subject=${encodeURIComponent('Withdraw consent')}`} className="font-medium text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink [overflow-wrap:anywhere]">{EMAIL}</a>.
              Tell us what you'd like us to stop, and we'll confirm once it's done. Withdrawing consent doesn't affect
              anything we did before, but we may not be able to continue a booking without the details we need.
            </p>
          </Row>
        </article>
      </section>
    </div>
  )
}

export default Consent
