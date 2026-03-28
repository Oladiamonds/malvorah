"use client";

import { useState, type FormEvent } from "react";

const subjects = [
  "General Inquiry",
  "Partnership or Sponsorship",
  "Volunteer Opportunity",
  "Programs & Events",
  "Hiring Talent",
  "Becoming a Talent",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <div className="inline-flex items-center gap-2 text-blue-500 text-sm font-semibold uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-blue-500" />
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-display)] text-navy-900 leading-tight">
              Every meaningful connection starts with a conversation
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Whether you&apos;re exploring a partnership, joining our programmes,
              or sharing an idea — we&apos;re here to listen and collaborate.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Email</p>
                  <a
                    href="mailto:contactus@malvorah.com"
                    className="text-slate-500 hover:text-blue-500 transition-colors"
                  >
                    contactus@malvorah.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Office</p>
                  <p className="text-slate-500">
                    82A James Carter Road<br />
                    Mildenhall, Suffolk, England<br />
                    IP28 7DE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">WhatsApp Community</p>
                  <a
                    href="https://chat.whatsapp.com/Gkk4zAgSpSdB1YxZzhI7gM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-blue-500 transition-colors"
                  >
                    Join our WhatsApp group
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-[var(--font-display)] text-navy-900">
                  Message Sent!
                </h3>
                <p className="mt-2 text-slate-500">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">
                    Subject
                  </label>
                  <select className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white">
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your goals and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-blue-500 px-8 py-4 text-base font-semibold text-white hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                >
                  Send Message
                </button>

                <p className="text-xs text-slate-400 text-center">
                  We typically respond within 24 hours. Your data is safe with us.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
