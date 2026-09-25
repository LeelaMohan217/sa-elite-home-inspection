import { Link } from 'react-router-dom'

// Every button is 40px tall (h-10), matching the navbar's Book button.
const BASE =
  'inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 font-sans text-sm font-medium ' +
  'transition-[background-color,color,border-color] duration-300 cursor-pointer ' +
  'disabled:cursor-not-allowed disabled:opacity-60'

const VARIANTS = {
  primary: 'bg-ink text-paper hover:bg-ink-800',
  secondary: 'border border-hairline bg-paper text-ink hover:border-ink/25',
  invert: 'bg-paper text-ink hover:bg-paper/85',
  ghost: 'text-ink hover:text-accent',
  outline: 'border border-paper/15 text-paper hover:border-paper/55',
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
