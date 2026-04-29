"use client";

import Link from "next/link";
import { personalData } from "@/../utils/Data/PersonalData";
import ContactWithoutCaptcha from "./contact-without-captcha";
import SectionReveal from "../SectionReveal";
import {
  FileText,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

interface ContactLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
  external?: boolean;
}

const ContactInfoCard = ({
  href,
  icon: Icon,
  label,
  value,
  color,
  external = true,
}: ContactLinkProps) => (
  <Link
    href={href}
    target={external ? "_blank" : undefined}
    className="group relative flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 shadow-xl transition-all duration-300 hover:border-white/10 hover:bg-white/[0.06]"
  >
    <div
      className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300"
      style={{ backgroundColor: `${color}15` }}
    >
      <Icon
        className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
        style={{ color: color }}
      />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
        {label}
      </span>
      <span className="text-sm font-medium text-slate-200 transition-colors group-hover:text-white md:text-base">
        {value}
      </span>
    </div>

    <div
      className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-10"
      style={{ backgroundColor: color }}
    />
  </Link>
);

function ContactSection() {
  const profileLinks = [
    personalData.linkedIn && { href: personalData.linkedIn, label: "LinkedIn" },
    personalData.github && { href: personalData.github, label: "GitHub" },
    personalData.twitter && { href: personalData.twitter, label: "Twitter" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <div id="contact" className="relative z-50 overflow-hidden py-24 lg:py-40">
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <SectionReveal direction="up">
          <div className="mb-20 flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 text-red-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
                <MessageSquare className="h-5 w-5 shadow-[0_0_10px_rgba(239,68,68,0.4)]" />
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.3em]">
                Communication
              </span>
            </div>
            <h2 className="text-center text-4xl font-black tracking-tight text-white md:text-5xl">
              Let&apos;s build something
              <span className="block bg-gradient-to-r from-red-100 via-rose-200 to-red-400 bg-clip-text text-transparent">
                thoughtful and useful
              </span>
            </h2>
            <p className="max-w-2xl text-center text-lg text-slate-400">
              If you&apos;re working on analytics, mapping, dashboards, or any
              data-rich problem that needs clearer decision support, I&apos;d be
              happy to connect.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-7">
            <SectionReveal direction="right">
              <ContactWithoutCaptcha />
            </SectionReveal>
          </div>

          <div className="flex flex-col gap-12 lg:col-span-5">
            <SectionReveal direction="left">
              <div className="flex flex-col gap-6">
                <h3 className="flex items-center gap-3 text-xl font-bold text-white">
                  <Send className="h-5 w-5 text-red-300" />
                  Direct Contact
                </h3>
                <div className="flex flex-col gap-4">
                  <ContactInfoCard
                    href={`mailto:${personalData.email}`}
                    icon={Mail}
                    label="Email"
                    value={personalData.email}
                    color="#f87171"
                  />
                  <ContactInfoCard
                    href={`tel:${personalData.phone}`}
                    icon={Phone}
                    label="Phone"
                    value={personalData.phone}
                    color="#fb7185"
                  />
                  <ContactInfoCard
                    href="#"
                    icon={MapPin}
                    label="Location"
                    value={personalData.address}
                    color="#ef4444"
                    external={false}
                  />
                  <ContactInfoCard
                    href={personalData.resume}
                    icon={FileText}
                    label="Resume"
                    value="Open PDF Resume"
                    color="#dc2626"
                  />
                </div>
              </div>
            </SectionReveal>

            {profileLinks.length > 0 && (
              <SectionReveal direction="left" delay={0.2}>
                <div className="flex flex-col gap-6">
                  <h3 className="text-xl font-bold text-white">Profile Links</h3>
                  <div className="flex flex-wrap gap-4">
                    {profileLinks.map((social) => (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200 transition-all duration-300 hover:border-red-400/40 hover:bg-red-500/10 hover:text-white"
                      >
                        {social.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
