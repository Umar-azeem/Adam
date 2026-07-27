// app/loan-programs/page.tsx
"use client";
import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import * as Icons from "lucide-react";
import { loanPrograms, LoanProgram } from "@/app/data/loanPrograms";

// Helper function to safely get icon component
const getIconComponent = (
  iconName: string,
): React.ComponentType<{ className?: string }> => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Shield: Icons.Shield,
    Star: Icons.Star,
    Building: Icons.Building,
    Home: Icons.Home,
    RefreshCw: Icons.RefreshCw,
    LineChart: Icons.LineChart,
    TrendingDown: Icons.TrendingDown,
    FileText: Icons.FileText,
    Users: Icons.Users,
    CreditCard: Icons.CreditCard,
    Lock: Icons.Lock,
    TrendingUp: Icons.TrendingUp,
    HelpCircle: Icons.HelpCircle,
  };
  return iconMap[iconName] || Icons.HelpCircle;
};

const renderIcon = (
  iconName: string,
  className: string = "w-8 h-8 text-[#04205D]",
) => {
  const Icon = getIconComponent(iconName);
  return <Icon className={className} />;
};

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
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
            >
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

// Main content component
function LoanProgramsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedId = searchParams.get("program");

  // Directly compute selectedProgram from URL param
  const selectedProgram = loanPrograms.find((p) => p.id === selectedId);

  const handleProgramClick = (program: LoanProgram) => {
    router.push(`/loan-programs?program=${program.id}`, { scroll: false });
  };

  const clearSelection = () => {
    router.push("/loan-programs", { scroll: false });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] pt-10  lg:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Loan Programs
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of mortgage solutions designed to
            meet your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanPrograms.map((program) => {
            const Icon = getIconComponent(program.icon);
            return (
              <div
                key={program.id}
                onClick={() => handleProgramClick(program)}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-[#04205D] transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-8 h-8 text-[#04205D]" />
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-[#04205D] transition">
                    {program.title}
                  </h2>
                </div>
                <p className="text-gray-600 text-sm">{program.description}</p>
              </div>
            );
          })}
        </div>

        {selectedProgram && (
          <div className="mt-12 bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8 relative animate-fadeIn">
            <button
              onClick={clearSelection}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
              aria-label="Close details"
            >
              <Icons.X className="w-6 h-6" />
            </button>

            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#04205D]/10 rounded-full">
                {renderIcon(selectedProgram.icon, "w-8 h-8 text-[#04205D]")}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedProgram.title}
                </h2>
                <p className="text-gray-600">{selectedProgram.description}</p>
              </div>
            </div>

            <div className="prose max-w-none">
              {selectedProgram.longDescription && (
                <p className="text-gray-700 leading-relaxed">
                  {selectedProgram.longDescription}
                </p>
              )}

              {/* Key Features */}
              {selectedProgram.features &&
                Array.isArray(selectedProgram.features) &&
                selectedProgram.features.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none p-0">
                      {selectedProgram.features.map(
                        (feature: string, idx: number) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <Icons.CheckCircle className="w-5 h-5 text-[#04205D] flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}

              {selectedProgram.idealFor &&
                Array.isArray(selectedProgram.idealFor) &&
                selectedProgram.idealFor.length > 0 && (
                  <div className="mt-6 p-4 bg-[#F0F7F3] rounded-lg border border-[#04205D]/20">
                    <h3 className="text-md font-semibold text-[#04205D] mb-2">
                      Ideal For
                    </h3>
                    <ul className="flex flex-wrap gap-2 list-none p-0">
                      {selectedProgram.idealFor.map(
                        (item: string, idx: number) => (
                          <li
                            key={idx}
                            className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200"
                          >
                            {item}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-6 py-3 bg-[#04205D] hover:bg-[#004d26] text-white font-semibold rounded-lg transition"
                >
                  Get Started <Icons.ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/tools"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold rounded-lg transition"
                >
                  Use Our Tools <Icons.Calculator className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default function LoanProgramsPage() {
  return (
    <Suspense fallback={<LoanProgramsLoading />}>
      <LoanProgramsContent />
    </Suspense>
  );
}
