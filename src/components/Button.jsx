import { Link } from 'react-router-dom'

const BASE =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-medium ' +
  'transition-[background-color,color,border-color] duration-300 cursor-pointer ' +
  'disabled:cursor-not-allowed disabled:opacity-60'

const VARIANTS = {
  primary: 'bg-ink text-paper hover:bg-ink-800',
  secondary: 'border border-hairline bg-paper text-ink hover:border-ink/25',
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
