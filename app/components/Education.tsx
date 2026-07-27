"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Lock,
  TrendingUp,
  Shield,
  Star,
  Building,
  Home,
  RefreshCw,
  LineChart,
  TrendingDown,
  FileText,
  Users,
  CreditCard,
} from "lucide-react";
import Link from "next/link";

interface LoanProduct {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const loanProducts: LoanProduct[] = [
  {
    id: "/loan-programs?program=fixed-rate",
    title: "Fixed-Rate Loans",
    description:
      "Lock in Rates and predictable payments for long-term financial stability.",
    icon: <Lock className="w-6 h-6" />,
  },
  {
    id: "/loan-programs?program=arm",
    title: "Adjustable-Rate (ARM) Loans",
    description:
      "Start with lower initial rates and payments, perfect for short-term homeowners.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    id: "/loan-programs?program=fha",
    title: "FHA Loans",
    description:
      "Government-backed home loans with flexible credit requirements and down payments as low as 3.5%.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    id: "/loan-programs?program=va",
    title: "VA Home Loans",
    description:
      "Exclusive zero-down mortgage benefits for veterans and service members.",
    icon: <Star className="w-6 h-6" />,
  },
  {
    id: "/loan-programs?program=conventional",
    title: "Conventional Loans",
    description:
      "Traditional mortgage financing with Rates, flexible terms, and down payments as low as 3%.",
    icon: <Building className="w-6 h-6" />,
  },
  {
    id: "/loan-programs?program=jumbo",
    title: "Jumbo Loans",
    description:
      "High-value property financing that exceeds conventional loan limits.",
    icon: <Home className="w-6 h-6" />,
  },
  {
    id: "/loan-programs?program=refinance",
    title: "Refinance",
    description:
      "Lower your mortgage rate, reduce monthly payments, or access home equity.",
    icon: <RefreshCw className="w-6 h-6" />,
  },
  {
    id: "/loan-programs?program=heloc",
    title: "HELOC",
    description:
      "Flexible home equity line of credit for major expenses or home improvements.",
    icon: <LineChart className="w-6 h-6" />,
  },
  {
    id: "/loan-programs?program=dscr",
    title: "DSCR Investor Loans",
    description:
      "Investment property financing based on rental income potential, not personal income.",
    icon: <TrendingDown className="w-6 h-6" />,
  },
  {
    id: "/loan-programs?program=bank-statement",
    title: "Bank Statement Loans",
    description:
      "Self-employed mortgage solution using bank statements instead of tax returns.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    id: "/loan-programs?program=first-time",
    title: "First-Time Home Buyer",
    description: "Specialized programs and guidance for first-time homebuyers.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: "/loan-programs?program=debt-consolidation",
    title: "Debt Consolidation",
    description:
      "Use home equity to consolidate high-interest debts into one lower monthly payment.",
    icon: <CreditCard className="w-6 h-6" />,
  },
];

const LoanProductsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(loanProducts.length / itemsPerView + 1);
  const canPrev = currentIndex > 0;
  const canNext = currentIndex < totalPages - 1;

  const next = () => {
    if (canNext) setCurrentIndex(currentIndex + 1);
  };

  const prev = () => {
    if (canPrev) setCurrentIndex(currentIndex - 1);
  };

  const getVisibleItems = () => {
    const start = currentIndex * itemsPerView;
    return loanProducts.slice(start, start + itemsPerView);
  };

  return (
    <div className="w-full bg-[#F5F5F5] py-12 md:py-20 rounded-2xl mt-3 mb-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-10 items-start">
          <div className="w-full lg:w-[600px]">
            <p className="text-[#04205D] text-center lg:text-left font-bold tracking-[4px] mb-6 text-sm">
              LOAN PROGRAMS
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center lg:text-left leading-tight">
              Find Your Perfect Mortgage Solution
            </h1>
            <p className="text-gray-600 text-center lg:text-left mt-4 text-sm max-w-2xl">
              Explore our comprehensive range of loan products designed to meet
              your unique financial needs and homeownership goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center lg:justify-start">
              <Link href="/contact-us">
                <button className="bg-[#04205D] hover:bg-[#004d26] text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition w-full sm:w-auto">
                  Get Started <ArrowRight size={18} />
                </button>
              </Link>
              <Link href="/tools">
                <button className="border border-gray-800 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-black transition w-full sm:w-auto">
                  Calculate Payments <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-[650px] ">
            <div className="overflow-hidden ">
              <div
                className="flex gap-6 transition-transform duration-500"
                style={{
                  transform: `translateX(-${currentIndex * (260 + 24)}px)`,
                }}
              >
                {loanProducts.map((product) => (
                  <div
                    key={product.id}
                    className="min-w-[260px] h-[260px] md:min-w-[250px] md:h-[300px] border-t-10 border-black bg-[#04205D] text-white rounded-b-3xl p-5 md:p-6 flex flex-col justify-between flex-shrink-0"
                  >
                    <div className="flex items-center">
                      <img
                        className="w-20 h-20 object-contain"
                        src="/img/logo.png"
                        alt="logo"
                      />
                    </div>
                    <h2 className="text-3xl font-bold max-w-[200px] md:max-w-[240px]">
                      {product.title}
                    </h2>
                    <Link href={`${product.id}`}>
                      <button className="flex items-center gap-2 text-sm font-semibold underline hover:text-green-200 transition group">
                        Learn More
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition"
                        />
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              <button
                onClick={prev}
                disabled={!canPrev}
                className={`w-12 h-12 rounded-full text-white shadow flex items-center justify-center transition ${
                  canPrev
                    ? "bg-black hover:bg-gray-800"
                    : "bg-gray-400 opacity-50 cursor-not-allowed"
                }`}
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      idx === currentIndex ? "bg-[#04205D] w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                disabled={!canNext}
                className={`w-12 h-12 rounded-full text-white shadow flex items-center justify-center transition ${
                  canNext
                    ? "bg-black hover:bg-gray-800"
                    : "bg-gray-400 opacity-50 cursor-not-allowed"
                }`}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanProductsCarousel;
