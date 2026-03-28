const services = [
  {
    title: "Malvorah Accelerator",
    subtitle: "Launch Your Career in Product",
    description:
      "Get matched with real projects at real companies. Gain hands-on experience that transforms your CV from hopeful to hired. We place ambitious professionals into roles where they can prove themselves and grow.",
    features: [
      "Curated role matching",
      "Mentorship from industry leaders",
      "Portfolio-building projects",
      "Career coaching & support",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "blue" as const,
    cta: "Apply as Talent",
    href: "#contact",
  },
  {
    title: "Malvorah Advance",
    subtitle: "Scale Smarter, Faster",
    description:
      "Expert go-to-market consulting for startups and scale-ups. We help you find product-market fit, build the right team, and execute the strategy that turns traction into momentum.",
    features: [
      "Go-to-market strategy",
      "Product-market fit validation",
      "Team building & hiring",
      "Growth execution playbooks",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "orange" as const,
    cta: "Hire Top Talent",
    href: "#contact",
  },
  {
    title: "Malvorah Foundation",
    subtitle: "Empowering Communities",
    description:
      "Breaking barriers through digital literacy, education access, and community-driven programmes. We invest in the potential of underserved communities to create lasting, generational change.",
    features: [
      "Digital literacy bootcamps",
      "Education scholarships",
      "Community workshops",
      "Volunteer programmes",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "green" as const,
    cta: "Get Involved",
    href: "#contact",
  },
];

const colorMap = {
  blue: {
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconText: "text-blue-500",
    border: "border-blue-100",
    accent: "text-blue-500",
    btn: "bg-blue-500 hover:bg-blue-600 shadow-blue-500/25",
    dot: "bg-blue-500",
  },
  orange: {
    bg: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconText: "text-orange-500",
    border: "border-orange-100",
    accent: "text-orange-500",
    btn: "bg-orange-500 hover:bg-orange-600 shadow-orange-500/25",
    dot: "bg-orange-500",
  },
  green: {
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-500",
    border: "border-emerald-100",
    accent: "text-emerald-500",
    btn: "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/25",
    dot: "bg-emerald-500",
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-blue-500 text-sm font-semibold uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-blue-500" />
            What We Offer
            <span className="w-8 h-px bg-blue-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-display)] text-navy-900">
            Three pillars. One mission.
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Whether you&apos;re launching a career, scaling a business, or lifting a
            community &mdash; we have a programme built for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const c = colorMap[service.color];
            return (
              <div
                key={service.title}
                className={`group relative rounded-3xl border ${c.border} ${c.bg} p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${c.iconBg} ${c.iconText} flex items-center justify-center mb-6`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold font-[var(--font-display)] text-navy-900">
                  {service.title}
                </h3>
                <p className={`text-sm font-semibold ${c.accent} mt-1`}>
                  {service.subtitle}
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-slate-600">
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={service.href}
                  className={`mt-8 inline-flex items-center justify-center w-full rounded-full ${c.btn} px-6 py-3 text-sm font-semibold text-white transition-all shadow-lg`}
                >
                  {service.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
