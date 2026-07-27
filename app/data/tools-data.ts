export interface CalculatorInputs {
  // Mortgage Payment
  price?: number;
  downPayment?: number;
  rate?: number;
  term?: number;
  taxes?: number;
  insurance?: number;

  // Affordability
  income?: number;
  debts?: number;
  targetDTI?: number;

  // Refinance
  balance?: number;
  currentRate?: number;
  newRate?: number;
  termRemaining?: number;
  refiFees?: number;

  // Rent vs Buy
  taxRate?: number;
  maintenance?: number;
  rent?: number;
  rentGrowth?: number;
  appreciation?: number;
  years?: number;

  // DSCR
  monthlyRent?: number;
  operatingExpenses?: number;
  PITIA?: number;
}

export interface CalculatorResults {
  monthlyPayment?: number;
  principalInterest?: number;
  taxesInsurance?: number;
  maxPITIA?: number;
  maxLoanAmount?: number;
  maxHomePrice?: number;
  monthlySavings?: number;
  breakEvenMonths?: number;
  monthlyOwnershipCost?: number;
  equityIncrease?: number;
  dscr?: number;
}

export const toolData = {
  tools: [
    {
      id: "mortgage-payment",
      title: "Mortgage Payment Calculator",
      description: "Estimate monthly payments instantly",
      icon: "Calculator",
      defaultInputs: {
        price: 400000,
        downPayment: 80000,
        rate: 6.5,
        term: 30,
        taxes: 4400,
        insurance: 1500,
      },
    },
    // {
    //   id: 'affordability',
    //   title: 'Home Affordability Calculator',
    //   description: 'Discover what price range fits your budget',
    //   icon: 'Home',
    //   defaultInputs: {
    //     income: 9000,
    //     debts: 800,
    //     downPayment: 40000,
    //     targetDTI: 43,
    //     rate: 6.5,
    //     term: 30
    //   }
    // },
    // {
    //   id: 'refinance',
    //   title: 'Refinance Break-Even',
    //   description: 'Calculate time to recoup closing costs',
    //   icon: 'RefreshCw',
    //   defaultInputs: {
    //     balance: 350000,
    //     currentRate: 7,
    //     newRate: 6,
    //     termRemaining: 28,
    //     refiFees: 4500
    //   }
    // },
    {
      id: "rent-vs-buy",
      title: "Rent vs. Buy Calculator",
      description: "Compare long-term costs & equity growth",
      icon: "Scale",
      defaultInputs: {
        price: 400000,
        downPayment: 80000,
        rate: 6.5,
        term: 30,
        insurance: 1500,

        rent: 2200,

        years: 7,
      },
    },
    {
      id: "dscr",
      title: "DSCR Calculator",
      description: "Analyze cash-flow for investment properties",
      icon: "TrendingUp",
      defaultInputs: {
        monthlyRent: 2500,
        operatingExpenses: 300,
        PITIA: 2100,
      },
    },
  ],
  disclaimer:
    "Testimonials may not be representative of all clients and are not a guarantee of future performance. Loan approvals are subject to underwriting. Rates, terms, and programs are subject to change without notice. Equal Housing Lender. NMLS #384700.",
};
