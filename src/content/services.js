// Text and structured content for the Services page (src/pages/Services.jsx).

import {
  Search,
  Layers,
  Droplets,
  Grid3x3,
  DoorOpen,
  Zap,
  PaintRoller,
  Ruler,
} from "lucide-react";

export const services = [
  {
    icon: Search,
    title: "Inspection",
    description:
      "A complete top-to-bottom inspection covering structure, electrical, plumbing, and safety — for flats and villas alike.",
    bestFor: "Ready-to-move homes, before you buy or take handover",
  },
  {
    icon: Layers,
    title: "Multi Stage Inspection",
    description:
      "Checks at every key construction stage, so structural or material issues are caught early — before walls and finishes hide them.",
    bestFor: "Under-construction flats and villas",
  },
  {
    icon: Droplets,
    title: "Dampness Inspection",
    description:
      "A focused check for moisture, seepage, and dampness issues common in flats and older buildings, especially during monsoon season.",
    bestFor: "Older buildings and homes with damp or wet spots",
  },
];

// The professional snagging checklist every inspection works through,
// grouped as on the company's checklist sheet.
export const checklist = [
  {
    icon: Grid3x3,
    title: "Tile Work",
    groups: [
      {
        items: [
          "Hollowness (tapping sound)",
          "Cracks and damage",
          "Chip-offs",
          "Levelness and offsets",
          "Stains and scratches",
          "Colour and shade variations",
        ],
      },
    ],
  },
  {
    icon: DoorOpen,
    title: "Doors & Windows",
    groups: [
      {
        name: "Doors and frames",
        items: [
          "Lock functionality",
          "Smooth opening and closing",
          "Bolt and latch alignment",
          "Hinge screws",
          "Door bends and warping",
          "Cracks in panel or frame",
          "Frame-to-wall gaps",
          "Hardware alignment",
        ],
      },
      {
        name: "Windows",
        items: [
          "Alignment",
          "Lock mechanism",
          "Smooth operation",
          "Stains and scratches on glass or frame",
          "Glass damage",
          "Frame cracks",
        ],
      },
    ],
  },
  {
    icon: Zap,
    title: "Electrical & Water",
    groups: [
      {
        name: "Electrical",
        items: [
          "Socket testing",
          "Switchboard alignment",
          "Switches working",
          "Gaps around wall plates",
          "Board damage",
          "Loose fittings",
        ],
      },
      {
        name: "Plumbing and leaks",
        items: [
          "Shower leaks",
          "Pipe leaks",
          "Drain leaks",
          "Blocked traps",
          "Bottle traps",
          "Tap check",
          "Toilet",
          "Water pressure",
          "Water quality (TDS)",
        ],
      },
    ],
  },
  {
    icon: PaintRoller,
    title: "Walls & Finishing",
    groups: [
      {
        name: "Walls and ceilings",
        items: [
          "Cracks",
          "Paint peeling",
          "Paint touch-ups",
          "Finishing",
          "Smooth finishing",
          "Stains",
          "Dampness and wet spots",
        ],
      },
      {
        name: "Fixtures",
        items: [
          "Cabinets and joinery",
          "Kitchen platform and sink",
          "Balcony railings",
          "Exhaust fans",
          "Smoke detectors",
          "Grouting (tile gaps)",
          "General cleanliness",
        ],
      },
    ],
  },
  {
    icon: Ruler,
    title: "Area Measurements & Slopes",
    groups: [
      {
        items: ["Total interior area", "Ceiling height", "Slopes"],
      },
    ],
  },
];
