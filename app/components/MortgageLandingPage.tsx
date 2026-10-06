"use client";
import Link from "next/link";
import { useState } from "react";

const Icon = ({
  src,
  size = 20,
  className = "",
}: {
  src: string;
  size?: number;
  className?: string;
}) => <img src={src} width={size} height={size} className={className} alt="" />;

const MortgageLandingPage = () => {
  const icons = {
    phone: "https://img.icons8.com/ios/50/ffffff/phone.png",
    chevronDown: "https://img.icons8.com/ios/50/ffffff/expand-arrow.png",
    calendar: "https://img.icons8.com/ios/50/0a5c3a/calendar.png",
    arrowRight: "https://img.icons8.com/ios/50/ffffff/forward--v1.png",
    facebook: "https://img.icons8.com/ios-filled/50/374151/facebook-new.png",
    instagram: "https://img.icons8.com/ios/50/374151/instagram-new.png",
    linkedin: "https://img.icons8.com/ios-filled/50/374151/linkedin.png",
    youtube: "https://img.icons8.com/ios-filled/50/374151/youtube-play.png",
    google: "https://img.icons8.com/ios-filled/50/374151/google-logo.png",
  };

  return (
    <div className="">
      <div className="rounded-3xl bg-[#04205D] text-white font-sans overflow-hidden relative ">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block">
          <svg width="600" height="700" viewBox="0 0 600 700" fill="none">
            <path
              d="M100 650V100L300 400L500 100V650"
              stroke="white"
              strokeWidth="80"
              fill="none"
            />
          </svg>
        </div>

        <main className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-4 sm:px-6 lg:px-8 pt-18 pb-20 gap-10">
          <div className="flex-1  max-w-2xl w-full text-center lg:text-left">
            <div className="hidden md:flex flex-col ">
              <p className=" text-md font-bold tracking-[0.2em] mb-6 uppercase">
                Hi, I{`'`}m Adam Turrubiartes
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Your Local
                <br />
                Mortgage Loan Officer
              </h1>
            </div>
            <p className="text-sm sm:text-base text-gray-200 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Whether you{`'`}re purchasing your first home, refinancing, or
              investing in real estate, I{`'`}ll help you secure the right
              financing strategy with confidence. With 20+ years of experience,
              I specialize in Conventional, FHA, VA, USDA, Non-QM, DSCR & ITIN
              loans.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
              <Link
                href="https://app.mloflo.com/sl/:AdamTurrubiartes"
                target="_blank"
              >
                {" "}
                <button className="w-full sm:w-auto flex items-center border-2 border-white/30 justify-center gap-3  px-6 py-4 rounded-xl font-bold transition transform duration-300 hover:-translate-y-1">
                  Start Application{" "}
                  <img
                    src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b0d_ic-arrow-forward-white.svg"
                    alt="arrow"
                  />
                </button>
              </Link>
              <a href="/contact-us">
                <button className="w-full sm:w-auto flex items-center bg-white text-black justify-center gap-3  px-6 py-4 rounded-xl font-semibold transition transform duration-300 hover:-translate-y-1">
                  Contact me
                </button>
              </a>
            </div>
          </div>

          <div className="flex-1 relative flex justify-center lg:justify-end items-end w-full">
            <div className="  relative w-full max-w-[450px]">
              <div className="flex flex-col text-center p-1 md:hidden">
                <p className="text-md font-bold tracking-[0.2em] mb-2 uppercase">
                  Hi, I{`'`}m Adam Turrubiartes{" "}
                </p>

                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-24">
                  Mortgage Solutions
                  <br />
                  Built Around Your Goals
                </h1>
              </div>
              <div className="absolute md:hidden   top-32 left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0 lg:-left-4 xl:-left-16 z-20 md:flex items-center gap-2"></div>
              <img
                src="/img/dp.png"
                alt="Adam Turrubiartes"
                className="w-full h-[400px] sm:h-[480px] lg:h-[550px] object-cover object-top rounded-2xl"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />

              <div className="absolute -bottom-6 sm:bottom-1 right-0 md:right-22 left-0 sm:left-auto mx-auto sm:mx-0 border border-gray-500 bg-gray-300 text-gray-900 p-5 sm:p-6 rounded-2xl shadow-2xl w-[88%] sm:w-64">
                <h3 className="text-xl font-bold mb-2">Adam Turrubiartes</h3>
                <p className="text-gray-600 text-sm mb-1">
                  Loan Officer
                </p>
                <p className="text-gray-500 text-xs mb-1">NMLS ID: 234339</p>
                <div className="flex items-center gap-3 w-full">
                  <a
                    href="https://www.facebook.com/p/Adam-Turrubiartes-Home-Loans-NMLS-234339-100086573558742/"
                    target="_blank"
                    className="w-9 h-8 md:w-10 md:h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <Icon
                      src={icons.facebook}
                      size={18}
                      className="text-black"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/adamknowslending/"
                    target="_blank"
                    className="w-9 h-8 md:w-10 md:h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <Icon src={icons.instagram} size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/adam-turrbo"
                    target="_blank"
                    className="w-9 h-8 md:w-10 md:h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <Icon src={icons.linkedin} size={18} />
                  </a>
                  {/* <a
                    href="https://share.google/58EeohLOQ10kKQ6Y2"
                    className=" w-9 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    <Icon src={icons.google} size={18} />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MortgageLandingPage;