import { Link } from 'react-router-dom'

const BASE =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-bold ' +
  'transition-[background-color,color,border-color,box-shadow] duration-500 ease-in-out cursor-pointer ' +
  'disabled:cursor-not-allowed disabled:opacity-60'

const VARIANTS = {
  primary: 'bg-ink text-paper shadow-cta hover:bg-ink/85 hover:shadow-cta-hover',
  secondary: 'border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-paper',
  invert: 'bg-paper text-ink hover:bg-accent-light',
  ghost: 'text-ink hover:text-accent',
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
