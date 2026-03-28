"use client";

import { useEffect, useRef, useState } from "react";

const eventTypes = [
  {
    title: "Digital Literacy Bootcamps",
    description:
      "Intensive workshops teaching essential digital skills to underserved communities. Participants leave with practical, employable skills they can use immediately.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    tag: "Education",
  },
  {
    title: "Community Connect Series",
    description:
      "Networking events that bring learners, leaders, and changemakers together. Build meaningful relationships that open doors to new opportunities.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    tag: "Networking",
  },
  {
    title: "Virtual Events & Webinars",
    description:
      "Expert-led sessions on career growth, product management, and industry trends. Join from anywhere and learn from professionals who've been where you want to go.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    tag: "Online",
  },
  {
    title: "Accelerator Programmes",
    description:
      "Structured cohort-based programmes to fast-track your career in product. Get mentored, build your portfolio, and graduate ready for real roles.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    tag: "Career",
  },
];

export default function Events() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="events" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 text-blue-500 text-sm font-semibold uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-blue-500" />
              Events & Programmes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-display)] text-navy-900 leading-tight">
              Connect. Learn. Grow.
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Powerful things happen when people come together to share ideas,
              learn new skills, and spark innovation. Our events bring learners,
              leaders, and changemakers together &mdash; online and in person &mdash; to
              collaborate, inspire, and create real impact.
            </p>
            <p className="mt-4 text-base text-slate-500 leading-relaxed">
              From hands-on bootcamps that build practical skills to networking
              events that forge lasting professional connections, every Malvorah
              event is designed to move you forward. Whether you&apos;re looking to
              upskill, find your next collaborator, or be inspired by people who
              think bigger &mdash; there&apos;s something here for you.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://chat.whatsapp.com/H8VM8wZ9sRoIhGEYxpIlQY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Reserve Your Seat
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-all hover:-translate-y-0.5"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right: animated event cards */}
          <div ref={cardsRef} className="space-y-4">
            {eventTypes.map((event, i) => (
              <div
                key={event.title}
                className={`group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 shadow-sm ${
                  visible ? "animate-slide-up" : "opacity-0"
                }`}
                style={visible ? { animationDelay: `${i * 150}ms` } : undefined}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors shadow-md">
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold font-[var(--font-display)] text-navy-900">
                        {event.title}
                      </h3>
                      <span className="text-xs font-medium bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full">
                        {event.tag}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
