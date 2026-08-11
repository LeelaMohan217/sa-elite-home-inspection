import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Prices from './pages/Prices'
import Contact from './pages/Contact'

function App() {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="prices" element={<Prices />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}

export default App
