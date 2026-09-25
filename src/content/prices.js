// Text and structured content for the Prices page (src/pages/Prices.jsx).

export const plans = [
  {
    name: "1BHK Flat",
    price: "₹5,500",
    description: "Ideal for 1BHK apartments and compact flats.",
    features: [
      "Full structural & systems review",
      "Digital report within 48 hrs",
      "Dampness check included",
    ],
  },
  {
    name: "2BHK Flat",
    price: "₹6,700",
    description: "Our most popular plan for 2BHK apartments.",
    features: [
      "Everything in 1BHK Flat",
      "Detailed electrical & plumbing check",
      "Priority scheduling",
    ],
    featured: true,
  },
  {
    name: "Villa",
    price: "₹7,500",
    description: "For independent villas and larger homes.",
    features: [
      "Everything in 2BHK Flat",
      "Multi stage inspection option",
      "Extended on-site walkthrough",
    ],
  },
];

// What comes with every plan, whichever size of home.
export const included = [
  { title: "52-point snagging checklist", description: "Tile work, doors and windows, electrical, plumbing, walls, fixtures and measurements." },
  { title: "Photo-backed digital report", description: "Every finding graded major, minor or cosmetic, delivered within 48 hours." },
  { title: "Dampness check", description: "Moisture, seepage and wet spots, checked on every visit." },
  { title: "Talk to your inspector", description: "Call the inspector who was on site to walk through any finding." },
];

export const pricingFaqs = [
  {
    question: "Is the listed price final?",
    answer:
      "The listed prices are flat rates by home size. We confirm the final quote when you book, based on the property and the services you need.",
  },
  {
    question: "My home is larger, or not listed here. Can you still inspect it?",
    answer:
      "Yes. Tell us about the property when you get in touch and we'll give you a quote before we book the visit.",
  },
  {
    question: "Is the dampness check extra?",
    answer:
      "No. A dampness check is part of every plan. If damp is your main concern, ask about our dedicated Dampness Inspection.",
  },
  {
    question: "When will I get my report?",
    answer:
      "You'll receive a clear, photo-backed digital report within 48 hours of the inspection.",
  },
];
