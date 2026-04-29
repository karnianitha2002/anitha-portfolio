"use client";

import { personalData } from "@/../utils/Data/PersonalData";
import Image from "next/image";
import Link from "next/link";
import { FileText, Mail, MapPin, Phone } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const footerLinks = [
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Education", to: "education" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

const Footer = () => (
  <footer className="border-t border-white/5 bg-[#080304] text-gray-200">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-24">
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex w-fit items-center gap-3">
            <Image
              src="/logo-mark.svg"
              alt={`${personalData.name} logo`}
              width={52}
              height={52}
            />
            <span className="text-sm font-bold uppercase tracking-[0.24em] text-slate-200">
              {personalData.name}
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-slate-400">
            {personalData.footerBio}
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-500">
            Navigation
          </h3>
          <ul className="space-y-4">
            {footerLinks.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  smooth
                  duration={500}
                  className="cursor-pointer font-medium text-slate-400 transition-all hover:text-red-200"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Reach Out
          </h3>
          <div className="flex flex-col gap-3 text-sm text-slate-300">
            <a
              href={`mailto:${personalData.email}`}
              className="flex items-center gap-3 transition-all hover:text-red-200"
            >
              <Mail className="h-4 w-4 text-red-300" />
              {personalData.email}
            </a>
            <a
              href={`tel:${personalData.phone}`}
              className="flex items-center gap-3 transition-all hover:text-red-200"
            >
              <Phone className="h-4 w-4 text-red-300" />
              {personalData.phone}
            </a>
            <p className="flex items-center gap-3 text-slate-400">
              <MapPin className="h-4 w-4 text-red-300" />
              {personalData.address}
            </p>
            <a
              href={personalData.resume}
              target="_blank"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-slate-200 transition-all hover:border-red-300/40 hover:bg-red-300/10 hover:text-white"
            >
              <FileText className="h-4 w-4 text-red-300" />
              View Resume
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-slate-500 md:flex-row">
        <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
        <p>Built around data, maps, and decision-ready storytelling.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
