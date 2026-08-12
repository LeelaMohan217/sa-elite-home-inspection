import { ShieldCheck, Clock, FileCheck, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionEyebrow from "../components/SectionEyebrow";
import Button from "../components/Button";
import StatBlock from "../components/StatBlock";
import InspectionCard from "../components/InspectionCard";
import BlobShape from "../components/BlobShape";
import FaqItem from "../components/FaqItem";
import heroImage from "../assets/hero.png";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Certified Inspectors",
    description: "Licensed, experienced inspectors who know what to look for.",
    tone: "ink",
  },
  {
    icon: Clock,
    title: "Same-Week Availability",
    description: "Flexible scheduling so you never miss a closing deadline.",
    tone: "paper",
  },
  {
    icon: FileCheck,
    title: "Detailed Digital Reports",
    description: "Clear, photo-backed reports delivered within 24 hours.",
    tone: "paper",
  },
];

const stats = [
  { label: "Homes Inspected", value: "1,200+" },
  { label: "Years of Experience", value: "15+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Avg. Report Turnaround", value: "24 hrs" },
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
      <section className="relative min-h-[700px] overflow-hidden border-b border-hairline">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-[center_65%]"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="relative mx-auto flex max-w-6xl justify-start px-4 pt-32 sm:px-6 sm:pt-36 lg:pt-40">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Reveal index={0}>
              <SectionEyebrow>PROFESSIONAL HOME INSPECTIONS</SectionEyebrow>
            </Reveal>

            <Reveal index={1}>
              <h1 className="mt-5 text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                See Beyond the{" "}
                <em className="font-surfer text-slate-700">Surface</em>
              </h1>
            </Reveal>

            <Reveal index={2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white">
                Thorough, honest home inspections that help you make informed
                decisions — whether you're buying, selling, or maintaining your
                home.
              </p>
            </Reveal>

            <Reveal
              index={3}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <Button to="/contact" variant="primary" icon={ArrowRight}>
                Schedule an Inspection
              </Button>

              <Button to="/services" variant="secondary">
                View Services
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionEyebrow>Why Choose Us</SectionEyebrow>

        <h2 className="mt-3 text-3xl text-accent sm:text-4xl">
          Built on precision, not guesswork.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item, i) => (
            <InspectionCard key={item.title} index={i} tone={item.tone}>
              <item.icon
                size={22}
                className={
                  item.tone === "ink"
                    ? "text-accent-light"
                    : "text-accent-vivid"
                }
                aria-hidden="true"
              />

              <h3
                className={`mt-4 text-lg font-bold ${
                  item.tone === "ink" ? "text-paper" : "text-ink"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`mt-2 text-sm ${
                  item.tone === "ink" ? "text-paper/70" : "text-ink/70"
                }`}
              >
                {item.description}
              </p>
            </InspectionCard>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-hairline bg-surface/60">
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

      {/* Popular Services */}
      <section className="border-t border-hairline bg-surface/60 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionEyebrow>Popular Services</SectionEyebrow>

              <h2 className="mt-3 text-3xl text-accent sm:text-4xl">
                What we inspect.
              </h2>
            </div>

            <Button to="/services" variant="ghost" icon={ArrowRight}>
              View all services
            </Button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <InspectionCard
              index={0}
              tone="accent"
              decorated
              className="flex flex-col justify-between sm:col-span-2"
            >
              <div>
                <h3 className="text-2xl font-bold text-paper">Inspection</h3>

                <p className="mt-3 max-w-md text-paper/80">
                  A complete top-to-bottom inspection covering structure,
                  electrical, plumbing, and safety — for flats and villas alike.
                </p>
              </div>

              <Button to="/services" variant="outline" className="mt-6 w-fit">
                View Service
              </Button>
            </InspectionCard>

            <InspectionCard index={1}>
              <h3 className="text-lg font-bold text-ink">
                Multi Stage Inspection
              </h3>

              <p className="mt-2 text-sm text-ink/70">
                Checks at every key construction stage, catching issues before
                they're hidden.
              </p>
            </InspectionCard>

            <InspectionCard index={2}>
              <h3 className="text-lg font-bold text-ink">
                Dampness Inspection
              </h3>

              <p className="mt-2 text-sm text-ink/70">
                A focused check for moisture and seepage issues common in flats
                and older homes.
              </p>
            </InspectionCard>
          </div>
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
