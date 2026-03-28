export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold font-[var(--font-display)] text-white">
                    Bridging the gap between
                  </p>
                  <p className="text-2xl font-bold font-[var(--font-display)] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                    talent &amp; opportunity
                  </p>
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute top-6 right-6 grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-white/10" />
                ))}
              </div>
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-6 -right-6 bg-orange-500 rounded-2xl p-6 text-white shadow-xl max-w-[200px]">
              <div className="text-3xl font-bold font-[var(--font-display)]">2024</div>
              <p className="text-sm mt-1 text-orange-100">Founded with a mission to empower</p>
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

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
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
                <div className="mt-1 w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
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
                <div className="mt-1 w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
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
                <div className="mt-1 w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
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
