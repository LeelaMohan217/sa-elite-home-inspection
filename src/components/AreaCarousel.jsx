import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { RiseUp } from "./ScrollReveal";
import skyline from "../assets/areas/skyline.webp";
import business from "../assets/areas/business.webp";
import apartments from "../assets/areas/apartments.webp";
import charminar from "../assets/areas/charminar.webp";

// City photos, repeated in turn across the cards. Four photos, so any four
// cards side by side always show different ones.
const AREA_PHOTOS = [charminar, apartments, business, skyline];

// Horizontal row of square photo cards. Shows 4 at a time on desktop (3 on
// tablets, 2 on phones); the arrow buttons slide the row by one view, and
// the row can also be swiped or scrolled. Buttons dim at either end.
function AreaCarousel({ areas, label = "Service areas" }) {
  const trackRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEnds = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEnds();
    window.addEventListener("resize", updateEnds);
    return () => window.removeEventListener("resize", updateEnds);
  }, [updateEnds]);

  const slide = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction * el.clientWidth,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  // Below lg the buttons sit in a row under the cards; from lg they float
  // on the left and right edges of the row.
  const buttonClass =
    "z-10 flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-paper text-ink shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)] transition-[background-color,color,opacity] duration-300 hover:bg-ink hover:text-paper disabled:pointer-events-none disabled:opacity-35 sm:h-12 sm:w-12 lg:absolute lg:top-1/2 lg:-translate-y-1/2";

  return (
    <div className="relative">
      <ul
        id="area-carousel"
        ref={trackRef}
        onScroll={updateEnds}
        aria-label={label}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto [scrollbar-width:none] sm:gap-4 [&::-webkit-scrollbar]:hidden"
      >
        {areas.map((area, i) => (
          <RiseUp
            as="li"
            key={area}
            delay={0.1 + Math.min(i, 3) * 0.12}
            className="group relative isolate flex aspect-square w-[calc((100%-0.75rem)/2)] flex-none snap-start flex-col justify-between overflow-hidden rounded-2xl bg-ink p-5 sm:w-[calc((100%-2rem)/3)] sm:p-6 lg:w-[calc((100%-3rem)/4)]"
          >
            <img
              src={AREA_PHOTOS[i % AREA_PHOTOS.length]}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Shade the top and bottom so the pin, number and name stay legible */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgb(0_0_0/0.45),transparent_30%,transparent_45%,rgb(0_0_0/0.8))]"
            />

            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper sm:h-11 sm:w-11">
                <MapPin size={18} strokeWidth={1.75} className="text-ink" aria-hidden="true" />
              </span>
              <span className="text-sm tabular-nums text-paper/70">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div>
              <p className="text-balance text-[17px] leading-snug font-medium tracking-tight text-paper sm:text-h3">
                {area}
              </p>
              <p className="mt-1 text-sm text-paper/70">Hyderabad</p>
            </div>
          </RiseUp>
        ))}
      </ul>

      <div className="mt-6 flex justify-center gap-3 lg:contents">
        <button
          type="button"
          onClick={() => slide(-1)}
          disabled={atStart}
          aria-label="Previous areas"
          aria-controls="area-carousel"
          className={`${buttonClass} lg:-left-6`}
        >
          <ArrowLeft size={18} strokeWidth={1.75} aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={() => slide(1)}
          disabled={atEnd}
          aria-label="Next areas"
          aria-controls="area-carousel"
          className={`${buttonClass} lg:-right-6`}
        >
          <ArrowRight size={18} strokeWidth={1.75} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default AreaCarousel;
