import { Award, Link, Mail, Phone, ShieldCheck } from "lucide-react";
import React from "react";

function Consider() {
  return (
    <>
      <section className="bg-[#f5f5f5] py-16 sm:py-24 lg:py-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="text-[#04205D] uppercase tracking-[3px] sm:tracking-[6px] font-bold text-md sm:text-xl mb-6 sm:mb-8">
              ME & Our Clients
            </p>

            <h2 className="text-[25px] sm:text-[40px] lg:text-[35px] leading-[1.2] font-bold text-[#1f1f1f] mb-4 sm:mb-10">
              We Consider Our Clients to Be Our Most Valuable Asset.
            </h2>

            <p className="text-[15px] text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10 sm:mb-14">
              The pillars in our brand mark represent our three core commitments
              to our clients.
            </p>

            <Link href="/contact-us">
              {" "}
              <button className="bg-[#04205D] w-full sm:w-auto flex items-center justify-center gap-3 text-white px-6 py-4 rounded-xl font-bold transition transform duration-300 hover:-translate-y-1">
                Contact me
              </button>
            </Link>
          </div>

          {/* <div className="bg-[#004D22] text-white p-6 sm:p-10 rounded-2xl shadow-xl border border-[#005C29] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10" />

            <div className="relative z-10">
              <p className="text-green-300 font-semibold tracking-wider text-xs sm:text-sm uppercase mb-2">
                Loan Officer Profile
              </p>
              <h3 className="text-3xl sm:text-4xl font-bold mb-1 tracking-tight">
                About Billy Watkins
              </h3>
              <p className="text-green-200 text-xs sm:text-sm font-medium mb-6">
                NMLS #384700
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-green-300 mb-3 border-b border-white/10 pb-2">
                Guidance, clarity, and service you can trust
              </h4>

              <div className="space-y-4 text-sm sm:text-base text-gray-100 leading-relaxed font-light">
                <p>
                  With two decades in finance, I focus on clarity
                  first—understanding your entire financial picture before
                  recommending a loan. Expect proactive communication, organized
                  milestones, and real timelines.
                </p>
                <p>
                  My background spans residential lending, income tax planning,
                  audit, data analysis, and fraud &amp; forensic consulting.
                  That blend of disciplines helps anticipate challenges before
                  they impact your file.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 border border-white/5">
                  <ShieldCheck className="text-green-300 w-5 h-5 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">
                    Dedicated Mortgage Guidance
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 border border-white/5">
                  <Award className="text-green-300 w-5 h-5 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">
                    {" "}
                    US Navy Veteran
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 grid gap-3 sm:grid-cols-2 text-sm">
                <a
                  href="mailto:Billy@billywatkinsmortgage.com"
                  className="flex items-center gap-3 hover:text-green-200 transition break-all"
                >
                  <Mail className="w-4 h-4 text-green-300 shrink-0" />
                  <span>Billy@billywatkinsmortgage.com</span>
                </a>
                <a
                  href="tel:760-201-3356"
                  className="flex items-center gap-3 hover:text-green-200 transition"
                >
                  <Phone className="w-4 h-4 text-green-300 shrink-0" />
                  <span>760-201-3356</span>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Consider;
