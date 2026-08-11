function PageHero({ title, subtitle }) {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-slate-600">{subtitle}</p>}
      </div>
    </section>
  )
}

export default PageHero
