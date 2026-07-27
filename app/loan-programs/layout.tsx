// app/loan-programs/layout.tsx
"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { loanPrograms } from "@/app/data/loanPrograms";

interface LayoutProps {
  children: React.ReactNode;
}

// Component that reads search params
function HeroBanner() {
  const searchParams = useSearchParams();
  const selectedId = searchParams.get("program");

  // Find the selected program
  const selectedProgram = loanPrograms.find((p) => p.id === selectedId);

  return (
    <div className="bg-[#04205D] text-white py-20 rounded-2xl px-4">
      <div className="container mx-auto max-w-7xl">
        {selectedProgram ? (
          <>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-green-200 text-sm font-medium uppercase tracking-wider">
                Loan Program
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              {selectedProgram.title}
            </h1>
            <p className="text-green-200 mt-2 text-lg max-w-2xl">
              {selectedProgram.subtitle}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-sm text-green-100">
                {selectedProgram.benefits?.length || 0} Benefits
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-sm text-green-100">
                {selectedProgram.features?.length || 0} Features
              </span>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl md:text-5xl font-bold">Loan Programs</h1>
            <p className="text-green-200 mt-2 text-lg">
              Find the perfect mortgage solution for your needs
            </p>
          </>
        )}
      </div>
    </div>
  );
}

// Loading fallback
function HeroBannerLoading() {
  return (
    <div className="bg-[#04205D] text-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="h-12 w-64 bg-white/20 rounded-lg animate-pulse mb-2"></div>
        <div className="h-6 w-96 bg-white/20 rounded-lg animate-pulse"></div>
      </div>
    </div>
  );
}

export default function LoanProgramsLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Suspense fallback={<HeroBannerLoading />}>
        <HeroBanner />
      </Suspense>

      <div className="container mx-auto px-4 py-8 max-w-7xl">{children}</div>
    </div>
  );
}
