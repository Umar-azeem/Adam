"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Home,
  Info,
  BookOpen,
  Phone,
  Home as HomeIcon,
  Shield,
  Building2,
  TrendingUp,
  RefreshCw,
  Landmark,
  BarChart3,
  FileText as FileTextIcon,
  Key,
  CreditCard,
  Lock,
  Activity,
  PhoneCall,
  SquareArrowOutUpRight,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const loanPrograms = [
  {
    title: "FHA Loans",
    href: "/loan-programs?program=fha",
    description: "Government-backed loans with low down payment requirements.",
    icon: HomeIcon,
  },
  // {
  //   title: "VA Home Loans",
  //   href: "/loan-programs?program=va",
  //   description:
  //     "Exclusive benefits for veterans and active-duty service members.",
  //   icon: Shield,
  // },
  {
    title: "Conventional Loans",
    href: "/loan-programs?program=conventional",
    description: "Traditional mortgage options with Rates.",
    icon: Building2,
  },
  {
    title: "Jumbo Loans",
    href: "/loan-programs?program=jumbo",
    description: "Financing solutions for high-value properties.",
    icon: TrendingUp,
  },
  {
    title: "Refinance",
    href: "/loan-programs?program=refinance",
    description: "Lower your rate or tap into your home equity.",
    icon: RefreshCw,
  },
  {
    title: "HELOC",
    href: "/loan-programs?program=heloc",
    description: "Flexible home equity line of credit for ongoing needs.",
    icon: Landmark,
  },
  {
    title: "DSCR Investor Loans",
    href: "/loan-programs?program=dscr",
    description: "Qualify based on rental income, not personal income.",
    icon: BarChart3,
  },
  {
    title: "Bank Statement Loans",
    href: "/loan-programs?program=bank-statement",
    description: "Perfect for self-employed borrowers using bank statements.",
    icon: FileTextIcon,
  },
  {
    title: "First-Time Home Buyer",
    href: "/loan-programs?program=first-time",
    description: "Tailored programs and guidance for first-time buyers.",
    icon: Key,
  },
  {
    title: "Debt Consolidation",
    href: "/loan-programs?program=debt-consolidation",
    description: "Simplify payments by combining debts into one loan.",
    icon: CreditCard,
  },
  {
    title: "Fixed-Rate Loans",
    href: "/loan-programs?program=fixed-rate",
    description: "Stable monthly payments with a locked-in interest rate.",
    icon: Lock,
  },
  {
    title: "Adjustable-Rate (ARM) Loans",
    href: "/loan-programs?program=arm",
    description: "Start with lower rates that adjust over time.",
    icon: Activity,
  },
];

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/tools", label: "Tools", icon: BookOpen },
  { href: "/contact-us", label: "Contact me", icon: Phone },
];

const mobileLoanLinks = loanPrograms.map((p) => ({
  href: p.href,
  label: p.title,
  icon: p.icon,
}));

