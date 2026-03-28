const steps = [
  {
    number: "01",
    title: "Apply or Register",
    description:
      "Tell us about your goals, experience, and what you're looking for. Employers share the roles they need filled. It takes less than 5 minutes.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Get Matched",
    description:
      "Our team carefully pairs talent with the right opportunities based on skills, ambitions, and culture fit. No algorithms — real humans making real connections.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Grow Together",
    description:
      "Talent builds real skills delivering real impact. Businesses get driven professionals who hit the ground running. Everyone wins.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-blue-400" />
            How It Works
            <span className="w-8 h-px bg-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-display)] text-white">
            From sign-up to success in three simple steps
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Whether you&apos;re talent looking for your break or a business seeking
            your next great hire — getting started is easy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-20 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-blue-500/50 via-orange-500/50 to-blue-500/50" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center group">
              {/* Step number circle */}
              <div className="relative mx-auto w-16 h-16 mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative w-full h-full rounded-full bg-navy-800 border-2 border-blue-500/30 flex items-center justify-center text-white shadow-lg shadow-blue-500/10">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center shadow-md">
                  <span className="text-xs font-bold text-white">{step.number}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold font-[var(--font-display)] text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>

              {i < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-8">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-base font-semibold text-white hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
          >
            Start Your Journey Today
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
