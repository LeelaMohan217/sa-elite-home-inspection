import { Children } from 'react'

// Items travelling round a circle, after Magic UI's Orbiting Circles.
// Place inside a positioned box: the orbit is centred on that box.
// `duration` is seconds per lap; `angleOffset` staggers rings against
// each other. Reduced motion leaves each item still at its place.
function OrbitingCircles({
  children,
  radius = 160,
  duration = 40,
  reverse = false,
  angleOffset = 0,
  iconSize = 44,
  path = true,
}) {
  const items = Children.toArray(children)

  return (
    <>
      {path && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 rounded-full border border-ink/[0.07]"
          style={{ width: radius * 2, height: radius * 2, marginLeft: -radius, marginTop: -radius }}
        />
      )}
      {items.map((child, i) => (
        <div
          key={i}
          className={`orbit-rest absolute top-1/2 left-1/2 flex items-center justify-center motion-safe:orbit-spin ${
            reverse ? '[animation-direction:reverse]' : ''
          }`}
          style={{
            '--duration': duration,
            '--radius': radius,
            '--angle': angleOffset + (360 / items.length) * i,
            width: iconSize,
            height: iconSize,
            marginLeft: -iconSize / 2,
            marginTop: -iconSize / 2,
          }}
        >
          {child}
        </div>
      ))}
    </>
  )
}

export default OrbitingCircles
