import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import Reveal from './Reveal'

function FaqItem({ question, answer, index = 0 }) {
  const [open, setOpen] = useState(false)

  return (
    <Reveal index={index} className="rounded-2xl border border-hairline bg-paper p-6">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-bold text-ink">{question}</span>
        <Plus
          size={18}
          className={`shrink-0 text-accent-vivid transition-transform duration-200 motion-reduce:transition-none ${open ? 'rotate-45' : ''}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm text-ink/70">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  )
}

export default FaqItem
