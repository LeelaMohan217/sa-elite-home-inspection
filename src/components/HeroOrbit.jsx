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

function Chip({ icon: Icon, size = 18 }) {
  return (
    <span className="flex h-full w-full items-center justify-center rounded-full border border-hairline bg-paper text-ink/75 shadow-[0_6px_16px_-10px_rgb(0_0_0/0.25)]">
      <Icon size={size} strokeWidth={1.6} aria-hidden="true" />
    </span>
  )
}

// Hero background: three slow rings of home and inspection symbols. The
// middle (where the text sits) and the strip under the navbar fade out, so
// the orbit only shows around the edges; it scales down on smaller screens.
function HeroOrbit() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_80%_56%_at_50%_52%,transparent_62%,black_100%),linear-gradient(to_bottom,transparent_72px,black_176px)] [mask-composite:intersect] [-webkit-mask-composite:source-in] sm:opacity-100 sm:[mask-image:radial-gradient(ellipse_46%_44%_at_50%_52%,transparent_58%,black_100%),linear-gradient(to_bottom,transparent_72px,black_176px)]"
    >
      <div className="absolute top-1/2 left-1/2 h-0 w-0 scale-[0.6] sm:scale-[0.75] lg:scale-100">
        <OrbitingCircles radius={270} duration={60}>
          <Chip icon={Home} />
          <Chip icon={Search} />
          <Chip icon={Ruler} />
          <Chip icon={Droplets} />
          <Chip icon={KeyRound} />
        </OrbitingCircles>

        <OrbitingCircles radius={410} duration={80} reverse angleOffset={20} iconSize={48}>
          <Chip icon={Building2} size={20} />
          <Chip icon={ClipboardCheck} size={20} />
          <Chip icon={Zap} size={20} />
          <Chip icon={DoorOpen} size={20} />
          <Chip icon={FileText} size={20} />
          <Chip icon={Camera} size={20} />
        </OrbitingCircles>

        <OrbitingCircles radius={560} duration={110} angleOffset={10} iconSize={52}>
          <Chip icon={Building} size={21} />
          <Chip icon={ShieldCheck} size={21} />
          <Chip icon={Hammer} size={21} />
          <Chip icon={PaintRoller} size={21} />
          <Chip icon={Grid3x3} size={21} />
          <Chip icon={Wrench} size={21} />
          <Chip icon={Lightbulb} size={21} />
        </OrbitingCircles>
      </div>
    </div>
  )
}

export default HeroOrbit
