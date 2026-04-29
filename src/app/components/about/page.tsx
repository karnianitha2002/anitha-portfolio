"use client";

import { personalData } from "@/../utils/Data/PersonalData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/dist/SplitText";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { Compass, Sparkles } from "lucide-react";

function About() {
  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const split = new SplitText(".about-description", {
      type: "lines,words",
      linesClass: "overflow-hidden",
    });

    gsap.from(split.words, {
      opacity: 0,
      y: 26,
      stagger: 0.015,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-description",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    gsap.fromTo(
      ".about-visual-card",
      { opacity: 0, scale: 0.94, x: 40 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-visual-card",
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <div id="about" className="relative overflow-hidden py-24 lg:py-40">
      <div className="absolute -left-20 top-1/4 h-[380px] w-[380px] rounded-full bg-red-500/8 blur-[120px]" />
      <div className="absolute -right-20 bottom-1/4 h-[380px] w-[380px] rounded-full bg-red-800/8 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-24">
          <div className="order-2 flex flex-col gap-8 lg:order-1 lg:col-span-7">
            <div className="flex flex-col gap-4">
              <div className="mb-2 flex items-center gap-3 text-red-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-300/10">
                  <Compass className="h-5 w-5 shadow-[0_0_15px_rgba(239,68,68,0.4)]" />
                </div>
                <span className="text-sm font-bold uppercase tracking-[0.3em]">
                  Perspective
                </span>
              </div>
              <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                Data with Spatial Context,
                <span className="block bg-gradient-to-r from-red-200 to-red-500 bg-clip-text text-transparent">
                  Delivered with Clarity
                </span>
              </h2>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-3xl lg:p-10">
              <div className="absolute right-0 top-0 p-8 opacity-10 transition-transform duration-700 group-hover:rotate-12">
                <Sparkles className="h-24 w-24 text-red-300" />
              </div>

              <div className="about-description text-lg font-medium italic leading-relaxed text-slate-300 lg:text-xl">
                {personalData.description}
              </div>

              <div className="absolute left-0 top-10 h-20 w-1 rounded-full bg-gradient-to-b from-red-400 to-transparent" />
            </div>

            <div className="flex flex-wrap items-center gap-8">
              {personalData.stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-white">{stat.value}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      {stat.label}
                    </span>
                  </div>
                  {index < personalData.stats.length - 1 && (
                    <div className="h-10 w-px bg-white/10" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <Tilt
              perspective={1500}
              glareEnable={true}
              glareMaxOpacity={0.16}
              glareColor="#ef4444"
              scale={1.03}
              className="about-visual-card"
            >
              <div className="relative group">
                <div className="absolute -inset-4 rounded-3xl border border-red-300/20 opacity-50 transition-all duration-500 group-hover:-inset-6" />
                <div className="absolute -inset-8 rounded-[40px] border border-red-200/10 opacity-30 transition-all duration-700 delay-75 group-hover:-inset-12" />

                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-white/10 bg-[#120708] shadow-[0_0_50px_rgba(239,68,68,0.12)]">
                  <Image
                    src={personalData.profile}
                    fill
                    alt={personalData.name}
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#120708] via-transparent to-transparent opacity-55" />

                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 rounded-xl border border-white/10 bg-white/5 p-4 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-center text-xs font-bold uppercase tracking-widest text-white">
                      Geospatial thinking, analytical execution
                    </p>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
