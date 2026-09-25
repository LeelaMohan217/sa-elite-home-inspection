import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

function Layout() {
  const location = useLocation()
  const previousPath = useRef(location.pathname)

  // Every navigation gets a new location.key, including a link to the page
  // you're already on (e.g. the navbar logo on the home page). A new page
  // starts at the top; a link to the current page glides back up.
  useEffect(() => {
    const samePage = previousPath.current === location.pathname
    previousPath.current = location.pathname
    window.scrollTo({ top: 0, behavior: samePage ? 'smooth' : 'instant' })
  }, [location.key, location.pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Once the old page has faded out, snap to the top again so the new
            page always opens exactly at its start */}
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
