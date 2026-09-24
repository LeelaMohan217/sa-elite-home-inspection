// Text and structured content for the Home page (src/pages/Home.jsx).
// Kept separate from the component so copy can be edited without touching layout code.

import {
  ShieldCheck,
  Award,
  UserCheck,
  Clock,
  Search,
  Layers,
  Droplets,
  CalendarCheck,
  ClipboardCheck,
  FileText,
  MessagesSquare,
} from "lucide-react";

export const hero = {
  eyebrow: "Certified Home Inspections",
  headline: "Know the home before you make it yours.",
  lead: "We check the structure, electrical, plumbing and roofing before you sign anything, and send you a detailed report within 48 hours.",
  primaryCta: { label: "Book an Inspection", to: "/contact" },
  secondaryCta: { label: "View Our Services", to: "/services" },
};

export const trustBadges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Award, label: "Certified Professionals" },
  { icon: UserCheck, label: "Background-Checked" },
  { icon: Clock, label: "On-Time, Every Time" },
];

export const inspectorCredentials = [
  "10+ years in residential construction & inspection",
  "Licensed home inspector",
  "Specializes in structural, electrical & plumbing systems",
];

export const serviceAreas = [
  "Gachibowli",
  "Kondapur",
  "Madhapur",
  "Hitech City",
  "Financial District",
  "Kokapet",
  "Narsingi",
  "Manikonda",
  "Nallagandla",
  "Tellapur",
  "Chandanagar",
  "Miyapur",
  "Bachupally",
  "Nizampet",
  "Kukatpally",
  "Kompally",
  "Jubilee Hills",
  "Banjara Hills",
  "Begumpet",
  "Ameerpet",
  "Secunderabad",
  "Uppal",
  "LB Nagar",
  "Shamshabad",
];

export const serviceAreaIntro = "We inspect flats, villas, and independent houses across Hyderabad and the surrounding areas, working with homebuyers, sellers, real estate agents, and builders alike.";

// Longer "about the company" copy. Not shown on the home page; kept for the
// About page.
export const aboutBlocks = [
  {
    title: "Who we are",
    body: "AKSHARA Elite Home Inspection is a locally owned inspection company built on trust, training, and attention to detail. We were founded with a simple belief: that every homebuyer and seller in Hyderabad deserves an honest, detailed picture of a property's condition before any decision is made. Unlike inspectors who rush through a walkthrough with a generic checklist, our team takes the time to understand the specific construction style, age, and quirks of each property, so nothing gets overlooked. We've worked with first-time buyers navigating their very first purchase, seasoned investors comparing multiple properties, and sellers who want a clear record of a home's condition before it goes on the market.",
  },
  {
    title: "How it works",
    body: "Our process is designed to be simple and transparent from start to finish. You can book online or by phone, and we'll confirm a time that works for you, usually within minutes. On the day of the inspection, a licensed professional walks the entire property in person — roof to foundation — documenting everything with photos rather than vague notes. Within 48 hours, you'll receive a clear, easy-to-read digital report that explains exactly what was found and what it means for you. If anything in the report needs further explanation, you can call us directly and talk it through with the inspector who was actually on site, not a call center reading from a script.",
  },
  {
    title: "What we check",
    body: "Every inspection covers the systems that matter most: structural integrity, electrical wiring and panels, plumbing, and safety features, along with a dedicated dampness and moisture check that's especially important during Hyderabad's monsoon season. Whether you're buying a compact 1BHK flat, a spacious villa, or evaluating a property mid-construction, we tailor the inspection checklist to match the property type so you're never paying for checks that don't apply to your home. For under-construction properties, we also offer multi-stage inspections timed to key milestones, so structural issues are caught while they're still easy and affordable to fix.",
  },
  {
    title: "Our independence",
    body: "Our inspectors are licensed, background-checked, and continually trained on the latest building codes and safety standards, so you can trust the findings in every report. We never upsell repairs or push you toward contractors we have a relationship with — our only job is to report exactly what we find, so you can negotiate, plan, or walk away with complete confidence in your decision. That independence is the whole point: a report is only useful if you can trust that it wasn't written to sell you something, and we take that seriously on every single job we take on, large or small.",
  },
];

