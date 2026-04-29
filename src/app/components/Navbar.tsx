"use client";

import { personalData } from "@/../utils/Data/PersonalData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Education", to: "education" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderLink = (
    item: { label: string; to: string },
    isMobile = false,
  ) => {
    const isHomePage = pathname === "/";
    const baseClasses = isMobile
      ? "block cursor-pointer border-b border-white/5 py-3 text-lg font-semibold text-slate-300 transition-all duration-300 hover:text-red-200"
      : "group relative cursor-pointer px-2 py-1 text-sm font-medium text-slate-300 transition-all duration-300 hover:text-red-100 lg:text-base";

    if (isHomePage) {
      return (
        <ScrollLink
          key={item.to}
          to={item.to}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          activeClass="text-red-300 !font-bold"
          className={baseClasses}
          onClick={isMobile ? () => setIsMenuOpen(false) : undefined}
        >
          {item.label}
          {!isMobile && (
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-red-400 to-red-700 transition-all duration-300 group-hover:w-full [.text-red-300_&]:w-full" />
          )}
        </ScrollLink>
      );
    }

    return (
      <Link
        key={item.to}
        href={`/#${item.to}`}
        className={baseClasses}
        onClick={() => isMobile && setIsMenuOpen(false)}
      >
        {item.label}
        {!isMobile && (
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-red-400 to-red-700 transition-all duration-300 group-hover:w-full" />
        )}
      </Link>
    );
  };

  return (
    <nav
      className={`sticky top-0 z-[9999] transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/10 bg-[#080304]/80 py-2 backdrop-blur-2xl"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
        >
          <Image
            src="/logo-mark.svg"
            alt={personalData.name}
            width={isScrolled ? 42 : 48}
            height={isScrolled ? 42 : 48}
            className="transition-all duration-500"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-200">
              {personalData.name}
            </span>
          </div>
        </Link>

        <div className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => renderLink(item))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg border border-white/10 p-2 text-white transition-colors hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-white/10 bg-[#080304]/95 backdrop-blur-2xl md:hidden">
          <div className="container mx-auto flex flex-col space-y-2 px-6 py-8">
            {navItems.map((item) => renderLink(item, true))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
