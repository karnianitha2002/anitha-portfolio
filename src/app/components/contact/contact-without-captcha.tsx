"use client";

import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { isValidEmail } from "@/../utils/check-email";
import { personalData } from "@/../utils/Data/PersonalData";
import { User, Mail, MessageSquare } from "lucide-react";

const ContactWithoutCaptcha = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    email: false,
    required: false,
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const handleSendMail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus("");

    if (!input.email || !input.message || !input.name) {
      setError((prev) => ({ ...prev, required: true }));
      return;
    }

    if (!isValidEmail(input.email)) {
      setError((prev) => ({ ...prev, email: true }));
      return;
    }

    setError({ email: false, required: false });

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

    if (!serviceID || !templateID || !publicKey) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${input.name}`);
      const body = encodeURIComponent(
        `${input.message}\n\nFrom: ${input.name}\nEmail: ${input.email}`,
      );
      window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
      setStatus("Opened your email app with the message details prefilled.");
      return;
    }

    const templateParams = {
      from_name: input.name,
      email: input.email,
      message: `${input.message}\nEmail: ${input.email}`,
    };

    try {
      setIsLoading(true);
      const res = await emailjs.send(serviceID, templateID, templateParams, {
        publicKey,
      });

      if (res.status === 200) {
        setStatus("Message sent successfully. Thank you for reaching out.");
        setInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (sendError: unknown) {
      if (sendError instanceof Error) {
        setStatus(sendError.message);
      } else {
        setStatus("Something went wrong while sending the message.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="group relative rounded-3xl border border-white/5 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-3xl lg:p-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold tracking-tight text-white">
            Send a Message
          </h3>
          <p className="text-sm text-slate-400">
            If EmailJS is not configured yet, the form will fall back to your
            default email app.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="group/input flex flex-col gap-2">
            <label className="ml-1 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 transition-colors group-focus-within/input:text-red-200">
              <User className="h-4 w-4" />
              Your Name
            </label>
            <input
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-0 transition-all duration-300 placeholder:text-slate-600 focus:border-red-400/40 focus:bg-white/10"
              type="text"
              placeholder="Your name"
              maxLength={100}
              required={true}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              onBlur={checkRequired}
              value={input.name}
            />
          </div>

          <div className="group/input flex flex-col gap-2">
            <label className="ml-1 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 transition-colors group-focus-within/input:text-red-200">
              <Mail className="h-4 w-4" />
              Your Email
            </label>
            <input
              className={`w-full rounded-2xl border bg-white/5 px-5 py-4 text-white outline-0 transition-all duration-300 placeholder:text-slate-600 focus:bg-white/10 ${
                error.email
                  ? "border-rose-400/50"
                  : "border-white/10 focus:border-red-400/40"
              }`}
              type="email"
              placeholder="you@example.com"
              maxLength={100}
              required={true}
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError((prev) => ({
                  ...prev,
                  email: !isValidEmail(input.email),
                }));
              }}
            />
            {error.email && (
              <p className="ml-1 text-xs text-rose-300">
                Please provide a valid email address.
              </p>
            )}
          </div>

          <div className="group/input flex flex-col gap-2">
            <label className="ml-1 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 transition-colors group-focus-within/input:text-red-200">
              <MessageSquare className="h-4 w-4" />
              Your Message
            </label>
            <textarea
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-0 transition-all duration-300 placeholder:text-slate-600 focus:border-red-400/40 focus:bg-white/10"
              placeholder="Tell me about the project, role, or problem you're working on..."
              maxLength={500}
              name="message"
              required={true}
              onChange={(e) => setInput({ ...input, message: e.target.value })}
              onBlur={checkRequired}
              rows={5}
              value={input.message}
            />
          </div>

          <div className="mt-2 flex flex-col gap-4">
            {error.required && (
              <p className="text-center text-sm font-medium text-rose-300">
                Please complete every field before sending.
              </p>
            )}

            {status && (
              <p className="text-center text-sm font-medium text-red-200">
                {status}
              </p>
            )}

            <button
              className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-500 to-rose-500 p-[1px] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              <div className="relative flex items-center justify-center gap-2 rounded-[15px] bg-[#120708] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all group-hover/btn:bg-transparent">
                {isLoading ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    Send Message
                    <TbMailForward className="h-5 w-5" />
                  </>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-20 h-20 w-1 rounded-full bg-gradient-to-b from-red-400 to-transparent" />
    </div>
  );
};

export default ContactWithoutCaptcha;
