import { Link } from 'react-router-dom'

const BASE =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-6 py-3 font-sans text-sm font-semibold ' +
  'transition-[background-color,color,border-color,transform] duration-200 ease-out cursor-pointer ' +
  'hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0 ' +
  'disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0'

const VARIANTS = {
  primary: 'bg-brass text-paper hover:bg-brass-dark',
  secondary: 'border border-hairline text-ink hover:border-brass hover:text-brass-dark',
  invert: 'bg-paper text-ink hover:bg-brass-light',
  ghost: 'text-brass-dark hover:text-ink',
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
