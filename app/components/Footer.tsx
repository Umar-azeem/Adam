"use client";

import Link from "next/link";
import Image from "next/image";
import FooterText from "./FooterText";
import { BadgeCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#1c1c1c] text-white rounded-t-3xl px-6 py-10 md:px-10 w-full mx-auto mt-10">
      {/* Top CTA Section */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
          Ready To Apply For Your <br className="hidden sm:block" /> Home Loan?
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Link href="/contact-us">
            <button className="bg-[#04205D] px-6 py-3 rounded-xl transition-transform duration-300 hover:translate-y-1 w-full sm:w-auto">
              Contact me
            </button>
          </Link>
        </div>
      </div>

      <hr className="border-gray-700 my-10" />

      {/* Main Content Columns */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-10">
        {/* Contact Info Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Me</h3>

          <p className="mb-2 flex items-center gap-2">
            <Image
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b87_phone-white.svg"
              alt="Phone"
              width={20}
              height={20}
              className="w-5 h-5 flex-shrink-0"
              unoptimized
            />
            <Link
              href="tel:2067958411"
              className="hover:text-gray-300 transition-colors"
            >
              (573)-881-5436
            </Link>
          </p>

          <p className="mb-2 flex items-center gap-2">
            <Image
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b81_mail-white.svg"
              alt="Email"
              width={20}
              height={20}
              className="w-5 h-5 flex-shrink-0"
              unoptimized
            />
            <Link
              href="mailto:adrian@teamwebbloans.com"
              className="break-all hover:text-gray-300 transition-colors"
            >
              Billy@billywatkinsmortgage.com
            </Link>
          </p>

          <p className="mb-4 flex items-start gap-2">
            <BadgeCheck />
            {/* <Image
              src="https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b96_location-on-white.svg"
              alt="Location"
              width={20}
              height={20}
              className="w-5 h-5 flex-shrink-0 mt-0.5"
              unoptimized
            /> */}
            {/* <Link
              href="https://maps.google.com/?q=128+Union+Street,+Suite+101,+New+Bedford,+MA+02740"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <br /> NMLS #384700
            </Link>
            <Link  href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              www.nmlsconsumeraccess.org
            </Link> */}
            <p className="flex"> NMLS #384700</p>
          </p>

          {/* Social Links Row */}
          <div className="flex gap-3 mb-6">
            {[
              {
                src: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62afd_ri_facebook-fill-white.svg",
                alt: "Facebook",
                href: "https://facebook.com/BillyWatkinsMortgage",
              },
              {
                src: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62c30_linkedin-white.svg",
                alt: "LinkedIn",
                href: "https://linkedin.com/in/BillyWatkinsMortgage",
              },
              {
                src: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62b8f_instagram-white.svg",
                alt: "Instagram",
                href: "https://www.instagram.com/billy.watkins_home.loans/",
              },
              {
                src: "https://cdn.prod.website-files.com/65d509901b89bb3fd2a62af7/65d509901b89bb3fd2a62ca8_mdi_youtube.svg",
                alt: "YouTube",
                href: "https://share.google/58EeohLOQ10kKQ6Y2",
              },
            ].map(({ src, alt, href }) => (
              <Link
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0 hover:bg-gray-500 transition-colors"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  unoptimized
                />
              </Link>
            ))}
            <div className="flex md:hidden flex-col items-center -mt-6">
            <Image
              src="/img/logo.png"
              alt="Adrian Webb Logo"
              width={100}
              height={100}
              className="w-32 h-auto"
              unoptimized
            />
          </div>
          </div>
          
        </div>

        {/* Logo + Scroll-to-top Column */}
        <div className="flex flex-row-reverse md:flex-col items-center md:items-end justify-between md:justify-end gap-6 md:gap-0">
          <button
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full bg-[#04205D] flex items-center justify-center flex-shrink-0 transition-transform hover:-translate-y-1 active:translate-y-0"
            aria-label="Scroll to top"
          >
            <Image
              src="https://api.iconify.design/material-symbols:keyboard-arrow-up.svg?color=%23ffffff"
              alt="Scroll to top"
              width={32}
              height={32}
              className="w-8 h-8"
              unoptimized
            />
          </button>

          <div className="flex flex-col items-center md:mt-20">
            <Image
              src="/img/logo.png"
              alt="Adrian Webb Logo"
              width={100}
              height={100}
              className="w-32 h-auto"
              unoptimized
            />
          </div>
        </div>
      </div>
      <FooterText />
    </div>
  );
}
