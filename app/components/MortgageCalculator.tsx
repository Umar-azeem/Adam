"use client";

import { useState, useEffect, ChangeEvent } from "react";

// Define the interface for the component props
interface MortgageCalculatorProps {
  setContactOpen: (open: boolean) => void;
}

// Define the interface for the mortgage calculation result
interface MortgageResult {
  pi: number;
  tax: number;
  insurance: number;
  hoa: number;
  pmi: number;
  total: number;
}

export default function MortgageCalculator() {
  const [price, setPrice] = useState<number>(300000);
  const [down, setDown] = useState<number>(30000);
  const [rate, setRate] = useState<number>(5.7);
  const [term, setTerm] = useState<number>(30);
  const [hoa, setHoa] = useState<number>(0);
  const [isVeteran, setIsVeteran] = useState<boolean>(false);

  const [result, setResult] = useState<MortgageResult>({
    pi: 0,
    tax: 0,
    insurance: 0,
    hoa: 0,
    pmi: 0,
    total: 0,
  });

  const calculateMortgage = (principal: number, annualRate: number, years: number): number => {
    if (!principal || !years) return 0;
    const months = years * 12;
    if (annualRate === 0) return principal / months;
    const monthlyRate = annualRate / 100 / 12;
    return (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    );
  };

  useEffect(() => {
    const loan = Math.max(price - down, 0);
    const pi = calculateMortgage(loan, rate, term);
    const tax = (price * 0.006) / 12;
    const insurance = (price * 0.003) / 12;
    
    let pmi = 0;
    if (price > 0 && !isVeteran && down / price < 0.2) {
      pmi = (loan * 0.005) / 12;
    }
    
    const total = pi + tax + insurance + hoa + pmi;
    setResult({ pi, tax, insurance, hoa, pmi, total });
  }, [price, down, rate, term, hoa, isVeteran]);

  return (
    <div className="bg-white py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
          <div className="w-full md:max-w-lg">
            <h1 className="text-[#04205D] font-bold uppercase text-center md:text-start tracking-wide text-md sm:text-lg">
              Mortgage Calculator
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-center md:text-start text-black mt-3">
              Estimate Your Monthly Mortgage Payment
            </h2>
          </div>
          <div className="w-full md:max-w-md text-center md:text-start">
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Take the guesswork out of home search by finding out what your
              estimated monthly payment on your mortgage could be.
            </p>
          </div>
        </div>

        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Inputs Section */}
          <div className="w-full lg:w-2/3 bg-white shadow-md border border-gray-400 rounded-xl p-5 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-6">
              Enter your loan details below and we'll calculate your estimated monthly payment.
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Home Price ($)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={price}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value) || 0)}
                    className="w-full border border-gray-300 rounded-lg p-3 text-black text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Down Payment ($)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={down}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDown(Number(e.target.value) || 0)}
                    className="w-full border border-gray-300 rounded-lg p-3 text-black text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={rate}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setRate(Number(e.target.value) || 0)}
                    className="w-full border border-gray-300 rounded-lg p-3 text-black text-sm"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Loan Term
                  </label>
                  <select
                    value={term}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setTerm(Number(e.target.value))}
                    className="w-full border border-gray-300 rounded-lg p-3 text-black text-sm"
                  >
                    <option value={15}>15 Years</option>
                    <option value={30}>30 Years</option>
                  </select>
                </div>

                <div className="pt-1">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isVeteran}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setIsVeteran(e.target.checked)}
                      className="h-5 w-5 accent-green-700"
                    />
                    <span className="text-black font-medium text-sm">Military Veteran</span>
                  </label>
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-8">
              Improve the accuracy of your monthly payment estimated by contacting a loan expert.
            </p>

            <button className="bg-[#04205D] text-white rounded-lg p-3 font-semibold mt-5 w-full transition duration-300 hover:-translate-y-1">
              Calculate
            </button>
          </div>

          {/* Results Display Section */}
          <div className="w-full lg:w-1/3 bg-[#202020] text-white rounded-xl p-6 sm:p-8 flex flex-col">
            <p className="text-gray-300 text-sm text-center">
              Your estimated monthly payment
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-center break-all">
              ${result.total.toFixed(2)}
            </h2>

            <h3 className="text-lg font-bold mt-8 text-center">Breakdown</h3>

            <div className="mt-6 space-y-4 flex-1">
              {(
                [
                  { label: "Principal & Interest", value: result.pi },
                  { label: "PMI", value: result.pmi },
                  { label: "Property Taxes", value: result.tax },
                  { label: "Insurance", value: result.insurance },
                  { label: "HOA", value: result.hoa },
                ] as const
              ).map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center gap-4">
                  <span className="text-gray-400 text-sm">{label}</span>
                  <span className="font-bold text-sm tabular-nums">${value.toFixed(2)}</span>
                </div>
              ))}
            </div>

            <a href="/contact-us"><button
             
              className="w-full mt-8 bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-sm"
            >
              Quick Contact
            </button></a>
          </div>
        </div>

      </div>
    </div>
  );
}