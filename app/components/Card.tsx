"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, RefreshCw, Check } from "lucide-react";

import { Award, TrendingDown, Handshake } from "lucide-react";
import Link from "next/link";

const cards = [
  {
    id: 0,
    badge: "20+ Years",
    title: "Guide from Experience",
    description:
      "With over 20 years in finance, I provide a level of expertise that financially benefits clients and is deeply respected by industry professionals nationwide.",
    icon: Award,
    gradient: "from-[#04205D] via-[#04305D] to-[#04408D]",
    backBg: "bg-[#04205D] ",
    backTitle: "Why Experience Matters",
    features: [
      "20+ years in mortgage finance",
      "Trusted by industry professionals",
      "Proven track record of client savings",
    ],
    darkText: false,
  },
  {
    id: 1,
    badge: "Best Rates",
    title: "Deliver Unparalleled Value",
    description:
      "By choosing to be a boutique broker of loan products, our firm is in the best position to deliver optimal choice, aggressive rates, and personal service to every client.",
    icon: TrendingDown,
    gradient: "from-[#04405D] via-[#04205D] to-[#04209D]",
    backBg: "bg-[#04205D] ",
    backTitle: "Our Advantage",
    features: [
      "Access to 50+ lenders",
      "Rates guaranteed",
      "Personalized service every step",
    ],
    darkText: false,
  },
  {
    id: 2,
    badge: "We Never Quit",
    title: "Find Solutions So Every Client Wins",
    description:
      "Here is what we say to challenges — 'bring it on.' We work tirelessly to close all loans, and we don't walk away when a client is up against tough circumstances.",
    icon: Handshake,
    gradient: "from-[#04205D] via-[#05209D] to-[#04709D]",
    backBg: "bg-[#04205D] ",

    backTitle: "Our Commitment",
    features: [
      "Close loans others won't touch",
      "Creative problem solving",
      "With you until the deal is done",
    ],
    darkText: false,
  },
];

function getPositionStyle(diff: number): React.CSSProperties {
  if (diff === 0) {
    return {
      transform: "translateX(0) scale(1) rotateY(0deg)",
      zIndex: 10,
      opacity: 1,
      filter: "none",
    };
  } else if (diff === 1) {
    return {
      transform: "translateX(30px) scale(0.95) rotateY(-5deg)",
      zIndex: 9,
      opacity: 0.9,
      filter: "brightness(0.9)",
    };
  } else if (diff === 2) {
    return {
      transform: "translateX(60px) scale(0.9) rotateY(-10deg)",
      zIndex: 8,
      opacity: 0.7,
      filter: "brightness(0.8)",
    };
  } else if (diff === 3) {
    return {
      transform: "translateX(90px) scale(0.85) rotateY(-15deg)",
      zIndex: 7,
      opacity: 0.5,
      filter: "brightness(0.7)",
    };
  } else if (diff === -1) {
    return {
      transform: "translateX(-30px) scale(0.95) rotateY(5deg)",
      zIndex: 9,
      opacity: 0.9,
      filter: "brightness(0.9)",
    };
  } else if (diff === -2) {
    return {
      transform: "translateX(-60px) scale(0.9) rotateY(10deg)",
      zIndex: 8,
      opacity: 0.7,
      filter: "brightness(0.8)",
    };
  } else if (diff === -3) {
    return {
      transform: "translateX(-90px) scale(0.85) rotateY(15deg)",
      zIndex: 7,
      opacity: 0.5,
      filter: "brightness(0.7)",
    };
  } else {
    return { transform: "scale(0.8)", zIndex: 1, opacity: 0 };
  }
}

