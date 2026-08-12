import { Link } from 'react-router-dom'

const BASE =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-bold ' +
  'transition-[background-color,color,border-color,transform,box-shadow] duration-200 ease-out cursor-pointer ' +
  'hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0 ' +
  'disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0'

const VARIANTS = {
  primary: 'bg-slate-700 text-paper shadow-cta hover:bg-slate-800 hover:shadow-cta-hover',
  secondary: 'border border-slate-700 text-slate-700 hover:border-slate-700 hover:text-slate-700',
  invert: 'bg-paper text-ink hover:bg-accent-light',
  ghost: 'text-accent hover:text-accent-dark',
  outline: 'border border-paper/50 text-paper hover:bg-paper hover:text-ink',
}

function Button({
  to,
  variant = 'primary',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  children,
  type = 'button',
  ...rest
}) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`
  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={16} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={16} aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  )
}

export default Button
