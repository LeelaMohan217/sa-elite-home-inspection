import { useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

function FaqItem({ question, answer, open = false, onToggle }) {
  const id = useId()
  const panelId = `${id}-panel`

  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={onToggle}
        className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="text-[17px] font-medium tracking-tight text-ink">
          {question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
            open
              ? 'border-accent bg-accent text-paper'
              : 'border-hairline text-ink group-hover:border-accent/40'
          }`}
        >
          <Plus
            size={15}
            strokeWidth={1.75}
            className={`transition-transform duration-300 motion-reduce:transition-none ${open ? 'rotate-45' : ''}`}
            aria-hidden="true"
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pr-12 pb-6 text-[15px] leading-relaxed text-stone">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FaqItem
