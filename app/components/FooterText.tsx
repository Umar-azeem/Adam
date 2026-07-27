import Link from "next/link";
import Image from "next/image";

const FooterText = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1c1c] text-white px-4 sm:px-6 py-6 text-[14px] sm:text-[16px] leading-6">
      <div>
        <hr className="border-gray-700 my-6 sm:my-10" />
        <p>
          Billy Watkins | NMLS ID: #384700 | |Billy Watkins Mortgage is an Equal
          Housing Opportunity lender. We are pledged to the letter and spirit of
          U.S. policy for the achievement of equal housing opportunity
          throughout the Nation. NMLS #384700 — Licensed in AL, CA, FL, GA, MO,
          NC, OR, PA, SC, TN, TX, VA.
        </p>

        <p className="mt-6">
          By choosing to be a boutique broker of loan products, our firm is in
          the best position to deliver optimal choice, aggressive rates, and
          personal service to every client.
        </p>

        <p className="mt-6">
          Copyright © {currentYear} | Your Local Mortgage Broker |
        </p>
      </div>

      <hr className="border-gray-700 my-6 sm:my-10" />
      <div className="flex justify-end mt-4 sm:mt-0">
        <Image
          src="/img/logo.png"
          alt="Equal Housing Opportunity"
          width={100}
          height={100}
          className="w-18 sm:w-32 h-auto"
          unoptimized
        />
      </div>
    </footer>
  );
};

export default FooterText;
