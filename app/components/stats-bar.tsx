import { stats } from "@/lib/data";

export function StatsBar() {
  return (
    <section className="border-y border-gold/10 bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gold/10 px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="px-4 py-10 text-center lg:py-12">
            <p className="font-display text-3xl text-gold lg:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-cream/50">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
