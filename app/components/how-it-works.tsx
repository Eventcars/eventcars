import { steps } from "@/lib/data";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            How it works
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-cream lg:text-5xl">
            Three steps to the open road
          </h2>
          <p className="mt-4 text-lg text-cream/60">
            Simple, secure, and designed for both renters and car owners.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative rounded-2xl border border-gold/10 bg-black p-8"
            >
              <span className="font-display text-5xl text-gold/20">
                {item.step}
              </span>
              <h3 className="mt-4 font-display text-2xl text-cream">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Fully insured",
              description: "Comprehensive coverage on every rental.",
            },
            {
              title: "Verified owners",
              description: "Every vehicle and host is identity-checked.",
            },
            {
              title: "24/7 support",
              description: "Danish-speaking team whenever you need help.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="flex items-start gap-4 rounded-xl border border-gold/10 bg-charcoal-light p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h4 className="font-medium text-cream">{feature.title}</h4>
                <p className="mt-1 text-sm text-cream/50">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