function Card({
  card,
  diff,
  flipped,
  onFlip,
  onPrev,
  onNext,
  isActive,
  isLast,
}: {
  card: (typeof cards)[0];
  diff: number;
  flipped: boolean;
  onFlip: () => void;
  onPrev: () => void;
  onNext: () => void;
  isActive: boolean;
  isLast: boolean;
}) {
  const posStyle = getPositionStyle(diff);
  const Icon = card.icon;

  return (
    <div
      className="absolute w-full h-full"
      style={{
        ...posStyle,
        transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
        perspective: "1500px",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.gradient} p-7 flex flex-col shadow-2xl`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div
            className={`flex justify-between items-start mb-4 ${card.darkText ? "text-gray-800" : "text-white"}`}
          >
            <span
              className={`${card.darkText ? "bg-black/10" : "bg-white/20"} px-3 py-1 rounded-full text-sm font-medium`}
            >
              {card.badge}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onFlip();
              }}
              className={`${card.darkText ? "bg-black/10" : "bg-white/20"} w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform`}
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center">
            <div
              className="mb-6"
              style={{ animation: "floating 3s ease-in-out infinite" }}
            >
              <Icon
                className={`w-16 h-16 ${card.darkText ? "text-purple-500" : "text-white"}`}
              />
            </div>
            <h2
              className={`text-3xl font-bold mb-2 text-center ${card.darkText ? "text-gray-900" : "text-white"}`}
            >
              {card.title}
            </h2>
            <p
              className={`text-center text-sm leading-relaxed max-w-xs ${card.darkText ? "text-gray-600" : "text-white/80"}`}
            >
              {card.description}
            </p>
          </div>

          <div className="mt-4 flex justify-between">
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (isActive) onPrev();
              }}
              className={`${card.darkText ? "bg-black/10" : "bg-white/20"} px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium ${card.darkText ? "text-gray-700" : "text-white"} hover:scale-105 transition-transform`}
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            {isLast ? (
              <Link
                href="/review"
                onClick={(e) => e.stopPropagation()}
                className="bg-[#05305D] text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium hover:scale-105 transition-transform"
              >
                See Reviews <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (isActive) onNext();
                }}
                className={`${card.darkText ? "bg-black/10 text-gray-700" : "bg-white/20 text-white"} px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium hover:scale-105 transition-transform`}
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div
          className={`absolute inset-0 rounded-3xl ${card.backBg} p-7 flex flex-col shadow-2xl text-white`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex justify-between items-start mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
              Details
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onFlip();
              }}
              className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6">{card.backTitle}</h2>
            <ul className="space-y-4">
              {card.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CardStack() {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const [swipeClass, setSwipeClass] = useState<Record<number, string>>({});

  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const stackRef = useRef<HTMLDivElement>(null);

  const nextCard = useCallback(() => {
    if (current < cards.length - 1) {
      setSwipeClass((p) => ({ ...p, [current]: "swipe-left" }));
      setTimeout(() => {
        setCurrent((c) => c + 1);
        setSwipeClass({});
        setFlipped((f) => ({ ...f, [current]: false }));
      }, 400);
    }
  }, [current]);

  const prevCard = useCallback(() => {
    if (current > 0) {
      setSwipeClass((p) => ({ ...p, [current]: "swipe-right" }));
      setTimeout(() => {
        setCurrent((c) => c - 1);
        setSwipeClass({});
        setFlipped((f) => ({ ...f, [current]: false }));
      }, 400);
    }
  }, [current]);

  const flipCard = useCallback(() => {
    setFlipped((f) => ({ ...f, [current]: !f[current] }));
  }, [current]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevCard();
      else if (e.key === "ArrowRight") nextCard();
      else if (e.key === " ") {
        e.preventDefault();
        flipCard();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prevCard, nextCard, flipCard]);

  const handleDragStart = (x: number) => {
    startXRef.current = x;
    isDraggingRef.current = true;
  };
  const handleDragEnd = (x: number) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    const diff = x - startXRef.current;
    if (Math.abs(diff) > 50) diff > 0 ? prevCard() : nextCard();
  };

  return (
    <>
      <style>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>

      <div className="overflow-hidden min-h-screen rounded-2xl bg-gradient-to-br from-[#04205D] via-[#2b60d1] to-[#001441] flex flex-col items-center justify-center p-4 font-sans">
        <div className="w-full max-w-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-white mb-2">Our Clients</h3>
            <h1 className="text-2xl font-bold text-white mb-2">
              We Consider Our Clients to Be Our Most Valuable Asset.
            </h1>

            <p className="text-white/80 text-sm">
              The pillars in our brand mark represent our three core commitments
              to our clients.{" "}
            </p>

            <div className="flex justify-center mt-6 gap-3">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === current ? "bg-white scale-125" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>

          <div
            ref={stackRef}
            className="relative mb-8 cursor-grab active:cursor-grabbing"
            style={{ height: 500, perspective: 1500 }}
            onMouseDown={(e) => handleDragStart(e.clientX)}
            onMouseUp={(e) => handleDragEnd(e.clientX)}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
          >
            {cards.map((card, i) => {
              const diff = i - current;
              return (
                <Card
                  key={card.id}
                  card={card}
                  diff={diff}
                  flipped={!!flipped[i]}
                  onFlip={() => setFlipped((f) => ({ ...f, [i]: !f[i] }))}
                  onPrev={prevCard}
                  onNext={nextCard}
                  isActive={i === current}
                  isLast={i === cards.length - 1}
                />
              );
            })}
          </div>
          <div className="flex justify-center gap-6 mb-8">
            <button
              onClick={prevCard}
              disabled={current === 0}
              className="w-14 h-14 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={flipCard}
              className="w-14 h-14 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-all"
            >
              <RefreshCw className="w-6 h-6" />
            </button>
            <button
              onClick={nextCard}
              disabled={current === cards.length - 1}
              className="w-14 h-14 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
