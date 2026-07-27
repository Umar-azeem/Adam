// app/data/loanPrograms.ts

export interface LoanProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: string;
  benefits: string[];
  features?: string[]; // Made optional
  idealFor?: string[]; // Made optional - Fixed the type from JSX.Element to string[]
  steps: {
    step: number;
    title: string;
    description: string;
  }[];
  testimonials: {
    name: string;
    text: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaText: string;
  ctaLink: string;
}

export const loanPrograms: LoanProgram[] = [
  {
    id: "fha",
    title: "FHA Loans",
    subtitle:
      "Government-backed home loans with flexible credit requirements and down payments as low as 3.5%.",
    description:
      "FHA Loans are a mortgage solution designed for a specific financial situation. They offer flexible requirements and down payments as low as 3.5%, making them a great choice for first-time buyers.",
    longDescription:
      "FHA Loans are a mortgage solution designed for a specific financial situation. They offer flexible requirements and down payments as low as 3.5%, making them a great choice for first-time buyers. FHA loans provide a clear path forward with competitive terms and tailored conditions.",
    icon: "Shield",
    benefits: [
      "FHA loans typically have GREAT INTEREST RATES.",
      "Less than perfect credit: A FICO score as low as 580 may be accepted for a 3.5% down payment.",
      "Low down payment: Borrowers with a credit score of 580+ can qualify for as little as 3.5% down.",
      "Ask about our Down Payment Assistance programs.",
      "Closing costs can be factored into the Contract as Seller Concession.",
    ],
    features: [
      "Down payment as low as 3.5%",
      "Credit scores as low as 580 may qualify",
      "Competitive, fixed interest rates",
      "Can be used for single-family homes, multi-unit properties, and more",
    ],
    idealFor: [
      "First-time home buyers",
      "Borrowers with limited savings for a down payment",
      "Those with credit scores below 700",
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "We start with a conversation to understand your goals and financial picture.",
      },
      {
        step: 2,
        title: "Application & Documentation",
        description:
          "Complete the online application and provide necessary financial documents.",
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description:
          "Our team reviews your file to issue a final loan approval.",
      },
      {
        step: 4,
        title: "Closing",
        description:
          "Sign the final documents and get instant access to your funds.",
      },
    ],
    testimonials: [
      {
        name: "Alex & Jamie R.",
        text: "Billy made the process of getting our FHA Loans incredibly simple. His communication was top-notch, and we closed faster than we ever thought possible. Highly recommend!",
      },
      {
        name: "Samantha P.",
        text: "As a self-employed individual, I thought getting a mortgage would be a nightmare. Billy guided me through the FHA Loans options and found the perfect fit. I couldn't be happier.",
      },
    ],
    faqs: [
      {
        question: "Who is eligible for a FHA Loans?",
        answer:
          "FHA loans are available to borrowers with a credit score of 580 or higher and a down payment of at least 3.5%. Borrowers with lower credit scores may still qualify with a higher down payment.",
      },
      {
        question: "What documents do I need?",
        answer:
          "You'll need proof of income (pay stubs, W-2s, or tax returns), bank statements, identification, and information about your employment history.",
      },
    ],
    ctaText: "Get Your Personalized Rate",
    ctaLink: "/contact-us",
  },
  // {
  //   id: "va",
  //   title: "VA Home Loans",
  //   subtitle:
  //     "Exclusive zero-down mortgage benefits for veterans and service members. No PMI required, Rates, and flexible credit guidelines for military families.",
  //   description:
  //     "A VA Home Loan is a mortgage solution designed for a specific financial situation. Exclusive $0-down mortgage benefits are available for veterans and service members.",
  //   longDescription:
  //     "A VA Home Loan is a mortgage solution designed for a specific financial situation. Exclusive $0-down mortgage benefits are available for veterans and service members. No PMI required, Rates, and flexible credit guidelines for military families. It offers a clear path forward with terms and conditions tailored to your needs.",
  //   icon: "Star",
  //   benefits: [
  //     "VA loans typically have GREAT INTEREST RATES.",
  //     "VA Loans have $0 down payment up to the Veteran's remaining VA eligibility.",
  //     "Less than perfect credit: A FICO score as low as 580 may be accepted.",
  //     "No PMI so the monthly mortgage payment for Veterans is lower than traditional loans.",
  //     "Closing costs can be factored into the Contract as Seller Concession.",
  //   ],
  //   features: [
  //     "Zero down payment required",
  //     "No private mortgage insurance (PMI)",
  //     "Competitive interest rates",
  //     "Limited closing costs",
  //   ],
  //   idealFor: [
  //     "Active-duty service members",
  //     "Veterans",
  //     "Eligible surviving spouses",
  //   ],
  //   steps: [
  //     {
  //       step: 1,
  //       title: "Initial Consultation",
  //       description:
  //         "We start with a conversation to understand your goals and financial picture.",
  //     },
  //     {
  //       step: 2,
  //       title: "Application & Documentation",
  //       description:
  //         "Complete the online application and provide necessary financial documents.",
  //     },
  //     {
  //       step: 3,
  //       title: "Underwriting & Approval",
  //       description:
  //         "Our team reviews your file to issue a final loan approval.",
  //     },
  //     {
  //       step: 4,
  //       title: "Closing",
  //       description:
  //         "Sign the final documents and get instant access to your funds.",
  //     },
  //   ],
  //   testimonials: [
  //     {
  //       name: "Alex & Jamie R.",
  //       text: "Billy made the process of getting our VA Home Loans incredibly simple. His communication was top-notch, and we closed faster than we ever thought possible. Highly recommend!",
  //     },
  //     {
  //       name: "Samantha P.",
  //       text: "As a self-employed individual, I thought getting a mortgage would be a nightmare. Billy guided me through the VA Home Loans options and found the perfect fit. I couldn't be happier.",
  //     },
  //   ],
  //   faqs: [
  //     {
  //       question: "Who is eligible for a VA Home Loans?",
  //       answer:
  //         "Active-duty service members, veterans, and eligible surviving spouses may qualify for VA loans. You'll need a Certificate of Eligibility from the VA.",
  //     },
  //     {
  //       question: "What documents do I need?",
  //       answer:
  //         "You'll need your DD-214, Certificate of Eligibility, proof of income, bank statements, and identification.",
  //     },
  //   ],
  //   ctaText: "Get Your Personalized Rate",
  //   ctaLink: "/contact-us",
  // },
  {
    id: "conventional",
    title: "Conventional Loans",
    subtitle:
      "Traditional mortgage financing with Rates, flexible terms, and down payments as low as 3%. Ideal for borrowers with good credit and stable income.",
    description:
      "A Conventional Home Loan is a mortgage solution designed for a specific financial situation. Traditional mortgage financing offers Rates, flexible terms, and down payments as low as 3%.",
    longDescription:
      "A Conventional Home Loan is a mortgage solution designed for a specific financial situation. Traditional mortgage financing offers Rates, flexible terms, and down payments as low as 3%. It's ideal for borrowers with good credit and stable income, and provides a clear path forward with terms and conditions tailored to your needs.",
    icon: "Building",
    benefits: [
      "Conventional loans have fewer property restrictions: unlike government-backed loans with strict property requirements, conventional loans can be used for a wider variety of properties and conditions.",
      "No residency requirement: conventional loans do not always require the property to be your primary residence.",
      "Fewer inspection hurdles: the appraisal process for a conventional loan is typically less restrictive than an FHA appraisal, making offers more attractive to sellers.",
      "Closing costs can be factored into the Contract as Seller Concession, so coordinate with your Mortgage Broker when making offers.",
    ],
    features: [
      "Down payments as low as 3% for first-time buyers",
      "Competitive interest rates for strong credit profiles",
      "Flexible loan terms (10, 15, 20, 30 years)",
      "Private mortgage insurance (PMI) can be canceled once 20% equity is reached",
    ],
    idealFor: [
      "Borrowers with good to excellent credit (typically 620+)",
      "Those with a stable income and employment history",
      "Buyers who can make a down payment of at least 3%",
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "We start with a conversation to understand your goals and financial picture.",
      },
      {
        step: 2,
        title: "Application & Documentation",
        description:
          "Complete the online application and provide necessary financial documents.",
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description:
          "Our team reviews your file to issue a final loan approval.",
      },
      {
        step: 4,
        title: "Closing",
        description:
          "Sign the final documents and get instant access to your funds.",
      },
    ],
    testimonials: [
      {
        name: "Alex & Jamie R.",
        text: "Billy made the process of getting our Conventional Home Loan incredibly simple. His communication was top-notch, and we closed faster than we ever thought possible. Highly recommend!",
      },
      {
        name: "Samantha P.",
        text: "As a self-employed individual, I thought getting a mortgage would be a nightmare. Billy guided me through the Conventional Home Loan options and found the perfect fit. I couldn't be happier.",
      },
    ],
    faqs: [
      {
        question: "Who is eligible for a Conventional Loans?",
        answer:
          "Borrowers with good credit (typically 620+), stable income, and a down payment of at least 3% may qualify for conventional loans.",
      },
      {
        question: "What documents do I need?",
        answer:
          "You'll need proof of income, bank statements, tax returns, identification, and information about your assets.",
      },
    ],
    ctaText: "Get Your Personalized Rate",
    ctaLink: "/contact-us",
  },
  {
    id: "jumbo",
    title: "Jumbo Loans",
    subtitle:
      "High-value property financing that exceeds conventional loan limits. Rates for luxury homes and expensive markets with flexible underwriting.",
    description:
      "A Jumbo Home Loan is a mortgage solution designed for a specific financial situation. It provides high-value property financing that exceeds conventional loan limits.",
    longDescription:
      "A Jumbo Home Loan is a mortgage solution designed for a specific financial situation. It provides high-value property financing that exceeds conventional loan limits. Rates for luxury homes and expensive markets come with flexible underwriting, offering a clear path forward with terms and conditions tailored to your needs.",
    icon: "Home",
    benefits: [
      "Jumbo loans are a great option for homebuyers searching in an expensive or robust housing market.",
      "Jumbo loans allow for a single large loan amount that exceeds conventional loan limits.",
      "Ideal for purchasing a high-end, luxury, or unique property requiring a larger mortgage.",
      "Closing costs can be factored into the Contract as Seller Concession, so coordinate with your Mortgage Broker when making offers.",
    ],
    features: [
      "Financing for high-value properties",
      "Competitive interest rates available",
      "Flexible loan terms",
    ],
    idealFor: [
      "Buyers purchasing luxury homes",
      "Those in high-cost real estate markets",
      "Borrowers with strong credit and significant assets",
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "We start with a conversation to understand your goals and financial picture.",
      },
      {
        step: 2,
        title: "Application & Documentation",
        description:
          "Complete the online application and provide necessary financial documents.",
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description:
          "Our team reviews your file to issue a final loan approval.",
      },
      {
        step: 4,
        title: "Closing",
        description:
          "Sign the final documents and get instant access to your funds.",
      },
    ],
    testimonials: [
      {
        name: "Alex & Jamie R.",
        text: "Billy made the process of getting our Jumbo Home Loan incredibly simple. His communication was top-notch, and we closed faster than we ever thought possible. Highly recommend!",
      },
      {
        name: "Samantha P.",
        text: "As a self-employed individual, I thought getting a mortgage would be a nightmare. Billy guided me through the Jumbo Home Loan options and found the perfect fit. I couldn't be happier.",
      },
    ],
    faqs: [
      {
        question: "Who is eligible for a Jumbo Loans?",
        answer:
          "Borrowers with excellent credit, significant assets, and a larger down payment typically qualify for jumbo loans.",
      },
      {
        question: "What documents do I need?",
        answer:
          "You'll need extensive documentation including tax returns, bank statements, proof of assets, and detailed employment history.",
      },
    ],
    ctaText: "Get Your Personalized Rate",
    ctaLink: "/contact-us",
  },
  {
    id: "refinance",
    title: "Refinance",
    subtitle:
      "Lower your mortgage rate, reduce monthly payments, shorten your loan term, or access home equity. Cash-out refinancing available for debt consolidation and investments.",
    description:
      "The two main types of mortgage refinance are Rate-and-Term and Cash-Out Refinance. A Rate-and-Term refinance replaces your current mortgage with a new one that has a more favorable interest rate or loan term.",
    longDescription:
      "The two main types of mortgage refinance are Rate-and-Term and Cash-Out Refinance. A Rate-and-Term refinance replaces your current mortgage with a new one that has a more favorable interest rate or loan term, without advancing you additional funds. A Cash-Out refinance replaces your mortgage with a larger new loan, allowing you to access your home equity as cash for other expenses.",
    icon: "RefreshCw",
    benefits: [
      "Rate-and-Term Refinance is designed to improve the financial terms of your mortgage.",
      "You swap your current mortgage for a new one with a new interest rate, a different repayment term, or both.",
      "The key benefit is to lower your monthly payments and save on total interest paid over the life of the loan.",
      "No extra money is advanced; the new loan is for the same amount as the old one.",
      "Cash-Out Refinance is designed to get cash out of your home's equity.",
      "You get a new, larger mortgage than your original loan, and the difference is paid to you as cash.",
    ],
    features: [
      "Lower your interest rate",
      "Reduce your monthly payment",
      "Shorten your loan term",
      "Access cash for home improvements or debt consolidation",
    ],
    idealFor: [
      "Homeowners looking to save money with a lower rate",
      "Those wanting to consolidate high-interest debt",
      "Borrowers who need to access home equity",
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "We start with a conversation to understand your goals and financial picture.",
      },
      {
        step: 2,
        title: "Application & Documentation",
        description:
          "Complete the online application and provide necessary financial documents.",
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description:
          "Our team reviews your file to issue a final loan approval.",
      },
      {
        step: 4,
        title: "Closing",
        description:
          "Sign the final documents and get instant access to your funds.",
      },
    ],
    testimonials: [
      {
        name: "Alex & Jamie R.",
        text: "Billy made the process of getting our Refinance incredibly simple. His communication was top-notch, and we closed faster than we ever thought possible. Highly recommend!",
      },
      {
        name: "Samantha P.",
        text: "As a self-employed individual, I thought getting a mortgage would be a nightmare. Billy guided me through the Refinance options and found the perfect fit. I couldn't be happier.",
      },
    ],
    faqs: [
      {
        question: "Who is eligible for a Refinance?",
        answer:
          "Homeowners with sufficient equity and good credit typically qualify for refinancing. Lenders will evaluate your debt-to-income ratio and home value.",
      },
      {
        question: "What documents do I need?",
        answer:
          "You'll need recent pay stubs, tax returns, bank statements, and information about your current mortgage.",
      },
    ],
    ctaText: "Get Your Personalized Rate",
    ctaLink: "/contact-us",
  },
  {
    id: "heloc",
    title: "HELOC",
    subtitle:
      "Flexible home equity line of credit for major expenses, home improvements, or investment opportunities. Access funds as needed with competitive variable rates.",
    description:
      "A HELOC (Home Equity Line of Credit) is a flexible mortgage solution designed for homeowners who want to access their home's equity.",
    longDescription:
      "A HELOC (Home Equity Line of Credit) is a flexible mortgage solution designed for homeowners who want to access their home's equity. It provides a revolving line of credit for major expenses, home improvements, or investment opportunities. Access funds as needed with competitive variable rates and terms tailored to your financial needs.",
    icon: "LineChart",
    benefits: [
      "Access your home equity (cash) in as little as 6 days.",
      "Keep your current mortgage rate in place with a stand-alone Line of Credit to access your cash equity.",
      "Consolidate debts to reduce your monthly spend, pay for unexpected expenses, or make repairs and upgrades to the home.",
      "A HELOC is revolving and can be used like a credit card with a lower interest rate.",
      "You can take a Home Equity Line of Credit out on your primary or investment property.",
    ],
    features: [
      "Revolving line of credit",
      "Use funds for any purpose",
      "Competitive variable interest rates",
      "Interest may be tax-deductible (consult a tax advisor)",
    ],
    idealFor: [
      "Funding home improvements",
      "Paying for education expenses",
      "Consolidating high-interest debt",
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "We start with a conversation to understand your goals and financial picture.",
      },
      {
        step: 2,
        title: "Application & Documentation",
        description:
          "Complete the online application and provide necessary financial documents.",
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description:
          "Our team reviews your file to issue a final loan approval.",
      },
      {
        step: 4,
        title: "Closing",
        description:
          "Sign the final documents and get instant access to your funds.",
      },
    ],
    testimonials: [
      {
        name: "Alex & Jamie R.",
        text: "Billy made the process of getting our HELOC incredibly simple. His communication was top-notch, and we closed faster than we ever thought possible. Highly recommend!",
      },
      {
        name: "Samantha P.",
        text: "As a self-employed individual, I thought getting a mortgage would be a nightmare. Billy guided me through the HELOC options and found the perfect fit. I couldn't be happier.",
      },
    ],
    faqs: [
      {
        question: "Who is eligible for a HELOC?",
        answer:
          "Homeowners with sufficient equity in their property and good credit typically qualify for a HELOC.",
      },
      {
        question: "What documents do I need?",
        answer:
          "You'll need proof of income, bank statements, tax returns, and information about your current mortgage.",
      },
    ],
    ctaText: "Get Your Personalized Rate",
    ctaLink: "/contact-us",
  },
  {
    id: "dscr",
    title: "DSCR Investor Loans",
    subtitle:
      "Investment property financing based on rental income potential, not personal income. Perfect for real estate investors building rental property portfolios.",
    description:
      "A DSCR Investor Loan is a mortgage solution designed for a specific financial situation. It is based on rental income potential, not personal income.",
    longDescription:
      "A DSCR Investor Loan is a mortgage solution designed for a specific financial situation. It is based on rental income potential, not personal income, making it ideal for real estate investors building rental property portfolios. With flexible underwriting, competitive terms, and clear qualification guidelines, DSCR loans provide a reliable way for investors to scale their real estate holdings.",
    icon: "TrendingDown",
    benefits: [
      "Qualification based on property cash flow, not personal income",
      "No employment verification or tax return requirements",
      "Faster approval process for experienced investors",
      "Available for single-family homes, condos, and small multi-family properties",
      "Competitive interest rates for investment properties",
      "Build your portfolio without personal income limitations",
      "Streamlined documentation process",
      "Focus on property performance rather than personal finances",
    ],
    features: [
      "Qualify based on property's cash flow, not personal income",
      "Ideal for expanding your real estate portfolio",
      "Available for 1-4 unit properties",
      "Rates available",
    ],
    idealFor: [
      "Experienced real estate investors",
      "Those building a rental property portfolio",
      "Borrowers with complex personal income situations",
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "We start with a conversation to understand your goals and financial picture.",
      },
      {
        step: 2,
        title: "Application & Documentation",
        description:
          "Complete the online application and provide necessary financial documents.",
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description:
          "Our team reviews your file to issue a final loan approval.",
      },
      {
        step: 4,
        title: "Closing",
        description:
          "Sign the final documents and get instant access to your funds.",
      },
    ],
    testimonials: [
      {
        name: "Alex & Jamie R.",
        text: "Billy made the process of getting our DSCR Investor Loan incredibly simple. His communication was top-notch, and we closed faster than we ever thought possible. Highly recommend!",
      },
      {
        name: "Samantha P.",
        text: "As a self-employed individual, I thought getting a mortgage would be a nightmare. Billy guided me through the DSCR Investor Loan options and found the perfect fit. I couldn't be happier.",
      },
    ],
    faqs: [
      {
        question: "Who is eligible for a DSCR Investor Loans?",
        answer:
          "Real estate investors looking to purchase or refinance investment properties typically qualify. The property must generate sufficient rental income.",
      },
      {
        question: "What documents do I need?",
        answer:
          "You'll need rental income documentation, property information, and bank statements for the down payment.",
      },
    ],
    ctaText: "Get Your Personalized Rate",
    ctaLink: "/contact-us",
  },
  {
    id: "bank-statement",
    title: "Bank Statement Loans",
    subtitle:
      "Self-employed mortgage solution using bank statements instead of tax returns. Alternative income verification for entrepreneurs and business owners.",
    description:
      "A Bank Statement Loan is a mortgage solution designed for self-employed borrowers, entrepreneurs, and business owners who use bank statements instead of tax returns to verify income.",
    longDescription:
      "A Bank Statement Loan is a mortgage solution designed for self-employed borrowers, entrepreneurs, and business owners who use bank statements instead of tax returns to verify income. This flexible loan option provides a clear path forward with competitive terms and tailored conditions for non-traditional earners.",
    icon: "FileText",
    benefits: [
      "Flexible Income Verification: Allows self-employed individuals and freelancers to qualify using bank statements instead of traditional tax returns or W-2s.",
      "Captures True Income: Reflects actual cash flow and revenue, often more accurate than taxable income for those who take business deductions.",
      "Increased Accessibility: Opens homeownership opportunities for borrowers who don't fit the traditional lending box due to fluctuating or complex income.",
      "Faster Processing: Less documentation and streamlined processes often result in faster approvals compared to traditional mortgages.",
      "Potential for Lower Down Payments: Some programs allow for as little as 10% or even 5%, depending on the lender and program.",
      "Use for Various Properties: Can be used for primary residences, second homes, and investment properties.",
    ],
    features: [
      "Qualify using personal or business bank statements",
      "Ideal for self-employed borrowers",
      "Consideration of non-traditional income sources",
      "Available for purchase or refinance",
    ],
    idealFor: [
      "Self-employed individuals and small business owners",
      "Freelancers and gig economy workers",
      "Borrowers with complex or variable income",
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "We start with a conversation to understand your goals and financial picture.",
      },
      {
        step: 2,
        title: "Application & Documentation",
        description:
          "Complete the online application and provide necessary financial documents.",
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description:
          "Our team reviews your file to issue a final loan approval.",
      },
      {
        step: 4,
        title: "Closing",
        description:
          "Sign the final documents and get instant access to your funds.",
      },
    ],
    testimonials: [
      {
        name: "Alex & Jamie R.",
        text: "Billy made the process of getting our Bank Statement Loan incredibly simple. His communication was top-notch, and we closed faster than we ever thought possible. Highly recommend!",
      },
      {
        name: "Samantha P.",
        text: "As a self-employed individual, I thought getting a mortgage would be a nightmare. Billy guided me through the Bank Statement Loan options and found the perfect fit. I couldn't be happier.",
      },
    ],
    faqs: [
      {
        question: "Who is eligible for a Bank Statement Loans?",
        answer:
          "Self-employed borrowers, freelancers, and business owners who can demonstrate consistent cash flow through bank statements.",
      },
      {
        question: "What documents do I need?",
        answer:
          "You'll need 12-24 months of personal or business bank statements, identification, and possibly a profit and loss statement.",
      },
    ],
    ctaText: "Get Your Personalized Rate",
    ctaLink: "/contact-us",
  },
  {
    id: "first-time",
    title: "First-Time Home Buyer",
    subtitle:
      "Specialized programs and guidance for first-time homebuyers. Low down payment options, credit assistance, and step-by-step support through your first home purchase.",
    description:
      "A First-Time Home Buyer loan is a mortgage solution designed for a specific financial situation. Specialized programs and guidance help new homebuyers with low down payment options, credit assistance, and step-by-step support.",
    longDescription:
      "A First-Time Home Buyer loan is a mortgage solution designed for a specific financial situation. Specialized programs and guidance help new homebuyers with low down payment options, credit assistance, and step-by-step support through the purchase of their first home.",
    icon: "Users",
    benefits: [
      "First-Time Buyer loans typically have GREAT INTEREST RATES.",
      "Less than perfect credit: A FICO score as low as 580 may be accepted for a 3.5% down payment.",
      "Low down payment: Borrowers with a credit score of 580+ can qualify for as little as 3.5% down.",
      "Ask about our Down Payment Assistance programs.",
      "Closing costs can be factored into the Contract as Seller Concession.",
    ],
    features: [
      "Low down payment options available",
      "Access to down payment assistance programs",
      "Expert guidance from application to closing",
      "Step-by-step support throughout the process",
    ],
    idealFor: [
      "Individuals and families buying their first home",
      "Those who need help with down payments",
      "Borrowers new to the mortgage process",
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "We start with a conversation to understand your goals and financial picture.",
      },
      {
        step: 2,
        title: "Application & Documentation",
        description:
          "Complete the online application and provide necessary financial documents.",
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description:
          "Our team reviews your file to issue a final loan approval.",
      },
      {
        step: 4,
        title: "Closing",
        description:
          "Sign the final documents and get instant access to your funds.",
      },
    ],
    testimonials: [
      {
        name: "Alex & Jamie R.",
        text: "Billy made the process of getting our First-Time Home Buyer loan incredibly simple. His communication was top-notch, and we closed faster than we ever thought possible. Highly recommend!",
      },
      {
        name: "Samantha P.",
        text: "As a self-employed individual, I thought getting a mortgage would be a nightmare. Billy guided me through the First-Time Home Buyer options and found the perfect fit. I couldn't be happier.",
      },
    ],
    faqs: [
      {
        question: "Who is eligible for a First-Time Home Buyer?",
        answer:
          "First-time homebuyers who haven't owned a home in the past three years typically qualify for these programs.",
      },
      {
        question: "What documents do I need?",
        answer:
          "You'll need proof of income, bank statements, identification, and information about your employment history.",
      },
    ],
    ctaText: "Get Your Personalized Rate",
    ctaLink: "/contact-us",
  },
  {
    id: "debt-consolidation",
    title: "Debt Consolidation",
    subtitle:
      "Use home equity to consolidate high-interest credit cards and debts into one lower monthly payment. Cash-out refinancing available for financial simplification.",
    description:
      "Debt consolidation is a financial strategy that allows you to combine multiple high-interest debts into a single, more manageable payment with potentially lower interest rates.",
    longDescription:
      "Debt consolidation is a financial strategy that allows you to combine multiple high-interest debts into a single, more manageable payment with potentially lower interest rates. By using your home's equity through either a Home Equity Line of Credit (HELOC) or Cash-Out Refinance, you can pay off credit cards, personal loans, and other debts, often reducing your total monthly payments and saving money on interest over time.",
    icon: "CreditCard",
    benefits: [
      "Lower monthly payments by consolidating high-interest debt",
      "Potential tax benefits since mortgage interest may be deductible",
      "Fixed payment schedule helps with budgeting and financial planning",
      "Access to larger amounts of money at lower interest rates",
      "Simplified finances with one payment instead of multiple bills",
    ],
    features: [
      "Consolidate high-interest debts",
      "Lower your overall monthly payment",
      "Simplify your finances with one payment",
      "Potentially tax-deductible interest (consult a tax advisor)",
    ],
    idealFor: [
      "Borrowers with high-interest credit card debt",
      "Those seeking to simplify their finances",
      "Homeowners with sufficient equity",
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "We start with a conversation to understand your goals and financial picture.",
      },
      {
        step: 2,
        title: "Application & Documentation",
        description:
          "Complete the online application and provide necessary financial documents.",
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description:
          "Our team reviews your file to issue a final loan approval.",
      },
      {
        step: 4,
        title: "Closing",
        description:
          "Sign the final documents and get instant access to your funds.",
      },
    ],
    testimonials: [
      {
        name: "Alex & Jamie R.",
        text: "Billy made the process of getting our Debt Consolidation incredibly simple. His communication was top-notch, and we closed faster than we ever thought possible. Highly recommend!",
      },
      {
        name: "Samantha P.",
        text: "As a self-employed individual, I thought getting a mortgage would be a nightmare. Billy guided me through the Debt Consolidation options and found the perfect fit. I couldn't be happier.",
      },
    ],
    faqs: [
      {
        question: "Who is eligible for a Debt Consolidation?",
        answer:
          "Homeowners with sufficient equity and good credit typically qualify for debt consolidation loans.",
      },
      {
        question: "What documents do I need?",
        answer:
          "You'll need proof of income, bank statements, tax returns, and information about your debts to consolidate.",
      },
    ],
    ctaText: "Get Your Personalized Rate",
    ctaLink: "/contact-us",
  },
  {
    id: "fixed-rate",
    title: "Fixed-Rate Loans",
    subtitle:
      "Lock in Rates and predictable payments for long-term financial stability. Ideal for homeowners who want peace of mind and budget-friendly planning.",
    description:
      "Fixed-Rate Loans are mortgage solutions designed for long-term financial stability. They lock in Rates and predictable payments, making them ideal for homeowners who want peace of mind and budget-friendly planning.",
    longDescription:
      "Fixed-Rate Loans are mortgage solutions designed for long-term financial stability. They lock in Rates and predictable payments, making them ideal for homeowners who want peace of mind and budget-friendly planning. With consistent monthly payments throughout the loan term, fixed-rate loans provide a clear path forward with terms and conditions tailored to your needs.",
    icon: "Lock",
    benefits: [
      "Predictable monthly payments that never change throughout the loan term",
      "Protection against rising interest rates in the market",
      "Easier budgeting and financial planning with consistent payments",
      "Available in 15-year and 30-year terms to fit your financial goals",
      "Competitive interest rates for qualified borrowers",
    ],
    features: [
      "Fixed interest rate for the life of the loan",
      "Predictable monthly payments",
      "Available in various terms (10, 15, 20, 30 years)",
      "Ideal for long-term financial planning",
    ],
    idealFor: [
      "Homeowners who prefer payment stability",
      "Those planning to stay in their home long-term",
      "Borrowers who want to lock in a low rate",
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "We start with a conversation to understand your goals and financial picture.",
      },
      {
        step: 2,
        title: "Application & Documentation",
        description:
          "Complete the online application and provide necessary financial documents.",
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description:
          "Our team reviews your file to issue a final loan approval.",
      },
      {
        step: 4,
        title: "Closing",
        description:
          "Sign the final documents and get instant access to your funds.",
      },
    ],
    testimonials: [
      {
        name: "Alex & Jamie R.",
        text: "Billy made the process of getting our Fixed-Rate Loan incredibly simple. His communication was top-notch, and we closed faster than we ever thought possible. Highly recommend!",
      },
      {
        name: "Samantha P.",
        text: "As a self-employed individual, I thought getting a mortgage would be a nightmare. Billy guided me through the Fixed-Rate Loan options and found the perfect fit. I couldn't be happier.",
      },
    ],
    faqs: [
      {
        question: "Who is eligible for a Fixed-Rate Loans?",
        answer:
          "Most borrowers with good credit and stable income qualify for fixed-rate loans. Terms vary based on the lender and your financial profile.",
      },
      {
        question: "What documents do I need?",
        answer:
          "You'll need proof of income, bank statements, tax returns, and identification.",
      },
    ],
    ctaText: "Get Your Personalized Rate",
    ctaLink: "/contact-us",
  },
  {
    id: "arm",
    title: "Adjustable-Rate (ARM) Loans",
    subtitle:
      "Start with lower initial rates and payments, perfect for short-term homeowners or those expecting income growth. Flexible mortgage solution with rate adjustment periods.",
    description:
      "Adjustable-Rate (ARM) Loans are mortgage solutions designed for borrowers seeking lower initial payments. They start with lower initial rates and payments, making them perfect for short-term homeowners or those expecting income growth.",
    longDescription:
      "Adjustable-Rate (ARM) Loans are mortgage solutions designed for borrowers seeking lower initial payments. They start with lower initial rates and payments, making them perfect for short-term homeowners or those expecting income growth. This flexible mortgage solution features rate adjustment periods and provides a clear path forward with terms and conditions tailored to your needs.",
    icon: "TrendingUp",
    benefits: [
      "Lower initial interest rates compared to fixed-rate mortgages",
      "Reduced monthly payments during the initial fixed period",
      "Ideal for borrowers planning to sell or refinance before rate adjustments",
      "Potential to benefit from falling interest rates over time",
      "More purchasing power with lower initial payments",
    ],
    features: [
      "Lower initial interest rate",
      "Lower initial monthly payments",
      "Rate adjusts periodically after the initial fixed period",
      "Can be a good fit for short-term ownership",
    ],
    idealFor: [
      "Homeowners who plan to move within 3-7 years",
      "Borrowers expecting significant income growth",
      "Those who want lower payments in the near term",
    ],
    steps: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "We start with a conversation to understand your goals and financial picture.",
      },
      {
        step: 2,
        title: "Application & Documentation",
        description:
          "Complete the online application and provide necessary financial documents.",
      },
      {
        step: 3,
        title: "Underwriting & Approval",
        description:
          "Our team reviews your file to issue a final loan approval.",
      },
      {
        step: 4,
        title: "Closing",
        description:
          "Sign the final documents and get instant access to your funds.",
      },
    ],
    testimonials: [
      {
        name: "Alex & Jamie R.",
        text: "Billy made the process of getting our Adjustable-Rate Loan incredibly simple. His communication was top-notch, and we closed faster than we ever thought possible. Highly recommend!",
      },
      {
        name: "Samantha P.",
        text: "As a self-employed individual, I thought getting a mortgage would be a nightmare. Billy guided me through the Adjustable-Rate Loan options and found the perfect fit. I couldn't be happier.",
      },
    ],
    faqs: [
      {
        question: "Who is eligible for a Adjustable-Rate (ARM) Loans?",
        answer:
          "Borrowers who plan to sell or refinance within the initial fixed period typically benefit most from ARM loans.",
      },
      {
        question: "What documents do I need?",
        answer:
          "You'll need proof of income, bank statements, tax returns, and identification.",
      },
    ],
    ctaText: "Get Your Personalized Rate",
    ctaLink: "/contact-us",
  },
];