function NavigationMenuDemo() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileLoanOpen, setMobileLoanOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="animated-navbar"
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3
        transition-all duration-500 ease-in-out
        ${scrolled ? "bg-[#04205D] shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="default"
              size="icon"
              className="lg:hidden bg-white hover:bg-white my-2 rounded-full text-[#04205D] h-10 w-10"
            >
              <Menu className="h-10 w-10 text-2xl " />
            </Button>
          </SheetTrigger>
          <div className="flex flex-row gap-2 mx-2">
            <Link
              href="https://app.mloflo.com/sl/:BillyWatkins "
              target="_blank"
            >
              {" "}
              <Button
                variant="default"
                size="icon"
                className="lg:hidden bg-white hover:bg-white my-2 rounded-full text-[#04205D] h-10 w-10"
              >
                <SquareArrowOutUpRight className="h-10 w-10 text-2xl " />
              </Button>
            </Link>
            <Button
              variant="default"
              size="icon"
              className="lg:hidden bg-white hover:bg-white my-2 rounded-full text-[#04205D] h-10 w-10"
            >
              <a
                href="https://wa.me/15738815436"
                target="_blank"
                rel="noreferrer"
                className="flex gap-2 justify-center w-full px-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#25D366]"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.859L0 24l6.335-1.51A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.732.889.939-3.63-.235-.374A9.818 9.818 0 1112 21.818z" />
                </svg>
              </a>
            </Button>
          </div>
          <SheetContent
            side="left"
            className="w-[300px] sm:w-[350px] bg-[#04205D] text-white border-white/10 p-0 overflow-y-auto"
          >
            <div className="flex h-20 items-center border-b border-white/10 ">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image
                  src="/img/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="w-28 h-20 object-contain"
                  priority
                />
              </Link>
            </div>
            {/* mobile nav */}
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
                >
                  <link.icon className="h-5 w-5 text-text-white" />
                  {link.label}
                </Link>
              ))}

              <div>
                <button
                  onClick={() => setMobileLoanOpen(!mobileLoanOpen)}
                  className="flex items-center justify-between w-full gap-3 rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
                >
                  <div className="flex items-center gap-3">
                    <HomeIcon className="h-5 w-5 text-white" />
                    Loan Programs
                  </div>
                  <svg
                    className={`h-4 w-4 transition-transform duration-200 ${mobileLoanOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {mobileLoanOpen && (
                  <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-white/20 pl-4">
                    {mobileLoanLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        rel="noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white"
                      >
                        <link.icon className="h-4 w-4 text-white flex-shrink-0" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>
            <div className="lg:hidden flex flex-col w-full items-center gap-3 text-white ">
              <Link
                href="tel:+15738815436"
                className="flex gap-2 justify-center w-full px-4"
              >
                <button className="bg-white flex justify-center gap-4 text-[#04205D] px-6 w-full py-3 rounded-xl font-semibold transition transform duration-300 hover:-translate-y-1">
                  573-881-5436{" "}
                </button>
              </Link>
              <Link href="/" className="w-full px-4">
                <button className="bg-white text-[#04205D] px-6 w-full py-3 rounded-xl font-semibold transition transform duration-300 hover:-translate-y-1">
                  Apply Now
                </button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden lg:flex ">
          <NavigationMenu>
            <NavigationMenuList className="gap-1 ">
              <div className="flex h-20 items-center  ">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/img/logo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="w-36 h-28 object-contain"
                    priority
                  />
                </Link>
              </div>
              <NavigationMenuItem className="text-white text-lg  rounded-xl font-semibold  transform duration-300 transition-all hover:bg-white/10 hover:-translate-y-1 px-6 py-2">
                <Link href="/about"> About</Link>
                <NavigationMenuContent></NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white text-lg font-semibold ">
                  <Link href="">Loan Programs</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[640px] grid-cols-2 gap-1 p-4 lg:w-[780px] lg:grid-cols-3">
                    {loanPrograms.map((program) => (
                      <li key={program.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={program.href}
                            rel="noreferrer"
                            className="flex items-start gap-3 rounded-lg p-3 text-sm transition-colors hover:bg-[#04205D] hover:text-[#04205D]-foreground group"
                          >
                            <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-[#04205D]/10 text-[#04205D] group-hover:bg-[#04205D] group-hover:text-[white] transition-colors">
                              <program.icon className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <div className="font-semibold leading-none  text-[#04205D]">
                                {program.title}
                              </div>
                              <div className="line-clamp-2 text-xs leading-snug text-[#04205D]">
                                {program.description}
                              </div>
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-border p-4"></div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-white text-lg font-semibold rounded-xl transform duration-300 transition-all hover:bg-white/10 hover:-translate-y-1 px-6 py-2">
                <Link href="https://app.mloflo.com/sl/:BillyWatkins">
                  Apply Now
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-white text-lg font-semibold rounded-xl transform duration-300 transition-all hover:bg-white/10 hover:-translate-y-1 px-6 py-2">
                <Link href="/tools">Tools</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-white text-lg font-semibold rounded-xl transform duration-300 transition-all hover:bg-white/10 hover:-translate-y-1 px-6 py-2">
                <Link href="/review">Reviews</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-white text-lg font-semibold rounded-xl transform duration-300 transition-all hover:bg-white/10 hover:-translate-y-1 px-6 py-2">
                <Link href="/contact-us">Contact me</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden lg:flex items-center gap-3 text-white py-4">
          <Link href="tel:+15738815436" className="flex gap-2 justify-center ">
            <PhoneCall />
            <h3>573-881-5436 </h3>
          </Link>
          <Link href="https://app.mloflo.com/sl/:BillyWatkins">
            <button className="bg-white text-[#04205D] px-6 py-3 rounded-xl font-semibold transition transform duration-300 hover:-translate-y-1">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm p-3 rounded-md hover:bg-accent transition-colors">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
export default NavigationMenuDemo;
