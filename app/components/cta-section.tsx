import Link from "next/link";

export function CtaSection() {
  return (
    <section id="list-your-car" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/15 via-charcoal-light to-black">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />

          <div className="relative grid items-center gap-10 px-8 py-16 lg:grid-cols-2 lg:px-16 lg:py-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-gold">
                For car owners
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-tight text-cream lg:text-5xl">
                Turn your car into income
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-cream/60">
                List your luxury, sports, classic or wedding car on EventCars
                and reach thousands of renters across Denmark. You set the price
                and availability.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-gold-light"
              >
                Start listing
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-gold/25 px-8 py-3.5 text-sm text-cream transition hover:border-gold hover:text-gold"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
