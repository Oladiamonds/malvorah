export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: premium visual — talent ↔ opportunity connection */}
          <div className="relative mr-4 mb-8 sm:mr-0 sm:mb-0">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 overflow-hidden relative shadow-2xl shadow-navy-900/40">
              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Gradient orbs */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-orange-500/15 blur-3xl" />

              {/* Talent Card — top left */}
              <div className="absolute top-3 left-2 sm:top-8 sm:left-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl shadow-black/10 p-2.5 sm:p-4 w-[42%] sm:w-48 lg:w-52 -rotate-2">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs sm:text-sm font-bold shrink-0">
                    SK
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-navy-900 truncate">Sarah K.</p>
                    <p className="text-xs text-slate-400">Product Manager</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mb-2.5 flex-wrap">
                  <span className="text-[10px] sm:text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                    Strategy
                  </span>
                  <span className="text-[10px] sm:text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                    Agile
                  </span>
                  <span className="text-[10px] sm:text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full font-medium">
                    Data
                  </span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />
                </div>
                <p className="text-[10px] sm:text-xs text-green-500 font-medium mt-1.5">
                  Ready to launch
                </p>
              </div>

              {/* Center connection — M logo with glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center shadow-lg shadow-blue-500/30 animate-pulse-glow">
                  <span className="text-white text-sm sm:text-lg font-bold font-[var(--font-display)]">
                    M
                  </span>
                </div>
                {/* Orbiting rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-36 sm:h-36 rounded-full border border-dashed border-white/15" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-56 sm:h-56 rounded-full border border-dashed border-white/8" />
              </div>

              {/* Opportunity Card — bottom right */}
              <div className="absolute bottom-2 right-2 sm:bottom-8 sm:right-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl shadow-black/10 p-2.5 sm:p-4 w-[42%] sm:w-48 lg:w-52 rotate-2">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-navy-900 truncate">TechScale Ltd</p>
                    <p className="text-xs text-slate-400">Series B Startup</p>
                  </div>
                </div>
                <div className="bg-orange-50 rounded-lg px-2.5 py-1.5 mb-2">
                  <p className="text-[10px] sm:text-xs font-semibold text-orange-600">
                    Looking for: Product Lead
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] sm:text-xs text-slate-400">Actively hiring</span>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 grid grid-cols-3 gap-1.5 sm:gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/10" />
                ))}
              </div>
            </div>

            {/* Accent card */}
            <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-orange-500 rounded-2xl p-3.5 sm:p-6 text-white shadow-xl shadow-orange-500/25 max-w-[140px] sm:max-w-[200px]">
              <div className="text-2xl sm:text-3xl font-bold font-[var(--font-display)]">
                2024
              </div>
              <p className="text-xs sm:text-sm mt-1 text-orange-100">
                Founded with a mission to empower
              </p>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <div className="inline-flex items-center gap-2 text-blue-500 text-sm font-semibold uppercase tracking-wider mb-4">
              <span className="w-8 h-px bg-blue-500" />
              Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-display)] text-navy-900 leading-tight">
              We believe talent is the world&apos;s most valuable asset
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              At Malvorah, we connect businesses with ambitious, skilled
              professionals to gain hands-on experience through real jobs and
              projects &mdash; ensuring they thrive in today&apos;s dynamic job market.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              By bridging the gap between talent and opportunity, we don&apos;t just
              shape careers. We drive business growth, enhance workforce
              productivity, and fuel a stronger economy.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Real Experience</p>
                  <p className="text-sm text-slate-500 mt-0.5">Actual jobs, not simulations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Growth Focused</p>
                  <p className="text-sm text-slate-500 mt-0.5">Career acceleration built in</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Global Reach</p>
                  <p className="text-sm text-slate-500 mt-0.5">Operating across 12+ countries</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">Community Led</p>
                  <p className="text-sm text-slate-500 mt-0.5">3,000+ members strong</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
