import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="browse"
      className="relative flex min-h-[88vh] items-center overflow-hidden pt-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1619767886555-ef069784966e?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            Denmark&apos;s luxury car rental marketplace
          </p>

          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            Experience{" "}
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              extraordinary
            </span>{" "}
            drives
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/65">
            Rent Ferrari, Lamborghini, Rolls-Royce, Porsche and Bentley from
            verified owners in Copenhagen, Aarhus, Odense and beyond.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#search"
              className="inline-flex items-center justify-center rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-gold-light"
            >
              Search available cars
            </Link>
            <Link
              href="#categories"
              className="inline-flex items-center justify-center rounded-xl border border-gold/30 px-8 py-3.5 text-sm font-medium text-cream transition hover:border-gold hover:text-gold"
            >
              Browse categories
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          {[
            "Sports Cars",
            "Luxury Cars",
            "Classic Cars",
            "Wedding Cars",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gold/15 bg-black/40 px-4 py-1.5 text-xs text-cream/60 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
