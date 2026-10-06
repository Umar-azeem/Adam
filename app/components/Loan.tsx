"use client";
import Image from "next/image";
import Link from "next/link";

interface SocialIcon {
  id: string;
  src: string;
  alt: string;
  url: string;
}

const Loan: React.FC = () => {
  const socialIcons: SocialIcon[] = [
    {
      id: "facebook",
      src: "https://api.iconify.design/flowbite:facebook-solid.svg?color=%23000000",
      alt: "Facebook",
      url: "https://www.facebook.com/p/Adam-Turrubiartes-Home-Loans-NMLS-234339-100086573558742/",
    },
    {
      id: "instagram",
      src: "https://api.iconify.design/famicons:logo-instagram.svg?color=%23000000",
      alt: "Instagram",
      url: "https://www.instagram.com/adamknowslending/",
    },
    {
      id: "linkedin",
      src: "https://api.iconify.design/uim:linkedin-alt.svg?color=%23000000",
      alt: "LinkedIn",
      url: "https://www.linkedin.com/in/adam-turrbo",
    },
    // {
    //   id: "google",
    //   src: "https://api.iconify.design/ion:logo-google.svg?color=%23000000",
    //   alt: "Google",
    //   url: "https://share.google/58EeohLOQ10kKQ6Y2",
    // },
  ];

  return (
    <section className="bg-[#f5f5f5] py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-full mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <p className="text-[#04205D] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold mb-4 text-sm sm:text-base">
            Let{`'`}s Get Started!
          </p>

          <h1 className="text-3xl sm:text-4xl font-semibold leading-tight text-gray-900">
            Ready To Apply For Your Home Loan?
          </h1>

          <p className="mt-6 sm:mt-8 text-gray-800 text-sm sm:text-md leading-relaxed max-w-xl mx-auto lg:mx-0">
            Your path to ownership is just one click away! Schedule a
            complimentary consultation now so we can take a look at your
            specific needs and find the perfect home loan for you.
          </p>

          <Link href="https://app.mloflo.com/sl/:AdamTurrubiartes" target="_blank">
            {" "}
            <button
              className="mt-8 sm:mt-10 inline-flex items-center gap-3 bg-[#04205D] hover:bg-[#04205D]/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition mx-auto lg:mx-0"
              type="button"
            >
              Apply Now
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center lg:items-end justify-center mt-16 sm:mt-20 lg:mt-0">
          <div className="relative w-full max-w-[350px] lg:max-w-[480px]">
            {/* Speech-bubble dots trailing from the card toward the photo */}
            <div className="absolute z-20 flex md:hidden flex-col items-center gap-1.5 top-[34%] right-20 sm:top-[40%] sm:right-10">
              <div className="h-4 w-4 bg-white rounded-full" />
              <div className="h-3 w-3 bg-white rounded-full" />
              <div className="h-2 w-2 bg-white rounded-full" />
              <div className="h-1.5 w-1.5 bg-white rounded-full" />
            </div>

            {/* Background block + photo, fixed aspect ratio so sizing never drifts */}
            <div className="relative aspect-[4/6] md:aspect-[4/3] w-full bg-[#04205D] rounded-[20px] overflow-hidden">
              <Image
                src="/img/dp.png"
                alt="Adam Turrubiartes"
                fill
                className="object-contain object-bottom"
                priority
                unoptimized
              />
            </div>

            <div className="absolute  flex flex-col md:hidden z-10 top-6 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 bg-white rounded-[24px] sm:rounded-[30px] shadow-2xl p-5 sm:p-6 w-[70%] sm:w-[240px]">
              <h3 className="text-lg sm:text-xl font-bold text-black">
                Adam Turrubiartes
              </h3>
              <p className="text-gray-800 mt-2 text-xs">
                 Loan Officer
              </p>
              <p className="text-gray-800 text-xs mt-2">NMLS ID: 234339</p>
            </div>
          </div>

          <div className="w-full lg:max-w-[480px] flex justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            {socialIcons.map((icon) => (
              <a
                key={icon.id}
                href={icon.url}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-[#04205D] transition group"
                aria-label={icon.alt}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={20}
                  height={20}
                  className="w-5 h-5 group-hover:brightness-0 group-hover:invert transition-all"
                  unoptimized
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loan;