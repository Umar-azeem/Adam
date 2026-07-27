"use client";

import { useState, useEffect, useRef } from "react";
import {
  Calculator,
  Home,
  RefreshCw,
  Scale,
  TrendingUp,
  ArrowRight,
  ToolCase,
  DollarSign,
  PieChart,
  BarChart3,
  Calendar,
  PiggyBank,
  Shield,
  Building2,
  FileText,
  Clock,
} from "lucide-react";
import { toolData } from "@/app/data/tools-data";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Filler,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Filler,
);

// ---------- Types ----------
interface CalculatorState {
  [key: string]: number | string;
}

interface MortgageDetails {
  loanAmount: number;
  downPayment: number;
  downPaymentPercent: number;
  totalInterestPaid: number;
  totalTaxPaid: number;
  totalHomeInsurance: number;
  totalPMI: number;
  totalPayments: number;
  payOffDate: string;
  monthlyPayment: number;
  biWeeklyPayment: number;
  monthlyPayOffDate: string;
  biWeeklyPayOffDate: string;
  totalInterestPaidBiWeekly: number;
  interestSavings: number;
  estimatedMonthlyPayment: number;
  monthlyTaxPaid: number;
  monthlyHomeInsurance: number;
  monthlyPMI: number;
  totalMonths: number;
}

// ---------- Constants ----------
const COLORS = {
  primary: "#04205D",
  primaryLight: "#04205D",
  primaryDark: "#04205D",
  secondary: "#e8f5e9",
  accent: "#ff6b35",
  accentLight: "#ff8a5c",
  gold: "#f7c948",
  goldLight: "#fadf8a",
  blue: "#4a90d9",
  blueLight: "#6ba8e8",
  purple: "#7c4dff",
  purpleLight: "#9d73ff",
  red: "#e74c3c",
  redLight: "#f1948a",
  teal: "#1abc9c",
  tealLight: "#48c9b0",
  gray: "#95a5a6",
  grayLight: "#bdc3c7",
  white: "#ffffff",
  dark: "#2c3e50",
};

// ---------- Utility ----------
const formatCurrency = (value: number) =>
  "$" +
  value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const formatCurrencyNoCents = (value: number) =>
  "$" + Math.round(value).toLocaleString("en-US");

const computeMortgage = (
  homePrice: number,
  downPercent: number,
  annualRate: number,
  termYears: number,
  propTaxAnnual: number,
  insAnnual: number,
  pmiAnnualPct: number
): MortgageDetails => {
  const downPayment = homePrice * (downPercent / 100);
  const loanAmount = homePrice - downPayment;
  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = termYears * 12;

  let monthlyPayment = 0;
  if (monthlyRate > 0) {
    monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
  } else {
    monthlyPayment = loanAmount / totalMonths;
  }

  const monthlyTax = propTaxAnnual / 12;
  const monthlyInsurance = insAnnual / 12;
  const monthlyPMI = (loanAmount * (pmiAnnualPct / 100)) / 12;

  const totalMonthly = monthlyPayment + monthlyTax + monthlyInsurance + monthlyPMI;

  const totalPayments = totalMonthly * totalMonths;
  const totalInterestPaid = monthlyPayment * totalMonths - loanAmount;
  const totalTaxPaid = propTaxAnnual * termYears;
  const totalHomeInsurance = insAnnual * termYears;
  const totalPMI = monthlyPMI * totalMonths;

  // Bi‑weekly
  const biWeeklyPayment = totalMonthly / 2;
  const biWeeklyMonths = Math.ceil(totalMonths * 0.9);
  const totalPaymentsBiWeekly = biWeeklyPayment * 26 * (biWeeklyMonths / 12);
  const totalInterestBiWeekly = totalPaymentsBiWeekly - loanAmount;
  const interestSavings = totalInterestPaid - totalInterestBiWeekly;
  const totalInterestPaidBiWeekly = totalInterestBiWeekly;

  const now = new Date();
  const payOffDate = new Date(now);
  payOffDate.setMonth(payOffDate.getMonth() + totalMonths);
  const monthlyPayOffDate = new Date(now);
  monthlyPayOffDate.setMonth(monthlyPayOffDate.getMonth() + totalMonths);
  const biWeeklyPayOffDate = new Date(now);
  biWeeklyPayOffDate.setMonth(biWeeklyPayOffDate.getMonth() + Math.floor(biWeeklyMonths));

  const fmtDate = (d: Date) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[d.getMonth()] + " " + d.getFullYear();
  };

  return {
    loanAmount,
    downPayment,
    downPaymentPercent: downPercent,
    totalInterestPaid,
    totalTaxPaid,
    totalHomeInsurance,
    totalPMI,
    totalPayments,
    payOffDate: fmtDate(payOffDate),
    monthlyPayment,
    biWeeklyPayment,
    monthlyPayOffDate: fmtDate(monthlyPayOffDate),
    biWeeklyPayOffDate: fmtDate(biWeeklyPayOffDate),
    totalInterestPaidBiWeekly,
    interestSavings: Math.max(0, interestSavings),
    estimatedMonthlyPayment: totalMonthly,
    monthlyTaxPaid: monthlyTax,
    monthlyHomeInsurance: monthlyInsurance,
    monthlyPMI,
    totalMonths,
  };
};

