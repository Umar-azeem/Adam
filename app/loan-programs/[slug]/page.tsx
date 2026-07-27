import { notFound } from "next/navigation";
import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { loanPrograms } from "@/app/data/loanPrograms";

export async function generateStaticParams() {
  return loanPrograms.map((program) => ({
    slug: program.id,
  }));
}

export default function LoanProgramDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const program = loanPrograms.find((p) => p.id === params.slug);

  if (!program) {
    notFound();
  }

  const IconComponent = Icons[
    program.icon as keyof typeof Icons
  ] as unknown as LucideIcon;

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link
          href="/loan-programs"
          className="inline-flex items-center text-[#04205D] hover:text-[#004d26] font-medium mb-8 transition group"
        >
          <Icons.ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition" />
          Back to All Programs
        </Link>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#04205D]/10 rounded-full">
              {IconComponent && (
                <IconComponent className="w-8 h-8 text-[#04205D]" />
              )}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {program.title}
              </h1>
              <p className="text-gray-600">{program.description}</p>
            </div>
          </div>

          <div className="prose max-w-none">
            {program.longDescription && (
              <p className="text-gray-700 leading-relaxed text-lg">
                {program.longDescription}
              </p>
            )}

            {program.features && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Features
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0">
                  {program.features.map((feature: string, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <Icons.CheckCircle className="w-5 h-5 text-[#04205D] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {Array.isArray(program.idealFor) && (
              <div className="mt-8 p-6 bg-[#F0F7F3] rounded-lg border border-[#04205D]/20">
                <h3 className="text-lg font-semibold text-[#04205D] mb-3">
                  Who Is This Program For?
                </h3>
                <ul className="flex flex-wrap gap-2 list-none p-0">
                  {program.idealFor.map((item, idx) => (
                    <li
                      key={idx}
                      className="bg-white px-4 py-2 rounded-full text-sm text-gray-700 border border-gray-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-4 border-t border-gray-200 pt-8">
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
                Calculate Payments <Icons.Calculator className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
