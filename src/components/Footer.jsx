function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">SA Elite Home Inspection</p>
          <p className="mt-2 text-sm text-slate-400">
            Thorough, honest home inspections you can rely on before you buy or sell.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-400">
            <li>Phone: (555) 123-4567</li>
            <li>Email: info@saelitehomeinspection.com</li>
            <li>Serving the greater San Antonio area</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Hours</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-400">
            <li>Mon - Sat: 7:00 AM - 7:00 PM</li>
            <li>Sunday: By appointment</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {year} SA Elite Home Inspection. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
