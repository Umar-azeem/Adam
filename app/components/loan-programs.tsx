"use client"
import { Suspense } from "react";
import dynamic from "next/dynamic";

function LoanProgramsLoading() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] pt-20 lg:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
        <div className="text-center mb-12">
          <div className="h-12 w-64 bg-gray-200 rounded-lg animate-pulse mx-auto"></div>
          <div className="h-6 w-96 bg-gray-200 rounded-lg animate-pulse mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-2 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const LoanProgramsContent = dynamic(
  () => import("./loan-programs-content"),
  { 
    ssr: false,
    loading: () => <LoanProgramsLoading />
  }
);

export default function LoanProgramsPage() {
  return (
    <Suspense fallback={<LoanProgramsLoading />}>
      <LoanProgramsContent />
    </Suspense>
  );
}