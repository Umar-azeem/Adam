"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How much does it cost to refinance?",
    answer:
      "Refnancing costs typically range from 2% to 6% of the loan amount and include fees such as appraisal, title insurance, and closing costs. Factors like your loan type, location, and credit score can significantly impact these expenses. Our team can help to provide strategies that can help minimize costs",
  },
  {
    question: "How much house can I afford?",
    answer:
      "We'll review your income, debts, down payment, and financial goals to establish a clear, comfortable budget before you start looking for a home. This helps you shop with confidence.",
  },
  {
    question: "What is a good credit score?",
    answer:
      "While this is program-dependent, many conventional loan options look for a score of 620 or higher. Government-backed loans like FHA and VA are often more flexible.",
  },
  {
    question: "What is a HELOC??",
    answer:
      "A Home Equity Line of Credit (HELOC) is a revolving line of credit that uses your home's equity as collateral. It offers flexibility, allowing you to borrow what you need, when you need it, and typically features interest-only payments during the draw period.",
  },
  {
    question: "How do I calculate mortgage payments?",
    answer:"You can use our comprehensive mortgage calculator on the Tools page. It allows you to factor in the home price, down payment, interest rate, loan term, and other costs to estimate your monthly payment. You can even download an amortization schedule."
  },
  {
    question: "What cash-out option is better for me?",
    answer:"A HELOC (Home Equity Line of Credit) and a HELOAN (Home Equity Loan) are both great options to access your home equity as cash, but what's the difference? Here is the high-level break down, but give us a call and we will help you choose the right option, with side-by-side comparisons and advice from a dedicated mortgage profession."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#04305D] font-bold uppercase text-center tracking-widest text-sm sm:text-base">
          FAQ
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold text-center mt-3 mb-8 sm:mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-6 sm:pb-8">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start sm:items-center gap-3 sm:gap-4 text-left"
              >
                {openIndex === index ? (
                  <Minus className="text-[#04305D] w-5 h-5 sm:w-7 sm:h-7 flex-shrink-0 mt-1 sm:mt-0" />
                ) : (
                  <Plus className="text-[#04305D] w-5 h-5 sm:w-7 sm:h-7 flex-shrink-0 mt-1 sm:mt-0" />
                )}

                <span className="text-base sm:text-xl font-bold text-[#04305D]">
                  {faq.question}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-3 sm:mt-4 ml-8 sm:ml-11 text-sm sm:text-base text-gray-600">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
