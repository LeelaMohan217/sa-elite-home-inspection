import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Button from './Button'
import { getConsent, setConsent, onConsentChange } from '../lib/consent'

// Shown until the visitor makes a choice. The site sets no tracking cookies;
// the choice decides whether optional tools may ever be switched on.
function CookieBanner() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(!getConsent())
    return onConsentChange(() => setOpen(false))
  }, [])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="region"
          aria-label="Cookie choice"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          exit={{ opacity: 0, y: 24, transition: { duration: 0.3 } }}
          className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:right-5 sm:bottom-5 sm:max-w-md"
        >
          <div className="rounded-2xl border border-hairline bg-paper p-5 shadow-[0_24px_60px_-24px_rgb(0_0_0/0.25)] sm:p-6">
            <p className="text-[15px] font-medium text-ink">Your privacy</p>
            <p className="mt-2 text-sm leading-relaxed text-stone">
              We don't use tracking or advertising cookies. We only remember your choice on this device.
              If we ever add optional cookies, such as analytics, they'll only run if you allow them.{' '}
              <Link to="/cookie-policy" className="font-medium text-ink underline decoration-hairline underline-offset-4 hover:decoration-ink">
                Cookie Policy
              </Link>
            </p>
            <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <Button variant="secondary" onClick={() => setConsent(false)} className="w-full sm:w-auto">
                Essential only
              </Button>
              <Button onClick={() => setConsent(true)} className="w-full sm:w-auto">
                Allow optional
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieBanner
