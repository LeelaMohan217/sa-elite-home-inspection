import {
  ArrowRight,
  ClipboardCheck,
  Search,
  Layers,
  Droplets,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SectionEyebrow from "../components/SectionEyebrow";
import Button from "../components/Button";
import StatBlock from "../components/StatBlock";
import BlobShape from "../components/BlobShape";
import FaqItem from "../components/FaqItem";
import PlaceholderPhoto from "../components/PlaceholderPhoto";
import heroImage from "../assets/hero.png";

const trustBadges = [
  { title: "Certified Inspectors", description: "Experience & insured" },
  { title: "Detailed Reports", description: "Clear & easy to understand" },
  { title: "Flexible Scheduling", description: "Time that works for you" },
];

const stats = [
  { label: "Homes Inspected", value: "100+" },
  { label: "Years Experience", value: "3+" },
  { label: "Customer Rating", value: "4.9/5" },
  { label: "Report Delivery", value: "24-48 hrs" },
];

const services = [
  {
    icon: Search,
    title: "Inspection",
    description:
      "A complete top-to-bottom inspection covering structure, electrical, plumbing, and safety — for flats and villas alike.",
  },
  {
    icon: Layers,
    title: "Multi Stage Inspection",
    description:
      "Checks at every key construction stage, catching issues before they're hidden.",
  },
  {
    icon: Droplets,
    title: "Dampness Inspection",
    description:
      "A focused check for moisture and seepage issues common in flats and older homes.",
  },
];

const steps = [
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

const testimonials = [
  {
    quote:
      "SA Elite caught a dampness issue our first inspector missed entirely. Saved us from a costly mistake.",
    author: "Maria G., Homebuyer",
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

const faqs = [
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

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-slate-500 via-slate-200 to-white"
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 pt-32 text-center sm:px-6 sm:pt-36 lg:pt-40">
          <Reveal index={0}>
            <SectionEyebrow tone="dark">
              PROFESSIONAL HOME INSPECTIONS
            </SectionEyebrow>
          </Reveal>

          <Reveal index={1}>
            <h1 className="mt-5 text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              See Beyond the{" "}
              <em className="font-surfer text-accent-light">Surface</em>
            </h1>
          </Reveal>

          <Reveal index={2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white">
              Thorough, honest home inspections that help you make informed
              decisions — whether you're buying, selling, or maintaining your
              home.
            </p>
          </Reveal>

          <Reveal index={3} className="mt-8">
            <Button to="/contact" variant="outline" icon={ArrowRight}>
              Schedule an Inspection
            </Button>
          </Reveal>

          <Reveal
            index={4}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 pb-14"
          >
            {trustBadges.map((item, i) => (
              <div
                key={item.title}
                className={`text-left ${
                  i > 0 ? "sm:border-l sm:border-ink/15 sm:pl-10" : ""
                }`}
              >
                <p className="text-sm font-bold text-ink">{item.title}</p>
                <p className="text-xs text-ink/60">{item.description}</p>
              </div>
            ))}
          </Reveal>
        </div>

        {/* House Photo */}
        <div className="relative h-[320px] w-full sm:h-[420px] lg:h-[520px]">
          <div
            className="absolute inset-0 bg-cover bg-[center_88%] sm:bg-[center_75%] lg:bg-[center_70%]"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent sm:h-14"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-14 sm:px-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatBlock
              key={stat.label}
              value={stat.value}
              label={stat.label}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionEyebrow>About Us</SectionEyebrow>

            <h2 className="mt-3 text-3xl text-accent sm:text-4xl">
              A clearer look at your home. A more confident decision.
            </h2>

            <p className="mt-6 text-ink/70">
              We believe a home inspection should give you more than a
              checklist — it should give you clarity. Our licensed inspectors
              take a thorough, unbiased look at your property, flag potential
              concerns, and explain findings in a way that's easy to
              understand.
            </p>

            <p className="mt-4 text-ink/70">
              Whether you're buying, selling, or maintaining your home, we're
              here to give you the information you need to move forward with
              confidence.
            </p>

            <Button to="/about" variant="primary" className="mt-8">
              Learn More About Us
            </Button>
          </Reveal>

          <Reveal index={1}>
            <PlaceholderPhoto
              icon={ClipboardCheck}
              label="Inspector at Work"
              className="aspect-[4/3] w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-hairline bg-surface/60 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <Reveal>
            <SectionEyebrow className="justify-center">
              Our Services
            </SectionEyebrow>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl text-accent sm:text-4xl">
              Inspection services you can count on.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} index={i}>
                <PlaceholderPhoto
                  icon={service.icon}
                  label={service.title}
                  className="aspect-[4/3] w-full"
                />

                <h3 className="mt-5 text-lg font-bold text-ink">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-ink/70">
                  {service.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Button
            to="/services"
            variant="ghost"
            icon={ArrowRight}
            className="mt-10"
          >
            View all services
          </Button>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionEyebrow>Our Process</SectionEyebrow>

        <h2 className="mt-3 text-3xl text-accent sm:text-4xl">How it works.</h2>

        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute inset-x-0 top-5 hidden h-px bg-hairline lg:block"
            aria-hidden="true"
          />

          {steps.map((item, i) => (
            <Reveal key={item.step} index={i}>
              <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-accent bg-paper text-xs font-extrabold text-accent">
                {item.step}
              </span>

              <h3 className="mt-4 font-bold text-ink">{item.title}</h3>

              <p className="mt-2 text-sm text-ink/70">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionEyebrow>Client Stories</SectionEyebrow>

        <h2 className="mt-3 text-3xl text-accent sm:text-4xl">
          What our clients say.
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal
              key={testimonial.author}
              index={i}
              className="relative border-l-2 border-hairline pl-6"
            >
              <span
                className="pointer-events-none absolute -left-2 -top-4 text-6xl font-black text-ink/10"
                aria-hidden="true"
              >
                "
              </span>

              <blockquote className="text-sm leading-relaxed text-ink/80">
                "{testimonial.quote}"
              </blockquote>

              <figcaption className="mt-4 text-xs font-bold uppercase tracking-[0.08em] text-ink/60">
                {testimonial.author}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-hairline bg-surface/60 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr]">
            <Reveal>
              <SectionEyebrow>FAQ</SectionEyebrow>

              <h2 className="mt-3 text-3xl text-accent sm:text-4xl">
                Common questions.
              </h2>
            </Reveal>

            <Reveal
              index={1}
              className="divide-y divide-hairline rounded-2xl border border-hairline bg-paper"
            >
              {faqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Reveal as="section" className="relative overflow-hidden bg-ink">
        <BlobShape
          className="pointer-events-none absolute -right-32 -top-40 h-[28rem] w-[28rem] opacity-30"
          from="var(--color-accent-vivid)"
          to="var(--color-ink)"
        />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-20 text-center sm:px-6">
          <SectionEyebrow tone="dark">Ready When You Are</SectionEyebrow>

          <h2 className="text-3xl text-paper sm:text-4xl">
            Ready to book your inspection?
          </h2>

          <p className="max-w-xl text-paper/70">
            Reach out today and we'll get you scheduled with one of our
            certified inspectors.
          </p>

          <Button
            to="/contact"
            variant="invert"
            icon={ArrowRight}
            className="mt-2"
          >
            Get in Touch
          </Button>
        </div>
      </Reveal>
    </div>
  );
}

export default Home;