// ---------- Defaults ----------
const DEFAULT_INPUTS = {
  homePrice: 400000,      // slightly higher than original to show changes
  downPercent: 20,
  interestRate: 6.5,
  loanTerm: 30,
  propertyTax: 4200,
  homeInsurance: 1200,
  pmiRate: 0,
};

// ---------- Main Component ----------
export default function Tools() {
  const [results, setResults] = useState<Record<string, unknown>>({});
  const [inputs, setInputs] = useState<Record<string, CalculatorState>>({});
  const [activeTab, setActiveTab] = useState("breakdown");
  const chartRefs = useRef<{ [key: string]: unknown }>({});

  // --- Slider state (shared across the page) ---
  const [sliderInputs, setSliderInputs] = useState(DEFAULT_INPUTS);

  // Compute dynamic mortgage details from sliders
  const mortgageDetails = computeMortgage(
    sliderInputs.homePrice,
    sliderInputs.downPercent,
    sliderInputs.interestRate,
    sliderInputs.loanTerm,
    sliderInputs.propertyTax,
    sliderInputs.homeInsurance,
    sliderInputs.pmiRate
  );

  // Default details for comparison (using default values)
  const defaultDetails = computeMortgage(
    DEFAULT_INPUTS.homePrice,
    DEFAULT_INPUTS.downPercent,
    DEFAULT_INPUTS.interestRate,
    DEFAULT_INPUTS.loanTerm,
    DEFAULT_INPUTS.propertyTax,
    DEFAULT_INPUTS.homeInsurance,
    DEFAULT_INPUTS.pmiRate
  );

  // --- Sync sliders to the Mortgage Payment Calculator inputs ---
  useEffect(() => {
    const downPayment = sliderInputs.homePrice * (sliderInputs.downPercent / 100);
    setInputs((prev) => ({
      ...prev,
      "mortgage-payment": {
        ...prev["mortgage-payment"],
        price: sliderInputs.homePrice,
        downPayment: downPayment,
        rate: sliderInputs.interestRate,
        term: sliderInputs.loanTerm,
        taxes: sliderInputs.propertyTax,
        insurance: sliderInputs.homeInsurance,
      },
    }));
  }, [sliderInputs]);

  // --- Also sync Affordability and Rent-vs-Buy if needed (optional) ---
  useEffect(() => {
    const downPayment = sliderInputs.homePrice * (sliderInputs.downPercent / 100);
    setInputs((prev) => ({
      ...prev,
      affordability: {
        ...prev.affordability,
        downPayment: downPayment,
        rate: sliderInputs.interestRate,
        term: sliderInputs.loanTerm,
      },
      "rent-vs-buy": {
        ...prev["rent-vs-buy"],
        price: sliderInputs.homePrice,
        downPayment: downPayment,
        rate: sliderInputs.interestRate,
        term: sliderInputs.loanTerm,
        taxRate: (sliderInputs.propertyTax / sliderInputs.homePrice) * 100,
        insurance: sliderInputs.homeInsurance / 12,
      },
    }));
  }, [sliderInputs]);

  // --- Chart Data (derived from mortgageDetails) ---
  const loanBreakdownData = {
    labels: ["Down Payment", "HOA & Insurance", "Tax", "Principal", "Interest"],
    datasets: [
      {
        data: [
          mortgageDetails.downPayment,
          45000, // static for simplicity; could be computed
          mortgageDetails.totalTaxPaid,
          mortgageDetails.loanAmount,
          mortgageDetails.totalInterestPaid,
        ],
        backgroundColor: [
          COLORS.gold,
          COLORS.teal,
          COLORS.blue,
          COLORS.primary,
          COLORS.accent,
        ],
        borderColor: COLORS.white,
        borderWidth: 2,
      },
    ],
  };

  const paymentComparisonData = {
    labels: ["Monthly Payment", "Bi-Weekly Payment"],
    datasets: [
      {
        label: "Payment Amount",
        data: [
          mortgageDetails.monthlyPayment,
          mortgageDetails.biWeeklyPayment * 2,
        ],
        backgroundColor: [COLORS.primary, COLORS.accent],
        borderColor: [COLORS.primaryDark, COLORS.accent],
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  };

  const costBreakdownData = {
    labels: ["Principal", "Interest", "Tax", "Insurance", "PMI"],
    datasets: [
      {
        data: [
          mortgageDetails.loanAmount,
          mortgageDetails.totalInterestPaid,
          mortgageDetails.totalTaxPaid,
          mortgageDetails.totalHomeInsurance,
          mortgageDetails.totalPMI,
        ],
        backgroundColor: [
          COLORS.primary,
          COLORS.accent,
          COLORS.blue,
          COLORS.teal,
          COLORS.gray,
        ],
        borderColor: COLORS.white,
        borderWidth: 2,
      },
    ],
  };

  const interestSavingsData = {
    labels: ["Standard Monthly", "Bi-Weekly"],
    datasets: [
      {
        label: "Total Interest Paid",
        data: [
          mortgageDetails.totalInterestPaid,
          mortgageDetails.totalInterestPaidBiWeekly,
        ],
        backgroundColor: [COLORS.accent, COLORS.primary],
        borderColor: [COLORS.accent, COLORS.primaryDark],
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  };

  // --- Chart options (same as before) ---
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle",
          font: { size: 12, weight: 500 },
          color: COLORS.dark,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = ((context.parsed / total) * 100).toFixed(1);
            return `${context.label}: $${context.parsed.toLocaleString()} (${percentage}%)`;
          },
        },
      },
    },
    cutout: "0%",
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle",
          font: { size: 12, weight: 500 },
          color: COLORS.dark,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = ((context.parsed / total) * 100).toFixed(1);
            return `${context.label}: $${context.parsed.toLocaleString()} (${percentage}%)`;
          },
        },
      },
    },
    cutout: "60%",
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `$${context.parsed.y.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: any) { return "$" + value.toLocaleString(); },
          color: COLORS.dark,
        },
        grid: { color: "rgba(0,0,0,0.05)" },
      },
      x: {
        grid: { display: false },
        ticks: { color: COLORS.dark },
      },
    },
  };

  const interestSavingsBarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `$${context.parsed.y.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: any) { return "$" + (value / 1000).toFixed(0) + "k"; },
          color: COLORS.dark,
        },
        grid: { color: "rgba(0,0,0,0.05)" },
      },
      x: {
        grid: { display: false },
        ticks: { color: COLORS.dark },
      },
    },
  };

  // --- Tool functions (unchanged) ---
  const getDefaultInputs = (toolId: string): CalculatorState => {
    const tool = toolData.tools.find((t) => t.id === toolId);
    return (tool?.defaultInputs || {}) as CalculatorState;
  };

  const getInput = (toolId: string, field: string): number => {
    const defaults = getDefaultInputs(toolId);
    return Number(inputs[toolId]?.[field] ?? defaults[field] ?? 0);
  };

  const handleInputChange = (toolId: string, field: string, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [toolId]: {
        ...prev[toolId],
        [field]: value === "" ? "" : Number(value),
      },
    }));
    setTimeout(() => calculateTool(toolId), 100);
  };

  // --- Slider change handler ---
  const handleSliderChange = (key: keyof typeof DEFAULT_INPUTS, value: number) => {
    setSliderInputs((prev) => ({ ...prev, [key]: value }));
  };

  const resetSliders = () => {
    setSliderInputs(DEFAULT_INPUTS);
  };

  // --- Calculator functions (unchanged) ---
  const calculateMortgage = (toolId: string) => {
    const price = getInput(toolId, "price");
    const downPayment = getInput(toolId, "downPayment");
    const rate = getInput(toolId, "rate") / 100 / 12;
    const term = getInput(toolId, "term") * 12;
    const taxes = getInput(toolId, "taxes") / 12;
    const insurance = getInput(toolId, "insurance") / 12;
    const loanAmt = price - downPayment;

    let monthlyPI = 0;
    if (rate > 0 && term > 0) {
      monthlyPI =
        (loanAmt * (rate * Math.pow(1 + rate, term))) /
        (Math.pow(1 + rate, term) - 1);
    }

    const total = monthlyPI + taxes + insurance;

    setResults((prev) => ({
      ...prev,
      [toolId]: {
        monthlyPayment: total,
        principalInterest: monthlyPI,
        taxesInsurance: taxes + insurance,
      },
    }));
  };

  const calculateAffordability = (toolId: string) => {
    const income = getInput(toolId, "income");
    const debts = getInput(toolId, "debts");
    const downPayment = getInput(toolId, "downPayment");
    const targetDTI = getInput(toolId, "targetDTI") / 100;
    const rate = getInput(toolId, "rate") / 100 / 12;
    const term = getInput(toolId, "term") * 12;

    const maxTotalPITI = income * targetDTI;
    const maxPITI = maxTotalPITI - debts;

    let loan = 0;
    const step = 1000;
    for (let i = 0; i < 1000; i++) {
      const p =
        (loan * (rate * Math.pow(1 + rate, term))) /
        (Math.pow(1 + rate, term) - 1);
      const taxIns = ((loan + downPayment) * 0.015) / 12;
      const total = p + taxIns;
      if (total > maxPITI) {
        loan -= step;
        break;
      }
      loan += step;
    }

    const maxPrice = loan + downPayment;

    setResults((prev) => ({
      ...prev,
      [toolId]: {
        maxPITIA: maxPITI,
        maxLoanAmount: loan,
        maxHomePrice: maxPrice,
      },
    }));
  };

  const calculateRefinance = (toolId: string) => {
    const balance = getInput(toolId, "balance");
    const currentRate = getInput(toolId, "currentRate") / 100 / 12;
    const newRate = getInput(toolId, "newRate") / 100 / 12;
    const termMonths = getInput(toolId, "termRemaining") * 12;
    const fees = getInput(toolId, "refiFees");

    const monthlyPayment = (rate: number) => {
      if (rate === 0 || termMonths === 0) return 0;
      return (
        (balance * (rate * Math.pow(1 + rate, termMonths))) /
        (Math.pow(1 + rate, termMonths) - 1)
      );
    };

    const currentPmt = monthlyPayment(currentRate);
    const newPmt = monthlyPayment(newRate);
    const savings = currentPmt - newPmt;
    const breakEven = savings > 0 ? Math.ceil(fees / savings) : 0;

    setResults((prev) => ({
      ...prev,
      [toolId]: {
        monthlySavings: savings,
        breakEvenMonths: breakEven,
      },
    }));
  };

  const calculateRentVsBuy = (toolId: string) => {
    const price = getInput(toolId, "price");
    const downPayment = getInput(toolId, "downPayment");
    const rate = getInput(toolId, "rate") / 100 / 12;
    const term = getInput(toolId, "term") * 12;
    const taxRate = getInput(toolId, "taxRate") / 100;
    const insurance = getInput(toolId, "insurance") / 12;
    const maintenance = getInput(toolId, "maintenance") / 100;
    const rent = getInput(toolId, "rent");
    const rentGrowth = getInput(toolId, "rentGrowth") / 100;
    const appreciation = getInput(toolId, "appreciation") / 100;
    const years = getInput(toolId, "years");

    const loanAmt = price - downPayment;
    let monthlyPI = 0;
    if (rate > 0 && term > 0) {
      monthlyPI =
        (loanAmt * (rate * Math.pow(1 + rate, term))) /
        (Math.pow(1 + rate, term) - 1);
    }
    const monthlyTax = (price * taxRate) / 12;
    const monthlyMaint = (price * maintenance) / 12;
    const monthlyCost = monthlyPI + monthlyTax + insurance + monthlyMaint;

    const futurePrice = price * Math.pow(1 + appreciation, years);
    const remainingTerm = term - years * 12;
    let remainingBalance = 0;
    if (rate > 0 && remainingTerm > 0) {
      remainingBalance =
        ((loanAmt * (Math.pow(1 + rate, remainingTerm) - 1)) /
          Math.pow(1 + rate, remainingTerm)) *
        (1 + rate);
    }
    const equity = futurePrice - remainingBalance - (price - loanAmt);

    setResults((prev) => ({
      ...prev,
      [toolId]: {
        monthlyOwnershipCost: monthlyCost,
        equityIncrease: equity,
      },
    }));
  };

  const calculateDSCR = (toolId: string) => {
    const monthlyRent = getInput(toolId, "monthlyRent");
    const operatingExpenses = getInput(toolId, "operatingExpenses");
    const pitia = getInput(toolId, "pitia");
    const noi = monthlyRent - operatingExpenses;
    const dscr = pitia > 0 ? noi / pitia : 0;

    setResults((prev) => ({
      ...prev,
      [toolId]: {
        dscr: dscr,
      },
    }));
  };

  const calculateTool = (toolId: string) => {
    switch (toolId) {
      case "mortgage-payment":
        calculateMortgage(toolId);
        break;
      case "affordability":
        calculateAffordability(toolId);
        break;
      case "refinance":
        calculateRefinance(toolId);
        break;
      case "rent-vs-buy":
        calculateRentVsBuy(toolId);
        break;
      case "dscr":
        calculateDSCR(toolId);
        break;
    }
  };

  // Icon mapping
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Calculator,
      Home,
      RefreshCw,
      Scale,
      TrendingUp,
    };
    return icons[iconName] || Calculator;
  };

  // Render calculator inputs
  const renderInputs = (toolId: string, fields: Record<string, any>) => {
    return Object.entries(fields).map(([key, value]) => {
      const inputValue = inputs[toolId]?.[key] ?? value;
      const label = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());

      return (
        <div key={key} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => handleInputChange(toolId, key, e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04205D] focus:border-transparent bg-gray-50"
            step="any"
          />
        </div>
      );
    });
  };

  // Render results
  const renderResults = (toolId: string, resultKeys: string[]) => {
    const result: Record<string, unknown> =
      (results as Record<string, Record<string, unknown>>)[toolId] ?? {};

    return (
      <div className="bg-gray-50 rounded-xl p-6">
        {resultKeys.map((key) => {
          const value = result[key] as any;
          if (value === undefined || value === null) return null;

          const label = key
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase());
          const isCurrency = [
            "monthlyPayment",
            "principalInterest",
            "taxesInsurance",
            "maxPITIA",
            "maxLoanAmount",
            "maxHomePrice",
            "monthlySavings",
            "monthlyOwnershipCost",
            "equityIncrease",
          ].includes(key);
          const isPercent = key === "dscr";

          let displayValue = value;
          if (isCurrency) {
            displayValue = formatCurrency(
              typeof value === "number" ? value : Number(value) || 0,
            );
          } else if (isPercent) {
            displayValue =
              typeof value === "number"
                ? value.toFixed(2)
                : (Number(value) || 0).toFixed(2);
          } else if (Number.isInteger(value)) {
            displayValue = value;
          } else {
            displayValue =
              typeof value === "number"
                ? value.toFixed(2)
                : (Number(value) || 0).toFixed(2);
          }

          return (
            <div key={key} className="mb-3 last:mb-0">
              <div className="text-sm text-gray-600">{label}</div>
              <div className="text-2xl font-bold text-[#04205D]">
                {displayValue}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-b from-[#04205D] to-[#04305D] text-white rounded-2xl py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 flex gap-3 justify-center p-4">
            <ToolCase className="w-10 h-10" />
            Mortgage Tools
          </h1>
          <p className="text-xl text-green-200">
            Empower your home financing journey with professional-grade
            calculators.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {/* ========== MORTGAGE DETAILS WITH SLIDERS ========== */}
        <div className="mb-12 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-[#04205D] px-6 py-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <PieChart className="w-6 h-6" />
              Mortgage Details
            </h2>
          </div>

          {/* Summary Cards (dynamic) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 p-6 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-600">Loan Amount</p>
              <p className="text-xl font-bold text-[#04205D]">
                {formatCurrencyNoCents(mortgageDetails.loanAmount)}
              </p>
              <p className="text-xs text-gray-500">
                {((mortgageDetails.loanAmount / (mortgageDetails.loanAmount + mortgageDetails.downPayment)) * 100).toFixed(1)}%
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Down Payment</p>
              <p className="text-xl font-bold text-[#f7c948]">
                {formatCurrencyNoCents(mortgageDetails.downPayment)}
              </p>
              <p className="text-xs text-gray-500">({mortgageDetails.downPaymentPercent.toFixed(2)}%)</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Total Interest Paid</p>
              <p className="text-xl font-bold text-[#ff6b35]">
                {formatCurrencyNoCents(mortgageDetails.totalInterestPaid)}
              </p>
              <p className="text-xs text-gray-500">
                {(mortgageDetails.totalInterestPaid / mortgageDetails.totalPayments * 100).toFixed(2)}%
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Total Tax Paid</p>
              <p className="text-xl font-bold text-[#4a90d9]">
                {formatCurrencyNoCents(mortgageDetails.totalTaxPaid)}
              </p>
              <p className="text-xs text-gray-500">
                {(mortgageDetails.totalTaxPaid / mortgageDetails.totalPayments * 100).toFixed(2)}%
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Total Home Insurance</p>
              <p className="text-xl font-bold text-[#1abc9c]">
                {formatCurrencyNoCents(mortgageDetails.totalHomeInsurance)}
              </p>
              <p className="text-xs text-gray-500">
                {(mortgageDetails.totalHomeInsurance / mortgageDetails.totalPayments * 100).toFixed(2)}%
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Total PMI</p>
              <p className="text-xl font-bold text-gray-400">
                {formatCurrencyNoCents(mortgageDetails.totalPMI)}
              </p>
              <p className="text-xs text-gray-500">
                {(mortgageDetails.totalPMI / mortgageDetails.totalPayments * 100).toFixed(2)}%
              </p>
            </div>
          </div>

          {/* Payment Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-[#04205D]/5">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <p className="text-sm text-gray-600">Estimated Monthly Payment</p>
              <p className="text-3xl font-bold text-[#04205D]">
                {formatCurrency(mortgageDetails.estimatedMonthlyPayment)}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <p className="text-sm text-gray-600">Monthly Tax Paid</p>
              <p className="text-3xl font-bold text-[#4a90d9]">
                {formatCurrency(mortgageDetails.monthlyTaxPaid)}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <p className="text-sm text-gray-600">Monthly Home Insurance</p>
              <p className="text-3xl font-bold text-[#1abc9c]">
                {formatCurrency(mortgageDetails.monthlyHomeInsurance)}
              </p>
            </div>
          </div>

          {/* Charts + Sliders Panel */}
          <div className="p-6">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("breakdown")}
                className={`px-4 py-2 text-sm font-medium transition rounded-t-lg ${
                  activeTab === "breakdown"
                    ? "bg-[#04205D] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Loan Breakdown
              </button>
              <button
                onClick={() => setActiveTab("payment")}
                className={`px-4 py-2 text-sm font-medium transition rounded-t-lg ${
                  activeTab === "payment"
                    ? "bg-[#04205D] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Payment Comparison
              </button>
              <button
                onClick={() => setActiveTab("cost")}
                className={`px-4 py-2 text-sm font-medium transition rounded-t-lg ${
                  activeTab === "cost"
                    ? "bg-[#04205D] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Cost Breakdown
              </button>
              <button
                onClick={() => setActiveTab("savings")}
                className={`px-4 py-2 text-sm font-medium transition rounded-t-lg ${
                  activeTab === "savings"
                    ? "bg-[#04205D] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Interest Savings
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Charts */}
              <div className="lg:col-span-2 h-[400px] relative bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                {activeTab === "breakdown" && (
                  <Pie data={loanBreakdownData} options={pieOptions} />
                )}
                {activeTab === "payment" && (
                  <Bar data={paymentComparisonData} options={barOptions} />
                )}
                {activeTab === "cost" && (
                  <Pie data={costBreakdownData} options={doughnutOptions} />
                )}
                {activeTab === "savings" && (
                  <Bar data={interestSavingsData} options={interestSavingsBarOptions} />
                )}
              </div>

              {/* Slider Panel */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-5 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#04205D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  Compare Your Values
                </h4>

                {/* Home Price */}
                <div className="mb-4">
                  <label className="flex justify-between text-sm font-medium text-gray-700">
                    <span>Home Price</span>
                    <span className="text-[#04205D] font-bold">
                      {formatCurrencyNoCents(sliderInputs.homePrice)}
                    </span>
                  </label>
                  <input
                    type="range"
                    min={50000}
                    max={1500000}
                    step={5000}
                    value={sliderInputs.homePrice}
                    onChange={(e) => handleSliderChange("homePrice", Number(e.target.value))}
                    className="w-full mt-1 h-2 bg-[#04205D]/20 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-0.5">
                    <span>$50k</span>
                    <span>$1.5M</span>
                  </div>
                </div>

                {/* Down Payment % */}
                <div className="mb-4">
                  <label className="flex justify-between text-sm font-medium text-gray-700">
                    <span>Down Payment</span>
                    <span className="text-[#f7c948] font-bold">
                      {formatCurrencyNoCents(sliderInputs.homePrice * (sliderInputs.downPercent / 100))} ({sliderInputs.downPercent}%)
                    </span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={50}
                    step={0.5}
                    value={sliderInputs.downPercent}
                    onChange={(e) => handleSliderChange("downPercent", Number(e.target.value))}
                    className="w-full mt-1 h-2 bg-[#f7c948]/20 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-0.5">
                    <span>0%</span>
                    <span>50%</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div className="mb-4">
                  <label className="flex justify-between text-sm font-medium text-gray-700">
                    <span>Interest Rate</span>
                    <span className="text-[#ff6b35] font-bold">{sliderInputs.interestRate}%</span>
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={12}
                    step={0.125}
                    value={sliderInputs.interestRate}
                    onChange={(e) => handleSliderChange("interestRate", Number(e.target.value))}
                    className="w-full mt-1 h-2 bg-[#ff6b35]/20 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-0.5">
                    <span>1%</span>
                    <span>12%</span>
                  </div>
                </div>

                {/* Loan Term */}
                <div className="mb-4">
                  <label className="flex justify-between text-sm font-medium text-gray-700">
                    <span>Loan Term</span>
                    <span className="text-[#04205D] font-bold">{sliderInputs.loanTerm} yrs</span>
                  </label>
                  <div className="flex gap-2 mt-1">
                    {[15, 20, 30].map((term) => (
                      <button
                        key={term}
                        onClick={() => handleSliderChange("loanTerm", term)}
                        className={`flex-1 py-1.5 text-sm rounded border transition ${
                          sliderInputs.loanTerm === term
                            ? "bg-[#04205D] text-white border-[#04205D]"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {term} yr
                      </button>
                    ))}
                  </div>
                </div>

                {/* Property Tax */}
                <div className="mb-4">
                  <label className="flex justify-between text-sm font-medium text-gray-700">
                    <span>Annual Property Tax</span>
                    <span className="text-[#4a90d9] font-bold">
                      {formatCurrencyNoCents(sliderInputs.propertyTax)}
                    </span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={20000}
                    step={100}
                    value={sliderInputs.propertyTax}
                    onChange={(e) => handleSliderChange("propertyTax", Number(e.target.value))}
                    className="w-full mt-1 h-2 bg-[#4a90d9]/20 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-0.5">
                    <span>$0</span>
                    <span>$20k</span>
                  </div>
                </div>

                {/* Home Insurance */}
                <div className="mb-4">
                  <label className="flex justify-between text-sm font-medium text-gray-700">
                    <span>Annual Insurance</span>
                    <span className="text-[#1abc9c] font-bold">
                      {formatCurrencyNoCents(sliderInputs.homeInsurance)}
                    </span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={6000}
                    step={50}
                    value={sliderInputs.homeInsurance}
                    onChange={(e) => handleSliderChange("homeInsurance", Number(e.target.value))}
                    className="w-full mt-1 h-2 bg-[#1abc9c]/20 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-0.5">
                    <span>$0</span>
                    <span>$6k</span>
                  </div>
                </div>

                {/* PMI */}
                <div className="mb-4">
                  <label className="flex justify-between text-sm font-medium text-gray-700">
                    <span>PMI (annual %)</span>
                    <span className="text-gray-500 font-bold">{sliderInputs.pmiRate}%</span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={2}
                    step={0.05}
                    value={sliderInputs.pmiRate}
                    onChange={(e) => handleSliderChange("pmiRate", Number(e.target.value))}
                    className="w-full mt-1 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-0.5">
                    <span>0%</span>
                    <span>2%</span>
                  </div>
                </div>

                <button
                  onClick={resetSliders}
                  className="w-full mt-2 py-2 text-sm font-medium text-[#04205D] border border-[#04205D] rounded-lg hover:bg-[#04205D] hover:text-white transition duration-200"
                >
                  Reset to Defaults
                </button>
              </div>
            </div>

            {/* Info Panel + Comparison (dynamic) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              <div className="lg:col-span-2 bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">
                  {activeTab === "breakdown" && "Loan Breakdown Summary"}
                  {activeTab === "payment" && "Payment Comparison"}
                  {activeTab === "cost" && "Total Cost Breakdown"}
                  {activeTab === "savings" && "Interest Savings Analysis"}
                </h4>
                <div className="space-y-3">
                  {activeTab === "breakdown" && (
                    <>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-600">Down Payment</span>
                        <span className="font-semibold text-[#f7c948]">
                          {formatCurrencyNoCents(mortgageDetails.downPayment)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-600">HOA & Insurance</span>
                        <span className="font-semibold text-[#1abc9c]">
                          {formatCurrencyNoCents(45000)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-600">Tax</span>
                        <span className="font-semibold text-[#4a90d9]">
                          {formatCurrencyNoCents(mortgageDetails.totalTaxPaid)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-600">Principal</span>
                        <span className="font-semibold text-[#04205D]">
                          {formatCurrencyNoCents(mortgageDetails.loanAmount)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Interest</span>
                        <span className="font-semibold text-[#ff6b35]">
                          {formatCurrencyNoCents(mortgageDetails.totalInterestPaid)}
                        </span>
                      </div>
                    </>
                  )}
                  {activeTab === "payment" && (
                    <>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <p className="text-sm text-gray-600">Monthly Payment</p>
                        <p className="text-2xl font-bold text-[#04205D]">
                          {formatCurrency(mortgageDetails.monthlyPayment)}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          Pay-off: {mortgageDetails.monthlyPayOffDate}
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-[#ff6b35]">
                        <p className="text-sm text-gray-600">Bi-Weekly Payment</p>
                        <p className="text-2xl font-bold text-[#ff6b35]">
                          {formatCurrency(mortgageDetails.biWeeklyPayment)}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          Pay-off: {mortgageDetails.biWeeklyPayOffDate}
                        </p>
                        <p className="text-xs text-[#04205D] font-medium mt-1">
                          ✓ Saves {formatCurrencyNoCents(mortgageDetails.interestSavings)} in interest
                        </p>
                      </div>
                    </>
                  )}
                  {activeTab === "cost" && (
                    <>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-600">Principal</span>
                        <span className="font-semibold text-[#04205D]">
                          {formatCurrencyNoCents(mortgageDetails.loanAmount)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-600">Interest</span>
                        <span className="font-semibold text-[#ff6b35]">
                          {formatCurrencyNoCents(mortgageDetails.totalInterestPaid)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-600">Tax</span>
                        <span className="font-semibold text-[#4a90d9]">
                          {formatCurrencyNoCents(mortgageDetails.totalTaxPaid)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-600">Insurance</span>
                        <span className="font-semibold text-[#1abc9c]">
                          {formatCurrencyNoCents(mortgageDetails.totalHomeInsurance)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t-2 border-gray-300">
                        <span className="font-semibold text-gray-900">Total</span>
                        <span className="text-xl font-bold text-[#04205D]">
                          {formatCurrencyNoCents(mortgageDetails.totalPayments)}
                        </span>
                      </div>
                    </>
                  )}
                  {activeTab === "savings" && (
                    <>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-sm text-gray-600">Standard Monthly</p>
                        <p className="text-2xl font-bold text-[#ff6b35]">
                          {formatCurrencyNoCents(mortgageDetails.totalInterestPaid)}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">Total Interest Paid</p>
                      </div>
                      <div className="bg-[#04205D]/10 rounded-lg p-4 border border-[#04205D]">
                        <p className="text-sm text-gray-600">Bi-Weekly</p>
                        <p className="text-2xl font-bold text-[#04205D]">
                          {formatCurrencyNoCents(mortgageDetails.totalInterestPaidBiWeekly)}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">Total Interest Paid</p>
                      </div>
                      <div className="bg-[#f7c948]/20 rounded-lg p-4 border border-[#f7c948]">
                        <p className="text-sm text-gray-600 font-semibold">Total Interest Savings</p>
                        <p className="text-3xl font-bold text-[#04205D]">
                          {formatCurrencyNoCents(mortgageDetails.interestSavings)}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">By choosing bi-weekly payments</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Comparison highlight */}
              <div className="bg-[#04205D]/5 rounded-xl p-5 border border-[#04205D]/20 flex flex-col justify-center">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Your vs. Default</p>
                  <div className="mt-2 flex items-center justify-center gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Monthly</p>
                      <p className="text-xl font-bold text-[#04205D]">
                        {formatCurrency(mortgageDetails.estimatedMonthlyPayment)}
                      </p>
                    </div>
                    <span className="text-2xl text-gray-300">vs</span>
                    <div>
                      <p className="text-xs text-gray-500">Default</p>
                      <p className="text-xl font-bold text-gray-400">
                        {formatCurrency(defaultDetails.estimatedMonthlyPayment)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 text-sm">
                    {Math.abs(mortgageDetails.estimatedMonthlyPayment - defaultDetails.estimatedMonthlyPayment) < 0.01 ? (
                      <span className="text-gray-500">Equal to default</span>
                    ) : mortgageDetails.estimatedMonthlyPayment < defaultDetails.estimatedMonthlyPayment ? (
                      <span className="text-green-600 font-semibold">
                        ✓ {formatCurrency(Math.abs(mortgageDetails.estimatedMonthlyPayment - defaultDetails.estimatedMonthlyPayment))} less
                      </span>
                    ) : (
                      <span className="text-red-500 font-semibold">
                        + {formatCurrency(Math.abs(mortgageDetails.estimatedMonthlyPayment - defaultDetails.estimatedMonthlyPayment))} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Loan Summary Footer (dynamic) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50 border-t border-gray-200">
            <div>
              <p className="text-xs text-gray-500">Total of {mortgageDetails.totalMonths} Payments</p>
              <p className="text-lg font-bold text-[#04205D]">
                {formatCurrencyNoCents(mortgageDetails.totalPayments)}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Loan Pay-off Date</p>
              <p className="text-lg font-bold text-[#04205D]">
                {mortgageDetails.payOffDate}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Monthly Pay-off Date</p>
              <p className="text-lg font-bold text-[#04205D]">
                {mortgageDetails.monthlyPayOffDate}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Bi-weekly Pay-off Date</p>
              <p className="text-lg font-bold text-[#ff6b35]">
                {mortgageDetails.biWeeklyPayOffDate}
              </p>
            </div>
          </div>
        </div>

        {/* Tool Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {toolData.tools.map((tool) => {
            const Icon = getIcon(tool.icon);
            return (
              <div
                key={tool.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition hover:border-[#04205D] cursor-pointer"
                onClick={() => {
                  document
                    .getElementById(tool.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                  calculateTool(tool.id);
                }}
              >
                <Icon className="w-10 h-10 text-[#04205D] mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
                <button className="text-[#04205D] font-medium text-sm flex items-center gap-1 hover:gap-2 transition">
                  Launch <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Calculator Sections */}
        {toolData.tools.map((tool) => {
          const Icon = getIcon(tool.icon);
          const defaultInputs = tool.defaultInputs || {};

          return (
            <div
              key={tool.id}
              id={tool.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-8 scroll-mt-4"
            >
              <div className="flex items-start gap-3 mb-6">
                <Icon className="w-8 h-8 text-[#04205D] mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {tool.title}
                  </h2>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Inputs */}
                <div>
                  {renderInputs(tool.id, defaultInputs)}
                  <button
                    onClick={() => calculateTool(tool.id)}
                    className="w-full bg-[#04205D] hover:bg-[#04305D] text-white font-semibold py-3 rounded-lg transition"
                  >
                    Calculate
                  </button>
                </div>

                {/* Results */}
                <div>
                  {(() => {
                    const result = results[tool.id] || {};
                    if (Object.keys(result).length === 0) {
                      return (
                        <div className="bg-gray-50 rounded-xl p-6 text-center text-gray-500">
                          <p>Enter values and click Calculate</p>
                        </div>
                      );
                    }

                    return renderResults(tool.id, Object.keys(result));
                  })()}
                </div>
              </div>

              {tool.id === "rent-vs-buy" && (
                <p className="text-xs text-gray-500 mt-4 italic">
                  *Simplified model. Excludes tax deductions and selling costs.
                </p>
              )}
              {tool.id === "dscr" && (
                <p className="text-xs text-black mt-4">
                  *Many programs target ≥ 1.00 (some allow lower).
                </p>
              )}
              {tool.id === "affordability" && (
                <p className="text-xs text-gray-500 mt-4">
                  *Ideal Target DTI = 43% or less. Up to 55% DTI may be possible
                  with strong credit.
                </p>
              )}
            </div>
          );
        })}

        {/* Disclaimer */}
        <div className="bg-gray-50 border-l-4 border-[#04205D] p-6 rounded-lg">
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Disclaimer:</strong> {toolData.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
}