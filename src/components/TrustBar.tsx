const stats = [
  { value: "200+", label: "Talents Placed" },
  { value: "50+", label: "Business Partners" },
  { value: "3,000+", label: "Community Members" },
  { value: "12+", label: "Countries Reached" },
];

export default function TrustBar() {
  return (
    <section className="relative -mt-1 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-[var(--font-display)] text-navy-900">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
