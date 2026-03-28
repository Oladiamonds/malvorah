export default function PartnerCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl translate-y-1/2 -translate-x-1/3" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 mb-6">
              <span className="text-sm text-blue-200 font-medium">
                Partnerships & Volunteering
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[var(--font-display)] text-white max-w-3xl mx-auto leading-tight">
              Want to Partner or Volunteer?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                Let&apos;s Talk.
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Every partnership contributes to a circular model where growth
              fuels reinvestment in education, innovation, and community
              empowerment. Together, we build something bigger than any one of
              us.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-navy-900 hover:bg-slate-100 transition-all shadow-lg hover:-translate-y-0.5"
              >
                Schedule a Conversation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="mailto:contactus@malvorah.com"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
              >
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
