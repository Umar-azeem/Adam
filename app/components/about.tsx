"use client";

import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Icons.Shield,
      title: "Honesty & Transparency",
      description:
        "You get straight answers and clear explanations. No jargon, no surprises.",
    },
    {
      icon: Icons.Zap,
      title: "Unmatched Responsiveness",
      description:
        "I answer calls and return emails promptly. You're never left wondering.",
    },
    {
      icon: Icons.Handshake,
      title: "A Partnership for Life",
      description:
        "My goal is to be your trusted mortgage advisor for every home and every milestone.",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery Call",
      description:
        "A no-obligation conversation to understand your goals and financial picture.",
    },
    {
      step: 2,
      title: "Document Checklist",
      description:
        "Receive a clear, simple list of required documents for your specific situation.",
    },
    {
      step: 3,
      title: "Reliable Pre-Approval",
      description:
        "Get your financing fully vetted for a strong, competitive offer.",
    },
    {
      step: 4,
      title: "Home Shopping Support",
      description:
        "Receive guidance and updated payment scenarios as you tour homes.",
    },
    {
      step: 5,
      title: "Seamless Underwriting",
      description:
        "Proactive management of the underwriting process to ensure a smooth journey.",
    },
    {
      step: 6,
      title: "Closing Day",
      description:
        "We ensure all figures are accurate for a stress-free closing.",
    },
    {
      step: 7,
      title: "Post-Closing Partnership",
      description: "Benefit from ongoing rate monitoring and support for life.",
    },
  ];

  const loanPrograms = [
    {
      title: "Fixed-Rate Loans",
      description:
        "Lock in  predictable payments for long-term financial stability.",
    },
    {
      title: "Adjustable-Rate (ARM) Loans",
      description:
        "Start with lower initial rates and payments, perfect for short-term homeowners.",
    },
    {
      title: "FHA Loans",
      description:
        "Government-backed home loans with flexible credit requirements and down payments as low as 3.5%.",
    },
    {
      title: "VA Home Loans",
      description:
        "Exclusive zero-down mortgage benefits for veterans and service members.",
    },
    {
      title: "Conventional Loans",
      description:
        "Traditional mortgage financing with Rates, flexible terms, and down payments as low as 3%.",
    },
    {
      title: "Jumbo Loans",
      description:
        "High-value property financing that exceeds conventional loan limits.",
    },
    {
      title: "Refinance",
      description:
        "Lower your mortgage rate, reduce monthly payments, shorten your loan term, or access home equity.",
    },
    {
      title: "HELOC",
      description:
        "Flexible home equity line of credit for major expenses, home improvements, or investment opportunities.",
    },
    {
      title: "DSCR Investor Loans",
      description:
        "Investment property financing based on rental income potential, not personal income.",
    },
    {
      title: "Bank Statement Loans",
      description:
        "Self-employed mortgage solution using bank statements instead of tax returns.",
    },
    {
      title: "First-Time Home Buyer",
      description:
        "Specialized programs and guidance for first-time homebuyers.",
    },
    {
      title: "Debt Consolidation",
      description:
        "Use home equity to consolidate high-interest debts into one lower monthly payment.",
    },
  ];

  const caseStudies = [
    {
      title: "The Self-Employed Entrepreneur",
      challenge:
        "A successful business owner had significant cash flow but low taxable income due to write-offs.",
      solution:
        "We utilized a 12-month Bank Statement Loan program, documenting their business revenue to prove their ability to pay.",
      outcome:
        "Secured financing for their dream home, closing in under 30 days.",
    },
    {
      title: "The Veteran Family",
      challenge:
        "A Navy veteran wanted to purchase a home with zero down payment but was unsure how to navigate the VA loan process.",
      solution:
        "As a fellow veteran, I walked them through every step, from obtaining their COE to understanding the VA appraisal.",
      outcome:
        "Purchased their first home with 0% down and no monthly mortgage insurance.",
    },
  ];

  const faqs = [
    {
      q: "How fast can I get pre approved?",
      a: "Most pre-approvals are completed within 24-48 hours once all documentation is received.",
    },
    {
      q: "Fixed vs. ARM — which is better for me?",
      a: "Fixed-rate loans offer stability, while ARMs provide lower initial payments. The best choice depends on how long you plan to stay in your home.",
    },
    {
      q: "What credit scores work for first-time buyers?",
      a: "FHA loans accept scores as low as 580 with 3.5% down. Conventional loans typically require 620+.",
    },
    {
      q: "What documents do self-employed borrowers need for bank statement loans?",
      a: "Typically 12-24 months of personal or business bank statements showing consistent income.",
    },
    {
      q: "How is DSCR calculated for an investment property?",
      a: "DSCR = Net Operating Income / Total Debt Service. A ratio of 1.0+ means the property generates enough income to cover its mortgage payments.",
    },
    {
      q: "What are typical VA or USDA loan timelines?",
      a: "VA loans typically close in 30-45 days. USDA loans can take 45-60 days due to additional government requirements.",
    },
    {
      q: "When does a mortgage refinance make sense?",
      a: "Typically when you can lower your rate by at least 0.5-1% and plan to stay in the home long enough to recoup closing costs.",
    },
    {
      q: "How do HELOC draw and repayment periods work?",
      a: "The draw period (typically 5-10 years) allows you to access funds. The repayment period follows where you pay back principal and interest.",
    },
    {
      q: "Can I consolidate high-interest debt with a cash-out refinance?",
      a: "Yes, a cash-out refinance allows you to tap into your home equity to pay off credit cards, personal loans, and other high-interest debts.",
    },
    {
      q: "What costs should I expect at closing?",
      a: "Closing costs typically range from 2-5% of the loan amount and include appraisal fees, title insurance, origination fees, and more.",
    },
    {
      q: "Will I have to pay mortgage insurance (PMI)?",
      a: "PMI is required on conventional loans with less than 20% down. FHA loans have mortgage insurance premiums (MIP) for the life of the loan.",
    },
    {
      q: "How does Billy monitor rates for me after closing?",
      a: "I provide ongoing rate monitoring and will reach out if refinancing becomes beneficial based on market conditions.",
    },
  ];

  const glossaryTerms = [
    {
      term: "DTI (Debt-to-Income Ratio)",
      definition:
        "A percentage that represents your total monthly debt payments divided by your gross monthly income. It's a key factor in qualifying for a loan.",
    },
    {
      term: "LTV (Loan-to-Value Ratio)",
      definition:
        "The ratio of your loan amount to the appraised value of the property. A lower LTV (i.e., a larger down payment) often results in better loan terms.",
    },
    {
      term: "PMI (Private Mortgage Insurance)",
      definition:
        "Insurance required on conventional loans when the down payment is less than 20%, protecting the lender in case of default.",
    },
    {
      term: "Escrow",
      definition:
        "An account managed by the lender to pay property taxes and homeowners' insurance on your behalf. These costs are typically included in your total monthly mortgage payment.",
    },
  ];

  const states = [
    "AL",
    "CA",
    "FL",
    "GA",
    "MO",
    "NC",
    "OR",
    "PA",
    "SC",
    "TN",
    "TX",
    "VA",
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="relative bg-gradient-to-r from-[#04205D] to-[#04305D] text-white rounded-2xl">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 container mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-green-300 font-bold tracking-[4px] text-sm mb-4">
                Trusted Mortgage Advisor
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <p className="text-green-200 text-sm">(NMLS #384700)</p>
                <Link
                  href="https://www.zillow.com/lender-profile/Billy%20R%20Watkins%20III/#reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 hover:bg-white/20 transition"
                >
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Icons.Star
                        key={i}
                        className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-white font-semibold text-sm">5.0</span>
                  <span className="text-green-200 text-xs sm:text-sm">
                    22 Reviews (0 Recent | 2 Verified)
                  </span>
                  <Icons.ExternalLink className="w-3.5 h-3.5 text-green-200" />
                </Link>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                A guidance-first mortgage experience built on two decades of
                financial expertise
              </h1>
              <p className="text-gray-200 text-lg max-w-xl mb-8">
                Military discipline, and an unwavering commitment to you during
                your Residential Home and Commercial property financing goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact-us">
                  <button className="bg-white text-[#04205D] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Get pre Approved
                  </button>
                </Link>
                <Link href="https://wa.me/15738815436">
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                    Ask Billy a Question
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-[#04205D]/95 animate-pulse" />
                <Image
                  src="/img/billyH.png"
                  alt="Billy Watkins - Trusted Mortgage Advisor"
                  fill
                  className="rounded-full object-cover border-4 border-white/20 shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-3 shadow-lg">
                  <Icons.BadgeCheck className="w-8 h-8 text-[#04205D]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Meet Billy Watkins
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-gray-700 leading-relaxed mb-4">
                My journey into mortgage lending and real estate finance was
                forged through diverse experiences that shaped my unique,
                client-first approach to home financing. Raised with the
                grounded values of small-town Missouri, I learned the importance
                of community trust and financial integrity—principles that guide
                every loan application and refinance consultation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                That foundation was solidified during my service in the US Navy,
                where I embraced discipline and meticulous attention to detail
                in high-stakes environments. These military-honed skills
                translate directly to mortgage underwriting precision and loan
                processing excellence. After my service, I graduated from the
                University of Houston and built a 20+ year career in finance,
                spanning residential lending, commercial property financing, tax
                planning, and financial audit.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This comprehensive expertise in debt-to-income analysis, credit
                evaluation, and loan structuring allows me to navigate complex
                financing scenarios from first-time homebuyer FHA loans to
                sophisticated DSCR investment property acquisitions. Whether
                you're seeking a conventional purchase loan, VA mortgage
                benefits, jumbo financing, or exploring cash-out refinance
                options, my background in both residential and commercial
                lending ensures you receive expert guidance tailored to your
                specific homeownership goals and investment objectives.
              </p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">Billy Watkins</p>
                <Link
                  href="tel:5738815436"
                  className="text-[#04205D] font-medium flex items-center gap-2 mt-1"
                >
                  <Icons.Phone className="w-4 h-4" />
                  Call Now: 573-881-5436
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/img/h3.jpg"
                    alt="Billy and his wife Thais, Married 03.15.2020"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <p className="text-white text-xs font-medium">
                      Wedding collage of Billy and his wife Thais, Married
                      03.15.2020
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/img/h1.jpg"
                  alt="Billy completing one of many long distance endurance events"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                  <p className="text-white text-[10px] font-medium">
                    Long distance endurance events
                  </p>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/img/h2.jpg"
                  alt="Billy, his wife Thais, and their son Emmerik"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                  <p className="text-white text-[10px] font-medium">
                    Billy, Thais, and son Emmerik
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Mission, Values & Client Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl hover:bg-gray-50 transition"
                >
                  <div className="w-14 h-14 bg-[#04205D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#04205D]" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What Sets My Process Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Icons.Users className="w-6 h-6 text-[#04205D]" />
                The Power of Front-End Discovery
              </h3>
              <p className="text-gray-700">
                We start with a real conversation about your complete financial
                picture and goals. This context allows me to recommend loan
                strategies that truly align with your life.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Icons.BadgeCheck className="w-6 h-6 text-[#04205D]" />
                Reliable Pre-Approval
              </h3>
              <p className="text-gray-700">
                My pre-approvals are thorough. By vetting your documentation
                upfront, we give you a powerful competitive edge and ensure a
                smooth, predictable closing.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Loan Programs & Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {loanPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {program.title}
                </h4>
                <p className="text-gray-600 text-xs">{program.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-[#04205D] text-white rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Who I Serve
          </h2>
          <p className="text-center text-green-200 mb-8">
            I provide tailored solutions for a diverse range of clients, each
            with unique goals.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "First-Time Home Buyers",
              "Self-Employed & Business Owners",
              "Real Estate Investors",
              "Veterans & Active-Duty Military",
              "Move-Up Buyers",
              "High-Net-Worth Individuals",
              "Cash-Strapped Buyers",
              "Rental / Commercial Property Owners",
              "High Equity Home Owners",
            ].map((group, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/20 transition"
              >
                <span className="text-sm font-medium">{group}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Results & Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {study.title}
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">
                      Challenge:
                    </span>
                    <p className="text-gray-600 mt-1">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">
                      Solution Guided by Billy Watkins:
                    </span>
                    <p className="text-gray-600 mt-1">{study.solution}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">
                      Outcome:
                    </span>
                    <p className="text-gray-600 mt-1">{study.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Work With Me
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.slice(0, 4).map((step) => (
              <div
                key={step.step}
                className="text-center p-4 rounded-xl hover:bg-gray-50 transition"
              >
                <div className="w-12 h-12 bg-[#04205D] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  {step.step}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-xs">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {processSteps.slice(4).map((step) => (
              <div
                key={step.step}
                className="text-center p-4 rounded-xl hover:bg-gray-50 transition"
              >
                <div className="w-12 h-12 bg-[#04205D] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  {step.step}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-gray-900 text-white rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Service Areas
          </h2>
          <p className="text-gray-300 text-center mb-6">
            I am proud to be licensed and offer expert mortgage guidance in the
            following states. Please note that specific loan program
            availability can vary by state.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {states.map((state) => (
              <span
                key={state}
                className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium"
              >
                {state}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
              >
                <h4 className="font-semibold text-gray-900 text-sm mb-2">
                  {faq.q}
                </h4>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Mortgage Glossary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {glossaryTerms.map((term, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
              >
                <h4 className="font-semibold text-[#04205D] text-sm mb-2">
                  {term.term}
                </h4>
                <p className="text-gray-600 text-sm">{term.definition}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