export const highlights = [
  "Certified, background-checked inspectors",
  "Digital reports with photos within 48 hours",
  "No upselling — we report only what we find",
];

export const stats = [
  { label: "Homes Inspected", value: 400, suffix: "+" },
  { label: "User Satisfaction", value: 98, suffix: "%" },
  { label: "Avg. Report Turnaround", value: 48, suffix: " hrs" },
];

// status: "ok" or a severity ("major" | "minor" | "cosmetic"), matching the
// severity guide used in real AKSHARA reports.
export const reportItems = [
  { label: "Roof & Exterior", status: "ok" },
  {
    label: "Electrical System",
    status: "major",
    note: "Loose connection at the main panel. We recommend a licensed electrician review it before closing.",
  },
  { label: "Plumbing", status: "minor" },
  { label: "Floors & Tiles", status: "cosmetic" },
  { label: "Foundation & Structure", status: "ok" },
];

export const services = [
  {
    icon: Search,
    title: "Inspection",
    description:
      "A complete top-to-bottom inspection covering structure, electrical, plumbing, and safety — for flats and villas alike.",
  },
  {
    icon: Droplets,
    title: "Dampness Inspection",
    description:
      "A focused check for moisture, seepage, and dampness issues common in flats and older buildings, especially during monsoon season.",
  },
  {
    icon: Layers,
    title: "Multi Stage Inspection",
    description:
      "Checks at every key construction stage, so structural or material issues are caught early — before walls and finishes hide them.",
  },
];

export const steps = [
  {
    step: "01",
    icon: CalendarCheck,
    title: "Book Online or by Phone",
    description:
      "Pick a time that works for you — we'll confirm within minutes.",
  },
  {
    step: "02",
    icon: ClipboardCheck,
    title: "We Inspect the Property",
    description:
      "A certified inspector examines every major system, top to bottom.",
  },
  {
    step: "03",
    icon: FileText,
    title: "Get Your Digital Report",
    description: "Receive a clear, photo-backed report within 48 hours.",
  },
  {
    step: "04",
    icon: MessagesSquare,
    title: "Ask Us Anything",
    description:
      "We're available to walk through the findings and answer questions.",
  },
];

export const featuredTestimonial = {
  quote:
    "AKSHARA Elite caught a dampness issue our first inspector missed entirely. Saved us from a costly mistake.",
  name: "Maria G.",
  role: "Homebuyer",
};

export const testimonials = [
  {
    quote:
      "Booking was easy and the inspector showed up right on time. The report flagged a wiring issue that would've cost us a lot more down the line.",
    author: "Rohan K., Homeowner",
  },
  {
    quote:
      "Fast, professional, and the report was easy to understand. Highly recommend before any closing.",
    author: "David R., Realtor",
  },
  {
    quote:
      "They walked me through every finding in person. Never felt rushed or upsold on anything.",
    author: "Priya K., Homeowner",
  },
];

export const faqs = [
  {
    question: "What does a home inspection cover?",
    answer:
      "A full structural, electrical, plumbing, and safety review of the property, plus a dedicated dampness check — tailored to flats and villas alike.",
  },
  {
    question: "How long does an inspection take?",
    answer:
      "It depends on the property. 1BHK and 2BHK flats typically take 1-2 hours; villas and larger homes take longer. We'll confirm a time estimate when you book.",
  },
  {
    question: "Do I need to be present during the inspection?",
    answer:
      "It's not required, but we recommend it — being there lets you ask questions and see any issues firsthand.",
  },
  {
    question: "How soon will I get my report?",
    answer:
      "You'll receive a clear, photo-backed digital report within 48 hours of the inspection.",
  },
  {
    question: "What is a Multi Stage Inspection?",
    answer:
      "Inspections carried out at key points during construction, so structural or material issues are caught early — before walls and finishes hide them.",
  },
  {
    question: "What is a Dampness Inspection?",
    answer:
      "A focused check for moisture, seepage, and dampness — common in flats and older buildings, especially during monsoon season.",
  },
];
