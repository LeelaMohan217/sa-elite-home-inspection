import {
  Home,
  Building2,
  Search,
  ClipboardCheck,
  Ruler,
  Droplets,
  Zap,
  DoorOpen,
  KeyRound,
  FileText,
  ShieldCheck,
  Hammer,
  PaintRoller,
  Wrench,
  Grid3x3,
  Camera,
  Lightbulb,
  Building,
} from 'lucide-react'
import OrbitingCircles from './OrbitingCircles'

export function Chip({ icon: Icon, size = 18 }) {
  return (
    <span className="flex h-full w-full items-center justify-center rounded-full border border-hairline bg-paper text-ink/75 shadow-[0_6px_16px_-10px_rgb(0_0_0/0.25)]">
      <Icon size={size} strokeWidth={1.6} aria-hidden="true" />
    </span>
  )
}

// The three rings, inner to outer: icons, lap time and direction.
const RINGS = [
  { icons: [Home, Search, Ruler, Droplets, KeyRound], duration: 60, angleOffset: 0 },
  { icons: [Building2, ClipboardCheck, Zap, DoorOpen, FileText, Camera], duration: 80, reverse: true, angleOffset: 20 },
  { icons: [Building, ShieldCheck, Hammer, PaintRoller, Grid3x3, Wrench, Lightbulb], duration: 110, angleOffset: 10 },
]

// Ring sizes for tablets and laptops: radius, chip size and icon size (px),
// inner to outer.
const WIDE = { radius: [270, 410, 560], chip: [44, 48, 52], icon: [18, 20, 21] }


function Rings({ sizes }) {
  return RINGS.map((ring, r) => (
    <OrbitingCircles
      key={r}
      radius={sizes.radius[r]}
      duration={ring.duration}
      reverse={ring.reverse}
      angleOffset={ring.angleOffset}
      iconSize={sizes.chip[r]}
    >
      {ring.icons.map((icon, i) => (
        <Chip key={i} icon={icon} size={sizes.icon[r]} />
      ))}
    </OrbitingCircles>
  ))
}

// Hero background for tablets and laptops: three slow rings of home and
// inspection symbols, with the middle (where the text sits) faded out.
// Phones get still icons in the gaps around the text instead (see Hero). The strip under the navbar
// fades out on every screen.
function HeroOrbit() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 hidden [mask-image:radial-gradient(ellipse_46%_44%_at_50%_52%,transparent_58%,black_100%),linear-gradient(to_bottom,transparent_72px,black_176px)] [mask-composite:intersect] [-webkit-mask-composite:source-in] sm:block"
    >
      <div className="absolute top-1/2 left-1/2 h-0 w-0 scale-[0.75] lg:scale-100">
        <Rings sizes={WIDE} />
      </div>
    </div>
  )
}

export default HeroOrbit
