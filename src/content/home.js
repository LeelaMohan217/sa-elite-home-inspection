// Text and structured content for the Home page (src/pages/Home.jsx).
// Kept separate from the component so copy can be edited without touching layout code.

import { ShieldCheck, Award, UserCheck, Clock, Search, Layers, Droplets } from "lucide-react";

export const hero = {
  eyebrow: "Certified Home Inspections",
  headline: "Know the home before you make it yours.",
  lead: "We check the structure, electrical, plumbing and roofing before you sign anything, and send you a detailed report within 24 hours.",
  primaryCta: { label: "Book an Inspection", to: "/contact" },
  secondaryCta: { label: "View Our Services", to: "/services" },
};

export const trustBadges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Award, label: "Certified Professionals" },
  { icon: UserCheck, label: "Background-Checked Inspectors" },
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
  "Kukatpally",
  "Banjara Hills",
  "Jubilee Hills",
  "Miyapur",
];

export const highlights = [
  "Certified, background-checked inspectors",
  "Digital reports with photos within 24 hours",
  "No upselling — we report only what we find",
];

export const stats = [
  { label: "Homes Inspected", value: 400, suffix: "+" },
  { label: "Years of Experience", value: 15, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Avg. Report Turnaround", value: 24, suffix: " hrs" },
];

export const reportItems = [
  { label: "Roof & Exterior", status: "ok" },
  { label: "Electrical System", status: "flagged" },
  { label: "Plumbing", status: "ok" },
  { label: "HVAC", status: "ok" },
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
    title: "Book Online or by Phone",
    description:
      "Pick a time that works for you — we'll confirm within minutes.",
  },
  {
    step: "02",
    title: "We Inspect the Property",
    description:
      "A certified inspector examines every major system, top to bottom.",
  },
  {
    step: "03",
    title: "Get Your Digital Report",
    description: "Receive a clear, photo-backed report within 24 hours.",
  },
  {
    step: "04",
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
      "You'll receive a clear, photo-backed digital report within 24 hours of the inspection.",
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
