"use client";

import { personalData } from "@/../utils/Data/PersonalData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import Link from "next/link";
import { useRef } from "react";
import { FileText, Mail, MapPin, Phone } from "lucide-react";
import Tilt from "react-parallax-tilt";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const designationRef = useRef<HTMLElement>(null);
  const codeCardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);

      const titles = personalData.designationAlternateWords;
      let index = 0;

      gsap
        .timeline()
        .fromTo(
          ".hero-tag",
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        )
        .fromTo(
          ".hero-heading",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
          "-=0.45",
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.8, ease: "power2.out" },
          "-=0.45",
        )
        .fromTo(
          codeCardRef.current,
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 1.1, ease: "power4.out" },
          "-=0.85",
        );

      const runDesignationAnimation = () => {
        const el = designationRef.current;
        if (!el) return;

        const tl = gsap.timeline({
          onComplete: () => {
            index = (index + 1) % titles.length;
            runDesignationAnimation();
          },
        });

        el.textContent = titles[index];
        const split = new SplitText(el, { type: "chars" });

        tl.from(split.chars, {
          opacity: 0,
          y: 8,
          stagger: 0.03,
          duration: 0.5,
          ease: "back.out(1.5)",
        }).to(split.chars, {
          opacity: 0,
          y: -8,
          stagger: 0.02,
          duration: 0.4,
          ease: "power2.in",
          delay: 1.8,
          onComplete: () => split.revert(),
        });
      };

      runDesignationAnimation();

      gsap.to(".floating-chip", {
        y: -6,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        stagger: 0.16,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden py-12 lg:py-24"
    >
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-red-800/10 blur-[150px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 flex flex-col items-start gap-8 lg:order-1">
          <div className="flex flex-col gap-4">
            <span className="hero-tag w-fit rounded-full border border-red-300/20 bg-red-300/10 px-4 py-1.5 text-xs font-bold tracking-[0.3em] text-red-200">
              {personalData.heroTag}
            </span>
            <h1 className="hero-heading text-5xl font-black leading-[1.05] text-white md:text-6xl lg:text-7xl">
              {personalData.heroHeadlineStart}
              <br />
              <span className="bg-gradient-to-r from-red-200 via-red-400 to-red-700 bg-clip-text text-transparent">
                {personalData.heroHeadlineAccent}
              </span>
              <br />
              <span className="text-slate-300">{personalData.heroHeadlineEnd}</span>
            </h1>
            <p className="hero-heading max-w-2xl text-lg font-medium leading-relaxed text-slate-400 md:text-xl">
              I&apos;m <span className="font-bold text-white">{personalData.name}</span>, a{" "}
              <span
                className="ml-1 inline-block min-w-[220px] font-bold text-red-300"
                ref={designationRef}
              >
                {personalData.designation}
              </span>
              <br />
              {personalData.heroSummary}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {personalData.primarySkills.map((skill) => (
              <span
                key={skill}
                className="floating-chip rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="hero-cta flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-500 to-red-700 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                Let&apos;s Connect
                <Mail className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              className="group rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:border-red-300/40 hover:bg-white/10"
            >
              <span className="flex items-center gap-2">
                View Resume
                <FileText className="h-4 w-4 transition-transform group-hover:translate-y-[1px]" />
              </span>
            </Link>
          </div>

          <div className="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            <a
              href={`mailto:${personalData.email}`}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300 transition-all hover:border-red-300/30 hover:bg-white/[0.07]"
            >
              <Mail className="mb-3 h-5 w-5 text-red-300" />
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Email</div>
              <div className="mt-2 break-all font-medium text-slate-200">
                {personalData.email}
              </div>
            </a>
            <a
              href={`tel:${personalData.phone}`}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300 transition-all hover:border-red-300/30 hover:bg-white/[0.07]"
            >
              <Phone className="mb-3 h-5 w-5 text-red-300" />
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Phone</div>
              <div className="mt-2 font-medium text-slate-200">{personalData.phone}</div>
            </a>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300">
              <MapPin className="mb-3 h-5 w-5 text-red-300" />
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Location</div>
              <div className="mt-2 font-medium text-slate-200">{personalData.address}</div>
            </div>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <Tilt perspective={1000} glareEnable={true} glareMaxOpacity={0.1} scale={1.02}>
            <div
              ref={codeCardRef}
              className="relative w-full max-w-[560px] overflow-hidden rounded-[28px] border border-white/10 bg-[#120708]/80 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-6 py-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-red-500/60" />
                  <div className="h-3 w-3 rounded-full bg-red-700/40" />
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
                  analyst-profile.ts
                </div>
              </div>

              <div className="grid gap-6 p-6 lg:p-8">
                <code className="font-mono text-xs leading-relaxed md:text-sm lg:text-base">
                  <div className="flex gap-4">
                    <span className="italic text-slate-600">01</span>
                    <p>
                      <span className="text-red-400">const</span>{" "}
                      <span className="text-white">analyst</span> = {"{"}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="italic text-slate-600">02</span>
                    <p className="ml-4">
                      <span className="text-slate-300">name:</span>{" "}
                      <span className="text-red-300">'{personalData.name}'</span>,
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="italic text-slate-600">03</span>
                    <p className="ml-4">
                      <span className="text-slate-300">focus:</span>{" "}
                      <span className="text-red-300">'{personalData.focus}'</span>,
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="italic text-slate-600">04</span>
                    <p className="ml-4">
                      <span className="text-slate-300">toolkit:</span> [
                      <span className="text-red-300">
                        '{personalData.primarySkills.slice(0, 3).join("', '")}'
                      </span>
                      ],
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="italic text-slate-600">05</span>
                    <p className="ml-4">
                      <span className="text-slate-300">availability:</span>{" "}
                      <span className="text-red-200">'{personalData.availability}'</span>,
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="italic text-slate-600">06</span>
                    <p className="ml-4">
                      <span className="text-slate-300">mission:</span>{" "}
                      <span className="text-red-100">
                        "Use data to make place-based decisions clearer"
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="italic text-slate-600">07</span>
                    <p>{"};"}</p>
                  </div>
                </code>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {personalData.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <div className="text-2xl font-black text-white">{stat.value}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
