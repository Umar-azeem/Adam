"use client";

import {
  Mail,
  Phone,
  ShieldCheck,
  Award,
  Calendar,
  PhoneCall,
  Handshake,
} from "lucide-react";
import Link from "next/link";

export default function Community() {
  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-24 lg:py-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <p className="text-[#04205D] uppercase tracking-[3px] sm:tracking-[6px] font-bold text-md sm:text-xl mb-6 sm:mb-8">
            Our Community
          </p>

          <h2 className="text-[25px] sm:text-[40px] lg:text-[35px] leading-[1.2] font-bold text-[#1f1f1f] mb-4 sm:mb-10">
            Making An Impact In Our Local Communities.
          </h2>

          <p className="text-[15px] text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 sm:mb-14">
            i&apos;am proud of more than 15 years of serving our customers and
            excited about the future as we continue to evolve to meet their
            needs.
          </p>

          <Link href="/contact-us">
            {" "}
            <button className="bg-[#04205D] w-full sm:w-auto flex items-center justify-center gap-3 text-white px-6 py-4 rounded-xl font-bold transition transform duration-300 hover:-translate-y-1">
              Contact me
            </button>
          </Link>

          {/* Core Stats */}
          <div className="mt-16 sm:mt-24 flex flex-row items-center justify-center lg:justify-start gap-12 text-xl sm:text-2xl">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <h3 className="font-bold text-2xl text-[#111827] whitespace-nowrap">
                20+ Years
              </h3>
              <p className="text-gray-600 leading-tight whitespace-nowrap text-sm font-light sm:text-base">
                Of Serving Our{" "}
                <span className="block md:inline">Customers</span>
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2">
              <h3 className="font-bold text-2xl text-[#111827] whitespace-nowrap">
                4,000+
              </h3>
              <p className="text-gray-600 text-sm font-light leading-tight whitespace-nowrap sm:text-base">
                Individual Loans
              </p>
            </div>
          </div>
        </div>

        <>
          <div className="relative flex justify-center mt-4 lg:mt-0">
            <img
              src="/img/bk.png"
              alt="Community"
              className="w-full max-w-[500px] h-[250px] sm:h-[280px] lg:h-[300px] object-cover rounded-xl lg:rounded-none"
            />

            <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-[18px] sm:rounded-[22px] shadow-xl px-4 py-4 flex items-center gap-4 sm:gap-8 w-[90%] sm:w-[420px]">
              <div className="text-2xl sm:text-3xl">
                <Handshake className=" text-[#ff9c78] h-8 w-8" />
              </div>

              <div>
                <p className="text-[15px] sm:text-[20px] italic text-black leading-relaxed">
                  Prefer To Meet One on One?
                  <br />
                  Schedule A Consultation Today!
                </p>
              </div>
            </div>
          </div>
        </>
      </div>
    </section>
  );
}
