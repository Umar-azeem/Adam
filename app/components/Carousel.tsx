// app/components/Carousel.tsx
"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  { src: "/img/b1.jpg", alt: "Slide 1" },
  { src: "/img/b2.jpg", alt: "Slide 2" },
  { src: "/img/b3.jpg", alt: "Slide 3" },
  { src: "/img/b4.jpg", alt: "Slide 4" },
  
];

const AUTOPLAY_MS = 4000;

export default function Carousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setActive(((i % slides.length) + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // autoplay
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" text-center sm:text-start">
              <p className="text-[#04205D] font-bold tracking-[3px] sm:tracking-[4px] mb-4 text-sm sm:text-base">
                Gallery
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug text-gray-900 mb-8 sm:mb-10">
                Partnering for Success {`"`} or {`"`}Our Community in Action
              </h1>
            </div>
    <div
      id="default-carousel"
      className="relative w-full max-w-2xl mx-auto select-none my-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Wrapper — square */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#0b152c] shadow-xl ring-1 ring-[#04205D]/20">
        {/* Sliding track  */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={s.src} className="relative h-full w-full shrink-0">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                className="absolute inset-0 h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
              {/* subtle bottom scrim so future captions stay legible */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* slide counter */}
        <div className="absolute right-4 top-4 z-30 rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
          {active + 1} / {slides.length}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-current={active === i}
            aria-label={`Slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              active === i
                ? "w-6 bg-[#1d60f0]"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Prev control */}
      <button
        type="button"
        onClick={prev}
        className="group absolute top-0 start-0 z-30 flex h-full items-center justify-center px-4 focus:outline-none"
        aria-label="Previous"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#04205D]/60 backdrop-blur transition-all duration-300 group-hover:bg-[#04205D] group-hover:scale-110 group-focus:ring-4 group-focus:ring-[#7FD9AC]/50">
          <svg
            className="h-5 w-5 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Next control */}
      <button
        type="button"
        onClick={next}
        className="group absolute top-0 end-0 z-30 flex h-full items-center justify-center px-4 focus:outline-none"
        aria-label="Next"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#04205D]/60 backdrop-blur transition-all duration-300 group-hover:bg-[#04205D] group-hover:scale-110 group-focus:ring-4 group-focus:ring-[#7FD9AC]/50">
          <svg
            className="h-5 w-5 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>

      {/* Progress bar synced to autoplay */}
      <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-[#04205D]/15">
        <div
          key={active}
          className={`h-full bg-[#04205D] ${paused ? "" : "animate-[grow_4s_linear_forwards]"}`}
        />
      </div>

      <style jsx global>{`
        @keyframes grow {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
    </div>
  );
}
