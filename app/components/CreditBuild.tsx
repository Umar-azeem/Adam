import { ArrowRight } from "lucide-react";
import Link from "next/link";

const items = [
  {
    tag: "Veteran",
    title: "Sellers, Don't Fall For This",
  },
  {
    tag: "Building Wealth Around Real Estate",
    title: "Investing In Out Of State Real Estate",
  },
  {
    tag: "Rent vs. Buy",
    title: "Where To Find Down Payment Assistance",
  },
];

const CreditBuild = () => {
  return (
    <div className="w-full bg-gray-100 py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 rounded-2xl">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="relative w-full lg:w-[60%] rounded-3xl ">
          <img
            src="/img/billy.png"
            alt="speaker"
            className="w-full h-[280px] sm:h-[400px] lg:h-150 object-cover rounded-3xl"
          />

          <div className="absolute hover:border-1 border-[#04205D] -bottom-7 z-50 md:bottom-28 left-4 md:left-24 bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-[85%] sm:w-[70%]">
            <div className="text-xs font-bold text-teal-600 bg-green-100 hover:text-white hover:bg-green-300  tracking-widest mb-2 inline-block w-auto rounded-md px-3 py-2">
              CREDIT BUILDING
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">
              Avoid This Credit Myth
            </h3>
          </div>
        </div>

        <div className="w-full lg:w-[40%] flex flex-col justify-between">
          <div>
            <div className="hidden md:flex flex-col">
              <p className="text-[#04305D] font-bold tracking-[3px] sm:tracking-[4px] mb-4 text-sm sm:text-base">
                EDUCATION
              </p>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug text-gray-900 mb-8 sm:mb-10">
                Learn More About Your Mortgage
              </h1>
            </div>
            <div className="space-y-4 sm:space-y-5 justify-center items-center flex flex-col">
              {items.map((item, i) => {
                const tagColors = [
                  "bg-green-100 text-green-600 hover:bg-green-400 hover:text-white ",
                  "bg-blue-100 text-blue-600 hover:bg-blue-400 hover:text-white",
                  "bg-orange-100 text-orange-600 hover:bg-orange-400 hover:text-white",
                ];

                return (
                  <div
                    key={i}
                    className="bg-white hover:border-1  border-[#04205D] rounded-2xl p-4 sm:p-6  w-[85%] sm:w-[100%] shadow-sm hover:shadow-md transition"
                  >
                    <span
                      className={`text-xs uppercase px-3 py-1 rounded-full inline-block ${tagColors[i]}`}
                    >
                      {item.tag}
                    </span>

                    <p className="mt-3 font-medium  text-gray-900 text-md sm:text-base">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-between w-full  md:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">
            <Link href="/contact-us"></Link>{" "}
            <a href="/contact-us">
              {" "}
              <button className="bg-[#04205d] text-white px-6 py-4 w-full rounded-xl flex items-center justify-center gap-2 font-semibold">
                <img
                  src="https://cdn.prod.website-files.com/6463653eea7395f6535ff53c/646383f8ff0a8d874058f83e_ic-calendar-white.svg"
                  alt=""
                  className="w-4"
                />
                Contact me
              </button>
            </a>
            <a href="/about">
              {" "}
              <button className="border border-gray-900 px-6 py-4 rounded-xl w-full flex items-center justify-center gap-2 font-semibold text-black">
                About Me <ArrowRight size={18} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditBuild;
